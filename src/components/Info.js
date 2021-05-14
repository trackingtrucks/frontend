import React, { Component } from 'react'
import Card from './card.js'
import Navbar from './Navbar.js'

export class Info extends Component {
    render() {
        return(
            <>
                <Navbar/>
                <Card/>
            </>
        )
    }
}

export default Info