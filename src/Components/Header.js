import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React from "react";

function Header() {
  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary  px-1 border  mt-1 mb-1 ml-1 mr-1  h-1/10 sm:w-11/12 sm:m-auto"
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src="./logo.png" className="bg-white rounded-sm h-10 w-12" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" className="hover:underline hover:underline-offset">Home</Nav.Link>
            <Nav.Link href="#link" className="hover:underline hover:underline-offset">About</Nav.Link>
            <Nav.Link href="#link" className="hover:underline hover:underline-offset">Donate</Nav.Link>
            <Nav.Link href="#link" className="hover:underline hover:underline-offset">Gallery</Nav.Link>
            <Nav.Link href="#link" className="hover:underline hover:underline-offset">Event</Nav.Link>
            <Nav.Link href="#link" className="hover:underline hover:underline-offset">Contact</Nav.Link>
            <Nav.Link href="#link"><button className="bg-gradient-to-r from-transparent to-transparent hover:from-pink-500 hover:to-yellow-500 rounded-lg px-3">Login</button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
