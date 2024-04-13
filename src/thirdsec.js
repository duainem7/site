import './App.css';
import Card from 'react-bootstrap/Card'
import SelfieImage from './selfie'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import SubmitForm from './form'
import certificate from './certificate.pdf'

function ThirdSec(){
    return (
    <div>

<Container className='d-flex p-3' style={{backgroundImage: "url('C:\Users\okmil\OneDrive\Desktop\odevelopment\newpersonal\frontend\src\open.jpg')"}}>
        <Col><Card style={{width: '30rem', height: '40rem', border: 'none'}}>
          <Card.Body>
            <Card.Title><h1 style={{color: "red"}}>Expert in Development</h1></Card.Title>
            
            <Row>
                <Card.Text>
                <h3 className='thirdsecsubtitle'>User Friendly Solutions</h3>
                 </Card.Text>
            
            </Row>
                <Card.Subtitle><p className='thirdsecparagraph'>As a developer I have 
                been working in the field of 
                Web Development for  years. I have extensive experience
                 in coding and constantly work to improve my skills and 
                 learn new languages.</p></Card.Subtitle>
           


                <SubmitForm />
               </Card.Body>
               </Card>
               </Col>

               <Col>
                <Card style={{width: '35rem', height: '40rem', border: 'none'}}>
                    <Card.Body>
                        <Row style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Card.Text>
                                <h1>Front-End Development</h1>
                            </Card.Text>
                            <Card.Subtitle>Committed to quality</Card.Subtitle>
                        </Row>
                        <hr />
                        <Row style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Card.Text>
                                <h1>Javascript</h1>
                            </Card.Text>
                            <Card.Subtitle>Committed to quality</Card.Subtitle>
                        </Row>
                        <hr />
                        <Row style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Card.Text>
                                <h1>CSS</h1>
                            </Card.Text>
                            <Card.Subtitle>Committed to quality</Card.Subtitle>
                        </Row>
                        <hr />
                        <Row style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Card.Text>
                                <h1>Back-End Development</h1>
                            </Card.Text>
                            <Card.Subtitle>Committed to quality</Card.Subtitle>
                        </Row>
                        <hr />
                        <Row style={{display: 'flex', justifyContent: 'space-between'}}>
                            <Card.Text>
                                <h1>Design</h1>
                            </Card.Text>
                            <Card.Subtitle>Committed to quality</Card.Subtitle>
                        </Row>
                        <hr />
                    </Card.Body>



                </Card>
               
               </Col>
    

  
        <hr />
     
    </Container>
    </div>
    )
}

export default ThirdSec