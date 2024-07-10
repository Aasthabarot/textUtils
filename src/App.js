import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>    
    <Navbar title="Textutils" aboutText="About Us"/>
    <div className="container my-5">
    <TextForm heading="Enter Your text to Analyze Below"/>
    </div>

    
    </>
    
  )
}

export default App;
