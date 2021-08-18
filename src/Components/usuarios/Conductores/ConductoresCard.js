import React from 'react'
import { Col, Card } from 'react-bootstrap';

function ConductoresList({ conductor }) {
    return (
        <div className="gestor">
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{conductor.nombre} {conductor.apellido}</Card.Title>
                        <Card.Text>
                            Rol: <b>{conductor.rol}</b>
                            <br /> Email: <b>{conductor.email}</b>
                            <br /> ID: <b>{conductor._id}</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <br/>
        </div>
    )
}
export default ConductoresList