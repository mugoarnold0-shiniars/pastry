import React from "react";
import "./stylings/Courosel.css"; // import external CSS

const Courosel = () => {
  return (
    
    <div className="background">
        <div className="row">

            <div className="col-md-4 text-white icon">
                <span><h1>Our</h1></span>
            <span><h1>Bakery </h1></span> 
            <span><h1>start</h1></span>
            <span><h1>OFF%5</h1></span>
            
            
            </div>
        <div className="col-md-8 ">
        
    <div className="carousel-body">
      <div className="carousel-container">
        <div className="carousel-card">
          <h3 className="carousel-title">Our Shop</h3>
          <div className="carousel-bar">
            <div className="carousel-emptybar"></div>
            <div className="carousel-filledbar"></div>
          </div>
          <div className="carousel-circle">
          <img src="images/cake2.avif" alt="" className="car-img"/>
          </div>
        </div>
        

        <div className="carousel-card">
          <h3 className="carousel-title">Other pastries</h3>
          <div className="carousel-bar">
            <div className="carousel-emptybar"></div>
            <div className="carousel-filledbar"></div>
          </div>
          <div className="carousel-circle">
          <img src="images/cakes.jpeg" alt="" className="car-img"/>
          </div>
        </div>

        <div className="carousel-card">
          <h3 className="carousel-title">Pies</h3>
          <div className="carousel-bar">
            <div className="carousel-emptybar"></div>
            <div className="carousel-filledbar"></div>
          </div>
          <div className="carousel-circle">
            
            <img src="images/cake2.avif" alt="" className="car-img"/>
          </div>
        </div>
        <div className="carousel-card">
          <h3 className="carousel-title">Pies</h3>
          <div className="carousel-bar">
            <div className="carousel-emptybar"></div>
            <div className="carousel-filledbar"></div>
          </div>
          <div className="carousel-circle">
            
            <img src="images/cake2.avif" alt="" className="car-img"/>
          </div>
        </div>
        <div className="carousel-card">
          <h3 className="carousel-title">Pies</h3>
          <div className="carousel-bar">
            <div className="carousel-emptybar"></div>
            <div className="carousel-filledbar"></div>
          </div>
          <div className="carousel-circle">
            
            <img src="images/cake2.avif" alt="" className="car-img"/>
          </div>
        </div>

        <div className="carousel-card">
          <h3 className="carousel-title">Cakes</h3>
         
          <div className="carousel-bar">
            <div className="carousel-emptybar"></div>
            <div className="carousel-filledbar"> </div>
          </div>
          <div className="carousel-circle">
         
            <img src="images/cakes.jpeg" alt="" className="car-img"/>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Courosel;
