import React, { useContext, useEffect, useState } from 'react';
// -COMPONENTES-
import AuthContext from '../../Context/AuthContext';
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

// -FUNCIONES-
import { Container, Tabs, Tab, Col, Row } from 'react-bootstrap';
import * as Api from '../../Api/index';
import '../../Styles/mapa.css';
import GestoresContainer from '../../Components/usuarios/gestores/GestoresContainer';

function Dashboard() {
  const { saveLocalStorage } = useContext(AuthContext);
  const [key, setKey] = useState(localStorage.getItem('tab') || 'main');
  const [data, setData] = useState({})
 
  

  const getCompanydata = async () => {
    const { data } = await Api.getCompanydata()
    console.info(data);
    setData(data);
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
                  <VehicleContainer vehiculos={data.vehiculos} />
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
            <EliminarVehiculo/>
          </Container>
        </Tab>
        <Tab eventKey="turnos" title="Turnos">
          <Container>
            <TurnosContainer turnos={data.turnos} />
            <br/>
            <CrearTurno/>
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
      </Tabs>
      {/* </Container> */}
    </>
  )
}
export default Dashboard