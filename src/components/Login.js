import React, { Component } from 'react'
import { Form, Button, Jumbotron, Container } from 'react-bootstrap'

export class Login extends Component {
    state = {
        password: '',
        email: '',
    }

    Change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    Submit = async (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <>
                <Jumbotron fluid>
                    <Container>
                        <Form onSubmit={this.Submit}>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control value={this.state.email} onChange={this.Change} type="email" placeholder="ejemplo@trackingtrucks.com.ar" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control value={this.state.password} onChange={this.Change} type="password" placeholder="Password" />
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

export default Login