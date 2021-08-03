import React from 'react'
import { Col, Card, ProgressBar } from 'react-bootstrap';

function VehicleList({ vehiculo, accessToken, api, getCarros }) {
    console.log(vehiculo)
    return (
        <div>
            <Col>
                <Card border='secondary'>
                    <Card.Body>
                        <Card.Header>{vehiculo.patente}</Card.Header>
                        <Card.Title>{vehiculo.patente}</Card.Title>
                        <Card.Text>bla bla bla bla</Card.Text>
                        <ProgressBar>
                            <ProgressBar animated variant="success" now={35} key={1} />
                            <ProgressBar animated variant="warning" now={20} key={2} />
                            <ProgressBar animated variant="danger" now={10} key={3} />
                        </ProgressBar>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
export default VehicleList