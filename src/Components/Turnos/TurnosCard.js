import React from 'react'
import { Col, Card } from 'react-bootstrap';

function TurnosList({ turno, accessToken, api, getCarros }) {
    // codigoDeTurno: "abd5532h45e22s"
    // codigoOrdenDeCompra: "apohh238jfu"
    // companyId: "abc123"
    // fechaYhora: "2021-07-08T21:00:00.000Z"
    // nombreVendedor: "ventasLuca"
    // _id: "60e4aa9690042119508f172f"
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body>
                        <Card.Title>{turno.codigoDeTurno}</Card.Title>
                        <Card.Text>{turno.codigoOrdenDeCompra}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    )
}
export default TurnosList