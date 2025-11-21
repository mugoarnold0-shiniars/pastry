import React, { useState } from "react";
import Loader from "./Loader";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./stylings/Signin.css"; // New CSS file for styling
import { Link } from "react-router-dom";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);

      const response = await axios.post(
        "https://Arnold254.pythonanywhere.com/api/signin",
        data
      );
      setLoading(false);

      if (response.data.message === "Login succesful") {
        localStorage.setItem("user", JSON.stringify(response.data.user));
        navigate("/");
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setLoading(false);
      setError("An error occurred...");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-overlay"></div>
      <div className="signin-card shadow">
        <h1 className="signin-title">Welcome Back</h1>

        {/* Loader */}
        {loading && <Loader />}

        {/* Messages */}
        {success && <p className="text-success">{success}</p>}
        {error && <p className="text-danger">{error}</p>}

        <form className="signin-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="signin-actions">
            <label className="remember-me">
              <input type="checkbox" /> Remember me!
            </label>
            
            <button type="submit" className="btn-login m-3">
              Log In
            </button>
          </div>
          <br /><hr />
          <p>Dont have an account go to <Link to="/signup">Signup</Link></p>
        </form>

        {message && <p className="signin-message">{message}</p>}
      </div>
     
    </div>
    
  );
};

export default Signin;
