import React from 'react'
import { Col, Card } from 'react-bootstrap';

function ConductoresList({conductor, accessToken, api}) {
    return(
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{conductor.nombre} {conductor.apellido}</Card.Title>
                        <Card.Text>{conductor.rol}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
export default ConductoresList