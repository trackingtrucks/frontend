import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Config } from '../Config'
const SocketContext = createContext();
function SocketContextProvider(props) {
    const [info, setInfo] = useState({});
    const [datos, setDatos] = useState([])
    useEffect(() => {
        setDatos(info.datos)
    }, [info])
    return <SocketContext.Provider value={{ info, setInfo, datos }}>
        {props.children}
    </SocketContext.Provider>
}
export default SocketContext;
export { SocketContextProvider };

