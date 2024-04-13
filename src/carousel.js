import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


function PackageCarousel() {
  return (
    <Container className='d-flex p-3'>
        <Row><Col><Card style={{width: '15rem', height: '20rem', border: 'none',  backgroundColor: "#ffdada", marginTop: '3px', marginBottom: '3px'}}>
          <Card.Body>
            <Card.Title style={{height: '6rem', display: 'flex', justifyContent: 'center'}}>
            <iframe src="https://giphy.com/embed/ZY9Fs8N1GW91DGUOgZ" width="110" height="110" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                
                </Card.Title>
                <hr />
            
            <Card.Text style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{fontSize: '1.1rem', paddingTop: '4px', textAlign: 'center'}}>Enhance your food business's online presence and streamline 
                operations with custom-built specialty websites and software tailored to your 
                unique culinary offerings.</p>
               </Card.Text>
               </Card.Body>
               </Card>
               </Col>

               





               <Col><Card style={{width: '15rem', height: '20rem', border: 'none',  backgroundColor: "#edad55", marginTop: '3px', marginBottom: '3px'}}>
          <Card.Body>
            <Card.Title style={{height: '6rem', display: 'flex', justifyContent: 'center'}}>
            <iframe src="https://giphy.com/embed/nwHOZi6CVWQlDq0oms" width="110" height="110" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </Card.Title>
                <hr />
            
            <Card.Text style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{fontSize: '1.03rem', paddingTop: '4px', textAlign: 'center'}}> 
            Elevate your artistic career with bespoke digital products 
            and services designed to empower and showcase your creativity,
             connecting you with a global audience of enthusiasts and collectors.</p>
               </Card.Text>
               </Card.Body>
               </Card>
               </Col>









               <Col><Card style={{width: '15rem', height: '20rem', border: 'none',  backgroundColor: "#edad55", marginTop: '3px', marginBottom: '3px'}}>
          <Card.Body>
            <Card.Title style={{height: '6rem', display: 'flex', justifyContent: 'center'}}>
            <iframe src="https://giphy.com/embed/Zy1aOZjt08n1vD8jvS" width="110" height="110" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                </Card.Title>
                <hr />
            
            <Card.Text style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{fontSize: '.92rem', paddingTop: '4px', textAlign: 'center'}}> 
            Transform your fitness and health business by harnessing the power
             of customized digital products and services, enabling you to engage 
             clients remotely, track progress effectively, and expand your reach to
              inspire healthier lifestyles worldwide.</p>
               </Card.Text>
               </Card.Body>
               </Card>
               </Col>










               <Col><Card style={{width: '15rem', height: '20rem', border: 'none',  backgroundColor: "#edad55", marginTop: '3px', marginBottom: '3px'}}>
          <Card.Body>
            <Card.Title style={{height: '6rem', display: 'flex', justifyContent: 'center'}}>
            <iframe src="https://giphy.com/embed/bDk2v9CE9l6RxpN7PE" width="110" height="110" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
              </Card.Title>
                <hr />
            
            <Card.Text style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{fontSize: '.92rem', paddingTop: '4px', textAlign: 'center'}}> 
            Revamp your petcare business with bespoke digital products and services,
             enabling seamless client communication, efficient appointment scheduling, 
             and personalized care plans to ensure the well-being of every furry friend.</p>
               </Card.Text>
               </Card.Body>
               </Card>
               </Col>
               
      

  
        
        </Row>

       

        <Row>



        <Col><Card style={{width: '15rem', height: '20rem', border: 'none',  backgroundColor: "#edad55", marginTop: '3px', marginBottom: '3px'}}>
          <Card.Body>
            <Card.Title style={{height: '6rem', display: 'flex', justifyContent: 'center'}}>
            <iframe src="https://giphy.com/embed/X1XORnJ6ErubS" width="110" height="110" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> </Card.Title>
                <hr />
            
            <Card.Text style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{fontSize: '.92rem', paddingTop: '4px', textAlign: 'center'}}> 
            Empower your nonprofit organization with cutting-edge digital 
            solutions, facilitating efficient fundraising, streamlined volunteer
             management, and enhanced community engagement to drive your impactful mission forward.</p>
               </Card.Text>
               </Card.Body>
               </Card>
               </Col>













               <Col><Card style={{width: '15rem', height: '20rem', border: 'none',  backgroundColor: "#edad55", marginTop: '3px', marginBottom: '3px'}}>
          <Card.Body>
            <Card.Title style={{height: '6rem', display: 'flex', justifyContent: 'center'}}>
            <iframe src="https://giphy.com/embed/gIxD8QftQySrfcxoUQ" width="110" height="110" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            </Card.Title>
             <hr />
            
            <Card.Text style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><p style={{fontSize: '.92rem', paddingTop: '4px', textAlign: 'center'}}> 
            Discover the power of innovative digital products and services 
            tailored for beauty enthusiasts, offering personalized skincare 
            consultations, virtual makeup try-ons, and expert beauty tips to elevate 
            your self-care routine to new heights.</p>
               </Card.Text>
               </Card.Body>
               </Card>
               </Col>



        </Row>
     
    </Container>
  );
}

export default PackageCarousel;