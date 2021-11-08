import React, { useState } from 'react'
import { Col, Row, Button, Modal, Form, Spinner } from 'react-bootstrap';
import * as Api from '../../Api/index'
import makeToast from '../Toast';

export default function EliminarVehiculo() {

    const [idvehiculo, setIdvehiculo] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [showRegistrar, setShowRegistrar] = useState(false);
    const handleClose = () => setShowRegistrar(false);

    const hideRegistrar = () => {
        setDisabled(false);
        setShowRegistrar(false);
    }

    async function enviarForm(e) {
        e.preventDefault();
        try {
            await Api.eliminarVehiculo({ idVehiculo: idvehiculo })
            makeToast(6000, "success", "Vehiculo Eliminado")
            window.location.reload();
        }
        catch (error) {
            makeToast(6000, 'error', error?.response?.data?.message || error.message)
            console.error(error?.response?.data?.message || error.message);
        }
        handleClose();
    }

    return (
        <div>
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
                    <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} type="submit" onClick={enviarForm} disabled={disabled}>
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
        </div>
    )
}
