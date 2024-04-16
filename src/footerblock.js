import './App.css'
import Container from 'react-bootstrap/Container';




function FooterBlock() {
    return(
        <Container className='footerblock' style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}>

            <h2 className="footertext" style={{color: "whitesmoke", paddingTop: "70px", paddingLeft: "23px", fontFamily: "Pacifico"}}>Servicing: Remotely + in Philadelphia ❤️</h2>
            
                
            
        </Container>
    )
}

export default FooterBlock