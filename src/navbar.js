import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.svg'
import Image from 'react-bootstrap/Image';

function Navigation(){
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary" style={{color: 'black'}}>
        <Container>
          <Navbar.Brand href="#home">
         
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home"> <iframe src="https://giphy.com/embed/f6nEWYmtXastFCWfk0" width="18" height="18" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>Deals</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
            </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )

}

export default Navigation