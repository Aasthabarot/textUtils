import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000); // Alert will disappear after 3 seconds
  };
  
   
  // const removeBodyClasses = ()=>{
  //   document.body.classList.remove("bg-light")
  //   document.body.classList.remove("bg-success")
  //   document.body.classList.remove("bg-warning")
  //   document.body.classList.remove("bg-danger")
  //   document.body.classList.remove("bg-primary")
  //   document.body.classList.remove("bg-dark")
  // }

  // const toggleMode = (cls) => {
    const toggleMode = () => {
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add("bg-"+cls)
    if (mode === "light") {
      setMode('dark');
      document.body.style.background = '#22363f';
      showAlert("Dark mode has been enabled", "success");
    
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
     
    }
  };

  return (
    <>    
      <Router>
        <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-5">
          <Routes>
            <Route exact path="/about"  element={<About mode={mode}/>}/> 
           
            </Routes>
            <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try Text Utils - Word Counter,Character counter,Remove Extra Spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
