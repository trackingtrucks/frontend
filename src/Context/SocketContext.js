import React, { createContext } from 'react'
import * as Api from '../Api'
const SocketContext = createContext();
function SocketContextProvider(props) {
    // const [info, setInfo] = useState({});
    // const [datos, setDatos] = useState([])
    let datos = [];
    let info = {};
    const agregarDatos = (newData) => {
        // console.log(newData.datos);
        // console.log(getDatos());
        addDatos2(newData.datos)
    }

    function addDatos2(datosnuevos) {
        // console.log(datos);
        // datos.push(datosnuevos)
        // console.log(datos);
        getCompanyData();
    }
    function setInfo2(infonueva) {
        info = infonueva;
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
        // console.log(data);
        setInfo2(data);
        console.log(info);
        // console.log(datitos);
        datos = datitos;
        console.log(datos);
    }

    return <SocketContext.Provider value={{ getInfo, getDatos, agregarDatos, getCompanyData, info, datos }}>
        {props.children}
    </SocketContext.Provider>
}
export default SocketContext;
export { SocketContextProvider };

