import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const img_url = "https://Arnold254.pythonanywhere.com/static/images/";
const DELIVERY_FEE = 200;

const Cart = ({ cartItems = [], onCartChange, removeFromCart }) => {
  const [items, setItems] = useState(cartItems || []);
  const navigate = useNavigate();

  useEffect(() => {
    setItems(cartItems || []);
  }, [cartItems]);

  const updateQuantity = (id, change) => {
    const updated = items.map((p) =>
      p.product_id === id ? { ...p, quantity: Math.max(1, (p.quantity || 1) + change) } : p
    );
    setItems(updated);
    onCartChange(updated);
  };

  const subtotal = items.reduce(
    (sum, p) => sum + Number(p.product_cost || 0) * (p.quantity || 1),
    0
  );

  const goToPayment = () => {
    navigate("/mpesapayment", {
      state: {
        cartItems: items,
        subtotal,
        deliveryFee: DELIVERY_FEE,
        total: subtotal + DELIVERY_FEE,
      },
    });
  };

  if (!items || items.length === 0) {
    return <div className="container mt-4"><h3>Your cart is empty</h3></div>;
  }

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {items.map((item) => (
        <div className="card mb-3 p-3 d-flex align-items-center" key={item.product_id}>
          <div className="d-flex w-100 align-items-center">
            <img src={img_url + item.product_photo} alt={item.product_name}
                 style={{ width: 90, height: 90, objectFit: "cover", borderRadius: 8 }} />
            <div className="ms-3 flex-grow-1">
              <h5>{item.product_name}</h5>
              <p className="text-danger">Ksh {item.product_cost}</p>

              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-sm btn-outline-danger" onClick={() => updateQuantity(item.product_id, -1)}>-</button>
                <span className="fw-bold">{item.quantity || 1}</span>
                <button className="btn btn-sm btn-outline-success" onClick={() => updateQuantity(item.product_id, +1)}>+</button>
              </div>
            </div>

            <div className="text-end">
              <div className="mb-2 fw-bold">Ksh {(item.product_cost * (item.quantity || 1)).toLocaleString()}</div>
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(item.product_id)}>Remove</button>
            </div>
          </div>
        </div>
      ))}

      <div className="p-3 bg-light rounded">
        <div className="d-flex justify-content-between">
          <span>Subtotal</span>
          <strong>Ksh {subtotal.toLocaleString()}</strong>
        </div>
        <div className="d-flex justify-content-between">
          <span>Delivery</span>
          <strong>Ksh {DELIVERY_FEE.toLocaleString()}</strong>
        </div>
        <div className="d-flex justify-content-between mt-2 fs-5 fw-bold">
          <span>Total</span>
          <span>Ksh {(subtotal + DELIVERY_FEE).toLocaleString()}</span>
        </div>
      </div>

      <button className="btn btn-success w-100 mt-3" onClick={goToPayment}>
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Cart;
