import React, { Component } from 'react'
import {Card} from 'react-bootstrap'

export class Card extends Component {
    render () {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                <Card.Body>
                <Card.Title>Vehículo X</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Buenos Aires - Mendoza</Card.Subtitle>
                <Card.Text>
                    Maneja juan.
                </Card.Text>
                <Card.Link href="#">Vehículo X en el mapa.</Card.Link>
                <Card.Link href="#">tucson</Card.Link>
            </Card.Body>
            </Card>
            </div>
            
        )
    }
}

export default Card