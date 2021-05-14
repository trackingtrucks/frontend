import React, { Component } from 'react'
import Navbar from './Navbar.js'

export class Map extends Component {
    render() {
        return(
            <>
                <Navbar/>
                <div className = "mapa">
                    <iframe className = "in-flex2"  title="mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15688920.90362076!2d-69.95631117490196!3d-36.1692793844697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccaf5f5fdc667%3A0x3d2f77992af00fa8!2sArgentina!5e0!3m2!1sen!2sar!4v1619443032172!5m2!1sen!2sar"></iframe>
                </div>
            </>
        )
    }
}

export default Map