import React, { useState } from "react";
import Courosel from "./Courosel";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Products data (you can expand this later)
  const products = [
    {
      id: 1,
      name: "Cookies",
      img: "images/Cookies1.jpg",
      desc: "Our pastry will make you feel right back at home enjoying a nice cup of coffee",
    },
    {
      id: 2,
      name: "Other Pastry",
      img: "images/otherpastry.jpeg",
      desc: "Our motto is: To provide Quality service to our customers and to provide customers with the best and high Quality Pastry",
    },
    {
      id: 3,
      name: "Pies",
      img: "images/pies1.jpg",
      desc: "We have wide varieties of pastry waiting for you to try as much as you can",
    },
    {
      id: 4,
      name: "Cakes",
      img: "images/cakes3.jpg",
      desc: "Our amazing delicacies are just waiting for you 😊",
    },
  ];

  // Filter based on search input
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Courosel />
      <div className="m-3">
        <h3 className="text-info">Available products</h3>

        <div className="search-bar mb-4">
{/* 🔍 Search Bar with Icon Inside */}
<div className="search-bar mb-4 position-relative">
  <i className="bi bi-search search-icon"></i>
  <input
    type="text"
    className="form-control ps-5"  // ps-5 adds left padding so text doesn't overlap the icon
    placeholder="Search for pastry..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

</div>

        {/* Products Grid */}
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="col-md-3 mb-4">
                <div className="card shadow h-100">
                  <div className="card-body text-center">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="img-fluid rounded"
                      style={{ maxHeight: "200px", objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-footer">
                    <b>{product.desc}</b>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-muted">No products found.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
