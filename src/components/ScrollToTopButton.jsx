// ScrollToTopButton.jsx
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 300) { // Show after 300px scroll
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top of the document
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling animation
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="btn btn-success btn-lg rounded-circle shadow position-fixed border-0 p-0"
          style={{
            width: '56px',
            height: '56px',
            bottom: '20px', // Positioned below the heart/cart buttons
            right: '23px',
            zIndex: 1000 // Ensure it floats above all other content
          }}
          aria-label="Scroll to top"
        >
          <i className="bi bi-arrow-up text-white fs-4"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;