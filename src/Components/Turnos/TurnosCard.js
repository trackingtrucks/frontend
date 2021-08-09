import React from 'react'
import { ListGroup } from 'react-bootstrap';

function TurnosList({ turno, accessToken, api, getCarros }) {
    // codigoDeTurno: "abd5532h45e22s"
    // codigoOrdenDeCompra: "apohh238jfu"
    // companyId: "abc123"
    // fechaYhora: "2021-07-08T21:00:00.000Z"
    // nombreVendedor: "ventasLuca"
    // _id: "60e4aa9690042119508f172f"
    return (
        <div>
            <ListGroup.Item>{turno.nombreVendedor} {turno.fechaYhora}</ListGroup.Item>
        </div>
    )
}
export default TurnosList