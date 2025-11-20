import React from "react";
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTopButton";

const Aboutus = () => {
  return (
    <div>
     

      {/* About Banner */}
      <div className="image-aboutus-banner">
        <div className="">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">About Us</h1>
              <p className="image-aboutus-para">
                <span className="text-dark">Lexy </span> <span className="text-danger">Pasrty</span>is a website where one can do his/her's pastries right in the comfort of his home
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bread bar / Who we are */}
      <div className="bread-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-8">
              <ol className="breadcrumb">
              </ol>
              <div className="row">
                <div className="col-md-6 ">
                  <h1 className="strong">
                    Who we are and
                    <br />
                    what we do
                  </h1>
                  <p className="lead">
                    This is the world's leading portal for
                    <br />
                    easy and quick
                  </p>
                </div>
                <div className="col-md-6 ">
                  <p className="text-dark">
                    Here at lexxy pastry we give more than our delicasises to enjoy you will get to experience Quality Service and amazing pastries by diferent chefs around the world.We Hope that through this platform we are able to reach alot of people and as they say the more the Merrier.

                  </p>
                  <p className="text-dark">
                  We Hope that through this platform we are able to reach alot of people.
                  As they say the more the Merrier.
                  So don't wait come Right Now with your friend!!!

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container team-sektion paddingTB60">
        <div className="row">
          <div className="site-heading text-center">
            <h3>Our Team</h3>
            <p className="text-dark">
              This is the team that started the Lexxy Pastry <br /> We have our Head Chef,Maneger and the Software engineer present.
            Lexxy Pastry For You
            </p>
            <div className="border"></div>
          </div>
        </div>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-4 card shadow team-box">
            <div className="team-img thumbnail">
              <div className="team-content">
                <h3>Arnold Ndegwa</h3>
                <div className="border-team"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus.
                </p>
                <img
                    src="/images/profile1.jpeg" // Make sure this path is correct
                    alt="Profile"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%", // Makes it circular
                      objectFit: "cover",
                       marginLeft:"80px"
                    }}
                  />
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-4 card shadow team-box">
            <div className="team-img thumbnail">
              <div className="team-content">
                <h3>Agnes Wanjiku</h3>
                <div className="border-team"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus.
                </p>
                <img
                    src="/images/profile2.webp" // Make sure this path is correct
                    alt="Profile"
                    style={{
                      width: "250px",
                      height: "250px",
                      borderRadius: "50%", // Makes it circular
                      objectFit: "center",
                       marginLeft:"55px"
                    }}
                  />
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-md-4  card shadow team-box">
            <div className="team-img thumbnail">
              <div className="team-content">
                <h3>Wairimu Mugo</h3>
                <div className="border-team"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus.
                </p>
                <img
                    src="/images/profile3.jpeg" // Make sure this path is correct
                    alt="Profile"
                    style={{
                      width: "200px",
                      height: "200px",
                      borderRadius: "50%", // Makes it circular
                      objectFit: "cover",
                       marginLeft:"90px"
                    }}
                  />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="cta-sektion cta-padding35">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-9 col-xs-12">
              <h3>
                <span className="glyphicon glyphicon-cog "></span>{" "}
                <b>Homes for sale?</b> Explore properties like a pro.
              </h3>
            </div>
            <div className="col-md-3 col-sm-3 col-xs-12 Tpadding10">
              <button type="button" className="btn btn-primary site-btn">
                <Link to="/" className="text-white" >Start Right Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );

};

export default Aboutus;

