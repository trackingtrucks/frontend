import * as Api from '../../Api';
import {ListGroup} from 'react-bootstrap';
import TurnosCard from './TurnosCard'

function TurnosContainer({turnos}) {
    return (
            <ListGroup>
            {turnos && turnos.map((turno) => {
                return (
                    <TurnosCard turno={turno} key={turno._id} api={Api}/>)
            })}
        </ListGroup>
    )
}
export default TurnosContainer