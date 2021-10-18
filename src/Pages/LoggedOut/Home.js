import React, { Component } from 'react'
import { Navbar, Button, Nav, Row, Col, Container } from 'react-bootstrap'
import "./../../Styles/landing.css"
import logo from './../../Components/Assets/logo.png'
import landing from './../../Components/Assets/landing.png'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse'
export class Home extends Component {
    render() {
        return (
            <div >
                <Navbar>
                    <Navbar.Brand href="/">
                        <img
                            src={logo}
                            width="70"
                            height="70"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <NavbarCollapse>
                        <b className="logo">TrackingTrucks</b>
                    </NavbarCollapse>
                    <Navbar.Collapse className="justify-content-end">
                        <Button className="contacto" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => this.props.history.push("/contacto")}>
                            Contactanos
                        </Button>
                        <Button className="login" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => this.props.history.push("/login")}>
                            Iniciar Sesion
                        </Button>
                        <Nav style={{ marginLeft: '10px', marginRight: '10px' }} />
                    </Navbar.Collapse>
                </Navbar>
                <Container className="pagina">
                    <Row>
                        <Col>
                            <Container>
                                <img
                                    src={landing}
                                    width="700"
                                    height="700"
                                    className="responsive-image__image"
                                    alt="React Bootstrap logo"
                                    style={{ padding: "10" }}
                                />
                            </Container>
                        </Col>
                        <Col>
                            <Container style={{ flex: "1" }}>
                                <p>
                                    <b className="slogan">
                                        La mejor forma de gestionar su flota de camiones
                                    </b>
                                </p>
                            </Container>
                            <Container style={{ flex: "1" }}>
                                <p className="bajada">
                                    Para registrarse contactanos y completa el formulario
                                </p>
                            </Container>
                            <Container style={{ flex: "1" }}>
                                <Button className="login" style={{ alignItems: "center", marginRigth: '10px', marginLeft: '10px', marginBottom: '5px', marginTop: "50px"}} onClick={() => this.props.history.push("/registro")}>
                                    Mas información
                                </Button>
                            </Container>
                        </Col>
                    </Row>
                </Container>


            </div>
        )
    }
}

export default Home
