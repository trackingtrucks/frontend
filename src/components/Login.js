import React, { Component } from 'react'
import { Form, Button, Jumbotron, Container } from 'react-bootstrap'
import axios from 'axios'
import Config from '../Config'

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
        try {   
            const res = await axios.post(Config.API_URL + '/auth/login', {
                password: this.state.password,
                email: this.state.email,
            })
            localStorage.setItem('accessToken', res.data.accessToken)
            localStorage.setItem('refreshToken', res.data.refreshToken)
            localStorage.setItem('ATexpire', res.data.ATExpiresIn)
            localStorage.setItem('RTexpire', res.data.RTExpiresIn)
            localStorage.setItem('profile', JSON.stringify(res.data.response))
            
            console.log(res)
        } catch (error) {
            console.log(error)
        }
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