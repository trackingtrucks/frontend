import * as Api from '../../Api';
import {Row} from 'react-bootstrap';
import VehicleCard from './VehicleCard'

function VehicleContainer({vehiculos}) {
    return (
            <Row xs={1} md={2} className="g-4">
            {vehiculos && vehiculos.map((vehiculo) => {
                return (
                    <VehicleCard vehiculo={vehiculo} key={vehiculo._id} api={Api}/>)
            })}
        </Row>
    )
}
export default VehicleContainer