import React, { useEffect } from 'react';
import io from 'socket.io-client';
import makeToast from './Components/Toast';
import { Config } from './Config';
import { accessToken } from './Context/AuthContext';
const datosSocket = React.createContext();
let socket;

function SocketIO({getCompanydata}) {
    
    const ENDPOINT = Config.API_URL;
    useEffect(() => {
        var connectionOptions = {
            "force new connection": true,
            "reconnectionAttempts": "Infinity",
            "timeout": 10000,
            "transports": ["websocket"],
            query: {
                token: accessToken
            }
        };
        socket = io(ENDPOINT, connectionOptions);
        return () => {
            socket.off();
        } // eslint-disable-next-line
    }, [ENDPOINT])

    //_-FUNCIONES-_
    useEffect(() => {
        socket.on("connect_error", (err) => {
            console.error(err.message)
        });

        socket.on("disconnect", () => {
            console.log('%c Desonexion!! ', 'color: #ff0000; font-weight: bold;');
        });

        socket.on('connect', () => {
            console.log('%c Conexion!! ', 'color: #00ff00; font-weight: bold;');
        });

        socket.on('notificacion', (message) => {
            makeToast(6000, 'info', message);
        });

        socket.on('alerta', (alerta) => {
            //alert("NUEVO MENSAJETE: " + message);
            makeToast(6000, 'warning', alerta.message);
        });

        socket.on('datos', (datos) => {
            //alert("NUEVO MENSAJETE: " + message);
            //makeToast(6000, 'warning', datos.message);
            console.log(datos);
            <datosSocket.Provider value={datos}></datosSocket.Provider>
        });
    }, []);
    return (
        <></>
    )
}

export default SocketIO
