import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavbarHome() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="shadow">
        <Navbar.Brand as={Link} to="/" className="ml-5">
          Hello-Contact
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link as={Link} to="/add-contact">
              Add Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
