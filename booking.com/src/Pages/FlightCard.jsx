import { Plane } from "lucide-react";
import "./FlightCard.css";

export default function FlightCard({ flight }) {
  if (!flight) return null;

  const departureTime = flight.departure_time
    ? new Date(flight.departure_time)
    : null;

  const arrivalTime = flight.arrival_time
    ? new Date(flight.arrival_time)
    : null;

  const durationMinutes = flight.duration_minutes || 0;
  const hours = Math.floor(durationMinutes / 60);
  const minutes = durationMinutes % 60;

  return (
    <div className="flight-card">
      <div className="flight-card__container">
        {/* MAIN TIMELINE */}
        <div className="flight-card__main">
          <div className="flight-card__timeline">
            {/* DEPARTURE */}
            <div className="flight-card__time-container">
              <div className="flight-card__time">
                {departureTime
                  ? departureTime.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : "--"}
              </div>
              <div className="flight-card__airport">
                {flight.departure_airport || "N/A"}
              </div>
            </div>

            {/* ROUTE */}
            <div className="flight-card__route">
              <div className="flight-card__route-line">
                <div className="flight-card__line"></div>

                <div className="flight-card__stops-badge">
                  <Plane className="flight-card__stops-icon" />
                  <span className="flight-card__stops-text">
                    {flight.stops === 0
                      ? "Direct"
                      : `${flight.stops || 0} stop${
                          flight.stops > 1 ? "s" : ""
                        }`}
                  </span>
                </div>

                <div className="flight-card__line"></div>
              </div>

              <div className="flight-card__duration">
                {hours}h {minutes}m
              </div>
            </div>

            {/* ARRIVAL */}
            <div className="flight-card__time-container">
              <div className="flight-card__time">
                {arrivalTime
                  ? arrivalTime.toLocaleTimeString("en-US", {
                      hour: "numeric",
                      minute: "2-digit",
                      hour12: true,
                    })
                  : "--"}
              </div>
              <div className="flight-card__airport">
                {flight.arrival_airport || "N/A"}
              </div>
            </div>
          </div>

          {/* AIRLINE INFO */}
          <div className="flight-card__airline-info">
            <div className="flight-card__airline-logo">
              <Plane className="flight-card__airline-icon" />
            </div>

            <div className="flight-card__airline-details">
              <div className="flight-card__airline-name">
                {flight.airline || "Unknown Airline"}
              </div>
              <div className="flight-card__flight-number">
                {flight.flight_number || "—"}
              </div>
            </div>
          </div>
        </div>

        {/* PRICING */}
        <div className="flight-card__pricing">
          <div className="flight-card__badge">Saver</div>

          <div className="flight-card__price">
            ₹{(flight.price || 0).toLocaleString()}
          </div>

          <button className="flight-card__details-btn">View details</button>

          <button className="flight-card__options-link">
            Explore ticket options
          </button>
        </div>
      </div>
    </div>
  );
}
