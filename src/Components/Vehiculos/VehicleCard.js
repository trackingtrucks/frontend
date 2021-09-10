import { React, useState, useContext } from 'react'
import { Col, Card, Modal, Button } from 'react-bootstrap';
import datosSocket from "./../../socket.io"

function VehicleList({ vehiculo, accessToken, api, getCarros }) {
    const [show, setShow] = useState(false);
    const datos  = useContext(datosSocket);

    function handleShow() {
        setShow(true);
    }

    return (
        <div>
            <Col>
                <Card border='secondary'>
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
                        <Button className="me-2" onClick={() => handleShow()}>
                            Full screen
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <Modal show={show} size={"fullscreen"} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal</Modal.Title>
                </Modal.Header>
                <Modal.Body>{datos}</Modal.Body>
            </Modal>
        </div>
    )
}
export default VehicleList