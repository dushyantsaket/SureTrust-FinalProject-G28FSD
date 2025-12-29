// components/HomePage.js (Add Explore Button)
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    tripType: "round-trip",
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    travelers: "1 adult, 0 children",
    class: "Economy",
    directOnly: false,
  });

  const airports = [
    "Delhi (DEL)",
    "Mumbai (BOM)",
    "Bangalore (BLR)",
    "Hyderabad (HYD)",
    "Chennai (MAA)",
    "Kolkata (CCU)",
    "Goa (GOI)",
    "Pune (PNQ)",
    "London (LHR)",
    "Dubai (DXB)",
    "Singapore (SIN)",
    "Bangkok (BKK)",
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    navigate("/flights", { state: searchData });
  };

  const handleInputChange = (field, value) => {
    setSearchData((prev) => ({ ...prev, [field]: value }));
  };

  const handleExploreClick = () => {
    navigate("/explore");
  };

  return (
    <div className="homepage">
      <div className="hero-section">
        <h1 className="hero-title">Compare and book cheap flights with ease</h1>
        <p className="hero-subtitle">Discover your next dream destination</p>
      </div>

      <div className="search-container">
        <div className="search-tabs">
          <button
            className={`search-tab ${
              searchData.tripType === "round-trip" ? "active" : ""
            }`}
            onClick={() => handleInputChange("tripType", "round-trip")}
          >
            Round-trip
          </button>
          <button
            className={`search-tab ${
              searchData.tripType === "one-way" ? "active" : ""
            }`}
            onClick={() => handleInputChange("tripType", "one-way")}
          >
            One-way
          </button>
          <button
            className={`search-tab ${
              searchData.tripType === "multi-city" ? "active" : ""
            }`}
            onClick={() => handleInputChange("tripType", "multi-city")}
          >
            Multi-city
          </button>
        </div>

        <form className="search-form" onSubmit={handleSearch}>
          <div className="search-row">
            <div className="search-field">
              <label>Leaving from</label>
              <select
                value={searchData.from}
                onChange={(e) => handleInputChange("from", e.target.value)}
                required
              >
                <option value="">Select airport</option>
                {airports.map((airport) => (
                  <option key={airport} value={airport}>
                    {airport}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-field">
              <label>Going to</label>
              <select
                value={searchData.to}
                onChange={(e) => handleInputChange("to", e.target.value)}
                required
              >
                <option value="">Select airport</option>
                {airports.map((airport) => (
                  <option key={airport} value={airport}>
                    {airport}
                  </option>
                ))}
              </select>
            </div>

            <div className="search-field">
              <label>Departure</label>
              <input
                type="date"
                value={searchData.departDate}
                onChange={(e) =>
                  handleInputChange("departDate", e.target.value)
                }
                required
              />
            </div>

            {searchData.tripType === "round-trip" && (
              <div className="search-field">
                <label>Return</label>
                <input
                  type="date"
                  value={searchData.returnDate}
                  onChange={(e) =>
                    handleInputChange("returnDate", e.target.value)
                  }
                  required
                />
              </div>
            )}
          </div>

          <div className="search-row">
            <div className="search-field">
              <label>Travelers & Class</label>
              <select
                value={searchData.travelers}
                onChange={(e) => handleInputChange("travelers", e.target.value)}
              >
                <option>1 adult, 0 children, Economy</option>
                <option>2 adults, 0 children, Economy</option>
                <option>1 adult, 1 child, Economy</option>
                <option>2 adults, 2 children, Economy</option>
                <option>1 adult, 0 children, Business</option>
              </select>
            </div>

            <div className="search-field">
              <label>Class</label>
              <select
                value={searchData.class}
                onChange={(e) => handleInputChange("class", e.target.value)}
              >
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First Class</option>
              </select>
            </div>

            <div className="search-field checkbox-field">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={searchData.directOnly}
                  onChange={(e) =>
                    handleInputChange("directOnly", e.target.checked)
                  }
                />
                Direct flights only
              </label>
            </div>

            <div className="search-field">
              <button type="submit" className="search-btn">
                Search
              </button>
            </div>
          </div>
        </form>

        {/* Add Explore Button */}
        <div className="explore-section">
          <button onClick={handleExploreClick} className="explore-btn">
            Explore All Destinations →
          </button>
          <p className="explore-text">
            Discover 50+ cities across 30+ countries
          </p>
        </div>
      </div>

      <div className="popular-flights">
        <h2>Popular flights near you</h2>
        <div className="flight-cards">
          {[
            {
              from: "Delhi",
              to: "Mumbai",
              date: "20 Dec - 23 Dec",
              type: "Round trip",
            },
            {
              from: "Delhi",
              to: "Bangalore",
              date: "14 Dec - 16 Dec",
              type: "Round trip",
            },
            {
              from: "Delhi",
              to: "Hyderabad",
              date: "15 Dec - 16 Dec",
              type: "Round trip",
            },
            {
              from: "Delhi",
              to: "Goa",
              date: "22 Dec - 25 Dec",
              type: "Round trip",
            },
          ].map((flight, idx) => (
            <div key={idx} className="popular-flight-card">
              <div className="popular-flight-route">
                {flight.from} to {flight.to}
              </div>
              <div className="popular-flight-dates">{flight.date}</div>
              <div className="popular-flight-type">{flight.type}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
