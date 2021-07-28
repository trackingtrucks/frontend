import React, { Component } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'

export class ModalVehiculo extends Component {
    state = {
        show: false,
        disabled: false
    }
    hideRegistrar = () => {
        this.setState({
            show: false,
            disabled: false
        })
    }
    enviarForm = (e) => {
        e.preventDefault();
    }
    render() {
        return (
            <>
                <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => this.setState({ show: true })}>Nuevo Vehiculo</Button>
                <Modal show={this.state.show} onHide={this.hideRegistrar}>
                    <Modal.Header closeButton closeLabel="">
                        <Modal.Title>Añadir un usuario a la compañia</Modal.Title>
                    </Modal.Header>
                    {/* <Modal.Body>Ingresa un companyId para esta empresa</Modal.Body> */}
                    <Form onSubmit={this.enviarForm}>
                        <Form.Group as={Row} className="m-3" controlId="email">
                            <Form.Label column sm="4">
                                Ingresa un email:
                            </Form.Label>
                            <Col sm="8">
                                {/* <Form.Control type="text" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} /> */}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="m-3" controlId="email">
                            <Form.Label column sm="4">
                                Tipo de cuenta
                            </Form.Label>
                            <Col sm="8">

                            </Col>
                        </Form.Group>
                    </Form>
                    <Modal.Footer>
                        <Button variant="primary" type="submit" onClick={() => this.enviarForm()} disabled={this.state.disabled}>
                            Enviar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default ModalVehiculo
