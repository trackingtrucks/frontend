import { React, useState } from 'react'
import { ListGroup, Button, Modal, ButtonToolbar, Form, Row, Col } from 'react-bootstrap';
import * as Api from '../../Api/index'
import makeToast from '../Toast';

function TurnosList({ turno, accessToken, api, getCarros }) {
    // codigoDeTurno: "abd5532h45e22s"
    // codigoOrdenDeCompra: "apohh238jfu"
    // companyId: "abc123"
    // fechaYhora: "2021-07-08T21:00:00.000Z"
    // nombreVendedor: "ventasLuca"
    // _id: "60e4aa9690042119508f172f"
    // condicion: "Asignado/No asignado"
    const [showRegistrar, setShowRegistrar] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [idConductor, setIdcond] = useState('');
    const handleClose = () => setShowRegistrar(false);
    const codigoDeTurno = turno.codigoDeTurno;

    const hideRegistrar = () => {
        setDisabled(false);
        setShowRegistrar(false);
    }

    async function enviarForm (e) {
        e.preventDefault();
        try {
            await Api.asignarTurno({idConductor, codigoDeTurno})
            makeToast(6000, "success", "Asignado")
        }
        catch(error) {
            makeToast(6000, 'error', error?.response?.data?.message || error.message)
            console.error(error?.response?.data?.message || error.message);
        }
        if (disabled) { return };
        handleClose();
    }
    return (
        <div>
            <ListGroup.Item>
                <ButtonToolbar className="justify-content-between">
                    <b>
                        {turno.codigoDeTurno}
                    </b>
                    {turno.nombreVendedor}
                    <Button variant="outline-primary" onClick={() => setShowRegistrar(true)}>
                        Asignar turno
                    </Button>
                </ButtonToolbar>
            </ListGroup.Item>



            <Modal show={showRegistrar} onHide={hideRegistrar} animation={true}>
                <Modal.Header closeButton>
                    <Modal.Title>Asignar Turno</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form onSubmit={enviarForm}>
                    <Form.Group as={Row} className="m-3" controlId="idturno">
                        <Form.Label column sm="4">
                            Codigo del Turno:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control plaintext readOnly defaultValue={turno.codigoDeTurno}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="idconductor">
                        <Form.Label column sm="4">
                            ID del conductor:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="ID" onChange={(e) => setIdcond(e.target.value)} value={idConductor} required/>
                        </Col>
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={enviarForm}>
                        enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
export default TurnosList