import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

export default function DogForm(props) {
    const API_URL = "https://64a89351dca581464b85e18b.mockapi.io/dogs";
    const [validated, setValidated] = useState(false);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

            setValidated(true);
        } else {
            event.preventDefault();

            let elem = document.getElementById("submit");

            if (elem.innerHTML == "Update") {
                let id = document.getElementById("id").value;
                let name = document.getElementById("validationCustomName").value;
                let breed = document.getElementById("validationCustomBreed").value;
                let photo = document.getElementById("validationCustomPhoto").value;
                let blurb = document.getElementById("validationCustomBlurb").value;
                let birthdate = document.getElementById("validationCustomBirthdate").value;

                let dog = {
                    "id": id,
                    "name": name,
                    "breed": breed,
                    "photo": photo,
                    "blurb": blurb,
                    "birthdate": birthdate
                }

                try {
                  const response = await fetch(`${API_URL}/${id}`, {
                      method: 'PUT',
                      headers: {
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(dog)
                    });
                  } catch (e) { console.error(e); }
                
                let elems = document.querySelectorAll(".card button");
                for (let e of elems) {
                    e.disabled = false;
                }
            }

            if (elem.innerHTML == "Add a New Dog") {
                let name = document.getElementById("validationCustomName").value;
                let breed = document.getElementById("validationCustomBreed").value;
                let photo = document.getElementById("validationCustomPhoto").value;
                let blurb = document.getElementById("validationCustomBlurb").value;
                let birthdate = document.getElementById("validationCustomBirthdate").value;

                let dog = {
                    "name": name,
                    "breed": breed,
                    "photo": photo,
                    "blurb": blurb,
                    "birthdate": birthdate,
                    "locations": [],
                    "reviews": []
                }

                try {
                    const response = await fetch(API_URL, {
                        method: 'POST',
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify(dog)
                      });
                } catch (e) { console.error(e); }
            }

            props.getDogs();

            setValidated(false);

            document.getElementById("validationCustomName").value = '';
            document.getElementById("validationCustomBreed").value = '';
            document.getElementById("validationCustomPhoto").value = '';
            document.getElementById("validationCustomBlurb").value = '';
            document.getElementById("validationCustomBirthdate").value = '';

            document.getElementById("submit").innerHTML = "Add a New Dog";
        }
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <input id="id" type="hidden" />
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustomName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Name"
          />
          <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomBreed">
          <Form.Label>Breed</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Breed"
          />
          <Form.Control.Feedback type="invalid">Please enter a breed.</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomPhoto">
          <Form.Label>Photo</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
              type="text"
              placeholder="Photo URL"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please enter a URL for the photo.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustomBlurb">
          <Form.Label>Blurb</Form.Label>
          <Form.Control type="text" placeholder="Blurb" required />
          <Form.Control.Feedback type="invalid">
            Please enter a blurb.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="validationCustomBirthdate">
          <Form.Label>Birthdate</Form.Label>
          <Form.Control type="date" placeholder="Birthdate" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid birthdate.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Button type="submit" id="submit" className="mb-5">Add a New Dog</Button>
    </Form>
    );
}