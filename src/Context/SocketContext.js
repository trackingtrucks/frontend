import React, { createContext, useEffect, useState } from 'react'
const SocketContext = createContext();

function SocketContextProvider(props) {
    const [info, setInfo] = useState({});
    const [datos, setDatos] = useState([])
    // useEffect(() => {
    //     setDatos(info.datos)
    // }, [info])
    const agregarDatos = (newData) => {
        console.log(newData.datos);
        console.log(datos);
        // setDatos(newData.datos)
    }

    return <SocketContext.Provider value={{ info, setInfo, datos, agregarDatos, setDatos }}>
        {props.children}
    </SocketContext.Provider>
}
export default SocketContext;
export { SocketContextProvider };

