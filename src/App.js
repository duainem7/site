import React from "react"
import FirstSec from './firstsec'
import SecondSec from './secondsec'
import Navigation from './navbar'
import ContactSec from './contact'
import OpenSec from './opensec'
import FooterBlock from './footerblock'
import Deals from './deals'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'







// const [form, setForm] = useState("")
function App() {




  return (
    <div>
    
      <Navigation />
      <FirstSec />
      
      
      
      
      <SecondSec />
      
      <hr />
    
      <OpenSec />
      <Deals />
      <ContactSec />
      
      <FooterBlock />
      
    
    </div>
  );
}

export default App;
