// FavoritesModal.jsx
import React from "react";

const img_url = "https://Arnold254.pythonanywhere.com/static/images/";

const FavoritesModal = ({ favorites, onClose }) => {
  return (
    <div className="modal-backdrop-custom">
      <div className="favorites-modal shadow-lg">

        <button className="close-btn" onClick={onClose}>✖</button>

        <h3 className="text-center my-3">Your Wishlist ({favorites.length})</h3>

        <div className="row p-3">
          {favorites.map((item, index) => (
            <div key={index} className="col-md-4 mb-3">
              <div className="card shadow p-2">
                
                <img 
                  src={img_url + item.product_photo} 
                  className="card-img-top rounded" 
                  alt={item.product_name} 
                />

                <div className="card-body text-center">
                  <h5>{item.product_name}</h5>
                  <p className="text-danger fw-bold">Ksh {item.product_cost}</p>

                  <button className="btn btn-outline-success me-2">View</button>
                  <button className="btn btn-success">Add</button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FavoritesModal;
