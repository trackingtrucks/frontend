import * as Api from '../../Api';
import {Row} from 'react-bootstrap';
import VehicleCard from './VehicleCard'

function VehicleContainer({vehiculos, tareas, datos}) {
    return (
            <Row xs={1} md={2} className="g-4">
            {vehiculos && vehiculos.map((vehiculo) => {
                return (
                    <VehicleCard vehiculo={vehiculo} tarea={tareas} key={vehiculo._id} api={Api} datos={datos}/>)
            })}
            {vehiculos && vehiculos.length === 0 && <div>
                <br />
                <h2><b>Todavia no tienes vehiculos!</b></h2>
                <p>Puedes crear haciendo click en <b style={{color: '#830000'}}>"Nuevo vehiculo"</b> en la parte superior derecha!</p>
                </div>}
        </Row>
    )
}
export default VehicleContainer