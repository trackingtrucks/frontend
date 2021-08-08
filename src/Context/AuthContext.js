import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
import { Config } from '../Config'
const AuthContext = createContext();
let accessToken;
let rToken;
function AuthContextProvider(props) {
    const [loggedIn, setLoggedIn] = useState(undefined);
    const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken') || '');
    const [ATExpire, setATExpire] = useState(null)
    const [perfil, setPerfil] = useState(JSON.parse(localStorage.getItem('perfil')) || null);
    const [loading, setLoading] = useState(true);
    async function saveLocalStorage() {
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('perfil', JSON.stringify(perfil));
    }

    async function clearLocalStorage() {
        localStorage.clear();
        set({
            accessToken: '',
            LoggedIn: false,
            refreshToken: '',
            ATExpire: null,
            profile: null,
            tab: 'main'
        })
    }

    function set({ accessToken: token, refreshToken, ATExpire, LoggedIn, profile }) {
        if (profile) { setPerfil(profile) }
        if (token) { accessToken = token; }
        if (refreshToken) { setRefreshToken(refreshToken); rToken = refreshToken; }
        if (ATExpire) { setATExpire(ATExpire) }
        if (LoggedIn) { setLoggedIn(LoggedIn) }
    }
    async function getAccessToken() {
        try {
            if (refreshToken) {
                const { data } = await axios.get(Config.API_URL + "/auth/token", {
                    headers: {
                        'x-refresh-token': refreshToken
                    }
                });
                // console.info(data);
                setATExpire(data.ATExpiresIn)
                accessToken = data.accessToken;
                setLoggedIn(true);
                setLoading(false);
            } else {
                if (localStorage.getItem('refreshToken')) {
                    return;
                }
                setLoggedIn(false);
                setLoading(false);
                clearLocalStorage();
            }
        } catch (error) {
            console.error(error?.response?.data?.message || error.message);
            setLoggedIn(false);
            setLoading(false);
            clearLocalStorage();
        }
    }

    useEffect(() => { //Pedir un nuevo access token
        const now = Date.now()
        const falta = ATExpire - now;
        if (falta < 0) return;
        setTimeout(() => {
            getAccessToken();
        }, falta - 15000);
        // eslint-disable-next-line
    }, [ATExpire]);

    useEffect(() => {
        getAccessToken();
        // eslint-disable-next-line
    }, []);

    return <AuthContext.Provider value={{ loading, loggedIn, saveLocalStorage, clearLocalStorage, set, getAccessToken, perfil, accessToken }}>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;
export { AuthContextProvider, accessToken, rToken };

