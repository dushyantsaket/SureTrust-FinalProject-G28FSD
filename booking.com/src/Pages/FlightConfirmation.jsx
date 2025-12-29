import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import "./FlightConfirmation.css";

function FlightConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { flight, seats, class: selectedClass, price } = location.state || {};

  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <div className="success-icon">✓</div>
        <h1>Booking Confirmed!</h1>
        <p className="confirmation-message">
          Your flight has been successfully booked. A confirmation email has
          been sent to your registered email address.
        </p>

        <div className="booking-details-card">
          <h2>Booking Details</h2>

          <div className="flight-summary">
            <div className="flight-route-large">
              <div className="route-segment-large">
                <div className="airport-code-large">{flight?.from}</div>
                <div className="flight-time-large">{flight?.departTime}</div>
                <div className="flight-date-large">{flight?.departDate}</div>
              </div>
              <div className="route-arrow-large">→</div>
              <div className="route-segment-large">
                <div className="airport-code-large">{flight?.to}</div>
                <div className="flight-time-large">{flight?.arriveTime}</div>
                <div className="flight-date-large">{flight?.arriveDate}</div>
              </div>
            </div>

            <div className="flight-details-list">
              <div className="detail-item">
                <span className="detail-label">Class:</span>
                <span className="detail-value">{selectedClass}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Duration:</span>
                <span className="detail-value">{flight?.duration}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Airline:</span>
                <span className="detail-value">{flight?.airline}</span>
              </div>
              {seats?.outbound && (
                <div className="detail-item">
                  <span className="detail-label">Seat (Outbound):</span>
                  <span className="detail-value">{seats.outbound.number}</span>
                </div>
              )}
              {seats?.return && (
                <div className="detail-item">
                  <span className="detail-label">Seat (Return):</span>
                  <span className="detail-value">{seats.return.number}</span>
                </div>
              )}
            </div>
          </div>

          <div className="price-summary-large">
            <div className="price-row-large">
              <span>Total Paid</span>
              <span>₹{price?.toLocaleString()}</span>
            </div>
          </div>
        </div>

        <div className="confirmation-actions">
          <Link to="/" className="home-button">
            Back to Home
          </Link>
          <button className="download-button" onClick={() => window.print()}>
            Download Ticket
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightConfirmation;
