import React, { useState } from "react";
import { MdAlternateEmail } from "react-icons/md";
import { CiUser, CiLock } from "react-icons/ci";

const Signup = ({ FormHandle }) => {
  const [User, setUser] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  function handleSignup(e) {
    e.preventDefault();

    if (!User || !Password || !Email) return;

    console.log(User, Email, Password);
    setUser("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="form-container">
      <h2>Signup</h2>
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
          
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={Password}
          />
          <CiLock className="icon password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p onClick={() => FormHandle("login")}>
        Already have an account? Please Sign In
      </p>
    </div>
  );
};

export default Signup;
