import React, { useState } from 'react'
import { Button, Form, Col, Row, Modal, Spinner } from 'react-bootstrap'
import makeToast from '../Toast';
import * as Api from '../../Api/index'

function CrearTurno() {
    const [codigoDeTurno, setCodigoturno] = useState('');
    const [fechaYhora, setFecha] = useState('');
    const [nombreVendedor, setNombre] = useState('');
    const [codigoOrdenDeCompra, setCodigoordencompra] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [showRegistrar, setShowRegistrar] = useState(false);
    const handleClose = () => setShowRegistrar(false);


    async function enviarForm(e) {
        e.preventDefault();
        handleClose();
        try {
            await Api.crearTurno({ codigoDeTurno, fechaYhora, nombreVendedor, codigoOrdenDeCompra })
            makeToast(6000, "success", "Turno Creado")
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
            <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => setShowRegistrar(true)}>Nuevo turno</Button>
            <Modal show={showRegistrar} onHide={hideRegistrar}>
                <Modal.Header closeButton closeLabel="">
                    <Modal.Title>Añadir un turno a la compañia</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Ingresa un companyId para esta empresa</Modal.Body> */}
                <Form onSubmit={enviarForm}>
                    <Form.Group as={Row} className="m-3" controlId="codigo de turno">
                        <Form.Label column sm="4">
                            Codigo de Turno:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="" onChange={(e) => setCodigoturno(e.target.value)} value={codigoDeTurno} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="fecha">
                        <Form.Label column sm="4">
                            Fecha y Hora:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="YY-MM-DD HH:mm:ss" onChange={(e) => setFecha(e.target.value)} value={fechaYhora} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="nombre del vendedor">
                        <Form.Label column sm="4">
                            Nombre del Vendedor:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="" onChange={(e) => setNombre(e.target.value)} value={nombreVendedor} required />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="codigo orden de compra">
                        <Form.Label column sm="4">
                            Codigo de orden de compra:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="" onChange={(e) => setCodigoordencompra(e.target.value)} value={codigoOrdenDeCompra} required />
                        </Col>
                    </Form.Group>
                </Form>
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
        </>
    )
}
export default CrearTurno