import React from 'react'
import { Col, Card } from 'react-bootstrap';

function GestoresList({gestor}) {
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{gestor.nombre} {gestor.apellido}</Card.Title>
                        <Card.Text>
                            Rol: <b>{gestor.rol}</b>
                            <br /> Email: <b>{gestor.email}</b>
                            <br /> ID: <b>{gestor._id}</b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <br/>
        </div>
    )
}
export default GestoresList