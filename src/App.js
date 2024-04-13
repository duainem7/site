import React, {useState} from "react"
import FirstSec from './firstsec'
import SecondSec from './secondsec'
import Navigation from './navbar'
import ChatBot from './chatbot'
import ThirdSec from './thirdsec'
import OpenSec from './opensec'
import FooterBlock from './footerblock'
import Deals from './deals'
import palm from './palm.jpg'
import SubmitForm from './form'
import './App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';






// const [form, setForm] = useState("")
function App() {





  return (
    <div className='maindiv'>
      <Navigation />
      <FirstSec />
      
      
      
      
      <SecondSec />
      
      <hr />
    
      <OpenSec />
      <Deals />
      
      <FooterBlock />
      
     
    </div>
  );
}

export default App;
