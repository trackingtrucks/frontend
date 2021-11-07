import React, { createContext, useState } from 'react'
import * as Api from '../Api'
const SocketContext = createContext();
function SocketContextProvider(props) {
    const [info, setInfo] = useState({});
    const [datos, setDatos] = useState([])

    function getDatos() {
        return datos;
    }
    function getInfo() {
        return info;
    }
     const agregarDatos = () => {
        getCompanyData()
    }
    async function getCompanyData() {
        console.log("Getting Company Data");
        const { data } = await Api.getCompanydata()
        const datitos = data.datos;
        setInfo(data);
        setDatos(datitos)
    }

    return <SocketContext.Provider value={{ agregarDatos, getInfo, setInfo, getDatos, getCompanyData, datos, setDatos }}>        {props.children}
    </SocketContext.Provider>
}
export default SocketContext;
export { SocketContextProvider };

