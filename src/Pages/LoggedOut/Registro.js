import React, { Component } from 'react'
import { Form, Button, Jumbotron, Container, Row, Col } from 'react-bootstrap'
import queryString from 'query-string'
import makeToast from '../../Components/Toast'
import * as Api from "../../Api/index"
import AuthContext from '../../Context/AuthContext'

export class Registro extends Component {
    static contextType = AuthContext
    state = {
        email: queryString.parse(this.props.location.search).email || '',
        password: '',
        nombre: '',
        apellido: '',
        codigo: queryString.parse(this.props.location.search).codigo || '',
    }

    Change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    Submit = async (e) => {
        e.preventDefault();
        try {
            const res = await Api.registrarse({email: this.state.email, password: this.state.password, nombre: this.state.nombre, apellido: this.state.apellido, codigo: this.state.codigo, set: this.context.set })
            if (res?.data?.perfil?.rol === 'admin') {
                return window.location.replace(`https://trackingtrucks-admin.netlify.app/token?token=${res.data.refreshToken}&expires=${res.data.RTExpiresIn}`)
            }
            if (res?.data?.perfil?.rol === 'gestor') {
                makeToast('success', "Bienvenido " + res.data.perfil.nombre + " " + res.data.perfil.apellido)
                this.props.history.push('/')
            } else if (res.data.perfil.rol === 'conductor') {
                makeToast('success', "Bienvenido " + res.data.perfil.nombre + " " + res.data.perfil.apellido)
                this.props.history.push('/descargar')
            }
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
                        <Form onSubmit={this.Submit} autoComplete='off'>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required value={this.state.email} onChange={this.Change} type="email" placeholder="ejemplo@gmail.com" />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required value={this.state.password} onChange={this.Change} type="password" placeholder="**********" />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control required id="nombre" value={this.state.nombre} onChange={this.Change} placeholder="Juan" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control required id="apellido" value={this.state.apellido} onChange={this.Change} placeholder="Pérez" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="codigo">
                                <Form.Label>Codigo de verificación</Form.Label>
                                <Form.Control required value={this.state.codigo} onChange={this.Change} placeholder="xxxxxxxxxxxxx" />
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