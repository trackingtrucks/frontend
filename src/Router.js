import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Objects/Navbar'
import Home from './components/Home'
import Map from './components/Objects/Map'
import Info from './components/Info'
import Login from './components/Functions/Login'
import Landing from './components/Landing'
import Registro from './components/Functions/Registro'
import Contacto from './components/Contacto'

export default function Router() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path="/info" component={Info}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/map" component={Map}/>
                <Route exact path="/registro" component={Registro}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/landing" component={Landing}/>
                <Route exact path="/contacto" component={Contacto}/>
            </Switch>
        </BrowserRouter>
    )
}