import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Dog(props) {
    const updateSetup = () => {
        document.getElementById("submit").innerHTML = "Update";
        
        let elems = document.querySelectorAll(".card button");
        for (let e of elems) {
            e.disabled = true;
        }

        document.getElementById("id").value = props.dog.id;
        document.getElementById("validationCustomName").value = props.dog.name;
        document.getElementById("validationCustomBreed").value = props.dog.breed;
        document.getElementById("validationCustomPhoto").value = props.dog.photo;
        document.getElementById("validationCustomBlurb").value = props.dog.blurb;
        document.getElementById("validationCustomBirthdate").value = props.dog.birthdate;
    }

    return (
        <Card className="card-float">
        <Card.Img variant="top" src={props.dog.photo} />
        <Card.Body>
            <Card.Title>{props.dog.name}</Card.Title>
            <Card.Text>
                {props.dog.blurb}
            </Card.Text>
            <Button variant="primary" className="me-2" onClick={updateSetup}>Update</Button>
            <Button variant="danger" onClick={() => {props.deleteDog(props.dog.id)}}>Remove</Button>
        </Card.Body>
        </Card>
    );
}