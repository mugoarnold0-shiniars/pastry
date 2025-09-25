import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "./Loader";
import axios from "axios";

const Mpesapayment = () => {
  // Retrieve product details from router state
  const { product } = useLocation().state || {};
  const img_url = "https://Arnold254.pythonanywhere.com/static/images/";

  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1); // 🔹 new state for quantity
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // Calculate total price dynamically
  const totalPrice = product ? product.product_cost * quantity : 0;

  // Implement the mpesa payment
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", totalPrice); // 🔹 use updated total price
      data.append("quantity", quantity); // 🔹 send quantity too
      data.append("product_id", product.product_id);

      const response = await axios.post(
        "https://Arnold254.pythonanywhere.com/api/mpesa_payment",
        data
      );

      setSuccess(response.data.message);
    } catch (err) {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="row justify-content-center mt-3">
      {loading && <Loader />}
      {success && <p className="text-success">{success}</p>}
      {error && <p className="text-danger">{error}</p>}

      <h1 className="text-success text-center">Lipa na M-Pesa</h1>

      <div className="col-md-6 text-center">
        <img
          src={img_url + product.product_photo}
          alt="product"
          className="card-img product_img mt-3"
        />
        <h4>
          Product Name:{" "}
          <span className="text-danger">{product.product_name}</span>
        </h4>
        <h4>
          Price (per item):{" "}
          <span className="text-danger">KES {product.product_cost}</span>
        </h4>
        <h4>
          Total Price: <span className="text-danger">KES {totalPrice}</span>
        </h4>
      </div>

      <div className="col-md-6">
        <div className="card shadow p-4 text-center">
          <form onSubmit={submit}>
            <label>Fill in to complete the transaction</label>
            

            <div className="d-flex justify-content-center align-items-center mb-3">
  <button
    type="button"
    className="btn btn-danger me-2"
    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
  >
    -
  </button>

  <input
    type="number"
    className="form-control text-center"
    style={{ maxWidth: "80px" }}
    value={quantity}
    min="1"
    onChange={(e) => setQuantity(Number(e.target.value))}
  />

  <button
    type="button"
    className="btn btn-success ms-2"
    onClick={() => setQuantity((prev) => prev + 1)}
  >
    +
  </button> <br /><br />
 
</div>
<input
    type="number"
    className="form-control text-center"
    placeholder="Enter your Phone number"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
  />

            <button className="btn btn-success">Complete Payment</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Mpesapayment;
