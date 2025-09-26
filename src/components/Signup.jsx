import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CiUser, CiLock } from "react-icons/ci";
import axios from "axios";
import Loader from "./Loader";
import { Link } from "react-router-dom";


const Signup = ({ FormHandle }) => {
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const[phone,setPhone]= useState("")
  const [Password, setPassword] = useState("");

   // state for UI
   const[loading,setLoading] =useState(false)
   const[success,setSuccess] =useState("")
   const[error,setError] =useState("")

  const handleSignup = async (e) =>{
    e.preventDefault();
    setLoading(true); // show loader immediately
  
    try {
      const data = new FormData();
      data.append("username", User);
      data.append("email", Email);
      data.append("phone", phone);
      data.append("password", Password);
  
      const response = await axios.post(
        "https://arnold254.pythonanywhere.com/api/signup",
        data
      );
  
      // Force loader to stay for 3 seconds before hiding
      setTimeout(() => {
        setLoading(false);
        setSuccess("User registered successfully ✅");
        setError("");
  
        // Clear input fields
        setUser("");
        setEmail("");
        setPhone("");
        setPassword("");
      }, 3000);
    } catch (err) {
      setTimeout(() => {
        setLoading(false);
        setError("❌ Sorry, Registration failed. Please try again...");
        setSuccess("");
      }, 3000);
    }
  }

  return (
    <div className="form-container">
      <h2>Signup</h2>

       {/* Loader */}
       {loading && <Loader />}

{/* Messages */}
{success && <p className="text-success">{success}</p>}
{error && <p className="text-danger">{error}</p>}

      <form onSubmit={handleSignup}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter your user Name"
            onChange={(e) => setUser(e.target.value)}
            value={User}
          />
          <CiUser className="icon user" />
        </div>
        <div className="form-control">
          <input
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={Email}
          />
          <MdAlternateEmail className="icon email" />
        </div>
        <div className="form-control">
          <input
            type="number"
            placeholder="Enter your phone number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <CiUser className="icon user" />
        </div>
        <div className="form-control">
          <input
          
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
          <CiLock className="icon password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p onClick={() => ("login")}>
        Already have an account? Please <br /> <Link to="/signin">Sign In</Link>
      </p>
    </div>
  );
};

export default Signup;
