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

// -FUNCIONES-
import { Container, Tabs, Tab, Col, Row, Button, Modal, Form, Spinner } from 'react-bootstrap';
import * as Api from '../../Api/index';
import '../../Styles/mapa.css';
import GestoresContainer from '../../Components/usuarios/gestores/GestoresContainer';
import makeToast from '../../Components/Toast';

function Dashboard() {
  const { saveLocalStorage } = useContext(AuthContext);
  const [key, setKey] = useState(localStorage.getItem('tab') || 'main');
  const [data, setData] = useState({})
  const [idvehiculo, setIdvehiculo] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [showRegistrar, setShowRegistrar] = useState(false);
  const handleClose = () => setShowRegistrar(false);

  const getCompanydata = async () => {
    const { data } = await Api.getCompanydata()
    setData(data);
  }

  const guardarKey = (k) => {
    setKey(k);
    if (k === 'settings') { return }
    localStorage.setItem('tab', k)
  }

  const hideRegistrar = () => {
    setDisabled(false);
    setShowRegistrar(false);
  }

  async function enviarForm(e) {
    e.preventDefault();
    try {
      await Api.eliminarVehiculo({ idVehiculo: idvehiculo })
      makeToast(6000, "success", "Vehiculo Eliminado")
      const { data } = await Api.getCompanydata()
      setData(data);
    }
    catch (error) {
      makeToast(6000, 'error', error?.response?.data?.message || error.message)
      console.error(error?.response?.data?.message || error.message);
    }
    handleClose();
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
            <Button variant="outline-primary" onClick={() => setShowRegistrar(true)}> Eliminar un vehiculo</Button>
            <Modal show={showRegistrar} onHide={hideRegistrar}>
              <Modal.Header closeButton closeLabel="">
                <Modal.Title>Eliminar vehiculo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form onSubmit={enviarForm}>
                  <Form.Group as={Row} className="m-3" controlId="ID">
                    <Form.Label column sm="4">
                      ID del vehiculo:
                    </Form.Label>
                    <Col sm="8">
                      <Form.Control type="text" placeholder="ID" onChange={(e) => setIdvehiculo(e.target.value)} value={idvehiculo} required />
                    </Col>
                  </Form.Group>
                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" type="submit" onClick={enviarForm} disabled={disabled}>
                  {!disabled && "Enviar"}
                  {disabled && <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />}
                </Button>
              </Modal.Footer>
            </Modal>
          </Container>
        </Tab>
        <Tab eventKey="turnos" title="Turnos">
          <Container>
            <TurnosContainer turnos={data.turnos} />
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