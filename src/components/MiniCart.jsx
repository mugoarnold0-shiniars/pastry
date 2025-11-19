import React from "react";

const DELIVERY_FEE = 200;
const IMG_URL = "https://Arnold254.pythonanywhere.com/static/images/";

const MiniCart = ({ onClose, cartItems, setCartItems, navigate, isLoggedIn }) => {
  
  // Remove item
  const removeItem = (id) => {
    const updated = cartItems.filter(product => product.product_id !== id);
    setCartItems(updated);
  };

  // Update quantity
  const updateQuantity = (id, change) => {
    const updated = cartItems.map((product) =>
      product.product_id === id
        ? { ...product, quantity: Math.max(1, (product.quantity || 1) + change) }
        : product
    );
    setCartItems(updated);
  };

  // Normalize quantity
  const normalizedItems = cartItems.map((product) => ({
    ...product,
    quantity: product.quantity || 1,
  }));

  // Subtotal calculation
  const subtotal = normalizedItems.reduce(
    (sum, product) => sum + Number(product.product_cost || 0) * product.quantity,
    0
  );

  const total = subtotal + DELIVERY_FEE;

  // Handle checkout
  const handleCheckout = () => {
    if (!isLoggedIn) {
      alert("You must be signed in to proceed with payment.");
      navigate("/signin"); // Redirect to login page
      return;
    }

    navigate("/mpesapayment", {
      state: {
        cartItems: normalizedItems,
        subtotal,
        deliveryFee: DELIVERY_FEE,
        total,
      },
    });
    onClose();
  };

  return (
    <div
      className="card shadow-lg p-3 position-fixed bg-white border "
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
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold">🛒 Your Cart ({cartItems.length})</h5>
        <button className="btn-close" onClick={onClose}></button>
      </div>

      <hr />

      {/* If Empty */}
      {cartItems.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
        <>
          {/* Cart Items */}
          {normalizedItems.map((product) => {
            const imgName =
              product.product_photo ||
              product.product_image ||
              product.photo ||
              product.image ||
              "";

            return (
              <div
                key={product.product_id}
                className="d-flex align-items-center border-bottom py-2"
              >
                {/* IMAGE */}
                <img
                  src={IMG_URL + imgName}
                  alt={product.product_name}
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />

                {/* INFO */}
                <div className="ms-3 flex-grow-1">
                  <h6 className="mb-0">{product.product_name}</h6>
                  <small className="text-muted">
                    Ksh {Number(product.product_cost).toLocaleString()}
                  </small>

                  {/* Quantity Buttons */}
                  <div className="d-flex align-items-center mt-2">
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => updateQuantity(product.product_id, -1)}
                    >
                      -
                    </button>

                    <span className="mx-2 fw-bold">{product.quantity}</span>

                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => updateQuantity(product.product_id, +1)}
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => removeItem(product.product_id)}
                >
                  🗑
                </button>
              </div>
            );
          })}

          {/* Price Summary */}
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
          </div>

          {/* Checkout */}
          <button
            className="btn btn-primary w-100 mt-3"
            onClick={handleCheckout}
          >
            Buy now
          </button>

          <button
            className="btn btn-outline-secondary w-100 mt-2"
            onClick={() => {
              navigate("/");
              onClose();
            }}
          >
            Continue Shopping
          </button>
        </>
      )}
    </div>
  );
};

export default MiniCart;
