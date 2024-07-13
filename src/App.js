// import logo from './logo.svg';
import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import About from './Components/About';
import { useState } from 'react';

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

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.background = '#22363f';
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode"
      // setInterval(() => {
      //   document.title = "TextUtils is Amazing Mode"
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils Now"
      // }, 1500);
    } else {
      setMode('light');
      document.body.style.background = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils -Light Mode"
    }
  };

  return (
    <>    
      <Navbar title="Textutils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-5">
        <TextForm showAlert={showAlert} heading="Enter Your text to Analyze Below" mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
