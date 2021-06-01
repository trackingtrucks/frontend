import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

export class NavBar extends Component {

    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <NavLink className="navbar-brand" to="/">Tracking Trucks</NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                            <NavLink className="nav-link" to="/map">Mapa</NavLink>
                            <NavLink className="nav-link" to="/info">Vehículos</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Navbar.Text>
                        Hola {localStorage.getItem('accessToken')}
                    </Navbar.Text>
                    <Link  className="btn btn-outline-light" to="/login">Log In</Link>
                    <Link  className="btn btn-outline-light" to="/registro">Registrarse</Link>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
