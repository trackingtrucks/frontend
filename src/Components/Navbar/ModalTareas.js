import React, { useState } from 'react'
import { Modal, Button, Row, Col, Form, Spinner } from 'react-bootstrap'
import makeToast from '../Toast';
import * as Api from '../../Api/index'

function ModalTareas() {
    const [showRegistrar, setShowRegistrar] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [vehiculo, setVehiculo] = useState('');
    const [tipo, setTipo] = useState('');
    const [cantidadCada, setCantidadcada] = useState('');
    const [cantidadUltima, setCantidadultima] = useState('');
    const [avisarAntes, setAvisarantes] = useState('');
    const handleClose = () => setShowRegistrar(false);


    async function enviarForm(e) {
        e.preventDefault();
        console.log(vehiculo, tipo, cantidadCada, cantidadUltima, avisarAntes);
        handleClose();
        try {
            await Api.nuevaTarea({ vehiculo, tipo, cantidadCada, cantidadUltima, avisarAntes })
            makeToast(6000, "success", "Tarea/tramite Creado")
            window.location.reload();
        }
        catch (error) {
            makeToast(6000, 'error', error?.response?.data?.message || error.message)
            console.error(error?.response?.data?.message || error.message);
        }

        if (disabled) { return };
    }
    const hideRegistrar = () => {
        setDisabled(false);
        setShowRegistrar(false);
    }
    return (
        <>
            <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => setShowRegistrar(true)}>Nueva tarea</Button>
            <Modal show={showRegistrar} onHide={hideRegistrar}>
                <Modal.Header closeButton closeLabel="">
                    <Modal.Title>Añadir un una tarea/tramite para un vehiculo</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Ingresa un companyId para esta empresa</Modal.Body> */}
                <Form onSubmit={enviarForm}>
                    <Form.Group as={Row} className="m-3" controlId="vehiculo">
                        <Form.Label column sm="4">
                            Vehiculo:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="ID del vehiculo" onChange={(e) => setVehiculo(e.target.value)} value={vehiculo} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="tipo">
                        <Form.Label column sm="4">
                            Tipo de tarea/tramite:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="aceite/neumaticos" onChange={(e) => setTipo(e.target.value)} value={tipo} required/>
                            {/* <Form.Select aria-label="Default select example" onChange={(e) => setTipo(e.target.value)} value={tipo}>
                                <option></option>
                                <option value="aceite">Cambio de aceite</option>
                                <option value="neumaticos">Cambio de neumaticos</option>
                            </Form.Select> */}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="cantidad de kms">
                        <Form.Label column sm="4">
                            Cada cuanta distancia se tiene que realizar esta tarea:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Kms" onChange={(e) => setCantidadcada(e.target.value)} value={cantidadCada} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="ultima vez">
                        <Form.Label column sm="4">
                            Cuando fue la ultima vez que se realizo esta tarea:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Kms" onChange={(e) => setCantidadultima(e.target.value)} value={cantidadUltima} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="km">
                        <Form.Label column sm="4">
                            Con cuanta anterioridad avisar de la tarea:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Kms" onChange={(e) => setAvisarantes(e.target.value)} value={avisarAntes} required />
                        </Col>
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="outline-primary" type="submit" onClick={enviarForm} disabled={disabled}>
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
        </>
    )
}

export default ModalTareas
