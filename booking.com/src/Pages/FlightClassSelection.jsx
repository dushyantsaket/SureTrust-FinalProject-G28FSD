import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FlightClassSelection.css";

function FlightClassSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { flight, seats } = location.state || {};

  const [selectedClass, setSelectedClass] = useState("economy");
  const [basePrice] = useState(flight?.price || 13470.98);

  const classOptions = [
    {
      id: "economy",
      name: "Economy",
      description: "Standard seating with essential amenities",
      price: 0,
      features: [
        "Standard legroom",
        "Personal item + Cabin bag",
        "Seat selection available",
        "Meal available for purchase",
      ],
    },
    {
      id: "business",
      name: "Business",
      description: "Premium comfort with extra space",
      price: basePrice * 2.5,
      features: [
        "Extra legroom",
        "Priority boarding",
        "Complimentary meals",
        "Free seat selection",
        "Lounge access",
      ],
    },
  ];

  const totalPrice = basePrice + (classOptions.find(c => c.id === selectedClass)?.price || 0);
  const seatPrice = (seats?.outbound?.premium ? 500 : 0) + (seats?.return?.premium ? 500 : 0);
  const finalPrice = totalPrice + seatPrice;

  const handleContinue = () => {
    navigate("/flight-payment", {
      state: {
        flight,
        seats,
        class: selectedClass,
        price: finalPrice,
      },
    });
  };

  return (
    <div className="class-selection-container">
      <div className="booking-progress">
        <div className="progress-step completed">
          <span>1</span>
          <label>Your details</label>
        </div>
        <div className="progress-step completed">
          <span>2</span>
          <label>Extras</label>
        </div>
        <div className="progress-step completed">
          <span>3</span>
          <label>Select your seat</label>
        </div>
        <div className="progress-step active">
          <span>4</span>
          <label>Check and pay</label>
        </div>
      </div>

      <div className="class-selection-content">
        <div className="flight-summary">
          <h2>Select your class</h2>
          <div className="route-info">
            {flight?.from} → {flight?.to}
          </div>
        </div>

        <div className="class-options">
          {classOptions.map((option) => (
            <div
              key={option.id}
              className={`class-card ${selectedClass === option.id ? "selected" : ""}`}
              onClick={() => setSelectedClass(option.id)}
            >
              <div className="class-header">
                <input
                  type="radio"
                  name="class"
                  value={option.id}
                  checked={selectedClass === option.id}
                  onChange={() => setSelectedClass(option.id)}
                />
                <div className="class-info">
                  <h3>{option.name}</h3>
                  <p>{option.description}</p>
                </div>
                <div className="class-price">
                  {option.price > 0 ? (
                    <>
                      <span className="price-label">+₹{option.price.toLocaleString()}</span>
                      <span className="price-note">per person</span>
                    </>
                  ) : (
                    <span className="price-label">Included</span>
                  )}
                </div>
              </div>
              <div className="class-features">
                <ul>
                  {option.features.map((feature, index) => (
                    <li key={index}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="price-summary">
          <h3>Price Summary</h3>
          <div className="price-breakdown">
            <div className="price-row">
              <span>Base fare ({selectedClass})</span>
              <span>₹{basePrice.toLocaleString()}</span>
            </div>
            {classOptions.find(c => c.id === selectedClass)?.price > 0 && (
              <div className="price-row">
                <span>Class upgrade</span>
                <span>+₹{classOptions.find(c => c.id === selectedClass).price.toLocaleString()}</span>
              </div>
            )}
            {seatPrice > 0 && (
              <div className="price-row">
                <span>Seat selection</span>
                <span>+₹{seatPrice.toLocaleString()}</span>
              </div>
            )}
            <div className="price-row total">
              <span>Total</span>
              <span>₹{finalPrice.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="class-selection-actions">
          <button className="back-button" onClick={() => navigate(-1)}>
            Back
          </button>
          <button className="continue-button" onClick={handleContinue}>
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightClassSelection;

