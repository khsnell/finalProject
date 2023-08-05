import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function DogLocationForm(props) {
    const API_URL = "https://64a89351dca581464b85e18b.mockapi.io/dogs";

    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

            setValidated(true);
        } else {
            event.preventDefault();

            let dog = props.dog;

            let location = {
                "title": document.getElementById("validationCustomTitle").value,
                "photo": document.getElementById("validationCustomPhoto").value,
                "blurb": document.getElementById("validationCustomBlurb").value
            }

            dog.locations.push(location);

            try {
                const response = await fetch(`${API_URL}/${dog.id}`, {
                    method: 'PUT',
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(dog)
                  });
            } catch (e) { console.error(e); }
            
            let id = document.getElementById("pet-select").value;
            props.displayLocationsById(id);
            
            setValidated(false);
            handleClose();
        }
    }

    const massageSubmit = () => document.getElementById("submit").click();

    const massageHandleShow = () => {
      if (document.getElementById("pet-select").value != 0) handleShow();
    }

  return (
    <>
      <Button variant="primary" onClick={massageHandleShow}>
        Add Location
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Location for {props.dog.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustomTitle">
                <Form.Label>Title</Form.Label>
                    <Form.Control required type="text" placeholder="Location Title" />
                    <Form.Control.Feedback type="invalid">Please enter a location title.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustomPhoto">
                <Form.Label>Photo</Form.Label>
                    <Form.Control required type="text" placeholder="Photo URL" />
                    <Form.Control.Feedback type="invalid">Please enter a photo URL.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustomBlurb">
                <Form.Label>Comments</Form.Label>
                    <Form.Control required type="text" placeholder="Comments" />
                    <Form.Control.Feedback type="invalid">Please enter comments.</Form.Control.Feedback>
                </Form.Group>
                <Button style={{ display: 'none' }} type="submit" id="submit">Create</Button>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={massageSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}