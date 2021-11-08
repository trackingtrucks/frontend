import React, { useState } from 'react'
import { Container, Form, Button, Col, Card } from 'react-bootstrap'
import * as Api from '../../Api/index'
import makeToast from '../../Components/Toast';

export default function Contacto() {
    const [nombreEmpresa, setNombreempresa] = useState('');
    const [email, setEmail] = useState('');
    const [descripcionUso, setDescripcionuso] = useState('');
    const [genteCompania, setGentecompania] = useState('');
    const [disabled, setDisabled] = useState(false)

    async function enviarForm(e) {
        e.preventDefault();
        setDisabled(true)
        try {
            await Api.enviarFormulario({ nombreEmpresa, email, descripcionUso, genteCompania })
            makeToast(6000, "success", "Formulario enviado")
            setEmail('');
            setGentecompania('');
            setNombreempresa('');
            setDescripcionuso('');
        } catch (error) {
            makeToast(6000, 'error', error?.response?.data?.message || error.message)
            console.error(error?.response?.data?.message || error.message);
        }
        setDisabled(false);
    }

    return (
        <div className='Login-component'>
            <Container>
                <Card className="p-5 ">
                    <h1>Contactanos! </h1>
                    <Form onSubmit={enviarForm}>
                        <Form.Group>
                            <Form.Label column sm="4">
                                Nombre de la empresa:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="" onChange={(e) => setNombreempresa(e.target.value)} value={nombreEmpresa} required />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label column sm="4">
                                Email:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="" onChange={(e) => setEmail(e.target.value)} value={email} required />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label column sm="4">
                                Descripcion:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="" onChange={(e) => setDescripcionuso(e.target.value)} value={descripcionUso} required />
                            </Col>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label column sm="4">
                                Gente en la compania:
                            </Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="" onChange={(e) => setGentecompania(e.target.value)} value={genteCompania} required />
                            </Col>
                        </Form.Group>
                        <br />
                        <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} type="submit" onClick={enviarForm} disabled={disabled}>
                            Enviar
                        </Button>
                    </Form>
                </Card>
            </Container>
        </div>
    )
}
