import * as Api from '../../Api';
import {Row} from 'react-bootstrap';
import ConductoresCard from './ConductoresCard'

function ConductorContainer({conductores}) {
    return (
            <Row xs={1} md={2} className="g-4">
            {conductores && conductores.map((conductor) => {
                return (
                    <ConductoresCard conductor={conductor} key={conductor._id} api={Api}/>)
            })}
        </Row>
    )
}
export default ConductorContainer