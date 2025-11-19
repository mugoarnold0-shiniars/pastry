// Home.jsx
import React, { useEffect, useState } from "react";
import Courosel from "./Courosel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import ChatToggleButton from "./ChatToggleButton";
import Chatbot from "./Chatrobot";
import FavoritesModal from "./FavoritesModal";
import ScrollToTopButton from "./ScrollToTopButton";
import MiniCart from "./MiniCart";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");
  const [showWishlist, setShowWishlist] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showMiniCart, setShowMiniCart] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState(
    new Set(
      (JSON.parse(localStorage.getItem("favorites")) || []).map(
        (item) => item.product_id
      )
    )
  );

  const navigate = useNavigate();
  const IMG_URL = "https://Arnold254.pythonanywhere.com/static/images/";

  // Fetch products
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "https://Arnold254.pythonanywhere.com/api/getproduct"
      );
      setProducts(response.data);
    } catch (err) {
      setError("There was an error fetching products. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Toggle favorite status
  const toggleFavorite = (product) => {
    const favoritesList = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFav = favoriteIds.has(product.product_id);
    let updatedFavorites;
    const updatedFavoriteIds = new Set(favoriteIds);

    if (isFav) {
      updatedFavorites = favoritesList.filter(
        (item) => item.product_id !== product.product_id
      );
      updatedFavoriteIds.delete(product.product_id);
    } else {
      updatedFavorites = [...favoritesList, product];
      updatedFavoriteIds.add(product.product_id);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteIds(updatedFavoriteIds);
  };

  // Wishlist functions
  const addToWishlist = (product) => {
    const exists = favorites.some((f) => f.product_id === product.product_id);
    if (!exists) setFavorites([...favorites, product]);
    setShowWishlist(true);
  };

  const removeFavorite = (id) => {
    setFavorites(favorites.filter((item) => item.product_id !== id));
  };

  // Add to cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const exists = prev.find((item) => item.product_id === product.product_id);
      if (exists) {
        // Increment quantity if already in cart
        return prev.map((item) =>
          item.product_id === product.product_id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
    setShowMiniCart(true);
  };

  // Filter & Sort
  const filteredProducts = products
  .filter(
    (p) =>
      p.product_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.product_description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  .sort((a, b) => {
    switch (sortOrder) {
      case "low-high":
        return a.product_cost - b.product_cost;
      case "high-low":
        return b.product_cost - a.product_cost;
      case "name-asc":
        return a.product_name.localeCompare(b.product_name);
      case "name-desc":
        return b.product_name.localeCompare(a.product_name);
      default:
        return 0;
    }
  });


  return (
    <>
      <Courosel />

      <div className="m-3">
        <h3 className="text-info text-center">Available Products</h3>

        {/* Search */}
        <div className="search-bar mb-4 position-relative">
          <i className="bi bi-search search-icon position-absolute top-50 translate-middle-y ms-3"></i>
          <input
            type="text"
            className="form-control ps-5 "
            placeholder="Search for pastry..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

            {/* Sort */}
            <div className="text-end me-4 mb-3">
            <div className="text-end me-4 mb-3">
      <label className="me-2 fw-semibold">Sort by:</label>
      <select
        className="form-select d-inline-block w-auto b "
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="none">Default</option>
        <option value="low-high">Price: Low → High</option>
        <option value="high-low">Price: High → Low</option>
        <option value="name-asc">Name: A → Z</option>
        <option value="name-desc">Name: Z → A</option>
      </select>
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
                src={IMG_URL + product.product_photo}
                alt={product.product_name}
                className="card-img product_img mt-3"
              />

              {/* Heart button */}
              <div className="side-buttons position-absolute top-0 end-0 m-4 d-flex flex-column mt-3 m-3">
                <button
                  className="btn btn-light mb-4 shadow-sm rounded-circle p-2"
                  style={{
                    width: "40px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onClick={() => addToWishlist(product)}
                >
                  <i className="bi bi-heart-fill text-danger fs-5"></i>
                </button>
              </div>

              <div className="card-body">
                <h5 className="fw-bold">{product.product_name}</h5>
                <p className="text-dark">{product.product_description.slice(0, 60)}...</p>

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
                  className="btn btn-success shadow-sm p-2 m-2"
                  onClick={() => addToCart(product)}
                >
                  Add Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Wishlist Modal */}
      {showWishlist && (
        <FavoritesModal
          favorites={favorites}
          onClose={() => setShowWishlist(false)}
          removeFavorite={removeFavorite}
        />
      )}

      {/* Floating Heart Button */}
      <button
        onClick={() => setShowWishlist(true)}
        className="btn btn-danger position-fixed mt-5"
        style={{
          bottom: "120px",
          right: "25px",
          zIndex: 999,
          borderRadius: "50%",
          width: "60px",
          height: "60px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.3)",
        }}
      >
        <i className="bi bi-heart-fill fs-4"></i>
        {favorites.length > 0 && (
          <span
            className="badge bg-warning text-dark"
            style={{
              position: "absolute",
              top: "0px",
              right: "-5px",
              borderRadius: "50%",
              padding: "5px 8px ",
              fontSize: "12px",
            }}
          >
            {favorites.length}
          </span>
        )}
      </button>

      {/* Floating Cart Button */}
      <button
        className="btn btn-lg rounded-circle shadow position-fixed border-0 p-0"
        style={{
          backgroundColor: "#0d6efd",
          width: "56px",
          height: "56px",
          bottom: "180px",
          right: "20px",
          zIndex: 1000,
        }}
        onClick={() => setShowMiniCart((s) => !s)}
      >
        <i className="bi bi-cart-fill text-white fs-4 position-relative">
          {cartItems.length > 0 && (
            <span
              className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-white text-primary border border-2 border-primary p-3"
              style={{ fontSize: "0.6em", padding: "0.4em" }}
            >
              {cartItems.length}
            </span>
          )}
        </i>
      </button>

      {/* MiniCart */}
      {showMiniCart && (
        <MiniCart
          onClose={() => setShowMiniCart(false)}
          cartItems={cartItems}
          setCartItems={setCartItems}
          navigate={navigate}
        />
      )}

      <ScrollToTopButton />

      {/* Chatbot */}
      <ChatToggleButton onClick={() => setShowChat((s) => !s)} />
      {showChat && <Chatbot onClose={() => setShowChat(false)} />}
    </>
  );
};

export default Home;
