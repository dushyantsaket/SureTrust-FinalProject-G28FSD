import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FlightPayment.css";

function FlightPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { flight, seats, class: selectedClass, price } = location.state || {};

  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment
    navigate("/flight-confirmation", {
      state: {
        flight,
        seats,
        class: selectedClass,
        price,
        paymentData,
      },
    });
  };

  return (
    <div className="payment-container">
      <div className="booking-progress">
        <div className="progress-step completed">
          <span>✓</span>
          <label>Your details</label>
        </div>
        <div className="progress-step completed">
          <span>✓</span>
          <label>Extras</label>
        </div>
        <div className="progress-step completed">
          <span>✓</span>
          <label>Select your seat</label>
        </div>
        <div className="progress-step active">
          <span>4</span>
          <label>Check and pay</label>
        </div>
      </div>

      <div className="payment-content">
        <div className="payment-main">
          <h2>Check and pay</h2>

          {/* Flight Details */}
          <div className="flight-details-section">
            <h3>Flight Details</h3>
            <div className="flight-card">
              <div className="flight-route">
                <div className="route-segment">
                  <div className="airport-code">{flight?.from}</div>
                  <div className="flight-time">{flight?.departTime}</div>
                  <div className="flight-date">{flight?.departDate}</div>
                </div>
                <div className="route-arrow">→</div>
                <div className="route-segment">
                  <div className="airport-code">{flight?.to}</div>
                  <div className="flight-time">{flight?.arriveTime}</div>
                  <div className="flight-date">{flight?.arriveDate}</div>
                </div>
              </div>
              <div className="flight-info">
                <span>{flight?.duration}</span>
                <span>•</span>
                <span>{selectedClass}</span>
                <span>•</span>
                <span>{flight?.airline}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="payment-form-section">
            <h3>Payment Details</h3>
            <form onSubmit={handleSubmit} className="payment-form">
              <div className="form-group">
                <label>Cardholder's Name *</label>
                <input
                  type="text"
                  name="cardName"
                  value={paymentData.cardName}
                  onChange={handleInputChange}
                  placeholder="Enter cardholder name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Card Number *</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={paymentData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                  required
                />
                <div className="card-icons">
                  <span>Visa</span>
                  <span>Mastercard</span>
                  <span>Amex</span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Expiry Date *</label>
                  <input
                    type="text"
                    name="expiryDate"
                    value={paymentData.expiryDate}
                    onChange={handleInputChange}
                    placeholder="MM/YY"
                    maxLength="5"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>CVC *</label>
                  <input
                    type="text"
                    name="cvv"
                    value={paymentData.cvv}
                    onChange={handleInputChange}
                    placeholder="123"
                    maxLength="4"
                    required
                  />
                </div>
              </div>

              <div className="terms-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  I agree to the terms and conditions and privacy policy
                </label>
              </div>

              <button type="submit" className="pay-button">
                Pay ₹{price?.toLocaleString()}
              </button>
            </form>
          </div>
        </div>

        {/* Price Summary Sidebar */}
        <div className="payment-sidebar">
          <div className="price-summary-card">
            <h3>Price Details</h3>
            <div className="price-breakdown">
              <div className="price-row">
                <span>Flight</span>
                <span>₹{price?.toLocaleString()}</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>₹{price?.toLocaleString()}</span>
              </div>
            </div>
            <div className="price-note">
              <p>✓ No hidden fees - here's what you'll pay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlightPayment;

