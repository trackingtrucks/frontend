import React, { useState } from 'react'
import { Col, Card } from 'react-bootstrap';

function TurnosList({Turno, accessToken, api, getCarros}) {
    console.log(Turno)
    return(
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{Turno}</Card.Title>
                        <Card.Text></Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
export default TurnosList