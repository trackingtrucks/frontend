import React, { Component } from 'react'
import {Form, Button, Jumbotron, Container} from 'react-bootstrap'

export class Login extends Component {
    state = {email: "", password: ""}

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state);
    }

    render() {
        return(
            <>
                
                <Jumbotron fluid>
                    <Container>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control id="email" value={this.state.email} type="email" placeholder="Ejemplo@TrackingTrucks.com.ar" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
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