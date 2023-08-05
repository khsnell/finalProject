import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export default function DogReviewForm(props) {
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

            let d = new Date();
            let reviewDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();

            let rating = 0;
            let elems = document.getElementsByName("rating");

            for (let e of elems) {
                if (e.checked) {
                    rating = e.value;
                    break;
                }
            }

            let review = {
                "reviewDate": reviewDate,
                "reviewer": document.getElementById("validationCustomName").value,
                "reviewContent": document.getElementById("validationCustomReviewContent").value,
                "rating": rating
            }

            dog.reviews.push(review);

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
            props.displayReviewsById(id);
            
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
        Create Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create Review for {props.dog.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="validationCustomName">
                <Form.Label>Name</Form.Label>
                    <Form.Control required type="text" placeholder="Name" />
                    <Form.Control.Feedback type="invalid">Please enter a name.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group controlId="validationCustomRating">
                    <Form.Label>Rating: </Form.Label>
                    <Form.Check inline label="1" name="rating" type="radio" value="1" key="c1" required />
                    <Form.Check inline label="2" name="rating" type="radio" value="2" key="c2" required />
                    <Form.Check inline label="3" name="rating" type="radio" value="3" key="c3" required />
                    <Form.Check inline label="4" name="rating" type="radio" value="4" key="c4" required />
                    <Form.Check inline label="5" name="rating" type="radio" value="5" key="c5" required />
                    <Form.Control.Feedback type="invalid">Please select a rating.</Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="validationCustomReviewContent">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Please enter a comment." required />
                    <Form.Control.Feedback type="invalid">Please enter a comment.</Form.Control.Feedback>
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