// App.jsx (Example Route Setup)
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
// Import other components like MpesaPayment, etc.

const App = () => {
    // Function to get the current count for the badge
    const getFavoriteCount = () => {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        return favorites.length;
    };

    return (
        <Router>
            {/* Navigation Bar or Global Icon Section */}
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Jirani Home of Flavors</Link>
                    <div className="d-flex">
                        {/* Global Heart Button to Navigate to Favorites */}
                        <Link to="/wishlist" className="btn btn-outline-danger position-relative me-3">
                            <i className="bi bi-heart-fill"></i>
                            <span 
                                className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-danger"
                                style={{ fontSize: '0.6em', padding: '0.4em' }}
                            >
                                {/* Display favorite count from localStorage (might need state management for live updates) */}
                                {getFavoriteCount()} 
                                <span className="visually-hidden">Favorites</span>
                            </span>
                        </Link>
                        {/* Add your global Cart button here if needed */}
                    </div>
                </div>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/wishlist" element={<Favorites />} /> 
                {/* Add other routes */}
                {/* <Route path="/mpesapayment" element={<MpesaPayment />} /> */}
            </Routes>
        </Router>
    );
};

export default App;