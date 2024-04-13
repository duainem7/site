import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import './App.css'
import palm from './palm.jpg'


function SelfieImage(){
    return(
        <Container className='d-flex p-3'>
            <Row>
                <Col>
                
                <iframe src="https://giphy.com/embed/7ZCmbMf3z6iP898BfD" width="480" height="480" frameBorder="0" class="giphy-embed" style={{pointerEvents: "none"}}></iframe>
                
                </Col>
            </Row>
        </Container>
    )
}


export default SelfieImage