import { React, useState } from 'react'
import { ListGroup, Button, Modal } from 'react-bootstrap';

function TurnosList({ turno, accessToken, api, getCarros }) {
    // codigoDeTurno: "abd5532h45e22s"
    // codigoOrdenDeCompra: "apohh238jfu"
    // companyId: "abc123"
    // fechaYhora: "2021-07-08T21:00:00.000Z"
    // nombreVendedor: "ventasLuca"
    // _id: "60e4aa9690042119508f172f"
    // condicion: "Asignado/No asignado"

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <ListGroup.Item>
                <b>
                    {turno.nombreVendedor}
                </b>
                { } {turno.codigoOrdenDeCompra} {<Button variant="outline-primary" onClick={handleShow}>
                    Asignar turno
                </Button>}
            </ListGroup.Item>



            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default TurnosList