import './App.css'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import remote from './remote.png'
import philly from './philly.png'


function FooterBlock() {
    return(
        <Container className='footerblock' style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>

            <h2 className="footertext" style={{color: "whitesmoke", paddingTop: "70px", paddingLeft: "23px", fontFamily: "Pacifico"}}>Servicing:</h2>
            <Container className="d-flex p-3">
                <Image className="footerpics" src={remote} />
                <Image className="footerpics" src={philly} />
            </Container>
        </Container>
    )
}

export default FooterBlock