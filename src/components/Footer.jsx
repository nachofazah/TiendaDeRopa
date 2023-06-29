import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return ( 
        <div className = 'footer'>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                <Navbar.Brand href="#home"></Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="#" disabled>@NachoFazah</Nav.Link>
                    <Nav.Link href="#home">Instagram</Nav.Link>
                    <Nav.Link href="https://www.facebook.com/">Facebook</Nav.Link>
                    <Nav.Link href="https://twitter.com">Twitter</Nav.Link>
                </Nav>
                </Container>
            </Navbar>
        </div>
     );
}
 
export default Footer;