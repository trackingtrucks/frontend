import * as Api from '../../../Api';
import { Row } from 'react-bootstrap';
import ConductoresCard from './ConductoresCard'

function ConductorContainer({ conductores }) {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {conductores && conductores.map((conductor) => {
                    return (
                        <ConductoresCard conductor={conductor} key={conductor._id} api={Api} />)
                })}
            </Row>
        </div>
    )
}
export default ConductorContainer