import './App.css';
import Container from 'react-bootstrap/Container';
import opensign from './opensign.jpg'
import Image from 'react-bootstrap/Image';

function OpenSec(){
    return(
        <div>
            <Container fluid="xs" className="signcontainer" style={{height: "33vh", overflow: "hidden", marginBottom: "3vh"}} fluid>
                <Image className="sign" src={opensign} fluid  />
            </Container>
        </div>
    )
}

export default OpenSec