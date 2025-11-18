// MiniCart.jsx
import React from 'react';

const MiniCart = ({ onClose, cartItems, navigate }) => {
  // Dummy data for example
  const count = cartItems ? cartItems.length : 0;
  
  return (
    // Fixed position modal/drawer container
    <div 
        className="card shadow-lg p-3 position-fixed bg-white border"
        style={{
            top: '80px', // Adjust to sit below your navbar
            right: '20px',
            width: '350px',
            maxHeight: '80vh',
            zIndex: 2000,
            overflowY: 'auto',
        }}
    >
        <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="mb-0">🛒 Your Cart ({count})</h5>
            <button className="btn-close" onClick={onClose} aria-label="Close"></button>
        </div>
        
        <hr />
        
        {count === 0 ? (
            <p className="text-center text-muted">Your cart is empty.</p>
        ) : (
            <>
                {/* Placeholder for real cart items */}
                <p className="text-success">Displaying {count} items...</p>
                <ul className="list-unstyled">
                    {/* Map through cartItems here */}
                    {/* Example item */}
                    {count > 0 && <li className="d-flex justify-content-between py-1 border-bottom">
                        <span>Product X</span>
                        <span className="fw-bold">Ksh 350</span>
                    </li>}
                </ul>
                
                <div className="mt-3">
                    <button 
                        className="btn btn-primary w-100" 
                        onClick={() => {
                            // Example navigation to full Cart page
                            navigate('/cart'); 
                            onClose();
                        }}
                    >
                        View Full Cart / Checkout
                    </button>
                </div>
            </>
        )}
    </div>
  );
};

export default MiniCart;