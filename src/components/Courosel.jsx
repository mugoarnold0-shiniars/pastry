import React from "react";
import { Link } from "react-router-dom";
import "./stylings/Courosel.css"; // import external CSS

const Courosel = () => {
  return (
    <div className="background">
      <div className="row align-items-center justify-content-between p-3">
        {/* Left Text */}
        <div className="col-md-4 text-white icon">
          <span>
            <h1>Our</h1>
          </span>
          <span>
            <h1>Bakery </h1>
          </span>
          <span>
            <h1>start</h1>
          </span>
          <span>
            <h1>OFF%5</h1>
          </span>
          <span>We would like You to enjoy our </span>
          <br />
          <span>fine made delicacies</span>
          <br />
          <br />
          <h1 className="rainbow-text">Lexxy pastry</h1>
        </div>
          {/* Carousel */}
          <div className="carousel-body">
            <div className="carousel-container">
              <div className="carousel-card">
                <h3 className="carousel-title">Our Shop</h3>
                <div className="carousel-bar">
                  <div className="carousel-emptybar"></div>
                  <div className="carousel-filledbar"></div>
                </div>
                <div className="carousel-circle">
                  <img src="images/cake2.avif" alt="" className="car-img" />
                </div>
              </div>

              <div className="carousel-card">
                <h3 className="carousel-title">Other pastries</h3>
                <div className="carousel-bar">
                  <div className="carousel-emptybar"></div>
                  <div className="carousel-filledbar"></div>
                </div>
                <div className="carousel-circle">
                  <img src="images/cakes.jpeg" alt="" className="car-img" />
                </div>
              </div>

              <div className="carousel-card">
                <h3 className="carousel-title">Pies</h3>
                <div className="carousel-bar">
                  <div className="carousel-emptybar"></div>
                  <div className="carousel-filledbar"></div>
                </div>
                <div className="carousel-circle">
                  <img src="images/pies1.jpg" alt="" className="car-img" />
                </div>
              </div>

              <div className="carousel-card">
                <h3 className="carousel-title">Delicacies</h3>
                <div className="carousel-bar">
                  <div className="carousel-emptybar"></div>
                  <div className="carousel-filledbar"></div>
                </div>
                <div className="carousel-circle">
                  <img
                    src="images/otherpastry.jpeg"
                    alt=""
                    className="car-img"
                  />
                </div>
              </div>

              <div className="carousel-card">
                <h3 className="carousel-title">Our motto</h3>
                <div className="carousel-bar">
                  <div className="carousel-emptybar"></div>
                  <div className="carousel-filledbar"></div>
                </div>
                <div className="carousel-circle">
                  <img src="images/emoji1.jpeg" alt="" className="car-img" />
                </div>
              </div>

              <div className="carousel-card">
                <h3 className="carousel-title">Cakes</h3>
                <div className="carousel-bar">
                  <div className="carousel-emptybar"></div>
                  <div className="carousel-filledbar"></div>
                </div>
                <div className="carousel-circle">
                  <img src="images/cakes.jpeg" alt="" className="car-img" />
                </div>
              </div>
            </div>
          </div>
          {/* End Carousel */}
        </div>
      </div>
    
  );
};

export default Courosel;
