import './App.css'
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import remote from './remote.png'
import philly from './philly.png'


function FooterBlock() {
    return(
        <Container fluid='sm' className='footerblock' style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginLeft: '-30px'}}>

            <h2 style={{color: "whitesmoke", paddingTop: "70px", paddingLeft: "23px", fontFamily: "Pacifico"}}>Servicing:</h2>
            <Container className="d-flex p-3">
                <Image fluid='sm' src={remote} />
                <Image fluid='sm' src={philly} />
            </Container>
        </Container>
    )
}

export default FooterBlock