// import { render } from '@testing-library/react';
import { React, useState, useEffect } from 'react'
import { Col, Card, Modal, Container, Tabs, Tab, Table } from 'react-bootstrap';

//assets
import camionGrande from "../Assets/camionGrande.png";

import { Line } from 'react-chartjs-2';
// import SocketContext from '../../Context/SocketContext';
import ModalTareas from '../Navbar/ModalTareas';


function VehicleList({ vehiculo, datos }) {
    const [show, setShow] = useState(false);
    const [datitos, setDatitos] = useState([])
    // const { getDatos } = useContext(SocketContext);
    // console.log(vehiculo)
    const [key, setKey] = useState('Nivel de nafta');
    const [key2, setKey2] = useState('Historial de conductores');

    useEffect(() => {
        console.log(datos);
        if (datos !== undefined) {
            setDatitos(datos.filter((dato) => dato.vehiculo === vehiculo._id));
        }
        // eslint-disable-next-line
    }, [datos]);

    useEffect(() => {
        if (datos != null) {
        } // eslint-disable-next-line
    }, [datitos])

    function handleShow() {
        setShow(true);
    }





    function buildData(datos, tipo) {
        try {
            const valores = Object.keys(datos.datos).map(function (i) { return datos.datos[i]; });
            const keys = Object.keys(datos.datos).map(function (i) { return i; });
            // console.log(valores);
            return {
                labels: keys,
                datasets: [
                    {
                        label: tipo,
                        data: valores,
                        fill: false,
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgba(255, 99, 132, 0.2)',
                    },
                ],
            };
        } catch (error) {
            // console.log("aun no hay datos")
        }
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    const LineChart = ({ data, label }) => {
        return (
            <>
                <div className='header'>
                    <div className='links'>
                        <a
                            className='btn btn-gh'
                            href='https://github.com/reactchartjs/react-chartjs-2/blob/master/example/src/charts/Line.js'
                        >
                        </a>
                    </div>
                </div>
                <Line data={buildData(data, label)} options={options} />
            </>
        )
    };

    return (
        <div>
            <Col>
                <Card border='secondary' onClick={() => handleShow()}>
                    <Card.Body>
                        <Card.Title>
                            <img
                                src={camionGrande}
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            {"ㅤㅤ" + vehiculo.patente}
                        </Card.Title>
                        <Card.Text>{vehiculo.alertas.map(element => {
                            return (
                                <span key={element._id}>
                                    {element.tipo} {' '}
                                </span>
                            );
                        })} <br />
                            Kilometraje: <b>{vehiculo.kmactual}</b> kms
                            <br /> ID: <b>{vehiculo._id}</b>
                        </Card.Text>
                        {/* <Button onClick={handleShow}></Button> */}
                        {/* <Button variant="outline-primary" style={{ marginRigth: '10px', marginLeft: '10px', marginBottom: '5px' }} onClick={() => handleShow()}>
                            Mas datos
                        </Button> */}
                    </Card.Body>
                </Card>
            </Col>
            <Modal show={show} size={"fullscreen"} onHide={() => setShow(false)}>
                <Modal.Body>
                    <br /><br />
                    <Container className="center">
                        <b>vehiculo {vehiculo.patente}</b>
                        <b> - {vehiculo._id}</b>

                    </Container>
                    <br /><br />
                    <br /><br />
                    <Container className="center">
                        {/* {(()=> {
                            if (vehiculo.conductorActualid === null) {
                                return ("no hay ningun conductor asignado al vehiculo")
                            }
                            else {
                                return (vehiculo.conductorActual.id)
                            }
                        })()} */}
                        {JSON.stringify(vehiculo.condutorActual)}
                    </Container>
                    <Container>
                        {datitos.length !== 0 ? <>
                            Informacion:
                            <Tabs id="tabs" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
                                <Tab eventKey="Nivel de nafta" title="Nivel de nafta">
                                    <LineChart data={datitos && datitos[datitos.length - 1] && datitos[datitos.length - 1].data && datitos[datitos.length - 1].data.fuelLevel} label="%" />
                                </Tab>
                                <Tab eventKey="Velocidad" title="Velocidad">
                                    <LineChart data={datitos && datitos[datitos.length - 1] && datitos[datitos.length - 1].data && datitos[datitos.length - 1].data.speed} label="km/h" />
                                </Tab>
                                <Tab eventKey="Revoluciones por minuto" title="Revoluciones por minuto">
                                    <LineChart data={datitos && datitos[datitos.length - 1] && datitos[datitos.length - 1].data && datitos[datitos.length - 1].data.RPM} label="RPM" />
                                </Tab>
                                <Tab eventKey="Temperatura del liquido refrigerante" title="Temperatura del liquido refrigerante">
                                    <LineChart data={datitos && datitos[datitos.length - 1] && datitos[datitos.length - 1].data && datitos[datitos.length - 1].data.coolantTemperature} label="°C" />
                                </Tab>
                            </Tabs>
                        </> : <> <br /><br /> <h3>No hay datos para este vehiculo</h3> <h5>Asigna a un conductor y conectate para subir la informacion!</h5></>}

                        <br />

                    </Container>
                    <br />
                    <Container>
                        <Tabs activeKey={key2} onSelect={(k) => setKey2(k)} className="mb-3">
                            <Tab eventKey="Tareas" title="Tareas">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Tarea</th>
                                            <th>Nivel</th>
                                            <th>ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vehiculo.alertas.map(element => {
                                            return (
                                                // <span key={element._id}>
                                                //     {element.tipo} {' '}
                                                // </span>
                                                <tr key={element._id}>
                                                    <td>{element.tipo}</td>
                                                    <td>{element.nivel}</td>
                                                    <td>{element._id}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>

                                </Table>
                            </Tab>
                            <Tab eventKey="Historial de conductores" title="Historial de conductores">
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Desde</th>
                                            <th>Hasta</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {vehiculo.conductoresPasados.map(element => {
                                            return (
                                                <tr key={element.id}>
                                                    <td>
                                                        {element.id}
                                                    </td>
                                                    <td>
                                                        {element.fechaDesde}
                                                    </td>
                                                    <td>
                                                        {element.fechaHasta}
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </Table>
                            </Tab>
                        </Tabs>
                        <br />
                        <ModalTareas />
                    </Container>
                </Modal.Body>
            </Modal>
        </div>
    )
}
export default VehicleList