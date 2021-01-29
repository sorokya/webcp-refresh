import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header () {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="/">
        <img className="d-inline-block align-top" height="30" src="./img/logo.png" alt="logo" />
        {' '}
        WebCP
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#">Top Players</Nav.Link>
          <Nav.Link href="#">Top Guilds</Nav.Link>
          <Nav.Link href="#">Staff</Nav.Link>
          <Nav.Link href="#">Online List</Nav.Link>
          <NavDropdown title="Database" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Items</NavDropdown.Item>
            <NavDropdown.Item href="#">NPCs</NavDropdown.Item>
            <NavDropdown.Item href="#">Spells</NavDropdown.Item>
            <NavDropdown.Item href="#">Classes</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
