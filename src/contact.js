
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';




function ContactSec(){
    return(
        <div >
        <Container style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '0', width: '60vw'}}>
        <Col>
        <h1 style={{fontSize: "35px", fontFamily: "Pacifico", textAlign: "center"}}>
           <u> Rate/Contact</u>
        </h1>
        <Card style={{border: 'none', width: '100%'}}>
        <Card.Body>
        <p style={{textAlign: 'center'}}>
            
    Looking for bespoke software solutions tailored to your unique 
    needs? Look no further! As an experienced software developer
     specializing in custom solutions, I offer top-notch services to
      bring your ideas to life for only $27/hr or $400 per project on average. Whether you need web applications,
       mobile apps, I'm here to deliver high-quality,
        efficient solutions that exceed your expectations. With a proven
         track record of success and a commitment to client satisfaction,
          I'm ready to tackle your project with creativity and expertise.
          <br />
          <br />
           Contact me today on <a href='https://www.upwork.com/freelancers/~01b0ca5bb57a040a1f?mp_source=share'>Upwork</a> to discuss how I can help turn your
            vision into reality!
        </p>
        </Card.Body>
        </Card>
        </Col>
        </Container>
        </div>
    )
}


export default ContactSec