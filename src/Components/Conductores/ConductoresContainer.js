import * as Api from '../../Api';
import React, { useState, useContext, useEffect } from 'react'
import {Row} from 'react-bootstrap';
import AuthContext from '../../Context/AuthContext';
import ConductoresCard from './ConductoresCard'

function VehicleContainer() {
    const [Conductores, setConductores] = useState([]);
    const { get } = useContext(AuthContext);
    const getCompanydata = async () => {
        const {data} = await Api.getCompanydata({ accessToken: get('at')})
        setConductores(data.conductores);
    }
    useEffect(() => {
        getCompanydata();
    }, [])
    return (
            <Row xs={1} md={2} className="g-4">
            {Conductores.length > 0 && Conductores.map((conductor) => {
                return (
                    <ConductoresCard conductor={conductor} key={conductor._id} api={Api} accessToken={get('at')} getCompanydata={getCompanydata} />)
            })}
        </Row>
    )
}
export default VehicleContainer