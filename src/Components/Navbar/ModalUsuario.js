import React, { useState } from 'react'
import { Button, Form, Col, Row, Modal } from 'react-bootstrap'
import makeToast from '../Toast';

function ModalUsuario({ Api, get }) {
    const [showRegistrar, setShowRegistrar] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [email, setEmail] = useState('');
    const [isCond, setIsCond] = useState(true)

    const enviarForm = async (e) => {
        e.preventDefault();
        if (disabled) { return };
        if (email === "") return makeToast(5000, "error", "Se debe especificar un email!");
        try {
            setDisabled(true);
            if (isCond) {
                // await Api.agregarConductor
                makeToast(6000, "info", "Registrando el usuario " + email + " como conductor")
            } else if (!isCond) {
                // await Api.agregarGestor
                makeToast(6000, "info", "Registrando el usuario " + email + " como gestor")
            } else {
                return makeToast(6000, "error", "No se especificó ningun rol")
            }
            // await Api.agregarAdmin({ email, accessToken: get('at') });
            setDisabled(false);
            // hideRegistrar();
        } catch (error) {
            setDisabled(false);
            makeToast(6000, "error", error.response.data.message || error.message)
            console.error(error?.response?.data?.message || error.message);
        }
    }
    const hideRegistrar = () => {
        setDisabled(false);
        setShowRegistrar(false);
    }
    return (
        <>
            <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => setShowRegistrar(true)}>Nuevo Usuario</Button>
            <Modal show={showRegistrar} onHide={hideRegistrar}>
                <Modal.Header closeButton closeLabel="">
                    <Modal.Title>Añadir un usuario a la compañia</Modal.Title>
                </Modal.Header>
                {/* <Modal.Body>Ingresa un companyId para esta empresa</Modal.Body> */}
                <Form onSubmit={enviarForm}>
                    <Form.Group as={Row} className="m-3" controlId="email">
                        <Form.Label column sm="4">
                            Ingresa un email:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="m-3" controlId="email">
                        <Form.Label column sm="4">
                            Tipo de cuenta
                        </Form.Label>
                        <Col sm="8">
                            <div className="pt-2">
                                <Form.Check
                                    inline
                                    label="Conductor"
                                    name="group1"
                                    checked={isCond}
                                    type={"radio"}
                                    id={`inline-radio-c`}
                                    onChange={(e) => setIsCond(!isCond)}
                                />
                                <Form.Check
                                    inline
                                    label="Gestor"
                                    name="group1"
                                    type={"radio"}
                                    checked={!isCond}
                                    id={`inline-radio-g`}
                                    onChange={(e) => setIsCond(!isCond)}

                                />
                            </div>
                        </Col>
                    </Form.Group>
                </Form>
                <Modal.Footer>
                    <Button variant="primary" type="submit" onClick={enviarForm} disabled={disabled}>
                        Enviar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalUsuario
