import React from 'react'
import { Col, Card } from 'react-bootstrap';

function VehicleList({ vehiculo, accessToken, api, getCarros }) {
    return (
        <div>
            <Col>
                <Card border='secondary'>
                    <Card.Body>
                        <Card.Title>{vehiculo.patente}</Card.Title>
                        <Card.Text>{vehiculo.alertas.map(element => {
                            return(
                                <span key={element._id}>
                                    {element.tipo} {' '}
                                </span>
                            );
                        })}</Card.Text>
                        {/* <Card.Text>bla bla bla bla</Card.Text>
                        <ProgressBar>
                            <ProgressBar animated variant="success" now={35} key={1} />
                            <ProgressBar animated variant="warning" now={20} key={2} />
                            <ProgressBar animated variant="danger" now={10} key={3} />
                        </ProgressBar> */}
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
export default VehicleList