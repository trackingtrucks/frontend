import React, { Component } from 'react'
import { Navbar, Nav, Button } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios';
import Config from '../../Config'
import makeToast from '../Functions/Toast'
let token = localStorage.getItem("accessToken");
let refreshToken = localStorage.getItem("refreshToken");

export class NavBar extends Component {
    logout = async () => {
        await axios.delete(
            Config.API_URL + "/auth/token/", {
            headers: {
                "x-refresh-token": refreshToken,
                "x-access-token": token
            }
        }

        )
        localStorage.clear();
        window.location.href = "/landing";
        window.location.reload();
        makeToast('success', "Secion Cerrarda")
    }
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
                    {/* <Navbar.Text>
                        Hola {str.replace(/^"(.+(?="$))"$/, '$1')}
                    </Navbar.Text> */}
                    <Link className="btn btn-outline-light" to="/login">Log In</Link>
                    <Link className="btn btn-outline-light" to="/registro">Registrarse</Link>
                    <Button className="btn btn-outline-light" onClick={() => this.logout()}>Cerrar Sesion</Button>
                    {/* <Link  className="btn btn-outline-light" >Log Out</Link> */}
                </Navbar>
            </div>
        )
    }
}

export default NavBar
