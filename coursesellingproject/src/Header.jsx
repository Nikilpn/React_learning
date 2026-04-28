import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
              <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='me-3'>Home</Nav.Link>
              <Nav.Link href="#link" className='me-3'>Link</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </div>
  )
}

export default Header
