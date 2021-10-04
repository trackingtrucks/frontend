import React, { createContext, useEffect, useState } from 'react'
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

