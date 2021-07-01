import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/Objects/Navbar'
import Home from './components/Home'
import Map from './components/Objects/Map'
import Info from './components/Info'
import Login from './components/Login'
import Registro from './components/Registro'

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
            </Switch>
        </BrowserRouter>
    )
}