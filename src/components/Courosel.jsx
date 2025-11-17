import React from "react";
import "./stylings/Courosel.css"; // import external CSS

const Courosel = () => {
  return (
    <section className="hero-section">
      {/* Left Text Section */}
      <div className="hero-text ">
        <h1>Our</h1>
        <h1>Bakery</h1>
        <h1>start</h1>
        <h1>OFF%5</h1>
        <p>We would like You to enjoy our fine made delicacies</p>
        <h1 className="rainbow-text">Lexxy pastry</h1>
      </div>

      {/* Right Carousel Section */}
      <div className="carousel-body">
        <div className="carousel-container">
          <div className="carousel-card">
            <h3 className="carousel-title">Our Shop</h3>
            <div className="carousel-bar">
              <div className="carousel-emptybar"></div>
              <div className="carousel-filledbar"></div>
            </div>
            <div className="carousel-circle">
              <img src="images/cake2.avif" alt="cake" className="car-img" />
            </div>
          </div>

          <div className="carousel-card">
            <h3 className="carousel-title">Other pastries</h3>
            <div className="carousel-bar">
              <div className="carousel-emptybar"></div>
              <div className="carousel-filledbar"></div>
            </div>
            <div className="carousel-circle">
              <img src="images/cakes.jpeg" alt="cakes" className="car-img" />
            </div>
          </div>

          <div className="carousel-card">
            <h3 className="carousel-title">Pies</h3>
            <div className="carousel-bar">
              <div className="carousel-emptybar"></div>
              <div className="carousel-filledbar"></div>
            </div>
            <div className="carousel-circle">
              <img src="images/pies1.jpg" alt="pies" className="car-img" />
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
                alt="delicacies"
                className="car-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courosel;
