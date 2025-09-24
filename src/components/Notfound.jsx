import React from 'react'
import { Link } from 'react-router-dom'
import "./stylings/Notfound.css"

const Notfound = () => {
  return (
    <div className="container text-center not-found-container">
      <h1 className="animated-404">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4">
        The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link to="/" className="btn btn-primary">
        Go Back Home
      </Link>
    </div>
  );
}

export default Notfound
