import React, { useState } from 'react'
import { Modal, Button, Row, Col, Form ,Spinner } from 'react-bootstrap'
import makeToast from '../Toast';
import * as Api from '../../Api/index'

function ModalVehiculo() {
    const [showRegistrar, setShowRegistrar] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [patente, setPatente] = useState('');
    const [marca, setMarca] = useState('');
    const [modelo, setModelo] = useState('');
    const [año, setAño] = useState('');
    const [kmactual, setKmactual] = useState('');
    const handleClose = () => setShowRegistrar(false);

    async function enviarForm (e) {
        e.preventDefault();
        handleClose();
        try {
            await Api.nuevoVehiculo({ patente, marca, modelo, año, kmactual })
            makeToast(6000, "success", "Vehiculo Creado")
        }
        catch(error) {
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
            <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => setShowRegistrar(true)}>Nuevo vehiculo</Button>
            <Modal show={showRegistrar} onHide={hideRegistrar}>
                <Modal.Header closeButton closeLabel="">
                    <Modal.Title>Añadir un vehiculo a la compañia</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Ingresa un companyId para esta empresa</Modal.Body> */}
                <Form onSubmit={enviarForm}>
                    <Form.Group as={Row} className="m-3" controlId="patente">
                        <Form.Label column sm="4">
                            Patente:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Patente" onChange={(e) => setPatente(e.target.value)} value={patente} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="marca">
                        <Form.Label column sm="4">
                            Marca: 
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Marca" onChange={(e) => setMarca(e.target.value)} value={marca} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="modelo">
                        <Form.Label column sm="4">
                            Modelo: 
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Modelo" onChange={(e) => setModelo(e.target.value)} value={modelo} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="año">
                        <Form.Label column sm="4">
                            Año: 
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Año" onChange={(e) => setAño(e.target.value)} value={año} required/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="km">
                        <Form.Label column sm="4">
                            Kilometraje actual: 
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="Kilometros" onChange={(e) => setKmactual(e.target.value)} value={kmactual} required/>
                        </Col>
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={enviarForm} disabled={disabled}>
                    {!disabled && "Enviar" }  
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

export default ModalVehiculo
