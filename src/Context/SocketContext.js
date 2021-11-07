import React, { createContext, useState } from 'react'
import * as Api from '../Api'
const SocketContext = createContext();
function SocketContextProvider(props) {
    const [info, setInfo] = useState({});
    const [datos, setDatos] = useState([])

    function setDatos2(datosnuevos) {
        if (datosnuevos) { setDatos(datosnuevos) };
    }
    function setInfo2(infonueva) {
        if (infonueva) { setInfo(infonueva) }
    }
    function getDatos() {
        return datos;
    }
    function getInfo() {
        return info;
    }

    async function getCompanyData() {
        console.log("Getting Company Data");
        const { data } = await Api.getCompanydata()
        const datitos = data.datos;
        // console.info(data);
        setInfo2(data);
        // console.log(getInfo());
        // console.info(datitos);
        setDatos2(datitos)
        // console.log(getDatos());
    }

    return <SocketContext.Provider value={{ getInfo, setInfo, getDatos, getCompanyData }}>        {props.children}
    </SocketContext.Provider>
}
export default SocketContext;
export { SocketContextProvider };

