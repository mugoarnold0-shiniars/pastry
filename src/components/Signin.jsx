import axios from 'axios';
import React, { useState } from 'react'
import Loader from './Loader'
import "./stylings/Button.css"; // import the new button styles

const Signin = () => {
  // hooks  to capture different state 
  const[username,setUsername]=useState("");
  const [email,setEmail]=useState("")
  const[phone,setPhone]= useState("")
  const[password,setPassword] = useState("")
  
  // state for UI
  const[loading,setLoading] =useState(false)
  const[success,setSuccess] =useState("")
  const[error,setError] =useState("")

  // Create a function that handles the submit action
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true); // show loader immediately
  
    try {
      const data = new FormData();
      data.append("username", username);
      data.append("email", email);
      data.append("phone", phone);
      data.append("password", password);
  
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
        setUsername("");
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
  };
  
  
  return (
    <div class="wrapper">
    <div class="title-text">
      <div class="title login">Login Form</div>
      <div class="title signup">Signup Form</div>
    </div>
    <div class="form-container">
      <div class="slide-controls">
        <input type="radio" name="slide" id="login" checked></input>
        <input type="radio" name="slide" id="signup"></input>
        <label for="login" class="slide login">Login</label>
        <label for="signup" class="slide signup">Signup</label>
        <div class="slider-tab"></div>
      </div>
      <div class="form-inner">
        <form action="#" class="login">
          <pre>
          </pre>
          <div class="field">
            <input type="text" placeholder="Email Address" required></input>
          </div>
          <div class="field">
            <input type="password" placeholder="Password" required></input>
          </div>
          <div class="pass-link"><a href="#">Forgot password?</a></div>
          <div class="field btn">
            <div class="btn-layer"></div>
            <input type="submit" value="Login">
            </input>
          </div>
          <div class="signup-link">Create an account <a href="">Signup now</a></div>
        </form>
        <form action="#" class="signup">
          <div class="field">
            <input 
            onSubmit={submit}
            type="text" placeholder="Name" required>
            </input>
          </div>
          <div class="field">
            <input 
            onSubmit={submit}
            type="text" 
            placeholder="Email Address" 
            required>
            </input>
          </div>
          <div class="field">
            <input 
            onSubmit={submit}
            type="password" 
            placeholder="Password" 
            required></input>
          </div>
          <div class="field">
            <input 
            onSubmit={submit}
             type="password" 
             placeholder="Confirm password" 
             required></input>
          </div>
          <div class="field btn">
            <div class="btn-layer"></div>
            <input type="submit" value="Signup"></input>
          </div>
          <div class="signup-link">Create an account? <a href="">Signup</a></div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Signin;
