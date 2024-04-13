import opensign from './opensign.jpg'
import './App.css';
import Card from 'react-bootstrap/Card'
import SelfieImage from './selfie'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function OpenSec(){
    return(
        <div>
            <Container style={{height: "33vh", overflow: "hidden", marginBottom: "3vh"}} fluid>
                <Image src={opensign} fluid style={{objectPosition: "0px -250px"}} />
            </Container>
        </div>
    )
}

export default OpenSec