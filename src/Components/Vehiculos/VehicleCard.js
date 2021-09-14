import { React, useState, useContext } from 'react'
import { Col, Card, Modal, Container, Tabs, Tab } from 'react-bootstrap';
import datosSocket from "./../../socket.io"

function VehicleList({ vehiculo, accessToken, api, getCarros }) {
    const [show, setShow] = useState(false);
    const datos = useContext(datosSocket);

    function handleShow() {
        setShow(true);
    }


    return (
        <div>
            <Col>
                <Card border='secondary' onClick={() => handleShow()}>
                    <Card.Body>
                        <Card.Title>{vehiculo.patente}</Card.Title>
                        <Card.Text>{vehiculo.alertas.map(element => {
                            return (
                                <span key={element._id}>
                                    {element.tipo} {' '}
                                </span>
                            );
                        })} <br />
                            Kilometraje: <b>{vehiculo.kmactual}</b> kms
                            <br /> ID: <b>{vehiculo._id}</b>
                        </Card.Text>
                        {/* <Card.Text>bla bla bla bla</Card.Text>
                        <ProgressBar>
                            <ProgressBar animated variant="success" now={35} key={1} />
                            <ProgressBar animated variant="warning" now={20} key={2} />
                            <ProgressBar animated variant="danger" now={10} key={3} />
                        </ProgressBar> */}
                        {/* <Button onClick={handleShow}></Button> */}
                        {/* <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => handleShow()}>
                            Mas datos
                        </Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Modal show={show} size={"fullscreen"} onHide={() => setShow(false)}>
                <Modal.Body>
                    <br /><br />
                    <Container className="center">
                        <b>vehiculo {vehiculo.patente}</b>

                    </Container>
                    <br /><br />
                    <Container className="center">
                        Conductor actual

                    </Container>
                    <br /><br />
                    <Container className="center">
                        {/* {(()=> {
                            if (vehiculo.conductorActualid === null) {
                                return ("no hay ningun conductor asignado al vehiculo")
                            }
                            else {
                                return (vehiculo.conductorActual.id)
                            }
                        })()} */}
                    </Container>
                    <Container>
                        Informacion:
                        <br />
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="Nivel de nafta" title="Nivel de nafta">
                                {datos}
                            </Tab>
                            <Tab eventKey="Velocidad" title="Velocidad">
                            </Tab>
                            <Tab eventKey="Revoluciones por minuto" title="Revoluciones por minuto">
                            </Tab>
                            <Tab eventKey="Temperatura del liquido refrigerante" title="Temperatura del liquido refrigerante">
                            </Tab>
                        </Tabs>
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default VehicleList