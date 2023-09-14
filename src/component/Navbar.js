import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// this is the Navbar Selection
const NavScrollExample=() =>{
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>

                {/* this is the logo of the page */}
                <Navbar.Brand href="#">St_Manuel</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                    >
                        {/* this is the notation Button */}
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">Archive</Nav.Link>
                        <Nav.Link href="#">Recent deleted</Nav.Link>
                    </Nav>
                    
                    {/* this is the search  */}
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />

                        {/* this is the search Button */}
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
        

export default NavScrollExample;
