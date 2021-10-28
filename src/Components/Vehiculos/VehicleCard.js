import { React, useState, useContext, useEffect } from 'react'
import { Col, Card, Modal, Container, Tabs, Tab, Table } from 'react-bootstrap';

import { Line } from 'react-chartjs-2';
import SocketContext from '../../Context/SocketContext';
import ModalTareas from '../Navbar/ModalTareas';


function VehicleList({ vehiculo, tarea, accessToken, api, getCarros }) {
    const [show, setShow] = useState(false);
    const [datitos, setDatitos] = useState(null)
    const { datos } = useContext(SocketContext);
    // console.log(vehiculo)
    const [key, setKey] = useState('Nivel de nafta');
    
    useEffect(() => {
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
            console.log("aun no hay datos")
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
                        <Card.Title>{vehiculo.patente}</Card.Title>
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
                        {/* <Card.Text>bla bla bla bla</Card.Text>
                        <ProgressBar>
                            <ProgressBar animated variant="success" now={35} key={1} />
                            <ProgressBar animated variant="warning" now={20} key={2} />
                            <ProgressBar animated variant="danger" now={10} key={3} />
                        </ProgressBar> */}
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
                    <Container className="center">
                        Conductor actual

                    </Container>
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
                        Informacion:
                        <br />
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
                    </Container>
                    <br />
                    <Container>
                        <Tabs>
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