import React from "react";
import { useNavigate } from "react-router-dom";

const DELIVERY_FEE = 200;
const IMG_URL = "https://Arnold254.pythonanywhere.com/static/images/";

const MiniCart = ({ onClose, cartItems = [], setCartItems, isLoggedIn }) => {
  const navigate = useNavigate();

  const removeItem = (id) => {
    const updated = cartItems.filter((p) => p.product_id !== id);
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const updateQuantity = (id, change) => {
    const updated = cartItems.map((p) =>
      p.product_id === id ? { ...p, quantity: Math.max(1, (p.quantity || 1) + change) } : p
    );
    setCartItems(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const normalized = (cartItems || []).map((p) => ({ ...p, quantity: p.quantity || 1 }));
  const subtotal = normalized.reduce((s, p) => s + Number(p.product_cost || 0) * p.quantity, 0);
  const total = subtotal + DELIVERY_FEE;

  const handleCheckout = () => {
    if (!isLoggedIn) {
      alert("Please sign in to checkout.");
      navigate("/signin");
      return;
    }

    navigate("/mpesapayment", {
      state: {
        cartItems: normalized,
        subtotal,
        deliveryFee: DELIVERY_FEE,
        total,
      },
    });

    onClose();
  };

  return (
    <div
      className="card shadow-lg p-3 position-fixed bg-white border"
      style={{
        top: "80px",
        right: "20px",
        width: "360px",
        maxHeight: "80vh",
        overflowY: "auto",
        zIndex: 3000,
        borderRadius: "12px",
      }}
    >
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h6 className="mb-0">🛒 Your Cart ({cartItems.length})</h6>
        <button className="btn-close" onClick={onClose}></button>
      </div>

      <hr />

      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          {normalized.map((product) => (
            <div key={product.product_id} className="d-flex align-items-center border-bottom py-2">
              <img src={IMG_URL + (product.product_photo || "")} alt={product.product_name}
                   style={{ width: 70, height: 70, objectFit: "cover", borderRadius: 8 }} />

              <div className="ms-3 flex-grow-1">
                <h6 className="mb-0">{product.product_name}</h6>
                <small className="text-muted">Ksh {Number(product.product_cost).toLocaleString()}</small>
                <div className="d-flex align-items-center mt-2 gap-2">
                  <button className="btn btn-sm btn-danger" onClick={() => updateQuantity(product.product_id, -1)}>-</button>
                  <span className="mx-2 fw-bold">{product.quantity}</span>
                  <button className="btn btn-sm btn-success" onClick={() => updateQuantity(product.product_id, +1)}>+</button>
                </div>
              </div>

              <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(product.product_id)}>🗑</button>
            </div>
          ))}

          <div className="mt-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="fw-semibold">Subtotal:</span>
              <span>Ksh {subtotal.toLocaleString()}</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span className="fw-semibold">Delivery:</span>
              <span>Ksh {DELIVERY_FEE.toLocaleString()}</span>
            </div>

            <div className="d-flex justify-content-between fs-5 fw-bold mt-2">
              <span>Total:</span>
              <span>Ksh {total.toLocaleString()}</span>
            </div>

            <button className="btn btn-primary w-100 mt-3" onClick={handleCheckout}>Buy now</button>
            <button className="btn btn-outline-secondary w-100 mt-2" onClick={() => { navigate("/"); onClose(); }}>Continue Shopping</button>
          </div>
        </>
      )}
    </div>
  );
};

export default MiniCart;
