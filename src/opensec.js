import './App.css';
import Container from 'react-bootstrap/Container';
import opensign from './opensign.jpg'
import Image from 'react-bootstrap/Image';

function OpenSec(){
    return(
        <div>
            <Container className="signconainer" style={{height: "33vh", overflow: "hidden", marginBottom: "3vh"}} fluid>
                <Image src={opensign} fluid style={{objectPosition: "0px -250px"}} />
            </Container>
        </div>
    )
}

export default OpenSec