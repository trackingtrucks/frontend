import * as Api from '../../Api';
import React, { useState, useContext, useEffect } from 'react'
import {Row} from 'react-bootstrap';
import AuthContext from '../../Context/AuthContext';
import TurnosCard from './TurnosCard'

function TurnosContainer() {
    const [Turnos, setTurnos] = useState([]);
    const { get } = useContext(AuthContext);
    const getCompanydata = async () => {
        const {data} = await Api.getCompanydata({ accessToken: get('at')})
        setTurnos(data.turnos);
    }
    useEffect(() => {
        getCompanydata();
    }, [])
    return (
            <Row xs={1} md={2} className="g-4">
            {Turnos.length > 0 && Turnos.map((turno) => {
                return (
                    <TurnosCard turno={turno} key={turno._id} api={Api} accessToken={get('at')} getCompanydata={getCompanydata} />)
            })}
        </Row>
    )
}
export default TurnosContainer