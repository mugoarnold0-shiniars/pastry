import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [removedItemName, setRemovedItemName] = useState("");
  const [showToast, setShowToast] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);

    const total = storedCart.reduce(
      (sum, item) => sum + Number(item.product_cost),
      0
    );
    setTotalCost(total);
  }, []);

  const removeFromCart = (id, name) => {
    const updatedCart = cartItems.filter((item) => item.product_id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setRemovedItemName(name);
    setShowToast(true);

    setTimeout(() => setShowToast(false), 2000);
  };

  return (
    <div className="container mt-4">
      <h2>Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.product_id} className="card mb-3 p-3">
              <div className="d-flex justify-content-between">
                <div>
                  <h5>{item.product_name}</h5>
                  <p className="text-danger">KES {item.product_cost}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    removeFromCart(item.product_id, item.product_name)
                  }
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <h3>Total: KES {totalCost}</h3>

          <button
            className="btn btn-primary w-100 mt-3"
            onClick={() =>
              navigate("/mpesapayment", {
                state: { cartItems, totalCost },
              })
            }
          >
            Proceed to Checkout
          </button>
        </>
      )}

      {showToast && (
        <div className="toast show position-fixed bottom-0 end-0 m-3 bg-danger text-white">
          <div className="toast-body">
            {removedItemName} removed from cart.
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
