import React, {useState, useEffect} from "react"
import FirstSec from './firstsec'
import SecondSec from './secondsec'
import Navigation from './navbar'
import ContactSec from './contact'
import OpenSec from './opensec'
import FooterBlock from './footerblock'
import Deals from './deals'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import ReactLoading from 'react-loading'







// const [form, setForm] = useState("")
function App() {

  const [isLoading, setIsLoading] = useState(true);
    
  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    }, 3200);
  }, []);

  if(isLoading){
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  
  <ReactLoading type={'cylon'} color={'gold'} height={'35vh'} width={'35vw'} />
      
        
        
      
      </div>
    );
  }
return(
<>
 <Navigation />
      
      <FirstSec />
      
      
      
      
      <SecondSec />
      
      <hr />
    
      <OpenSec />
      <Deals />
      <ContactSec />
      
      <FooterBlock /> 
      </>

)
}




export default App;
