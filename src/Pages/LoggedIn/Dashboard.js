import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../Context/AuthContext';
// import Chart from '../../Components/Chart/Chart.js';
import Navbar from '../../Components/Navbar';

import { Container, Tabs, Tab } from 'react-bootstrap';
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
              Home de gestor!
            </Container>
          </Tab>
          <Tab eventKey="vehiculos" title="Vehiculos">
            <Container>
                Lista de vehiculos!
            </Container>
          </Tab>
          <Tab eventKey="turnos" title="Turnos">
            <Container>
                Turnos!
            </Container>
          </Tab>
          <Tab eventKey="usuarios" title="Usuarios">
            <Container>
                Lista de usuarios
            </Container>
          </Tab>
          <Tab eventKey="mapa" title="Mapa">
            <Container>
                mapa (?
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
