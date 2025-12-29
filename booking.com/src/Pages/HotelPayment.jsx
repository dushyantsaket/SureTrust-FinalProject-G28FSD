import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HotelPayment.css";

function HotelPayment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel, searchParams, bookingData } = location.state || {};

  const [paymentData, setPaymentData] = useState({
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const basePrice = hotel?.price || 5000;
  const nights = searchParams?.nights || 1;
  const totalPrice = basePrice * nights * 1.18; // Including taxes

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/hotel-confirmation", {
      state: {
        hotel,
        searchParams,
        bookingData,
        paymentData,
        totalPrice,
      },
    });
  };

  return (
    <div className="hotel-payment-container">
      <div className="booking-progress">
        <div className="progress-step completed">
          <span>✓</span>
          <label>Your selection</label>
        </div>
        <div className="progress-step completed">
          <span>✓</span>
          <label>Your details</label>
        </div>
        <div className="progress-step active">
          <span>3</span>
          <label>Finish booking</label>
        </div>
      </div>

      <div className="payment-content">
        <div className="payment-main">
          <h2>Finish booking</h2>

          <div className="hotel-summary">
            <img
              src={hotel?.image || "https://via.placeholder.com/150"}
              alt={hotel?.name}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/150/003b95/ffffff?text=Hotel";
              }}
            />
            <div className="hotel-info">
              <h3>{hotel?.name}</h3>
              <div className="booking-dates">
                <span>Check-in: {searchParams?.checkIn || "Mon 22 Dec 2025"}</span>
                <span>Check-out: {searchParams?.checkOut || "Thu 15 Jan 2026"}</span>
                <span>{nights} nights</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="payment-form">
            <h3>Payment Details</h3>
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
              Pay ₹{totalPrice.toLocaleString()}
            </button>
          </form>
        </div>

        <div className="payment-sidebar">
          <div className="price-summary-card">
            <h3>Price Details</h3>
            <div className="price-breakdown">
              <div className="price-row">
                <span>Room price ({nights} nights)</span>
                <span>₹{(basePrice * nights).toLocaleString()}</span>
              </div>
              <div className="price-row">
                <span>Taxes and charges</span>
                <span>₹{(basePrice * nights * 0.18).toLocaleString()}</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString()}</span>
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

export default HotelPayment;

