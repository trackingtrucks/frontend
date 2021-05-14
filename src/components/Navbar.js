import React, { Component } from 'react'
import {Navbar, Nav, Button} from 'react-bootstrap'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand href="/Home">Tracking Trucks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/Home">Home</Nav.Link>
                            <Nav.Link href="/Map">Mapa</Nav.Link>
                            <Nav.Link href="/Info">Vehículos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button href="/Login" variant="outline-light">Log In</Button>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
