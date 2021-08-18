import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Home extends Component {
    render() {
        return (
            <div>
                <p>
                    Bienvenido a Tracking Trucks!
                </p>
                <p>
                    <Link to="/login">
                        Iniciar Sesion!
                    </Link>
                </p>
                <p>
                    <Link to="/registro">
                        Registrate
                    </Link>
                </p>
            </div>
        )
    }
}

export default Home
