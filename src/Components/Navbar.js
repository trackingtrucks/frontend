import React, { useContext, useState } from 'react'
import { Nav, Navbar, NavDropdown, Modal } from 'react-bootstrap'
import AuthContext from '../Context/AuthContext';
import * as Api from '../Api/index';
import '../Styles/navbar.css';
import logo from './Assets/logo.png'
import ModalUsuario from './Navbar/ModalUsuario'
import ModalVehiculo from './Navbar/ModalVehiculo'
import SettingsContainers from './Settings/SettingsContainer';
function NavbarComponent() {
    const { clearLocalStorage, perfil } = useContext(AuthContext);
    const [show, setShow] = useState(false);
    const cerrarSesion = async () => {
        await Api.cerrarSesion()
        clearLocalStorage();
        window.location.reload();
    }
    function handleShow() {
        setShow(true);
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
                    <ModalVehiculo Api={Api} />
                    <ModalUsuario Api={Api} />
                    {/* <Navbar.Text style={{ marginLeft: '10px', marginRight: '10px' }}>
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
                        <NavDropdown id="nav-dropdown">

                        </NavDropdown>
                    </Navbar.Text> */}
                    <NavDropdown title={perfil.email} id="nav-dropdown">
                        <NavDropdown.Item onClick={() => handleShow()}>Configuracion</NavDropdown.Item>
                        <NavDropdown.Item className="cerrar-sesion" onClick={() => cerrarSesion()}>Cerrar Sesion</NavDropdown.Item>
                    </NavDropdown>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={show} onHide={() => setShow(false)} size="xl">
                <Modal.Header closeButton closeLabel="">
                    <Modal.Title>Configuracion de la cuenta</Modal.Title>
                </Modal.Header>
                <SettingsContainers AuthContext={AuthContext} />
                {/* <Modal.Footer>
                    <Button onClick={() => setShow(false)} />
                </Modal.Footer> */}
            </Modal>
        </>
    )
}

export default NavbarComponent
