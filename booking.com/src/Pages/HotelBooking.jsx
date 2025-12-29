import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./HotelBooking.css";

function HotelBooking() {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel, searchParams } = location.state || {};

  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "India",
    specialRequests: "",
    arrivalTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/hotel-payment", {
      state: {
        hotel,
        searchParams,
        bookingData,
      },
    });
  };

  const basePrice = hotel?.price || 5000;
  const nights = searchParams?.nights || 1;
  const totalPrice = basePrice * nights;

  return (
    <div className="hotel-booking-container">
      <div className="booking-progress">
        <div className="progress-step completed">
          <span>✓</span>
          <label>Your selection</label>
        </div>
        <div className="progress-step active">
          <span>2</span>
          <label>Your details</label>
        </div>
        <div className="progress-step">
          <span>3</span>
          <label>Finish booking</label>
        </div>
      </div>

      <div className="booking-content">
        <div className="booking-main">
          <h2>Your details</h2>

          <div className="hotel-summary-card">
            <img
              src={hotel?.image || "https://via.placeholder.com/200x150"}
              alt={hotel?.name}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/200x150/003b95/ffffff?text=Hotel";
              }}
            />
            <div className="hotel-summary-info">
              <h3>{hotel?.name}</h3>
              <div className="hotel-rating">
                <span className="rating-score">{hotel?.rating || 8.3}</span>
                <span className="rating-label">Very good</span>
                <span className="reviews-count">
                  ({hotel?.reviews || 1240} reviews)
                </span>
              </div>
              <div className="booking-dates">
                <span>
                  Check-in: {searchParams?.checkIn || "Mon 22 Dec 2025"}
                </span>
                <span>
                  Check-out: {searchParams?.checkOut || "Thu 15 Jan 2026"}
                </span>
                <span>{nights} nights</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="booking-form">
            <div className="form-section">
              <h3>Contact details</h3>
              <div className="form-row">
                <div className="form-group">
                  <label>First name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={bookingData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Last name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={bookingData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Email address *</label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                />
                <p className="helper-text">
                  Confirmation email goes to this address
                </p>
              </div>
              <div className="form-group">
                <label>Phone number *</label>
                <div className="phone-input">
                  <select
                    name="country"
                    value={bookingData.country}
                    onChange={handleInputChange}
                  >
                    <option value="India">IN +91</option>
                    <option value="US">US +1</option>
                    <option value="UK">UK +44</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={bookingData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    required
                  />
                </div>
                <p className="helper-text">
                  To verify your booking, and for the property to connect if
                  needed
                </p>
              </div>
            </div>

            <div className="form-section">
              <h3>Special requests (optional)</h3>
              <textarea
                name="specialRequests"
                value={bookingData.specialRequests}
                onChange={handleInputChange}
                placeholder="Please write your requests in English..."
                rows={4}
              />
            </div>

            <div className="form-section">
              <h3>Your arrival time (optional)</h3>
              <select
                name="arrivalTime"
                value={bookingData.arrivalTime}
                onChange={handleInputChange}
              >
                <option value="">Please select</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
              </select>
            </div>

            <button type="submit" className="continue-button">
              Continue to payment
            </button>
          </form>
        </div>

        <div className="booking-sidebar">
          <div className="price-summary-card">
            <h3>Price summary</h3>
            <div className="price-breakdown">
              <div className="price-row">
                <span>Room price ({nights} nights)</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="price-row">
                <span>Taxes and charges</span>
                <span>₹{(totalPrice * 0.18).toLocaleString()}</span>
              </div>
              <div className="price-row total">
                <span>Total</span>
                <span>₹{(totalPrice * 1.18).toLocaleString()}</span>
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

export default HotelBooking;

