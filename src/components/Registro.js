import React, { Component } from 'react'
import {Form, Button, Jumbotron, Container, Row, Col} from 'react-bootstrap'

export class Registro extends Component {
    render() {
        return(
            <>
                
                <Jumbotron fluid>
                    <Container>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Ejemplo@TrackingTrucks.com.ar" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control placeholder="Nombre" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control placeholder="Nombre" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Token</Form.Label>
                                <Form.Control placeholder="" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Container>
                </Jumbotron>
            </>
        )
    }
}

export default Registro 