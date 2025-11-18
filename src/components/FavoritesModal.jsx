import React from "react";

const img_url = "https://Arnold254.pythonanywhere.com/static/images/";

const FavoritesModal = ({ favorites, onClose, removeFavorite }) => {
  return (
    <div 
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.4)", zIndex: 9999 }}
    >
      <div 
        className="card p-4 shadow-lg"
        style={{ width: "90%", maxWidth: "600px" }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-bold">Your Wishlist ({favorites.length})</h4>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <hr />
       

        {/* Wishlist Items */}
        <div className="row p-2">
          {favorites.length === 0 ? (
            <p className="text-center text-muted">No favorites added.</p>
          ) : (
            favorites.map((item) => (
              <div className="col-6 " key={item.product_id}>
                <div className="d-flex align-items-center text-center rounded p-1 position-relative">

                  
                  

                  {/* Image */}
                  <img
                    src={img_url + item.product_photo}
                    alt={item.product_name}
                    style={{
                      width: "80px",
                      height: "80px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      margin: "10px"
                    }}
                   
                  />

                  {/* Info */}
                  <div className=" text-start">
                    
                    <p className="fw-bold mb-1">{item.product_name}</p>
                    
                    <p className="text-danger fw-bold mb-2">
                      Ksh {item.product_cost}
                    </p>

                    <button 
                     onClick={() => removeFavorite(item.product_id)}
                    className="btn btn-success btn-sm">Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
   
  );
  
};

export default FavoritesModal;
