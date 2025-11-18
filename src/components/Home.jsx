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
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showChat, setShowChat] = useState(false);
  const [sortOrder, setSortOrder] = useState("none");
  const [showFavorites, setShowFavorites] = useState(false);
  const [favorites, setFavorites] = useState([]);
const [showWishlist, setShowWishlist] = useState(false);
const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);

// NEW: State for the Cart
const [showMiniCart, setShowMiniCart] = useState(false);
const [cartItems, setCartItems] = useState([
    // Dummy cart items for demonstration (replace with actual persistence logic)
    { id: 1, name: "Basmati Rice", cost: 390 },
    { id: 2, name: "Slice Bread", cost: 350 },
]);
  
  // NEW: State to hold favorite product IDs for quick lookup
  const [favoriteIds, setFavoriteIds] = useState(
    new Set(
      (JSON.parse(localStorage.getItem("favorites")) || []).map((item) => item.product_id)
    )
  );

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
  
  // NEW: Function to toggle favorite status
  const toggleFavorite = (productItem) => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isFavorite = favoriteIds.has(productItem.product_id);

    let updatedFavorites;
    let updatedFavoriteIds = new Set(favoriteIds);

    if (isFavorite) {
      // Remove from favorites
      updatedFavorites = favorites.filter(
        (item) => item.product_id !== productItem.product_id
      );
      updatedFavoriteIds.delete(productItem.product_id);
    } else {
      // Add to favorites
      updatedFavorites = [...favorites, productItem];
      updatedFavoriteIds.add(productItem.product_id);
    }

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavoriteIds(updatedFavoriteIds);
  };
  const openFavorites = () => {
  setShowFavorites(true);
};

const closeFavorites = () => {
  setShowFavorites(false);
};
const addToWishlist = (item) => {
  // Prevent duplicates
  const exists = favorites.some(f => f.product_id === item.product_id);
  if (!exists) {
    setFavorites([...favorites, item]);
  }
  setShowWishlist(true); // Open wishlist modal automatically
};
const removeFavorite = (id) => {
  setFavorites(favorites.filter(item => item.product_id !== id));
};


{/* MiniCart Component - Renders only if showMiniCart is true */}
{showMiniCart && <MiniCart 
  onClose={() => setShowMiniCart(false)} 
  cartItems={cartItems}
  navigate={navigate}
/>}

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
    // NEW: Function to add a product to the cart
  const addToCart = (productItem) => {
    // Implement your actual cart logic here (e.g., check for duplicates, update quantity, save to localStorage/database)
    console.log(`Adding ${productItem.product_name} to cart.`);
    setCartItems(prev => [...prev, { id: Date.now(), name: productItem.product_name, cost: productItem.product_cost }]);
    // Optionally open the cart after adding
    setShowMiniCart(true); 
  };


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
        <div className="top-bar">
  <button className="sort-btn">Sort</button>

  {/* BLUE CART BUTTON */}
  <div className="floating-cart-btn" onClick={() => setShowCart(true)}>
    <i className="fas fa-shopping-cart"></i>
    {cart.length > 0 && (
      <span className="cart-badge">{cart.length}</span>
    )}
  </div>
</div>


        {/* NEW: Sort Button */}
        <div className="text-end   me-4">
          <button 
            className="btn me-3 b btn-success"
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

              {/* Side Buttons (Updated for Favorite) */}
              <div className="side-buttons position-absolute top-0 end-0 m-4 d-flex flex-column mt-3">
              {/* Heart Button */}
              <button 
                  className="btn btn-light mb-4 shadow-sm rounded-circle p-2" // Added p-2 for padding
                  style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={() => addToWishlist(product)}
              >
                  <i className="bi bi-heart-fill text-danger fs-5"></i> {/* Added fs-5 for bigger icon */}
              </button>

              <button 
                  className="btn btn-light shadow-sm rounded-circle p-2" 
                  style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  onClick={() => addToCart(product)} // CALL NEW FUNCTION HERE
                >
                  <i className="bi bi-cart fs-5"></i> 
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
                  className="btn btn-success mt-2 b"
                  onClick={() => navigate("/mpesapayment", { state: { product } })}
                >
                  Buy now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showWishlist && (
  <FavoritesModal
    favorites={favorites}
    onClose={() => setShowWishlist(false)}
    removeFavorite={removeFavorite}
  />
)}
<button
  onClick={() => setShowWishlist(true)}
  className="btn btn-danger position-fixed"
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
    boxShadow: "0px 4px 10px rgba(0,0,0,0.3)"
  }}
>
  <i className="bi bi-heart-fill fs-4"></i>

  {/* Badge showing number of items */}
  {favorites.length > 0 && (
    <span
      className="badge bg-warning text-dark"
      style={{
        position: "absolute",
        top: "0px",
        right: "-5px",
        borderRadius: "50%",
        padding: "5px 8px",
        fontSize: "12px"
      }}
    >
      {favorites.length}
    </span>
  )}
</button>
{/* NEW: Global Floating Cart Button */}
<button 
        className="btn btn-lg rounded-circle shadow position-fixed border-0 p-0"
        style={{ 
            backgroundColor: '#0d6efd', // Blue background
            width: '56px', 
            height: '56px', 
            bottom: '180px', // Positioned above the heart button
            right: '20px', 
            zIndex: 1000 
        }}
        onClick={() => setShowMiniCart(s => !s)} // Toggle the MiniCart visibility
      >
        <i className="bi bi-cart-fill text-white fs-4 position-relative">
            {/* Blue Badge for count */}
            {cartItems.length > 0 && (
                <span 
                    className="position-absolute top-0 start-100 translate-middle badge rounded-circle bg-white text-primary border border-2 border-primary"
                    style={{ fontSize: '0.6em', padding: '0.4em' }}
                >
                    {cartItems.length} 
                </span>
            )}
        </i>
      </button>
      
      {/* MiniCart Component - Renders only if showMiniCart is true */}
      {showMiniCart && <MiniCart 
          onClose={() => setShowMiniCart(false)} 
          cartItems={cartItems}
          navigate={navigate}
      />}
<ScrollToTopButton />





      {/* Chatbot */}
      <ChatToggleButton onClick={() => setShowChat((s) => !s)} />
      {showChat && <Chatbot onClose={() => setShowChat(false)} />}

      
    </>
  );
};

export default Home;