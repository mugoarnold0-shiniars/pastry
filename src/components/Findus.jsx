import React, { useRef } from "react";

const Findus = () => {
  const mapRef = useRef(null);

  const openFullScreen = () => {
    if (mapRef.current) {
      if (mapRef.current.requestFullscreen) {
        mapRef.current.requestFullscreen();
      } else if (mapRef.current.mozRequestFullScreen) {
        mapRef.current.mozRequestFullScreen();
      } else if (mapRef.current.webkitRequestFullscreen) {
        mapRef.current.webkitRequestFullscreen();
      } else if (mapRef.current.msRequestFullscreen) {
        mapRef.current.msRequestFullscreen();
      }
    }
  };

  // Google Maps embed URL using latitude and longitude
  const embedUrl = `https://www.google.com/maps?q=-1.28808,36.88106&hl=en&z=16&output=embed`;

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Find Us</h1>
      <p className="text-center mb-4">
        Visit our shop at Quickmart, Buruburu. The map below shows the exact location.
      </p>

      {/* Fullscreen Button */}
      <div className="text-center mb-3">
        <button onClick={openFullScreen} className="btn btn-primary">
          View Map Fullscreen
        </button>
      </div>

      {/* Google Map */}
      <div
        ref={mapRef}
        style={{ width: "100%", maxWidth: "800px", height: "450px", margin: "0 auto" }}
      >
        <iframe
          title="Quickmart Buruburu Location"
          src={embedUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Findus;
