import React from "react";

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
                <span className="text-dark">Soko </span> <span className="text-danger">Garden</span>is a app where one can do his/her's groceries right in the comfort of his home
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
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis egestas rhoncus. Donec facilisis fermentum
                    sem, ac viverra ante luctus vel. Donec vel mauris quam.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla convallis egestas rhoncus. Donec facilisis fermentum
                    sem, ac viverra ante luctus vel. Donec vel mauris quam.
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
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.
              Ut enim ad minim
            </p>
            <div className="border"></div>
          </div>
        </div>
        <div className="row">
          {/* Team Member 1 */}
          <div className="col-md-4 card shadow team-box">
            <div className="team-img thumbnail">
              <div className="team-content">
                <h3>Philip Freeman</h3>
                <div className="border-team"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus.
                </p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook-square fa-3x social"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fa fa-twitter-square fa-3x social"></i>
                  </a>
                  <a href="https://plus.google.com/">
                    <i className="fa fa-google-plus-square fa-3x social"></i>
                  </a>
                  <a href="mailto:bootsnipp@gmail.com">
                    <i className="fa fa-envelope-square fa-3x social"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="col-md-4 card shadow team-box">
            <div className="team-img thumbnail">
              <div className="team-content">
                <h3>David Smith</h3>
                <div className="border-team"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus.
                </p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook-square fa-3x social"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fa fa-twitter-square fa-3x social"></i>
                  </a>
                  <a href="https://plus.google.com/">
                    <i className="fa fa-google-plus-square fa-3x social"></i>
                  </a>
                  <a href="mailto:bootsnipp@gmail.com">
                    <i className="fa fa-envelope-square fa-3x social"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="col-md-4  card shadow team-box">
            <div className="team-img thumbnail">
              <div className="team-content">
                <h3>Robert D'costa</h3>
                <div className="border-team"></div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                  convallis egestas rhoncus.
                </p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/">
                    <i className="fa fa-facebook-square fa-3x social"></i>
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fa fa-twitter-square fa-3x social"></i>
                  </a>
                  <a href="https://plus.google.com/">
                    <i className="fa fa-google-plus-square fa-3x social"></i>
                  </a>
                  <a href="mailto:bootsnipp@gmail.com">
                    <i className="fa fa-envelope-square fa-3x social"></i>
                  </a>
                </div>
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
                Start Right Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;

