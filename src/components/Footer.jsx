import React, { useState } from "react";
import { Link } from 'react-router-dom'

const Footer = () => {
  const [success,setSuccess]=useState("")
  return (
    <div className="">
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* Section: Social media */}
        <section
          className="d-flex justify-content-between p-4"
          style={{ backgroundColor: "#6351ce" }}
        >
          {/* Left */}
          <div className="me-5">
            <span>Get connected with us on social networks:</span>
          </div>
          {/* Right */}
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        {/* Section: Social media */}

        {/* Section: Links */}
        <section>
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              {/* Company column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Company name</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                Welcome to Soko <span className="text-danger">Garden</span> API.Hope u will be open about it,we are so exited 
                </p>
              </div>

              {/* Products column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <Link to = "/addproduct" >Add product</Link>
                </p>
                <p>
                  <Link to = "/signup">Signup</Link>
                </p>
                <p>
                <Link to = "/signin">Signin</Link>
                </p>
                <p>
                <Link to = "/aboutus">About us</Link>
                </p>
              </div>

              {/* Useful links */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="" className="text-white">
                    Your Account
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                   Our products
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                   intrusivity
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">
                    Help
                  </a>
                </p>
              </div>

              {/* Contact */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <i className="fas fa-home me-3"></i> 
                  Nairobi, NA 10012, KE
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 254 734 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 254 734 567 89
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="http://localhost:3000/signup">
            Signup
          </a>
        </div>
      </footer>
      {/* Footer */}
    </div>
  );
};

export default Footer;

