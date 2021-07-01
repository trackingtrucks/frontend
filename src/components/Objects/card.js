import React, { Component } from 'react'
import {CardColumns, Card} from 'react-bootstrap'

export class card extends Component {
    render () {
        return (
            <div>
                <CardColumns>
                    <Card border="success">
                        <Card.Header>
                            <Card.Title>{'asd'}</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                Mendoza - Buenos aires
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </CardColumns>
            </div>
            
        )
    }
}

export default card