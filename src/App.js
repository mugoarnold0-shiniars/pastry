import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Courosel from './components/Courosel';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"
import Home from './components/Home';
import Notfound from './components/Notfound';
import "bootstrap-icons/font/bootstrap-icons.css";
import Mpesapayment from './components/Mpespayment';
import Aboutus from './components/Aboutus';


function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <Navbar />
      
      

      <div>
        <Routes>
          {/* Show Courosel only on Home */}
         
          <Route path="/" element={<Home/>} />
          
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
      <Route path='/mpesapayment' element={<Mpesapayment/>} />
          <Route path="/aboutus"element={<Aboutus/>} />
          <Route path="*"element={<Notfound/>}/>
          
        </Routes>
      
      </div>
    </Router>
  );
}

export default App;
