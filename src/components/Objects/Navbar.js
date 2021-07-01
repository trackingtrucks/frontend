import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'
var str = ""

export class NavBar extends Component {

    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <NavLink className="navbar-brand" to="/landing">Tracking Trucks</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/map">Mapa</NavLink>
                            <NavLink className="nav-link" to="/info">Vehículos</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text>
                        Hola {str.replace(/^"(.+(?="$))"$/, '$1')}
                    </Navbar.Text>
                    <Link  className="btn btn-outline-light" to="/login">Log In</Link>
                    <Link  className="btn btn-outline-light" to="/registro">Registrarse</Link>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
