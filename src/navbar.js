import './App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



// const [darkMode, setDarkMode] = useState(false)


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
              <Nav.Link href='https://www.upwork.com/freelancers/~01b0ca5bb57a040a1f?mp_source=share'> <iframe src="https://giphy.com/embed/f6nEWYmtXastFCWfk0" title=" " width="18" height="18" frameBorder="0" class="giphy-embed" allowFullScreen style={{pointerEvents: "none"}}></iframe>
              Hire Me</Nav.Link>
              
             
            </Nav>
              </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )

}
{/* <Nav.Link href="#button"><button className="light dark" onClick={()=>!darkMode? setDarkMode(true) : setDarkMode(false)}>{darkMode? "Light Mode" : "Dark Mode"}</button></Nav.Link> */}

export default Navigation