import React, { Component } from 'react'
import { Form, Button, Container, Card } from 'react-bootstrap'
import queryString from 'query-string'
import makeToast from '../../Components/Toast'
import * as Api from "../../Api/index"

export class Restablecer extends Component {
    state = {
        password: '',
        token: queryString.parse(this.props.location.search).token || ''
    }

    Change = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    Submit = async (e) => {
        e.preventDefault();
        try {
            const res = await Api.cambiarContraseñaConToken({password:this.state.password, token:this.state.token})
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
                <Container>
                    <Card className="p-5 ">
                        <h1>Restablecer contraseña </h1>
                        <Form onSubmit={this.Submit} autoComplete='off'>
                            
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required value={this.state.password} onChange={this.Change} type="password" placeholder="**********" />
                            </Form.Group>
                            
                            <Form.Group controlId="codigo">
                                <Form.Label>Token</Form.Label>
                                <Form.Control required value={this.state.token} onChange={this.Change} placeholder="xxxxxxxxxxxxx" />
                            </Form.Group>
                            <br/>
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </Card>
                </Container>
            </>
        )
    }
}

export default Restablecer