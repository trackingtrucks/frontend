import * as Api from '../../../Api';
import { Row } from 'react-bootstrap';
import GestoresCard from './GestoresCard'

function GestoresContainer({ gestores }) {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {gestores && gestores.map((gestor) => {
                    return (
                        <GestoresCard gestor={gestor} key={gestor._id} api={Api} />)
                })}
            </Row>
        </div>
    )
}
export default GestoresContainer