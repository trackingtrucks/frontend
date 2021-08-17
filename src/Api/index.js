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
    // if (response.data.perfil.rol !== "admin"){cerrarSesion({accessToken: response.data.accessToken, refreshToken: response.data.refreshToken}); return makeToast(6000, 'error', "Aplicacion solo disponible para Administradores!")};
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
            "x-access-token": accessToken
        }

    });
    return response;
}

export const nuevoUsuario = async ({ email, password, nombre, apellido, codigo }) => {
    const response = await API.post(`/auth/register/`, {
        email,
        password,
        nombre,
        apellido,
        codigo
    });
    return response;
}

export const nuevoVehiculo = async ({ patente, marca, modelo, año, kmactual}) => {
    const response = await API.post(`/vehiculo`, {

        headers: {
            "x-access-token": accessToken
        },
        data: {
            patente,
            marca,
            modelo,
            año,
            kmactual
        }
    });
    return response;
}