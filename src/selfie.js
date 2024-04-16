import './App.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './App.css'

function SelfieImage(){
    return(
        <Container className='d-flex p-3'>
            <Row>
                <Col md>
                
                <iframe src="https://giphy.com/embed/7ZCmbMf3z6iP898BfD" className="tennisball" title=" " width="100%" height="100%" frameBorder="0" class="giphy-embed" style={{pointerEvents: "none"}}></iframe>
                
                </Col>
            </Row>
        </Container>
    )
}


export default SelfieImage