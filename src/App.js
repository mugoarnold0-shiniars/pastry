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
import Addproduct from './components/Addproduct';
import Footer from './components/Footer';
import Poy from './components/Poy';
import Favorites from './components/Favorites';


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
          <Route path='/addproduct' element={<Addproduct/>} />
          <Route path='/favorites' element={<Favorites/>} />
          <Route path="*"element={<Notfound/>}/>
          
        </Routes>
        <Footer/>
      
      </div>
    </Router>
  );
}

export default App;
