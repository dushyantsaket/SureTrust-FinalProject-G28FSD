import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./FlightSeatSelection.css";

function FlightSeatSelection() {
  const location = useLocation();
  const navigate = useNavigate();
  const { flight } = location.state || {};

  const [selectedSeats, setSelectedSeats] = useState({
    outbound: null,
    return: null,
  });

  // Generate seat map (6 rows, 3-3 configuration)
  const generateSeats = () => {
    const rows = ["A", "B", "C", "D", "E", "F"];
    const seats = [];
    for (let row = 1; row <= 6; row++) {
      for (let seat of rows) {
        const seatNumber = `${row}${seat}`;
        const isOccupied = Math.random() > 0.7; // 30% occupied
        const isPremium = row <= 2; // First 2 rows are premium
        seats.push({
          id: seatNumber,
          number: seatNumber,
          occupied: isOccupied,
          premium: isPremium,
          price: isPremium ? 500 : 0,
        });
      }
    }
    return seats;
  };

  const [outboundSeats] = useState(generateSeats());
  const [returnSeats] = useState(generateSeats());

  const handleSeatSelect = (seat, type) => {
    if (seat.occupied) return;
    setSelectedSeats((prev) => ({
      ...prev,
      [type]: seat,
    }));
  };

  const handleContinue = () => {
    navigate("/flight-class-selection", {
      state: {
        flight,
        seats: selectedSeats,
      },
    });
  };

  const handleSkip = () => {
    navigate("/flight-class-selection", {
      state: {
        flight,
        seats: null,
      },
    });
  };

  return (
    <div className="seat-selection-container">
      <div className="booking-progress">
        <div className="progress-step completed">
          <span>1</span>
          <label>Your details</label>
        </div>
        <div className="progress-step completed">
          <span>2</span>
          <label>Extras</label>
        </div>
        <div className="progress-step active">
          <span>3</span>
          <label>Select your seat</label>
        </div>
        <div className="progress-step">
          <span>4</span>
          <label>Check and pay</label>
        </div>
      </div>

      <div className="seat-selection-content">
        <div className="flight-summary">
          <h2>Select your seat</h2>
          <div className="route-info">
            {flight?.from} → {flight?.to}
          </div>
        </div>

        <div className="seat-maps">
          {/* Outbound Flight */}
          <div className="seat-map-section">
            <h3>
              {flight?.from} → {flight?.to}
            </h3>
            <p className="flight-duration">{flight?.duration} • {flight?.airline}</p>
            <div className="seat-map">
              <div className="seat-legend">
                <div className="legend-item">
                  <div className="seat-preview available"></div>
                  <span>Available</span>
                </div>
                <div className="legend-item">
                  <div className="seat-preview occupied"></div>
                  <span>Occupied</span>
                </div>
                <div className="legend-item">
                  <div className="seat-preview selected"></div>
                  <span>Selected</span>
                </div>
                <div className="legend-item">
                  <div className="seat-preview premium"></div>
                  <span>Premium (+₹500)</span>
                </div>
              </div>
              <div className="airplane-cabin">
                <div className="cabin-section">
                  <div className="seat-grid">
                    {outboundSeats.map((seat) => (
                      <button
                        key={seat.id}
                        className={`seat ${seat.occupied ? "occupied" : ""} ${
                          selectedSeats.outbound?.id === seat.id ? "selected" : ""
                        } ${seat.premium ? "premium" : ""}`}
                        onClick={() => handleSeatSelect(seat, "outbound")}
                        disabled={seat.occupied}
                      >
                        {seat.number}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="cabin-aisle">Aisle</div>
              </div>
            </div>
            {selectedSeats.outbound && (
              <div className="selected-seat-info">
                Selected: {selectedSeats.outbound.number}
                {selectedSeats.outbound.premium && " (Premium +₹500)"}
              </div>
            )}
          </div>

          {/* Return Flight (if round trip) */}
          {flight?.returnFlight && (
            <div className="seat-map-section">
              <h3>
                {flight?.to} → {flight?.from}
              </h3>
              <p className="flight-duration">{flight?.returnDuration} • {flight?.airline}</p>
              <div className="seat-map">
                <div className="airplane-cabin">
                  <div className="cabin-section">
                    <div className="seat-grid">
                      {returnSeats.map((seat) => (
                        <button
                          key={seat.id}
                          className={`seat ${seat.occupied ? "occupied" : ""} ${
                            selectedSeats.return?.id === seat.id ? "selected" : ""
                          } ${seat.premium ? "premium" : ""}`}
                          onClick={() => handleSeatSelect(seat, "return")}
                          disabled={seat.occupied}
                        >
                          {seat.number}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="cabin-aisle">Aisle</div>
                </div>
              </div>
              {selectedSeats.return && (
                <div className="selected-seat-info">
                  Selected: {selectedSeats.return.number}
                  {selectedSeats.return.premium && " (Premium +₹500)"}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="seat-selection-actions">
          <button className="skip-button" onClick={handleSkip}>
            Skip seat selection
          </button>
          <button className="continue-button" onClick={handleContinue}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default FlightSeatSelection;

