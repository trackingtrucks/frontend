import React, { Component } from 'react'
import { Alert } from 'react-bootstrap'
//import Card from './Objects/card.js'
import axios from 'axios'
import Config from '../Config'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
let token = localStorage.getItem("accessToken");

export class Home extends Component {

    componentDidMount = () => {
        this.getCarros();

    }
    getCarros = async () => {
        try {
            const perfil = await axios.get(
                Config.API_URL + "/company",
                {
                    headers: {
                        "x-access-token": token
                    }
                }
            )
            console.log(perfil.data)
            localStorage.setItem("vehiculos", JSON.stringify(perfil.data.vehiculos))
        }
        catch (error) {
            console.log(error.response.data.message)
        }
    }

    render() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZmVkZWhpbHNlbiIsImEiOiJja3I0dzRkZTEyenhzMm9vOGs0YmdsM2ozIn0.jTC_nHxqAkIF_DODrdBgPA';
        var map = new mapboxgl.Map({
            container: "mapa1",
            style: 'mapbox://styles/fedehilsen/ckr4w7vz10fjz18se2at1fjgk'
        });
        return (
            <>
                <div id="mapa1" className="mapa">
                {map}
                </div>
                <Alert variant="primary">
                    {localStorage.getItem("vehiculos")}
                </Alert>
            </>

        )
    }
}

export default Home
