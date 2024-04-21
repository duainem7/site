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
                
                <iframe src="https://giphy.com/embed/3ohhwgrL4KKPIZoTQY" title=" " className='tennisball' width="100%" height="100%" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                
                </Col>
            </Row>
        </Container>
    )
}


export default SelfieImage