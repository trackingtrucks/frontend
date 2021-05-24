import React, { Component } from 'react'
import {Form, Button, Jumbotron, Container, Row, Col} from 'react-bootstrap'
import queryString from 'query-string'

export class Registro extends Component {
    state={
        email: '',
        password: '',
        nombre: '',
        apellido: '',
        codigo: '',
    }

    Change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    Submit = async (e) => {
        e.preventDefault();
        try {   
            console.log(this.state)
        } catch (error) {
            console.log(error)
        }
    }

    componentDidMount=() => {
        const { email, codigo } = queryString.parse(this.props.location.search)
        this.setState({
            email, codigo
        })
    }
    render() {
        return(
            <>
                
                <Jumbotron fluid>
                    <Container>
                        <Form onSubmit={this.Submit} autoComplete='off'>
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required value={this.state.email} onChange={this.Change} type="email" placeholder="Ejemplo@TrackingTrucks.com.ar" />
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required value={this.state.password} onChange={this.Change} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Col>
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control required id="nombre" value={this.state.nombre} onChange={this.Change} placeholder="Nombre" />
                                    </Col>
                                    <Col>
                                        <Form.Label>Apellido</Form.Label>
                                        <Form.Control required id="apellido" value={this.state.apellido} onChange={this.Change} placeholder="Apellido" />
                                    </Col>
                                </Row>
                            </Form.Group>
                            <Form.Group controlId="codigo">
                                <Form.Label>Token</Form.Label>
                                <Form.Control required value={this.state.codigo} onChange={this.Change} placeholder="" />
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