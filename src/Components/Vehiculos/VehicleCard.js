import React, { useState } from 'react'
import { Button, Modal, Form, Row, Col, Card } from 'react-bootstrap';

function VehicleList({vehiculo, accessToken, api, getCarros}) {
    console.log(vehiculo)
    return(
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{vehiculo.patente}</Card.Title>
                        <Card.Text>{JSON.stringify(vehiculo.conductorActual)}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
export default VehicleList