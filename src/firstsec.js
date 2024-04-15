import './App.css';
import Card from 'react-bootstrap/Card'
import SelfieImage from './selfie'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function FirstSec() {
  return (
    <Container fluid="sm" className='d-flex p-3'>
        <Row><Col><Card className="firstseccard" style={{width: '30rem', height: '35rem', border: 'none'}}>
          <Card.Body>
            <Card.Title><h1 className='title'>Innovative Solutions</h1></Card.Title>
            <Card.Subtitle className="mb-2 text-muted">For your digital needs</Card.Subtitle>
            <Card.Text><p className='cardtext'>If you're looking for a digital Nomad 
               with extensive experience, you've come to the
               right place. I provide exceptional coding services and 
               help clients create elegant and effective digital platforms.</p>
               </Card.Text>
               </Card.Body>
               </Card>
               </Col>
        <Col><SelfieImage /></Col>

  
        <hr />
        </Row>
     
    </Container>
  );
}

export default FirstSec;