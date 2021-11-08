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


    // lucan't
    // const [titulo, setTitulo] = useState('');
    // const [descripcion, setDescripcion] = useState('');
    // const [ultimaVez, setUltimaVez] = useState('');
    // const [date, setDate] = useState('');
    // const [urgencia, setUrgecia] = useState('');
    // const [key, setKey] = useState('tarea');

    
    const handleClose = () => setShowRegistrar(false);

    async function enviarForm1(e) {
        e.preventDefault();
        console.log(vehiculo, tipo, cantidadCada, cantidadUltima, avisarAntes);
        handleClose();
        try {
            await Api.nuevaTarea({ vehiculo, tipo, cantidadCada, cantidadUltima, avisarAntes })
            makeToast(6000, "success", "Tarea Creada")
            window.location.reload();
        }
        catch (error) {
            makeToast(6000, 'error', error?.response?.data?.message || error.message)
            console.error(error?.response?.data?.message || error.message);
        }

        if (disabled) { return };
    }

    // async function enviarForm2(e) {
    //     e.preventDefault();
    //     console.log(vehiculo, titulo, descripcion, date, ultimaVez, urgencia);
    //     handleClose();
    //     try {
    //         await Api.crearTramite({ vehiculo, titulo, descripcion, date, ultimaVez, urgencia })
    //         makeToast(6000, "success", "tramite Creado")
    //         window.location.reload();
    //     }
    //     catch (error) {
    //         makeToast(6000, 'error', error?.response?.data?.message || error.message)
    //         console.error(error?.response?.data?.message || error.message);
    //     }

    //     if (disabled) { return };
    // }


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
                {/* <Tabs id="tabs" activeKey={key} onSelect={(k) => setKey(k)}>
                    <Tab eventKey="tarea" title="Tarea">
                        <Form onSubmit={enviarForm1}>
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
                                    Tipo de tarea:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="aceite/neumaticos" onChange={(e) => setTipo(e.target.value)} value={tipo} required /> </Col>
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
                            <Button variant="outline-primary" type="submit" onClick={enviarForm1} disabled={disabled}>
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
                    </Tab>
                    <Tab eventKey="tramite" title="Tramite">
                        <Form onSubmit={enviarForm2}>
                            <Form.Group as={Row} className="m-3" controlId="vehiculo">
                                <Form.Label column sm="4">
                                    Vehiculo:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="ID del vehiculo" onChange={(e) => setVehiculo(e.target.value)} value={vehiculo} required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="m-3" controlId="titulo">
                                <Form.Label column sm="4">
                                    Titulo:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="Escribir la tarea" onChange={(e) => setTitulo(e.target.value)} value={titulo} required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="m-3" controlId="descripcion">
                                <Form.Label column sm="4">
                                    Descripcion:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="" onChange={(e) => setDescripcion(e.target.value)} value={descripcion} required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="m-3" controlId="ultima vez">
                                <Form.Label column sm="4">
                                    Cuando fue la ultima vez que se realizo esta tarea:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="" onChange={(e) => setUltimaVez(e.target.value)} value={ultimaVez} required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="m-3" controlId="fecha">
                                <Form.Label column sm="4">
                                    fecha:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="" onChange={(e) => setDate(e.target.value)} value={date} required />
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} className="m-3" controlId="Urgencia">
                                <Form.Label column sm="4">
                                    Urgencia:
                                </Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" placeholder="" onChange={(e) => setUrgecia(e.target.value)} value={urgencia} required />
                                </Col>
                            </Form.Group>
                        </Form>
                        <Modal.Footer>
                            <Button variant="outline-primary" type="submit" onClick={enviarForm2} disabled={disabled}>
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
                    </Tab>
                </Tabs> */}
                <Form onSubmit={enviarForm1}>
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
                            Tipo de tarea:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="aceite/neumaticos" onChange={(e) => setTipo(e.target.value)} value={tipo} required /> </Col>
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
                    <Button variant="outline-primary" type="submit" onClick={enviarForm1} disabled={disabled}>
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
