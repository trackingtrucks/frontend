import axios from 'axios';
import { Config } from '../Config';
import { accessToken, rToken } from '../Context/AuthContext';
const API = axios.create({
    baseURL: `${Config.API_URL}`
});
export const login = async ({ email, password, set }) => {
    const response = await API.post(`/auth/login`, {
        email,
        password
    });
    if (response.data.perfil.rol === "admin"){
        cerrarSesion({accessToken: response.data.accessToken, refreshToken: response.data.refreshToken}); 
        alert("Aplicacion disponible solo para Gestores!")
        return window.location.replace("https://trackingtrucks-admin.netlify.app");
    };
    if (response.data.perfil.rol === "conductor"){
        cerrarSesion({accessToken: response.data.accessToken, refreshToken: response.data.refreshToken}); 
        return alert("Para poder iniciar sesion como conductor, por favor dirigase a la aplicacion para moviles")
    }
    set({
        profile: (response.data.perfil),
        accessToken: (response.data.accessToken),
        refreshToken: (response.data.refreshToken),
        ATExpire: (response.data.ATExpiresIn),
        LoggedIn: (true)
    })
    return response;
}


export const cerrarSesion = async () => {
    await API.delete(`/auth/token`, {
        headers: {
            "x-refresh-token": rToken,
            "x-access-token": accessToken
        }
    })
}


export const restablecerContraseña = async ({ email }) => {
    const response = await API.post(`/user/restablecer`, {
        email
    });
    return response;
}

export const cambiarContraseña = async ({ password, passwordActual }) => {
    const response = await API.patch(`/user/cambiar/contrasena/logueado`, {
        password, passwordActual
    }, {
        headers: {
            'x-access-token': accessToken
        }
    })
    return response;
}

export const cerrarTodasSesiones = async ({ password }) => {
    const response = await API.delete(`/auth/tokens`, {
        headers: {
            "Content-type": "application/json",
            "x-access-token": accessToken,
        },
        data: {
            password
        }
    });
    return response;
}

export const getCompanydata = async () => {
    const response = await API.get('/company', {
        headers: {
            "Content-type": "application/json",
            "x-access-token": accessToken
        }

    });
    return response;
}

export const registrarse = async ({ email, password, nombre, apellido, codigo, set }) => {
    const response = await API.post(`/auth/register/`, {
        email,
        password,
        nombre,
        apellido,
        codigo
    });
    if (response?.data?.perfil?.rol === "gestor") {
        set({
            profile: (response.data.perfil),
            accessToken: (response.data.accessToken),
            refreshToken: (response.data.refreshToken),
            ATExpire: (response.data.ATExpiresIn),
            LoggedIn: (true)
        })
    }
    if (response?.data?.perfil?.rol === "conductor") {
        //Reenviar a /descargar
        return alert("Para poder iniciar sesion como conductor, por favor dirigase a la aplicacion para moviles")

    }
    return response;
}

export const nuevoVehiculo = async ({ patente, marca, modelo, año, kmactual }) => {
    const response = await API.post(`/vehiculo`, {
        patente,
        marca,
        modelo,
        año,
        kmactual
    }, {
        headers: {
            "x-access-token": accessToken
        }
    });
    return response;
}



export const asignarTurno = async ({ idConductor, codigoDeTurno }) => {
    const response = await API.put(`/user/asignarTurno`, {
        idConductor,
        codigoDeTurno
    }, {
        headers: {
            "x-access-token": accessToken
        }
    });
    return response;
}

export const eliminarVehiculo = async ({ idVehiculo }) => {
    const response = await API.delete(`/vehiculo/${idVehiculo}`, {
        headers: {
            "x-access-token": accessToken,
        }
    });
    return response;
}

export const agregarGestor = async ({ email }) => {
    console.warn(email);

    const response = await API.post(`/user/codigo/gestor`, {
        email
    }, {
        headers: {
            "x-access-token": accessToken,
            "Content-Type": "application/json"
        }
    });
    return response;
}

export const agregarConductor = async ({ email }) => {
    console.log(accessToken);
    console.warn(email);
    const response = await API.post(`/user/codigo/conductor`, {
        email
    }, {
        headers: {
            "x-access-token": accessToken,
            "Content-Type": "application/json"
        }
    });
    return response;
}

export const crearTurno = async ({ codigoDeTurno, fechaYhora, nombreVendedor, codigoOrdenDeCompra }) => {
    const response = await API.post(`/user/crearTurno`, {
        codigoDeTurno,
        fechaYhora,
        nombreVendedor,
        codigoOrdenDeCompra
    }, {
        headers: {
            "Content-Type": "application/json",
            "x-access-token": accessToken
        }
    });
    return response;
}

export const getUsuario = async ({id}) => {
    const response = await API.get('/company/vehiculo', {
        body: {
            id
        },
        headers: {
            "Content-Type": "application/json",
            "x-access-token": accessToken
        }
    });
    return response;
}

export const enviarFormulario = async ({ nombreEmpresa, email, descripcionUso, genteCompania }) => {
    const response = await API.post(`/company/formulario`, {
        nombreEmpresa,
        email,
        descripcionUso,
        genteCompania
    });
    return response;
}

export const nuevaTarea = async ({ vehiculo, tipo, cantidadCada, cantidadUltima, avisarAntes }) => {
    const response = await API.post(`/vehiculo/tareas`, {
        vehiculo,
        tipo,
        cantidadCada,
        cantidadUltima,
        avisarAntes
    }, {
        headers: {
            "Content-Type": "application/json",
            "x-access-token": accessToken
        }
    });
    return response;
}