import * as Api from '../../Api';
import React, { useState, useContext, useEffect } from 'react'
import {Row} from 'react-bootstrap';
import AuthContext from '../../Context/AuthContext';
import VehicleCard from './VehicleCard'

function VehicleContainer() {
    const [Vehiculos, setCarros] = useState([]);
    const { get } = useContext(AuthContext);
    const getCompanydata = async () => {
        const {data} = await Api.getCompanydata({ accessToken: get('at')})
        setCarros(data.vehiculos);
    }
    useEffect(() => {
        getCompanydata();
        // eslint-disable-next-line
    }, [])
    return (
            <Row xs={1} md={2} className="g-4">
            {Vehiculos.length > 0 && Vehiculos.map((vehiculo) => {
                return (
                    <VehicleCard vehiculo={vehiculo} key={vehiculo._id} api={Api} accessToken={get('at')} getCompanydata={getCompanydata} />)
            })}
        </Row>
    )
}
export default VehicleContainer