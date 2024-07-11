// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';

function App() {
  
  const[mode,setMode] = useState('light');

  const toggleMode = ()=>
  {
    if(mode==="light")
    {
      setMode('dark');
      document.body.style.background = '#22363f';
    }
    else
    {
      setMode('light');
      document.body.style.background = 'white';

    }
  }

  return (
    <>    
    <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <div className="container my-5">
    <TextForm heading="Enter Your text to Analyze Below" mode={mode}/>
    {/* <About/> */}
    </div>

    
    </>
    
  )
}

export default App;
