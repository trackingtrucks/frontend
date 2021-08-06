import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
// import Chart from '../../Components/Chart/Chart.js';
import Navbar from '../../Components/Navbar';
import VehicleContainer from '../../Components/Vehiculos/VehicleContainer'
import ConductoresContainer from '../../Components/Conductores/ConductoresContainer'
import TurnosContainer from '../../Components/Turnos/TurnosContainer'
import Mapa from '../../Components/Mapa/Mapa'
import '../../Styles/mapa.css'

import { Container, Tabs, Tab, Col, Row } from 'react-bootstrap';
import SettingsContainers from '../../Components/Settings/SettingsContainer';

function Dashboard() {
  const { saveLocalStorage } = useContext(AuthContext);
  // const [key, setKey] = useState('forms');
  const [key, setKey] = useState('main');

  useEffect(() => {
    saveLocalStorage();
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
                    <VehicleContainer></VehicleContainer>
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
              <VehicleContainer></VehicleContainer>
            </Container>
          </Tab>
          <Tab eventKey="turnos" title="Turnos">
            <Container>
                <TurnosContainer></TurnosContainer>
            </Container>
          </Tab>
          <Tab eventKey="usuarios" title="Usuarios">
            <Container>
                <ConductoresContainer></ConductoresContainer>
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
