// Favorites.jsx
import React, { useEffect, useState } from "react";

const img_url = "https://Arnold254.pythonanywhere.com/static/images/";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const removeFavorite = (id) => {
    const updated = favorites.filter((item) => item.product_id !== id);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Your Wishlist ({favorites.length})</h2>

      <div className="row">
        {favorites.map((item, i) => (
          <div className="col-md-4" key={i}>
            <div className="card shadow mb-3">
              <img src={img_url + item.product_photo} className="card-img-top" alt="" />

              <div className="card-body">
                <h5>{item.product_name}</h5>
                <p className="text-danger fw-bold">Ksh {item.product_cost}</p>

                <button
                  className="btn btn-danger"
                  onClick={() => removeFavorite(item.product_id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {favorites.length === 0 && <p className="text-center">No favorites yet.</p>}
      </div>
    </div>
  );
};

export default Favorites;
