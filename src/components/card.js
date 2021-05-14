import React, { Component } from 'react'
import {CardColumns, Card} from 'react-bootstrap'

export class card extends Component {
    render () {
        return (
            <div>
                <CardColumns>
                    <Card border="success">
                        <Card.Header>
                            <Card.Title>Vehículo 1</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Mendoza - Buenos aires
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="warning">
                        <Card.Body>
                            <Card.Title>Vehículo 2</Card.Title>
                            <Card.Text>
                                la plata - Buenos aires
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="danger">
                        <Card.Body>
                            <Card.Title>Vehículo 3</Card.Title>
                            <Card.Text>
                                La Rioja - Jujuy
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="primary">
                        <Card.Body>
                            <Card.Title>Vehículo 4</Card.Title>
                            <Card.Text>
                                Rio negro - Chubut
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="secondary">
                        <Card.Body>
                            <Card.Title>Vehículo 5</Card.Title>
                            <Card.Text>
                                La pampa - San luis
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info">
                        <Card.Body>
                            <Card.Title>Vehículo 6</Card.Title>
                            <Card.Text>
                                Misiones - Corrientes
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="light">
                        <Card.Body>
                            <Card.Title>Vehículo 7</Card.Title>
                            <Card.Text>
                                Buenos aires - Tierra del fuego
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="dark">
                        <Card.Body>
                            <Card.Title>Vehículo 8</Card.Title>
                            <Card.Text>
                                <small className="Text-mutted">
                                    Tierra del fuego - Buenos aires
                                </small>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
            
        )
    }
}

export default card