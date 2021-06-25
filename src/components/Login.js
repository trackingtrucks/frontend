import React, { Component } from 'react'
import { Form, Button, Jumbotron, Container } from 'react-bootstrap'
import axios from 'axios'
import Config from '../Config'
import makeToast from './Objects/Toast'

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
            localStorage.setItem('perfil', JSON.stringify(res.data.perfil))

            makeToast('success', "Bienvenido "+ res.data.perfil.nombre + " " + res.data.perfil.apellido)
            //alert("Bienvenido "+ res.data.response.nombre + " " + res.data.response.apellido)
            //redirigir a la dashboard
            this.props.history.push('/')
            console.log(res)
        } catch (error) {
            //usar sweetalert2
            makeToast('error', error.response.data.message || error.message)
            //alert(error.response.data.message || error.message)
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
                                <Form.Control required value={this.state.email} onChange={this.Change} type="email" placeholder="ejemplo@gmail.com" />
                            </Form.Group>

                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required value={this.state.password} onChange={this.Change} type="password" placeholder="*********" />
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