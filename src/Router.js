import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import Map from './components/Map'
import Info from './components/Info'
import Login from './components/Login'

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Info" component={Info}/>
                <Route exact path="/Login" component={Login}/>
                <Route exact path="/Map" component={Map}/>
                <Route path="/" component={Home}/>
            </Switch>
        </BrowserRouter>
    )
}