import React from 'react';
import Card from 'react-bootstrap/Card';

export default function DogLocation(props) {
    return (
        <Card className="card-float">
        <Card.Img variant="top" src={props.location.photo} />
        <Card.Body>
            <Card.Title>{props.location.title}</Card.Title>
            <Card.Text>
                {props.location.blurb}
            </Card.Text>
        </Card.Body>
        </Card>
    );
}