import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import './Navbar.css'
import React from "react";

 
export default function NavBar() {
  return (
<>
    <Navbar expand="lg" bg="" className="shadow-sm" sticky="top" id="Navbar">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-warning">
          Infina Estate <span><p className="nav-p text-info">REAL ESTATE AGENCY </p></span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-nav" style={{ backgroundColor: "white" }} />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-lg-center gap-lg-2 navbar-dark ">
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/properties">
              Properties
            </Nav.Link>
            <Nav.Link as={NavLink} to="/agents">
              Agents
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
            <Button
              as={Link}
              to="/submit-property"
              variant="warning"
              className="ms-lg-2 mt-2 mt-lg-0 sub-btn"
            >
              Submit a Property
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>    
    </>
  );
}
