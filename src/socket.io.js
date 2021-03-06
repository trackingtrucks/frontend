import React, {
    useEffect,
    useContext
} from 'react';
import io from 'socket.io-client';
import makeToast from './Components/Toast';
import { Config } from './Config';
import { accessToken } from './Context/AuthContext';
import SocketContext from './Context/SocketContext';

let socket;

function SocketIO() {
    const {agregarDatos} = useContext(SocketContext);
    // const Datos = SocketContextFunction.getDatos();
    // const Info = SocketContextFunction.getInfo();
    const ENDPOINT = Config.API_URL;
    // const [a, setA] = useState(1)
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
            console.log('%cDesonexion!! ', 'color: #ff0000; font-weight: bold;');
        });

        socket.on('connect', () => {
            console.log('%cConexion!! ', 'color: #00ff00; font-weight: bold;');
        });

        socket.on('notificacion', (message) => {
            makeToast(6000, 'info', message);
        });

        socket.on('alerta', (alerta) => {
            //alert("NUEVO MENSAJETE: " + message);
            makeToast(6000, 'warning', alerta.message);
        });

        socket.on('datos', (nuevosDatos) => {
            //alert("NUEVO MENSAJETE: " + message);
            makeToast(12000, 'info', "Nuevos datos del vehiculo " + nuevosDatos.patente + "! \nVe a la pestana Vehiculos para consultarlos");
            console.log(nuevosDatos.datos);
            agregarDatos();
        });
        socket.on('entrega', (entrega) => {
            //alert("NUEVO MENSAJETE: " + message);
            //makeToast(6000, 'warning', datos.message);
            console.log(entrega);
            makeToast(6000, 'info', entrega);
        });
        // eslint-disable-next-line
    }, []);
    return (
        <></>
    )
}

export default SocketIO