// Favorites.jsx
import React, { useEffect, useState } from "react";
// Add useNavigate if you want the View button to actually navigate
// import { useNavigate } from "react-router-dom"; 

const img_url = "https://Arnold254.pythonanywhere.com/static/images/";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  // const navigate = useNavigate(); // uncomment if you add useNavigate

  useEffect(() => {
    // Listen for changes in localStorage to automatically update when a product is favorited/unfavorited from Home.jsx
    const handleStorageChange = () => {
        const saved = JSON.parse(localStorage.getItem("favorites")) || [];
        setFavorites(saved);
    };

    // Initial load
    handleStorageChange();

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  // Updated to match the requested component structure (c2.jpg)
  return (
    <div className="container mt-4">
      {/* Modal-like structure wrapper to match c2.jpg */}
      <div className="card mx-auto p-4 shadow-lg" style={{ maxWidth: '800px' }}>
        <div className="d-flex justify-content-between align-items-center">
            <h2 className="mb-0">Your Wishlist ({favorites.length})</h2>
            <button className="btn-close" aria-label="Close" onClick={() => {/* You might want to close a modal here or navigate back */}}></button>
        </div>
        
        <hr />

        <div className="row">
          {favorites.map((item, i) => (
            // Flex layout for the product item to match c2.jpg
            <div className="col-md-6 mb-3" key={i}>
                <div className="border p-2 rounded d-flex align-items-center position-relative">
                    
                    {/* Heart button for visual consistency with c2.jpg */}
                    <i className="bi bi-heart-fill text-danger position-absolute top-0 end-0 m-2" 
                       style={{ cursor: 'pointer', zIndex: 10 }}
                       onClick={() => { 
                           // You might want to remove the item on click here
                           const updated = favorites.filter((fav) => fav.product_id !== item.product_id);
                           setFavorites(updated);
                           localStorage.setItem("favorites", JSON.stringify(updated));
                           window.dispatchEvent(new Event('storage')); // Notify Home.jsx of the change
                       }}
                    ></i>
                    
                    <img 
                        src={img_url + item.product_photo} 
                        className="me-3 rounded" 
                        alt={item.product_name} 
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    
                    <div>
                        <p className="fw-bold mb-1">{item.product_name}</p>
                        <p className="text-danger fw-bold mb-2">Ksh {item.product_cost}</p>
                        
                        <div className="d-flex">
                            <button
                                className="btn btn-outline-success btn-sm me-2"
                                // onClick={() => navigate(`/product/${item.product_id}`)} // Example
                            >
                                View
                            </button>
                            <button
                                className="btn btn-success btn-sm"
                                onClick={() => {/* Add to cart logic here */}}
                            >
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
          ))}

          {favorites.length === 0 && <p className="text-center mt-3">No favorites yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default Favorites;