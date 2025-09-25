import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
      {/* Logo / brand */}
      <Link to="/" className="navbar-brand fw-bold">
        Soko<span className="text-danger">Garden</span>
      </Link>

      {/* Toggle button */}
      <button
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcontents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div id="navbarcontents" className="collapse navbar-collapse">
        {/* Left side links */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <b>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </b>
          </li>
          <li className="nav-item">
            <b>
              <Link to="/addproduct" className="nav-link">
                Sell
              </Link>
            </b>
          </li>
        </ul>

        {/* Right side links */}
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item me-2">
            <Link to="/aboutus" className="nav-link fw-bold">
              About us
            </Link>
          </li>
          <li className="nav-item me-2">
            <Link to="/signin" className="btn btn-outline-primary px-3 fw-bold">
              Sign In
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-danger px-3 fw-bold">
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

