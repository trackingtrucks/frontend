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
import CrearTurno from '../../Components/Turnos/CrearTurno';
import EliminarVehiculo from '../../Components/Vehiculos/EliminarVehiculo';

// -FUNCIONES-
import { Container, Tabs, Tab, Col, Row } from 'react-bootstrap';
import '../../Styles/mapa.css';
import GestoresContainer from '../../Components/usuarios/gestores/GestoresContainer';

function Dashboard() {
  const [a, setA] = useState(0)
  const { saveLocalStorage } = useContext(AuthContext);
  const SocketContextFunction = useContext(SocketContext);
  const [key, setKey] = useState(localStorage.getItem('tab') || 'main');
  const data = SocketContextFunction.getInfo();
  useEffect(() => {
    setInterval(() => {
      setA(a + 1) //no me maten, es la unica manera
    }, 200);
    // eslint-disable-next-line
  }, [])
  const getCompanydata = async () => {
    SocketContextFunction.getCompanyData();
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
    <div>
      <Socketio />
      <Navbar />
      {/* <Container> */}
      <Tabs id="tabs" activeKey={key} onSelect={(k) => guardarKey(k)} className="mb-3">
        <Tab eventKey="main" title="Home">
          <Container>
            <Row>
              <Col>
                <Container>
                  <VehicleContainer vehiculos={data.vehiculos} tareas={data.tareas} />
                </Container>
              </Col>
              <Col>
                <Container>

                  <TurnosContainer turnos={data.turnos}/>
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
      </Tabs>
      {/* </Container> */}
    </div>
  )
}
export default Dashboard