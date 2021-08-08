import React, { useContext } from 'react'
import { Nav, Navbar, Button, OverlayTrigger, Tooltip } from 'react-bootstrap'
import AuthContext from '../Context/AuthContext';
import * as Api from '../Api/index';
import '../Styles/navbar.css';
import logo from './Assets/logo.png'
import ModalUsuario from './Navbar/ModalUsuario'
import ModalVehiculo from './Navbar/ModalVehiculo'
function NavbarComponent() {
    const { clearLocalStorage, perfil } = useContext(AuthContext);
    const cerrarSesion = async () => {
        await Api.cerrarSesion()
        clearLocalStorage();
        window.location.reload();
    }

    return (
        <>
            <Navbar bg="light" variant="light" expand="lg" className="p-3">
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    Tracking Trucks
                </Navbar.Brand>

                <Nav className="mr-auto">
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <ModalUsuario Api={Api} />
                    <ModalVehiculo Api={Api} />
                    <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => cerrarSesion()}>Cerrar sesión</Button>
                    <Navbar.Text style={{ marginLeft: '10px', marginRight: '10px' }}>
                        {perfil && <OverlayTrigger
                            key={perfil._id}
                            placement="bottom"
                            overlay={
                                <Tooltip id={`tooltip-${perfil._id}`}>
                                    <strong>{perfil.email}</strong>
                                </Tooltip>
                            }
                        >
                            <strong>{perfil.nombre} {perfil?.apellido}</strong>
                        </OverlayTrigger>}
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}

export default NavbarComponent
