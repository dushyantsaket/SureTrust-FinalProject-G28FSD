import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./HotelConfirmation.css";

function HotelConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { hotel, searchParams, bookingData, totalPrice } = location.state || {};

  return (
    <div className="hotel-confirmation-container">
      <div className="confirmation-content">
        <div className="success-icon">✓</div>
        <h1>Booking Confirmed!</h1>
        <p className="confirmation-message">
          Your hotel booking has been successfully confirmed. A confirmation email has been sent to{" "}
          {bookingData?.email || "your email address"}.
        </p>

        <div className="booking-details-card">
          <h2>Booking Details</h2>

          <div className="hotel-summary-large">
            <img
              src={hotel?.image || "https://via.placeholder.com/200"}
              alt={hotel?.name}
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/200/003b95/ffffff?text=Hotel";
              }}
            />
            <div className="hotel-details-large">
              <h3>{hotel?.name}</h3>
              <div className="hotel-rating-large">
                <span className="rating-score">{hotel?.rating || 8.3}</span>
                <span className="rating-label">Very good</span>
                <span className="reviews-count">
                  ({hotel?.reviews || 1240} reviews)
                </span>
              </div>
              <div className="booking-dates-large">
                <div className="date-item">
                  <span className="date-label">Check-in:</span>
                  <span className="date-value">
                    {searchParams?.checkIn || "Mon 22 Dec 2025"}
                  </span>
                </div>
                <div className="date-item">
                  <span className="date-label">Check-out:</span>
                  <span className="date-value">
                    {searchParams?.checkOut || "Thu 15 Jan 2026"}
                  </span>
                </div>
                <div className="date-item">
                  <span className="date-label">Nights:</span>
                  <span className="date-value">
                    {searchParams?.nights || 1} nights
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="guest-details">
            <h3>Guest Information</h3>
            <div className="guest-info">
              <p>
                <strong>Name:</strong> {bookingData?.firstName}{" "}
                {bookingData?.lastName}
              </p>
              <p>
                <strong>Email:</strong> {bookingData?.email}
              </p>
              <p>
                <strong>Phone:</strong> {bookingData?.phone}
              </p>
            </div>
          </div>

          <div className="price-summary-large">
            <div className="price-row-large">
              <span>Total Paid</span>
              <span>₹{totalPrice?.toLocaleString() || "0"}</span>
            </div>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/" className="home-button">
            Back to Home
          </Link>
          <button className="download-button" onClick={() => window.print()}>
            Download Booking
          </button>
        </div>
      </div>
    </div>
  );
}

export default HotelConfirmation;

