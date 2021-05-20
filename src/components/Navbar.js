import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link, NavLink} from 'react-router-dom'

export class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Navbar.Brand href="/Home">Tracking Trucks</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink className="nav-link" to="/Home">Home</NavLink>
                            <NavLink className="nav-link" to="/Map">Mapa</NavLink>
                            <NavLink className="nav-link" to="/Info">Vehículos</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                    <Link  className="btn btn-outline-light" to="/Login">Log In</Link>
                </Navbar>
            </div>
        )
    }
}

export default NavBar
