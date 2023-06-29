import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return ( 
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">        
            <img className='imagen' src='https://cdn.pixabay.com/photo/2017/07/24/15/01/vector-2534950_1280.png'/>
            Esportive
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Edad" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Adultos</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Niños</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Genero" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Ropa masculina</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Ropa femenina</NavDropdown.Item>

              </NavDropdown>
              <NavDropdown title="Indumentaria" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Deportivo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Abrigo</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="¿Que estas buscando?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     );
}

//
//Inicio Genero Indumentaria Edad
 
export default Header;