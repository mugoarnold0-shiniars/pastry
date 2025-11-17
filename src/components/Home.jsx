// Home.jsx
import React, { useEffect, useState } from "react";
import Courosel from "./Courosel";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Favorites from "./Favorites";

import ChatToggleButton from "./ChatToggleButton";
import Chatbot from "./Chatrobot";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showChat, setShowChat] = useState(false);

  // NEW: Sort order state
  const [sortOrder, setSortOrder] = useState("none");

  const navigate = useNavigate();

  const img_url = "https://Arnold254.pythonanywhere.com/static/images/";

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://Arnold254.pythonanywhere.com/api/getproduct"
      );
      setProduct(response.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setError("There was an error fetching products. Please try again later.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // NEW: Filter + Sort logic
  const filteredProducts = product
    .filter(
      (item) =>
        item.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.product_description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "low-high") return a.product_cost - b.product_cost;
      if (sortOrder === "high-low") return b.product_cost - a.product_cost;
      return 0;
    });

  return (
    <>
      <Courosel />

      <div className="m-3">
        <h3 className="text-info text-center">Available Products</h3>

        {/* Search Bar */}
        <div className="search-bar mb-4 position-relative">
          <i className="bi bi-search search-icon position-absolute top-50 translate-middle-y ms-3"></i>
          <input
            type="text"
            className="form-control ps-5"
            placeholder="Search for pastry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* NEW: Sort Button */}
        <div className="text-end   me-4">
          <button 
            className="btn btn-outline-primary me-3"
            onClick={() =>
              setSortOrder((prev) =>
                prev === "low-high" ? "high-low" : "low-high"
               
              )
            }
          >
            Sort Price:{" "}
            {sortOrder === "low-high" ? "Low → High" : "High → Low"}
          </button>
        </div>
      </div>

      {/* Banner Section */}
      <div className="image-aboutus-banner">
        <div className="">
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="lg-text">Pastry home</h1>
              <p className="image-aboutus-para">
                <span className="text-dark">Lexy </span>
                <span className="text-danger">Pastry</span> is a website where one can do his/her pastries right in the comfort of home.
              </p>
            </div>
          </div>
        </div>
      </div>

      {loading && <p className="text-center text-primary">Loading products...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {/* Product Cards */}
      <div className="row">
        {filteredProducts.map((product, index) => (
          <div className="col-md-3 mb-3 text-center" key={index}>
            <div className="card shadow h-100 position-relative">

              <img
                src={img_url + product.product_photo}
                alt="product"
                className="card-img product_img mt-3"
              />

              {/* Side Buttons */}
              <div className="side-buttons position-absolute top-0 end-0 m-4 d-flex flex-column mt-3">
                <button className="btn btn-light mb-4 shadow-sm rounded-circle">
                  <i className="bi bi-heart"></i>
                </button>

                <button className="btn btn-light shadow-sm rounded-circle">
                  <i className="bi bi-arrow-repeat"></i>
                </button>
              </div>

              <div className="card-body">
                <h5 className="fw-bold">{product.product_name}</h5>
                <p className="text-dark">
                  {product.product_description.slice(0, 60)}...
                </p>

                {/* Rating */}
                <div className="mb-2">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`bi bi-star-fill ${
                        i < (product.rating || Math.floor(Math.random() * 5) + 1)
                          ? "text-warning"
                          : "text-secondary"
                      }`}
                    />
                  ))}
                </div>

                <b className="text-danger">Ksh {product.product_cost}</b>
                <br />

                <button
                  className="btn btn-success mt-2"
                  onClick={() => navigate("/mpesapayment", { state: { product } })}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Chatbot */}
      <ChatToggleButton onClick={() => setShowChat((s) => !s)} />
      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
    </>
  );
};

export default Home;
