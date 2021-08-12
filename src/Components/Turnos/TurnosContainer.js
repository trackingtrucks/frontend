import * as Api from '../../Api';
import {ListGroup} from 'react-bootstrap';
import TurnosCard from './TurnosCard'

function TurnosContainer({turnos}) {
    console.log(turnos);
    return (
            <ListGroup>
            {turnos && turnos.map((turno) => {
                if(turno.condicion === "Asignado") return null;
                return (
                    <TurnosCard turno={turno} key={turno._id} api={Api}/>)
            })}
        </ListGroup>
    )
}
export default TurnosContainer