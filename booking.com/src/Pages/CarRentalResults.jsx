import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./CarRentalResults.css";

const availableCars = [
  {
    id: 1,
    name: "Economy Car",
    type: "Toyota Etios or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjFwMp_JwZqXaTIK-WxEKjbVro7qWmswlbtQ&s",
    features: ["5 seats", "Manual", "2 bags"],
    rating: 8.5,
    reviews: 124,
    price: 2500,
    supplier: "Hertz",
  },
  {
    id: 2,
    name: "Compact Car",
    type: "Maruti Swift or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zIGaMSXDfmMYyCSsc6NR9UeoGoJcAsgAVQ&s",
    features: ["5 seats", "Manual", "2 bags"],
    rating: 8.8,
    reviews: 89,
    price: 3200,
    supplier: "Avis",
  },
  {
    id: 3,
    name: "SUV",
    type: "Toyota Innova or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHO7rE8rI76cghdjbCTtRKz_YwAzLxmOv7Ww&s",
    features: ["7 seats", "Manual", "4 bags"],
    rating: 9.2,
    reviews: 156,
    price: 5500,
    supplier: "Budget",
  },
  {
    id: 4,
    name: "Premium Car",
    type: "Mercedes C-Class or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3B8HqgVXSWeV_r4ChDA1DCGy6BMezrCY_rQ&s",
    features: ["5 seats", "Automatic", "3 bags"],
    rating: 9.5,
    reviews: 67,
    price: 12000,
    supplier: "Europcar",
  },

  {
    id: 5,
    name: "Luxury SUV",
    type: "BMW X5 or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8U63NSty3kHLZWESa73wgKMOc5UFkH4oH7Q&s",
    features: ["5 seats", "Automatic", "4 bags"],
    rating: 9.6,
    reviews: 52,
    price: 15000,
    supplier: "Sixt",
  },
  {
    id: 6,
    name: "Sedan",
    type: "Honda City or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4_0SxQD6jM3uQsXWiNgqUeVNrFBpbtlzbJg&s",
    features: ["5 seats", "Manual", "3 bags"],
    rating: 8.9,
    reviews: 142,
    price: 4200,
    supplier: "Zoomcar",
  },
  {
    id: 7,
    name: "Mini Car",
    type: "Maruti Alto or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4vHqpeA6Mrl1OQTg35SKblA3JRxlZf49siw&s",
    features: ["4 seats", "Manual", "1 bag"],
    rating: 8.1,
    reviews: 98,
    price: 1800,
    supplier: "Drivezy",
  },
  {
    id: 8,
    name: "Electric Car",
    type: "Tata Nexon EV or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpIgpeB0bwTDZ-vBvJuN1fcQ4IkJc_sIG1nw&s",
    features: ["5 seats", "Automatic", "3 bags"],
    rating: 9.0,
    reviews: 74,
    price: 4800,
    supplier: "BluSmart",
  },
  {
    id: 9,
    name: "Family Van",
    type: "Toyota Crysta or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL5KtVSQzp1lkPjWzDmzJLgxut1Hm6TC1S9Q&s",
    features: ["8 seats", "Manual", "5 bags"],
    rating: 9.1,
    reviews: 133,
    price: 6500,
    supplier: "Myles",
  },
  {
    id: 10,
    name: "Convertible",
    type: "Mini Cooper Convertible or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzDJe9paV-NIK181QwBu3Hlos7_cuxIwRbTg&s",
    features: ["4 seats", "Automatic", "2 bags"],
    rating: 9.4,
    reviews: 41,
    price: 14000,
    supplier: "Hertz",
  },
  {
    id: 11,
    name: "Off-Road SUV",
    type: "Mahindra Thar or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg_M9LLqIALFoLI7XCC9cItF5yJgnSsmjRdg&s",
    features: ["4 seats", "Manual", "2 bags"],
    rating: 9.0,
    reviews: 88,
    price: 5200,
    supplier: "Revv",
  },
  {
    id: 12,
    name: "Business Class",
    type: "Audi A6 or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrHPAmOG3DhI7V-fIQcYpbphUGb0-Sjg2X4w&s",
    features: ["5 seats", "Automatic", "4 bags"],
    rating: 9.7,
    reviews: 35,
    price: 17000,
    supplier: "Europcar",
  },
  {
    id: 13,
    name: "Hybrid Car",
    type: "Toyota Camry Hybrid or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSRu4zVGPok0ByK3ibbfahZqm6gOV29pZCQ&s",
    features: ["5 seats", "Automatic", "4 bags"],
    rating: 9.3,
    reviews: 61,
    price: 9000,
    supplier: "Avis",
  },
  {
    id: 14,
    name: "Luxury Sedan",
    type: "BMW 5 Series or similar",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyc5vinpzhJ3JX56z1mB-JuZ2kt0JXQBXKsw&s",
    features: ["5 seats", "Automatic", "4 bags"],
    rating: 9.8,
    reviews: 29,
    price: 18000,
    supplier: "Sixt",
  },
];

function CarRentalResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = location.state || {};

  const [selectedCar, setSelectedCar] = useState(null);
  const [sortBy, setSortBy] = useState("price");

  const sortedCars = [...availableCars].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "rating") return b.rating - a.rating;
    return 0;
  });

  const handleBookCar = (car) => {
    navigate("/car-rental/booking", {
      state: {
        car,
        searchParams,
      },
    });
  };

  return (
    <div className="car-rental-results">
      <div className="results-header">
        <div className="search-summary">
          <h1>Available Cars</h1>
          <div className="search-details">
            <span>
              <strong>Pick-up:</strong> {searchParams.pickupLocation || "Delhi"}
            </span>
            <span>
              <strong>Drop-off:</strong>{" "}
              {searchParams.dropoffLocation || "Delhi"}
            </span>
            <span>
              <strong>Dates:</strong> {searchParams.pickupDate} -{" "}
              {searchParams.dropoffDate}
            </span>
          </div>
        </div>
        <div className="sort-options">
          <label>Sort by:</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="sort-select"
          >
            <option value="price">Price (Low to High)</option>
            <option value="rating">Rating (High to Low)</option>
          </select>
        </div>
      </div>

      <div className="results-content">
        <div className="cars-list">
          {sortedCars.map((car) => (
            <div key={car.id} className="car-card">
              <div className="car-image">
                <img
                  src={car.image}
                  alt={car.name}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/300x200/003b95/ffffff?text=" +
                      car.name;
                  }}
                />
                <div className="car-badge">{car.supplier}</div>
              </div>
              <div className="car-details">
                <div className="car-header">
                  <h3>{car.name}</h3>
                  <div className="car-rating">
                    <span className="rating-score">{car.rating}</span>
                    <span className="rating-label">Very good</span>
                    <span className="reviews-count">
                      ({car.reviews} reviews)
                    </span>
                  </div>
                </div>
                <p className="car-type">{car.type}</p>
                <div className="car-features">
                  {car.features.map((feature, index) => (
                    <span key={index} className="feature-tag">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="car-footer">
                  <div className="car-price">
                    <span className="price-amount">₹{car.price}</span>
                    <span className="price-period">per day</span>
                  </div>
                  <button
                    className="book-button"
                    onClick={() => handleBookCar(car)}
                  >
                    Book now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CarRentalResults;
