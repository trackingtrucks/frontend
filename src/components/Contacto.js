import React, { Component } from 'react'
import { Form, Button, Jumbotron, Container } from 'react-bootstrap'

export default class Contacto extends Component {

    state = {
        empresa: '',
        email: '',
    }

    Change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    Submit = async (e) => {
        console.log("fachero pa");
    }

    render() {
        return (
            <div>
                <Jumbotron fluid>
                    <Container>
                        <Form onSubmit={this.Submit}>
                            <Form.Group controlId="Empresa">
                                <Form.Label>Nombre de la empresa</Form.Label>
                                <Form.Control required value={this.state.empresa} onChange={this.Change} type="text" placeholder="" />
                            </Form.Group>

                            <Form.Group controlId="Email de contacto">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required value={this.state.email} onChange={this.Change} type="email" placeholder="ejemplo@compania.com.ar" />
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}

