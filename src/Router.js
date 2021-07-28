import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import AuthContext from './Context/AuthContext'
// --RUTAS--
import SetToken from './Pages/SetToken';
//Logged out
import Login from './Pages/LoggedOut/Login';
import Contacto from './Pages/LoggedOut/Contacto';
import Home from './Pages/LoggedOut/Home'

//Logged in
import Dashboard from './Pages/LoggedIn/Dashboard';


export default function Router() {
    const { loggedIn } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/token" component={SetToken} />
                {loggedIn === false && (
                    <>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/login" component={Login} />
                        <Route exact path="/contacto" component={Contacto} />
                        
                        <Redirect to="/" />

                    </>
                    //En el futuro agregar una pagina de 404
                )}
                {loggedIn === true && (
                    <>
                        <Route exact path="/" component={Dashboard} />
                        <Redirect to="/" />

                    </>
                    //En el futuro agregar una pagina de 404
                )}
            </Switch>
        </BrowserRouter>
    )
}
