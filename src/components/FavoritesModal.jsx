import React from "react";
import { useNavigate } from "react-router-dom";

const img_url = "https://Arnold254.pythonanywhere.com/static/images/";

const FavoritesModal = ({ favorites, onClose, removeFavorite }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Calculate subtotal
    const subtotal = favorites.reduce(
      (sum, item) => sum + Number(item.product_cost),
      0
    );
    const deliveryFee = 200; // Set your delivery fee
    const total = subtotal + deliveryFee;

    // Navigate to M-Pesa payment page with state
    navigate("/mpesapayment", {
      state: { cartItems: favorites, subtotal, deliveryFee, total },
    });
  };

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
      style={{ background: "rgba(0,0,0,0.4)", zIndex: 9999 }}
    >
      <div
        className="card p-4 shadow-lg"
        style={{
          width: "95%",
          maxWidth: "600px",
          borderRadius: "12px",
        }}
      >
        {/* Header */}
        <div className="d-flex justify-content-between align-items-center">
          <h4 className="fw-bold">Your Wishlist ({favorites.length})</h4>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <hr />

        {/* Wishlist Items */}
        <div
          className="row g-3"
          style={{ maxHeight: "300px", overflowY: "auto" }}
        >
          {favorites.length === 0 ? (
            <p className="text-center text-muted">No favorites added.</p>
          ) : (
            favorites.map((item) => (
              <div className="col-6" key={item.product_id}>
                <div
                  className="p-2 rounded shadow-sm"
                  style={{ background: "#f8f9fa" }}
                >
                  {/* Image */}
                  <img
                    src={img_url + item.product_photo}
                    alt={item.product_name}
                    style={{
                      width: "100%",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  {/* Info */}
                  <p className="fw-bold mt-2 mb-1 text-center">
                    {item.product_name}
                  </p>

                  <p className="text-danger fw-bold text-center mb-1">
                    Ksh {item.product_cost}
                  </p>

                  <button
                    onClick={() => removeFavorite(item.product_id)}
                    className="btn btn-outline-danger btn-sm w-100"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Checkout */}
        {favorites.length > 0 && (
          <button
            onClick={handleCheckout}
            className="btn btn-success w-100 mt-3 py-2"
          >
            Checkout Wishlist
          </button>
        )}
      </div>
    </div>
  );
};

export default FavoritesModal;
