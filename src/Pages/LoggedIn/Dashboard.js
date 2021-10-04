import React, { useContext, useEffect, useState } from 'react';
// -COMPONENTES-
import AuthContext from '../../Context/AuthContext';
import SocketContext from '../../Context/SocketContext';
import Navbar from '../../Components/Navbar';
import Socketio from '../../socket.io'

// -PAGINAS-
import VehicleContainer from '../../Components/Vehiculos/VehicleContainer';
import ConductoresContainer from '../../Components/usuarios/Conductores/ConductoresContainer';
import TurnosContainer from '../../Components/Turnos/TurnosContainer';
import Mapa from '../../Components/Mapa/Mapa';
import SettingsContainers from '../../Components/Settings/SettingsContainer';
import CrearTurno from '../../Components/Turnos/CrearTurno';
import EliminarVehiculo from '../../Components/Vehiculos/EliminarVehiculo';
import PlayGround from '../../Components/Playground'

// -FUNCIONES-
import { Container, Tabs, Tab, Col, Row } from 'react-bootstrap';
import * as Api from '../../Api/index';
import '../../Styles/mapa.css';
import GestoresContainer from '../../Components/usuarios/gestores/GestoresContainer';

function Dashboard() {
  const { saveLocalStorage } = useContext(AuthContext);
  const { setInfo } = useContext(SocketContext);
  const [key, setKey] = useState(localStorage.getItem('tab') || 'main');
  const [data, setData] = useState({})



  const getCompanydata = async () => {
    const { data } = await Api.getCompanydata()
    console.info(data);
    setData(data);
    setInfo(data);
  }

  const guardarKey = (k) => {
    setKey(k);
    if (k === 'settings') { return }
    localStorage.setItem('tab', k)
  }

  useEffect(() => {
    saveLocalStorage();
    getCompanydata();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Socketio getCompanydata={getCompanydata} />
      <Navbar />
      {/* <Container> */}
      <Tabs id="tabs" activeKey={key} onSelect={(k) => guardarKey(k)} className="mb-3">
        <Tab eventKey="main" title="Home">
          <Container>
            <Row>
              <Col>
                <Container>
                  <VehicleContainer vehiculos={data.vehiculos} tareas={data.tareas}/>
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
            <VehicleContainer vehiculos={data.vehiculos} />
            <br />
            {data.vehiculos && data.vehiculos.length !== 0 && <EliminarVehiculo />}
          </Container>
        </Tab>
        <Tab eventKey="turnos" title="Turnos">
          <Container>
            <TurnosContainer turnos={data.turnos} />
            <br />
            <CrearTurno />
          </Container>
        </Tab>
        <Tab eventKey="usuarios" title="Usuarios">
          <Container>
            <ConductoresContainer conductores={data.conductores} />
            <GestoresContainer gestores={data.gestores} />
          </Container>
        </Tab>
        {/* <Tab eventKey="mapa" title="Mapa">
          <Container>
            <Mapa className="map-container"></Mapa>
          </Container>
        </Tab> */}
        <Tab eventKey="settings" title="Configuracion">
          <Container>
            <SettingsContainers AuthContext={AuthContext} />
          </Container>
        </Tab>
        <Tab eventKey="playground" title="Pruebas">
          <Container>
            <PlayGround />
          </Container>
        </Tab>
      </Tabs>
      {/* </Container> */}
    </>
  )
}
export default Dashboard