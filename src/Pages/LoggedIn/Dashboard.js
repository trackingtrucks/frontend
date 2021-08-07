import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
// import Chart from '../../Components/Chart/Chart.js';
import Navbar from '../../Components/Navbar';
import VehicleContainer from '../../Components/Vehiculos/VehicleContainer'
import ConductoresContainer from '../../Components/Conductores/ConductoresContainer'
import TurnosContainer from '../../Components/Turnos/TurnosContainer'
import Mapa from '../../Components/Mapa/Mapa'
import '../../Styles/mapa.css'
import io from 'socket.io-client';
import makeToast from '../../Components/Toast';
import { Container, Tabs, Tab, Col, Row } from 'react-bootstrap';
import SettingsContainers from '../../Components/Settings/SettingsContainer';
import * as Api from '../../Api/index'
let socket;

function Dashboard() {
  const { saveLocalStorage, get } = useContext(AuthContext);
  // const [key, setKey] = useState('forms');
  const [key, setKey] = useState('main');

  const [data, setData] = useState({})
  const getCompanydata = async () => {
    const {data} = await Api.getCompanydata({ accessToken: get('at')})
    setData(data);
  }

  const ENDPOINT = 'https://tracking-trucks.herokuapp.com/'
  useEffect(() => {
    var connectionOptions = {
      "force new connection": true,
      "reconnectionAttempts": "Infinity",
      "timeout": 10000,
      "transports": ["websocket"],
      query: {
        token: get("at")
      }
    };
    socket = io(ENDPOINT, connectionOptions);
    return () => {
      socket.off();
    } // eslint-disable-next-line
  }, [ENDPOINT])

  useEffect(() => {

    socket.on("connect_error", (err) => {
      if (err?.data?.type === "forbidden") {
        alert(err.message)
        console.log("ERROR DE AUTH");
      }
      else {
        console.log("OTRO ERRORR");
      }
    });

    socket.on("message", (message) => {
      alert("NUEVO MENSAJETE: " + message);
    });

    socket.on("disconnect", () => {
      console.log("desconexion");
    });

    socket.on('connect', () => {
      console.log("conexion");
    });

    socket.on('notificacion', (message) => {
      makeToast(6000, 'info', message );
    });

    socket.on('alerta', (alerta) => {
      //alert("NUEVO MENSAJETE: " + message);
      makeToast(6000, 'warning', alerta.message );
    });
  }, []);

  useEffect(() => {
    saveLocalStorage();
    getCompanydata();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Navbar />
      {/* <Container> */}
      <Tabs id="tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="main" title="Home">
          <Container>
            <Row>
              <Col>
                <Container>
                  <VehicleContainer vehiculos={data.vehiculos}/>
                </Container>
              </Col>
              <Col>
                <Container>
                  <Mapa></Mapa>
                </Container>
              </Col>
            </Row>
          </Container>
        </Tab>
        <Tab eventKey="vehiculos" title="Vehiculos">
          <Container>
            <VehicleContainer vehiculos={data.vehiculos}/>
          </Container>
        </Tab>
        <Tab eventKey="turnos" title="Turnos">
          <Container>
            <TurnosContainer turnos={data.turnos}/>
          </Container>
        </Tab>
        <Tab eventKey="usuarios" title="Usuarios">
          <Container>
            <ConductoresContainer conductores={data.conductores}/>
          </Container>
        </Tab>
        <Tab eventKey="mapa" title="Mapa">
          <Container>
            <Mapa className="map-container"></Mapa>
          </Container>
        </Tab>
        <Tab eventKey="settings" title="Configuracion">
          <Container>
            <SettingsContainers AuthContext={AuthContext} />
          </Container>
        </Tab>
      </Tabs>
      {/* </Container> */}
    </>
  )
}

export default Dashboard
