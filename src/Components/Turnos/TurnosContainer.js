import * as Api from '../../Api';
import {Row} from 'react-bootstrap';
import TurnosCard from './TurnosCard'

function TurnosContainer({turnos}) {
    return (
            <Row xs={1} md={2} className="g-4">
            {turnos && turnos.map((turno) => {
                return (
                    <TurnosCard turno={turno} key={turno._id} api={Api}/>)
            })}
        </Row>
    )
}
export default TurnosContainer