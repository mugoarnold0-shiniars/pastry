import React from "react";
import { Link } from "react-router-dom";
import "./stylings/Courosel.css";

const Poy = () => {
  return (
    <div className="background text-white">
      <div className="row align-items-center justify-content-between p-3">
        {/* Left Text */}
        <div className="col-md-4">
          <h1 className="rainbow-text">Lexxy pastry</h1>
        </div>

        {/* 🔹 Buttons on the right */}
        <div className="col-md-8 d-flex justify-content-end">
          <Link to="/signin" className="btn btn-outline-light me-2">
            Sign In
          </Link>
          <Link to="/signup" className="btn btn-warning">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Poy;
