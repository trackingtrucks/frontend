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
                {conductores && conductores.length === 0 && <div>
                <br />
                <h2><b>Todavia no tienes conductores en tu empresa...</b></h2>
                <p>Puedes crear haciendo click en <b style={{color: '#830000'}}>"Nuevo usuario"</b> en la parte superior derecha!</p>
                </div>}
            </Row>
        </div>
    )
}
export default ConductorContainer