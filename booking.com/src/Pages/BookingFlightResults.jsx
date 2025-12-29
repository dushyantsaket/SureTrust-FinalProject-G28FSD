// components/BookingFlightResults.js
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./BookingFlightResults.css";

// Extended flight data with more details matching Booking.com
const bookingFlights = [
  {
    id: 1,
    airlines: ["IndiGo", "Air India"],
    airlineLogos: ["6E", "AI"],
    departTime: "08:40",
    arriveTime: "14:10",
    duration: "5h 30m",
    departDate: "14 Jan",
    arriveDate: "14 Jan",
    departAirport: "RPR",
    arriveAirport: "HDO",
    stops: 1,
    price: 29450.37,
    badges: ["Best", "Fastest"],
    inclusions: ["Personal item", "Cabin bag"],
    operatedBy: "Air India Express",
    flexibleTicket: false,
  },
  {
    id: 2,
    airlines: ["IndiGo"],
    airlineLogos: ["6E"],
    departTime: "21:15",
    arriveTime: "12:55",
    duration: "15h 40m",
    departDate: "14 Jan",
    arriveDate: "15 Jan",
    departAirport: "RPR",
    arriveAirport: "HDO",
    stops: 2,
    price: 27979.94,
    badges: [],
    inclusions: ["Personal item", "Cabin bag"],
    operatedBy: "Air India Express",
    flexibleTicket: false,
  },
  {
    id: 3,
    airlines: ["IndiGo", "Air India"],
    airlineLogos: ["6E", "AI"],
    departTime: "08:40",
    arriveTime: "14:10",
    duration: "5h 30m",
    departDate: "14 Jan",
    arriveDate: "14 Jan",
    departAirport: "RPR",
    arriveAirport: "HDO",
    stops: 1,
    price: 30670.95,
    badges: [],
    inclusions: ["Personal item", "Cabin bag"],
    operatedBy: "Air India Express",
    flexibleTicket: false,
  },
  {
    id: 4,
    airlines: ["IndiGo", "Air India"],
    airlineLogos: ["6E", "AI"],
    departTime: "08:40",
    arriveTime: "14:10",
    duration: "5h 30m",
    departDate: "14 Jan",
    arriveDate: "14 Jan",
    departAirport: "RPR",
    arriveAirport: "HDO",
    stops: 1,
    price: 27742.51,
    badges: ["Flexible ticket upgrade available"],
    inclusions: ["Personal item", "Cabin bag"],
    operatedBy: "Air India Express",
    flexibleTicket: true,
  },
  {
    id: 5,
    airlines: ["IndiGo"],
    airlineLogos: ["6E"],
    departTime: "20:30",
    arriveTime: "10:55",
    duration: "14h 25m",
    departDate: "14 Jan",
    arriveDate: "15 Jan",
    departAirport: "RPR",
    arriveAirport: "HDO",
    stops: 2,
    price: 30500.03,
    badges: [],
    inclusions: ["Personal item", "Cabin bag"],
    operatedBy: "Air India Express",
    flexibleTicket: false,
  },
  {
    id: 6,
    airlines: ["IndiGo", "Air India"],
    airlineLogos: ["6E", "AI"],
    departTime: "08:40",
    arriveTime: "14:10",
    duration: "5h 30m",
    departDate: "14 Jan",
    arriveDate: "14 Jan",
    departAirport: "RPR",
    arriveAirport: "HDO",
    stops: 1,
    price: 31579.49,
    badges: [],
    inclusions: ["Personal item", "Cabin bag"],
    operatedBy: "Air India Express",
    flexibleTicket: false,
  },
  {
    id: 7,
    airlines: ["IndiGo"],
    airlineLogos: ["6E"],
    departTime: "13:45",
    arriveTime: "10:30",
    duration: "20h 45m",
    departDate: "21 Jan",
    arriveDate: "22 Jan",
    departAirport: "HDO",
    arriveAirport: "RPR",
    stops: 2,
    price: 32255.31,
    badges: [],
    inclusions: ["Personal item", "Cabin bag"],
    operatedBy: "Air India Express",
    flexibleTicket: false,
  },
  {
    id: 8,
    airlines: ["IndiGo", "Air India"],
    airlineLogos: ["6E", "AI"],
    departTime: "08:40",
    arriveTime: "14:10",
    duration: "5h 30m",
    departDate: "14 Jan",
    arriveDate: "14 Jan",
    departAirport: "RPR",
    arriveAirport: "HDO",
    stops: 1,
    price: 33908.72,
    badges: [],
    inclusions: ["Personal item", "Cabin bag"],
    operatedBy: "Air India Express",
    flexibleTicket: false,
  },
  {
    id: 9,
    airlines: ["Air India", "IndiGo"],
    airlineLogos: ["AI", "6E"],
    departTime: "15:00",
    arriveTime: "20:15",
    duration: "5h 15m",
    departDate: "21 Jan",
    arriveDate: "21 Jan",
    departAirport: "HDO",
    arriveAirport: "RPR",
    stops: 1,
    price: 27500.25,
    badges: ["Best"],
    inclusions: ["Personal item", "Cabin bag", "Checked bag"],
    operatedBy: "Air India Express",
    flexibleTicket: true,
  },
  {
    id: 10,
    airlines: ["Vistara"],
    airlineLogos: ["UK"],
    departTime: "09:25",
    arriveTime: "11:15",
    duration: "1h 50m",
    departDate: "14 Jan",
    arriveDate: "14 Jan",
    departAirport: "DEL",
    arriveAirport: "BOM",
    stops: 0,
    price: 35600.5,
    badges: ["Fastest", "Direct"],
    inclusions: ["Personal item", "Cabin bag", "Meal"],
    operatedBy: "Vistara",
    flexibleTicket: true,
  },
];

// Alternative dates data
const alternativeDates = [
  { dates: "11 Jan-18 Jan", price: 30688 },
  { dates: "12 Jan-19 Jan", price: 29838 },
  { dates: "13 Jan-20 Jan", price: 27672, lowest: true },
  { dates: "15 Jan-22 Jan", price: 29813 },
  { dates: "16 Jan-23 Jan", price: 31732 },
  { dates: "17 Jan-24 Jan", price: 32346, highest: true },
];

function BookingFlightResults() {
  const location = useLocation();
  const navigate = useNavigate();
  const search = location.state || {};
  const [flights, setFlights] = useState(bookingFlights);
  const [sortBy, setSortBy] = useState("best");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilters, setSelectedFilters] = useState({
    stops: "any",
    airlines: {
      indigo: true,
      airindia: true,
      vistara: true,
      akasa: true,
      spicejet: true,
    },
    priceRange: [0, 50000],
    departureTime: [],
    baggage: [],
  });

  const [showSearchSummary, setShowSearchSummary] = useState(false);

  useEffect(() => {
    // Apply sorting
    let sortedFlights = [...bookingFlights];

    if (sortBy === "cheapest") {
      sortedFlights.sort((a, b) => a.price - b.price);
    } else if (sortBy === "fastest") {
      sortedFlights.sort((a, b) => {
        const aTime =
          parseInt(a.duration) * (a.duration.includes("h") ? 60 : 1);
        const bTime =
          parseInt(b.duration) * (b.duration.includes("h") ? 60 : 1);
        return aTime - bTime;
      });
    } else if (sortBy === "best") {
      // Best sort: combination of price, duration, and stops
      sortedFlights.sort((a, b) => {
        const aScore =
          a.price / 1000 + (parseInt(a.duration) || 0) + a.stops * 2;
        const bScore =
          b.price / 1000 + (parseInt(b.duration) || 0) + b.stops * 2;
        return aScore - bScore;
      });
    }

    setFlights(sortedFlights);
  }, [sortBy]);

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => ({ ...prev, [filterType]: value }));
  };

  const handleAirlineToggle = (airline) => {
    setSelectedFilters((prev) => ({
      ...prev,
      airlines: { ...prev.airlines, [airline]: !prev.airlines[airline] },
    }));
  };

  const handleViewDetails = (flight) => {
    // Navigate to seat selection with flight data
    navigate("/flight-seat-selection", {
      state: {
        flight: {
          ...flight,
          from: search.from || flight.departAirport,
          to: search.to || flight.arriveAirport,
          departTime: flight.departTime,
          arriveTime: flight.arriveTime,
          departDate: flight.departDate,
          arriveDate: flight.arriveDate,
          duration: flight.duration,
          airline: flight.airlines[0] || "Airline",
          price: flight.price,
        },
        search,
      },
    });
  };

  const renderAirlineLogos = (logos) => {
    if (logos.length === 1) {
      return (
        <div className="airline-group single-airline">
          <img
            src={`https://r-xx.bstatic.com/data/airlines_logo/${logos[0]}.png`}
            alt="Airline"
            className="airline-logo"
          />
        </div>
      );
    }

    return (
      <div className="airline-group multiple-airlines">
        {logos.map((logo, idx) => (
          <img
            key={idx}
            src={`https://r-xx.bstatic.com/data/airlines_logo/${logo}.png`}
            alt="Airline"
            className={`airline-logo ${
              idx === logos.length - 1 ? "last-logo" : ""
            }`}
          />
        ))}
      </div>
    );
  };

  const renderBadges = (badges) => {
    if (!badges || badges.length === 0) return null;

    return (
      <div className="flight-badges">
        {badges.map((badge, idx) => (
          <span
            key={idx}
            className={`badge ${
              badge.includes("Flexible")
                ? "constructive"
                : badge.includes("Best")
                ? "brand-primary"
                : "neutral"
            }`}
          >
            {badge}
          </span>
        ))}
      </div>
    );
  };

  const renderInclusions = (inclusions) => {
    return (
      <div className="flight-inclusions">
        {inclusions.map((inclusion, idx) => (
          <div key={idx} className="inclusion-item" title={inclusion}>
            <span className="inclusion-icon">✓</span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="booking-results-container">
      {/* Search Summary */}
      <div className="search-summary-section">
        <button
          className="summary-toggle"
          onClick={() => setShowSearchSummary(!showSearchSummary)}
        >
          <span>Search summary</span>
          <span className="toggle-icon">{showSearchSummary ? "−" : "+"}</span>
        </button>
        {showSearchSummary && (
          <div className="summary-content">
            <p>
              Get a quick overview of how the number of stops affects prices for
              your search.
            </p>
            <button className="view-summary-btn">View summary</button>
          </div>
        )}
      </div>

      <div className="results-layout">
        {/* Left Filters Panel */}
        <aside className="filters-panel">
          <div className="filters-header">
            <h3>Filters</h3>
            <div className="results-count">
              Showing {flights.length} results
            </div>
          </div>

          {/* Stops Filter */}
          <div className="filter-section">
            <h4>Stops</h4>
            <div className="stop-options">
              <label className="stop-option">
                <input
                  type="radio"
                  name="stops"
                  checked={selectedFilters.stops === "any"}
                  onChange={() => handleFilterChange("stops", "any")}
                />
                <div className="stop-label">
                  <span>Any</span>
                  <span className="stop-price">From INR12,678.57</span>
                </div>
              </label>
              <label className="stop-option">
                <input
                  type="radio"
                  name="stops"
                  checked={selectedFilters.stops === "direct"}
                  onChange={() => handleFilterChange("stops", "direct")}
                />
                <div className="stop-label">
                  <span>Direct only</span>
                  <span className="stop-price">From INR12,678.57</span>
                </div>
              </label>
              <label className="stop-option">
                <input
                  type="radio"
                  name="stops"
                  checked={selectedFilters.stops === "1stop"}
                  onChange={() => handleFilterChange("stops", "1stop")}
                />
                <div className="stop-label">
                  <span>1 stop max</span>
                  <span className="stop-price">From INR12,678.57</span>
                </div>
              </label>
            </div>
          </div>

          {/* Airlines Filter */}
          <div className="filter-section">
            <h4>Airlines</h4>
            <div className="airline-options">
              <label className="airline-option">
                <input
                  type="checkbox"
                  checked={selectedFilters.airlines.indigo}
                  onChange={() => handleAirlineToggle("indigo")}
                />
                <span>IndiGo</span>
              </label>
              <label className="airline-option">
                <input
                  type="checkbox"
                  checked={selectedFilters.airlines.airindia}
                  onChange={() => handleAirlineToggle("airindia")}
                />
                <span>Air India</span>
              </label>
              <label className="airline-option">
                <input
                  type="checkbox"
                  checked={selectedFilters.airlines.akasa}
                  onChange={() => handleAirlineToggle("akasa")}
                />
                <span>Akasa Air</span>
              </label>
              <label className="airline-option">
                <input
                  type="checkbox"
                  checked={selectedFilters.airlines.airindiaexpress}
                  onChange={() => handleAirlineToggle("airindiaexpress")}
                />
                <span>Air India Express</span>
              </label>
              <label className="airline-option">
                <input
                  type="checkbox"
                  checked={selectedFilters.airlines.spicejet}
                  onChange={() => handleAirlineToggle("spicejet")}
                />
                <span>SpiceJet</span>
              </label>
            </div>
          </div>

          {/* Flight Times Filter */}
          <div className="filter-section">
            <h4>Flight times</h4>
            <div className="flight-times-grid">
              <div className="flight-time-column">
                <div className="column-header">Departing flight</div>
                <div className="time-option">
                  <span>12:00 AM-5:59 AM</span>
                  <span className="flight-count">300</span>
                </div>
                <div className="time-option">
                  <span>6:00 AM-11:59 AM</span>
                  <span className="flight-count">583</span>
                </div>
                <div className="time-option">
                  <span>12:00 PM-5:59 PM</span>
                  <span className="flight-count">646</span>
                </div>
                <div className="time-option">
                  <span>6:00 PM-11:59 PM</span>
                  <span className="flight-count">467</span>
                </div>
              </div>
              <div className="flight-time-column">
                <div className="column-header">Return flight</div>
                <div className="time-option">
                  <input type="checkbox" />
                  <span>12:00 AM-5:59 AM</span>
                </div>
                <div className="time-option">
                  <input type="checkbox" />
                  <span>6:00 AM-11:59 AM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Price Range Filter */}
          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="price-range">
              <div className="price-labels">
                <span>
                  INR {selectedFilters.priceRange[0].toLocaleString()}
                </span>
                <span>
                  INR {selectedFilters.priceRange[1].toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="50000"
                step="1000"
                value={selectedFilters.priceRange[1]}
                onChange={(e) =>
                  handleFilterChange("priceRange", [
                    0,
                    parseInt(e.target.value),
                  ])
                }
                className="price-slider"
              />
            </div>
          </div>
        </aside>

        {/* Main Results Area */}
        <main className="results-main">
          {/* Tabs */}
          <div className="results-tabs">
            <div className="tabs-container">
              <button
                className={`tab ${sortBy === "best" ? "active" : ""}`}
                onClick={() => setSortBy("best")}
              >
                <span>Best</span>
                <span className="tab-icon">ⓘ</span>
              </button>
              <button
                className={`tab ${sortBy === "cheapest" ? "active" : ""}`}
                onClick={() => setSortBy("cheapest")}
              >
                Cheapest
              </button>
              <button
                className={`tab ${sortBy === "fastest" ? "active" : ""}`}
                onClick={() => setSortBy("fastest")}
              >
                Fastest
              </button>
            </div>
          </div>

          {/* Alternative Dates Carousel */}
          <div className="alternative-dates-section">
            <div className="alternative-dates-header">
              <img
                src="https://t-cf.bstatic.com/design-assets/assets/v3.161.0/illustrations-traveller/FlightsSearch.png"
                alt="Calendar"
                className="calendar-icon"
              />
              <div>
                <h3>We found a better price! Compare nearby dates.</h3>
                <p>
                  Latest prices found for your search - actual prices shown on
                  next step
                </p>
              </div>
            </div>
            <div className="alternative-dates-carousel">
              <button className="carousel-nav prev" aria-label="Previous dates">
                ‹
              </button>
              <div className="dates-container">
                {alternativeDates.map((date, idx) => (
                  <a key={idx} href="#" className="date-option">
                    <div
                      className={`date-card ${
                        date.lowest ? "lowest" : date.highest ? "highest" : ""
                      }`}
                    >
                      <div className="date-range">{date.dates}</div>
                      <div
                        className={`date-price ${
                          date.lowest
                            ? "lowest-price"
                            : date.highest
                            ? "highest-price"
                            : ""
                        }`}
                      >
                        INR{date.price.toLocaleString()}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
              <button className="carousel-nav next" aria-label="Next dates">
                ›
              </button>
            </div>
          </div>

          {/* Flight Cards */}
          <div className="flight-cards-container">
            {flights.map((flight) => (
              <div key={flight.id} className="flight-card">
                <div className="flight-card-content">
                  {/* Left Side: Flight Details */}
                  <div className="flight-details">
                    {renderBadges(flight.badges)}

                    <div className="flight-segments">
                      {/* Departure Segment */}
                      <div className="flight-segment">
                        <div className="segment-left">
                          {renderAirlineLogos(flight.airlineLogos)}
                          <div className="segment-info">
                            <div className="segment-time">
                              {flight.departTime}
                            </div>
                            <div className="segment-airport">
                              {flight.departAirport} · {flight.departDate}
                            </div>
                          </div>
                        </div>

                        <div className="segment-middle">
                          <div className="segment-duration">
                            <span className="stop-badge">
                              {flight.stops}{" "}
                              {flight.stops === 1 ? "stop" : "stops"}
                            </span>
                            <div className="duration-text">
                              {flight.duration}
                            </div>
                          </div>
                          <div className="segment-line">
                            <div className="line"></div>
                          </div>
                        </div>

                        <div className="segment-right">
                          <div className="segment-info">
                            <div className="segment-time">
                              {flight.arriveTime}
                            </div>
                            <div className="segment-airport">
                              {flight.arriveAirport} · {flight.arriveDate}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Return Segment (for round trips) */}
                      {flight.returnDepartTime && (
                        <div className="flight-segment return-segment">
                          <div className="segment-left">
                            {renderAirlineLogos(
                              flight.returnAirlineLogos || flight.airlineLogos
                            )}
                            <div className="segment-info">
                              <div className="segment-time">
                                {flight.returnDepartTime}
                              </div>
                              <div className="segment-airport">
                                {flight.returnDepartAirport} ·{" "}
                                {flight.returnDepartDate}
                              </div>
                            </div>
                          </div>

                          <div className="segment-middle">
                            <div className="segment-duration">
                              <span className="stop-badge">
                                {flight.returnStops}{" "}
                                {flight.returnStops === 1 ? "stop" : "stops"}
                              </span>
                              <div className="duration-text">
                                {flight.returnDuration}
                              </div>
                            </div>
                            <div className="segment-line">
                              <div className="line"></div>
                            </div>
                          </div>

                          <div className="segment-right">
                            <div className="segment-info">
                              <div className="segment-time">
                                {flight.returnArriveTime}
                              </div>
                              <div className="segment-airport">
                                {flight.returnArriveAirport} ·{" "}
                                {flight.returnArriveDate}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flight-carriers">
                      {flight.airlines.join(", ")}
                      {flight.operatedBy &&
                        `, operated by ${flight.operatedBy}`}
                    </div>
                  </div>

                  {/* Right Side: Price and Actions */}
                  <div className="flight-pricing">
                    <div className="pricing-top">
                      {renderInclusions(flight.inclusions)}
                      <div className="price-section">
                        <div className="price-amount">
                          INR
                          {flight.price.toLocaleString("en-IN", {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </div>
                        <button
                          className="price-breakdown"
                          title="Open price breakdown"
                        >
                          ⓘ
                        </button>
                      </div>
                    </div>
                    <button
                      className="view-details-btn"
                      onClick={() => handleViewDetails(flight)}
                    >
                      View details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pagination">
            <button className="pagination-nav prev disabled" disabled>
              ‹
            </button>
            <div className="pagination-pages">
              {[1, 2, 3, 4, 5, 6, 7, 8, "...", 16, 17].map((page, idx) => (
                <button
                  key={idx}
                  className={`pagination-page ${page === 1 ? "active" : ""} ${
                    page === "..." ? "ellipsis" : ""
                  }`}
                  onClick={() =>
                    typeof page === "number" && setCurrentPage(page)
                  }
                >
                  {page}
                </button>
              ))}
            </div>
            <button className="pagination-nav next">›</button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default BookingFlightResults;
