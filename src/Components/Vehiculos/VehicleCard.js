import { React, useState, useContext } from 'react'
import { Col, Card, Modal, Container, Tabs, Tab, Table } from 'react-bootstrap';
import datosSocket from "./../../socket.io"
import { Line } from 'react-chartjs-2';
import ModalTareas from '../Navbar/ModalTareas';

function VehicleList({ vehiculo, accessToken, api, getCarros }) {
    const [show, setShow] = useState(false);
    const datos = useContext(datosSocket);
    console.log(datos)
    const [key, setKey] = useState(localStorage.getItem('tab') || 'Nivel de nafta');

    function handleShow() {
        setShow(true);
    }

    const guardarKey = (k) => {
        setKey(k);
        if (k === 'settings') { return }
        localStorage.setItem('tab', k)
    }

    const data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
                label: '# of Votes',
                data: [],
                fill: false,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgba(255, 99, 132, 0.2)',
            },
        ],
    };

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

    const LineChart = () => (
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
            <Line data={data} options={options} />
        </>
    );

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
                        <Tabs id="tabs" activeKey={key} onSelect={(k) => guardarKey(k)} className="mb-3">
                            <Tab eventKey="Nivel de nafta" title="Nivel de nafta">
                                <LineChart />
                            </Tab>
                            <Tab eventKey="Velocidad" title="Velocidad">
                                <LineChart />
                            </Tab>
                            <Tab eventKey="Revoluciones por minuto" title="Revoluciones por minuto">
                                <LineChart />
                            </Tab>
                            <Tab eventKey="Temperatura del liquido refrigerante" title="Temperatura del liquido refrigerante">
                                <LineChart />
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
                                            <th>Fecha limite</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {vehiculo.alertas && vehiculo.alertas.map((vehiculo.alertas) => {
                                            if (vehiculo.alertas.condicion === "Asignado") return null;
                                            return (
                                                <TurnosCard turno={turno} key={turno._id} api={Api} />)
                                        })} */}
                                    </tbody>

                                </Table>
                            </Tab>
                            <Tab eventKey="Historial de conductores" title="Historial de conductores">
                            <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th>Conductor</th>
                                            <th>Fecha limite</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {vehiculo.alertas && vehiculo.alertas.map((vehiculo.alertas) => {
                                            if (vehiculo.alertas.condicion === "Asignado") return null;
                                            return (
                                                <TurnosCard turno={turno} key={turno._id} api={Api} />)
                                        })} */}
                                    </tbody>
                                        {JSON.stringify(vehiculo.conductoresPasados) }
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