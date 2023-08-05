import React from 'react';
import Card from 'react-bootstrap/Card';
import Stars from './Stars';

export default function DogReview(props) {
    return (
        <Card className="text-center mb-3">
        <Card.Header>{props.review.reviewer}</Card.Header>
        <Card.Body>
            <Card.Text>
            <Stars rating={props.review.rating} /><br />
            {props.review.reviewContent}
            </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">{props.review.reviewDate}</Card.Footer>
        </Card>
    );
}