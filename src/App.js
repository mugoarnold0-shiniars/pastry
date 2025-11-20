import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import Courosel from './components/Courosel';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Home from './components/Home';
import Notfound from './components/Notfound';
import "bootstrap-icons/font/bootstrap-icons.css";
import Mpesapayment from './components/Mpespayment';
import Aboutus from './components/Aboutus';
import Addproduct from './components/Addproduct';
import Footer from './components/Footer';
import Poy from './components/Poy';
import Favorites from './components/Favorites';
import Chatbot from './components/Chatrobot';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Findus from './components/Findus';

function App() {
  return (
    <Router>

      {/* Navbar always visible */}
      <Navbar />

      {/* Toast container appears on all pages */}
      <ToastContainer 
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        pauseOnHover
        closeOnClick
      />

      <div>
        <Routes>
          <Route path="/" element={<Home/>} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/chat" element={<Chatbot />} />
          <Route path="/mpesapayment" element={<Mpesapayment/>} />
          <Route path="/aboutus" element={<Aboutus/>} />
          <Route path="/addproduct" element={<Addproduct/>} />
          <Route path="/favorites" element={<Favorites/>} />
          <Route path="/findus" element={<Findus/>} />
          <Route path="*" element={<Notfound/>}/>
        </Routes>

        {/* Footer always visible */}
        <Footer/>
      </div>

    </Router>
  );
}

export default App;
