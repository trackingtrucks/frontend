import { React, useState } from 'react'
import { ListGroup, Button, Modal, ButtonToolbar } from 'react-bootstrap';

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
                <ButtonToolbar className="justify-content-between">
                    <b>
                        {turno.codigoOrdenDeCompra}
                    </b>
                    {turno.nombreVendedor}
                    <Button variant="outline-primary" onClick={handleShow}>
                        Asignar turno
                    </Button>
                </ButtonToolbar>
            </ListGroup.Item>



            <Modal show={show} onHide={handleClose} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>con q vos queres asignar el turno ehh. PICARON</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default TurnosList