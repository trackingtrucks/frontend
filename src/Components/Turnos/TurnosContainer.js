import * as Api from '../../Api';
import { Table } from 'react-bootstrap';
import TurnosCard from './TurnosCard'

function TurnosContainer({ turnos }) {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>{"Codigo de Turno"}</th>
                    <th>{"Nombre de la empresa"}</th>
                    <th>{"Acciones"}</th>
                </tr>
            </thead>
            <tbody>
                {turnos && turnos.map((turno) => {
                    if (turno.condicion !== "No Asignado") return null;
                    return (
                        <TurnosCard turno={turno} key={turno._id} api={Api} />)
                })}
            </tbody>
        </Table>
    )
}
export default TurnosContainer