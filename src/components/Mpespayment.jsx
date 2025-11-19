import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";

const Mpesapayment = () => {
  const locationState = useLocation().state || {};
  const { cartItems = [], subtotal = 0, deliveryFee = 0, total = 0 } = locationState;

  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const img_url = "https://Arnold254.pythonanywhere.com/static/images/";

  const grandTotal = total || subtotal + deliveryFee;

  const submit = async (e) => {
    e.preventDefault();

    if (!phone) {
      setError("Please enter a phone number.");
      return;
    }

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", grandTotal);
      data.append("items", JSON.stringify(cartItems));

      const response = await axios.post(
        "https://Arnold254.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setSuccess(response.data.message || "Payment initiated successfully!");
    } catch (err) {
      setError("Payment failed. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!cartItems || cartItems.length === 0) {
    return <h3 className="text-center mt-5">No items in your cart.</h3>;
  }

  return (
    <div className="row justify-content-center mt-3">
      {loading && <Loader />}
      {success && <p className="text-success text-center">{success}</p>}
      {error && <p className="text-danger text-center">{error}</p>}

      <h1 className="text-success text-center mb-4">Lipa na M-Pesa</h1>

      <div className="col-md-6">
        <h3>Order Summary</h3>

        {cartItems.map((item) => (
          <div key={item.product_id} className="card mb-3 p-3 d-flex flex-row align-items-center">
            <img
              src={img_url + item.product_photo}
              alt={item.product_name}
              className="me-3"
              style={{ width: "120px", height: "120px", objectFit: "cover", borderRadius: "8px" }}
            />
            <div className="flex-grow-1">
              <h5 className="mb-1">{item.product_name}</h5>
              <p className="text-danger mb-0">KES {Number(item.product_cost).toLocaleString()}</p>
              {item.quantity && <small className="text-muted">Quantity: {item.quantity}</small>}
            </div>
            <div className="fw-bold ms-3">
              KES {(item.product_cost * (item.quantity || 1)).toLocaleString()}
            </div>
          </div>
        ))}

        <div className="mt-3 border-top pt-3">
          <div className="d-flex justify-content-between mb-2">
            <span>Subtotal:</span>
            <span>KES {subtotal.toLocaleString()}</span>
          </div>
          <div className="d-flex justify-content-between mb-2">
            <span>Delivery:</span>
            <span>KES {deliveryFee.toLocaleString()}</span>
          </div>
          <div className="d-flex justify-content-between fw-bold fs-5">
            <span>Grand Total:</span>
            <span>KES {grandTotal.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="col-md-5">
        <div className="card shadow p-4 text-center">
          <form onSubmit={submit}>
            <label className="form-label fw-semibold">Enter your phone number</label>
            <input
              type="tel"
              className="form-control text-center mb-3"
              placeholder="07XXXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-success w-100">
              Complete Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mpesapayment;
