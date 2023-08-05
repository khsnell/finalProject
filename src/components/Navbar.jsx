import React from "react";
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar() {
    return (
        <>
        <Navbar expand="sm" className="bg-body-tertiary">
            <Navbar.Brand href="#">DoggieDates</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="justify-content-end">
                    <Nav.Link href="/">
                        Home
                    </Nav.Link>
                    <Nav.Link href="/dogs">
                        Dogs
                    </Nav.Link>
                    <Nav.Link href="/locations">
                        Locations
                    </Nav.Link>
                    <Nav.Link href="/reviews">
                        Reviews
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </>
    );
}