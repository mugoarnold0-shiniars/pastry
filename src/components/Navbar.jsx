import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check login status on mount
  useEffect(() => {
    const user = localStorage.getItem("user");  // ← FIXED
    setIsLoggedIn(!!user);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user"); // ← FIXED
    setIsLoggedIn(false);
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
      {/* Logo */}
      <Link to="/" className="navbar-brand fw-bold">
        Lexxy<span className="text-danger">Pastry</span>
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
        {/* Left links */}
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <b>
              <Link to="/" className="nav-link">Home</Link>
            </b>
          </li>
          <li className="nav-item">
            <b>
              <Link to="/addproduct" className="nav-link">Sell</Link>
            </b>
          </li>
        </ul>

        {/* Right links */}
        <ul className="navbar-nav ms-auto align-items-center">
          <li className="nav-item me-2">
            <Link to="/aboutus" className="nav-link fw-bold">
              About us
            </Link>
          </li>

          {/* Show Sign In + Sign Up when NOT logged in */}
          {!isLoggedIn && (
            <>
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
            </>
          )}

          {/* Show Logout when LOGGED IN */}
          {isLoggedIn && (
            <li className="nav-item">
              <button
                onClick={handleLogout}
                className="btn btn-danger px-3 fw-bold"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
