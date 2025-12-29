// components/BookingFlightResults.jsx
import React from "react";
import "./FlightsResult.css";

function BookingFlightResults() {
  return (
    <div className="flights-results-container">
      {/* Navigation Tabs */}
      <div className="flights-nav-tabs">
        <button className="nav-tab active">Flights</button>
        <button className="nav-tab">Flight + Hotel</button>
        <button className="nav-tab">Car rental</button>
        <button className="nav-tab">Attractions</button>
        <button className="nav-tab">Airport taxis</button>
      </div>

      {/* Search Summary */}
      <div className="search-summary">
        <h3>Search summary</h3>
        <p>
          Get a quick overview of how the number of stops affects prices for
          your search.
        </p>
        <button className="view-summary-btn">View summary</button>
      </div>

      <div className="results-layout">
        {/* Filters Section */}
        <div className="filters-section">
          <div className="filters-panel">
            <div className="results-count">Showing 1996 results</div>

            {/* Stops Filter */}
            <div className="filter-group">
              <div className="filter-title">Stops</div>
              <div className="checkbox-item">
                <label className="checkbox-label">
                  <div className="custom-checkbox checked"></div>
                  Any
                </label>
                <span className="checkbox-price">From INR12,678.57</span>
              </div>
              <div className="checkbox-item">
                <label className="checkbox-label">
                  <div className="custom-checkbox"></div>
                  Direct only
                </label>
                <span className="checkbox-price">From INR12,678.57</span>
              </div>
              <div className="checkbox-item">
                <label className="checkbox-label">
                  <div className="custom-checkbox"></div>1 stop max
                </label>
                <span className="checkbox-price">From INR12,678.57</span>
              </div>
            </div>

            {/* Airlines Filter */}
            <div className="filter-group">
              <div className="filter-title">Airlines</div>
              <div className="checkbox-item">
                <label className="checkbox-label">
                  <div className="custom-checkbox checked"></div>
                  IndiGo
                </label>
              </div>
              <div className="checkbox-item">
                <label className="checkbox-label">
                  <div className="custom-checkbox checked"></div>
                  Air India
                </label>
              </div>
              <div className="checkbox-item">
                <label className="checkbox-label">
                  <div className="custom-checkbox checked"></div>
                  Akasa Air
                </label>
              </div>
              <div className="checkbox-item">
                <label className="checkbox-label">
                  <div className="custom-checkbox checked"></div>
                  Air India Express
                </label>
              </div>
              <div className="checkbox-item">
                <label className="checkbox-label">
                  <div className="custom-checkbox checked"></div>
                  SpiceJet
                </label>
              </div>
            </div>

            {/* Flight Times */}
            <div className="filter-group">
              <div className="filter-title">Flight times</div>
              <table className="flight-times-table">
                <thead>
                  <tr>
                    <th>Departing flight</th>
                    <th>Return flight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan="2"
                      style={{ fontWeight: "600", paddingBottom: "12px" }}
                    >
                      Departs Mumbai
                    </td>
                  </tr>
                  <tr>
                    <td>1200 AM–559 AM</td>
                    <td>300</td>
                  </tr>
                  <tr>
                    <td>600 AM–1159 AM</td>
                    <td>583</td>
                  </tr>
                  <tr>
                    <td>1200 PM–559 PM</td>
                    <td>646</td>
                  </tr>
                  <tr>
                    <td>600 PM–1159 PM</td>
                    <td>467</td>
                  </tr>
                  <tr>
                    <td
                      colSpan="2"
                      style={{ fontWeight: "600", paddingTop: "12px" }}
                    >
                      Arrives to Delhi International Airport
                    </td>
                  </tr>
                  <tr>
                    <td>1200 AM–559 AM</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>600 AM–1159 AM</td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Flight List Section */}
        <div className="flight-list-section">
          {/* Sort Options */}
          <div className="sort-section">
            <button className="sort-option active">Best</button>
            <button className="sort-option">Cheapest</button>
            <button className="sort-option">Fastest</button>
          </div>

          {/* Featured Flight Card */}
          <div className="flight-card featured">
            <div className="flight-header">
              <span className="flight-tag">
                Flexible ticket upgrade available
              </span>
              <button className="save-flight-btn">Save</button>
            </div>

            <div className="flight-details">
              <div className="departure-info">
                <div className="flight-time">9:25 AM</div>
                <div className="flight-date">NMI - Jan 8</div>
                <div className="airport-code">BOM</div>
                <div className="airport-name">Mumbai</div>
              </div>

              <div className="duration-info">
                <div className="duration-label">Total duration</div>
                <div className="duration-value">1h 50m</div>
                <div className="stops-info">Non-stop</div>
              </div>

              <div className="arrival-info">
                <div className="flight-time">1:50 PM</div>
                <div className="flight-date">DEL - Jan 15</div>
                <div className="airport-code">DEL</div>
                <div className="airport-name">Delhi International Airport</div>
              </div>
            </div>

            <div className="flight-details">
              <div className="departure-info">
                <div className="flight-time">11:15 AM</div>
                <div className="flight-date">DEL - Jan 8</div>
                <div className="airport-code">DEL</div>
                <div className="airport-name">Delhi International Airport</div>
              </div>

              <div className="duration-info">
                <div className="duration-label">Total duration</div>
                <div className="duration-value">2h 20m</div>
                <div className="stops-info">Non-stop</div>
              </div>

              <div className="arrival-info">
                <div className="flight-time">4:10 PM</div>
                <div className="flight-date">BOM - Jan 15</div>
                <div className="airport-code">BOM</div>
                <div className="airport-name">Mumbai</div>
              </div>
            </div>

            <div className="flight-price-section">
              <div className="price-info">
                <div className="current-price">
                  <span className="currency">INR</span> 12,238
                </div>
              </div>
              <button className="select-flight-btn">Select</button>
            </div>
          </div>

          {/* Better Prices Section */}
          <div className="better-prices-section">
            <div className="better-prices-header">
              <span className="better-prices-icon">✓</span>
              <h3 className="better-prices-title">
                We found better prices! Compare nearby dates.
              </h3>
            </div>
            <p className="better-prices-subtitle">
              Latest prices found for your search – actual prices shown in next
              step
            </p>
            <div className="dates-grid">
              <div className="date-option">
                <div className="date-range">Jan 5-Jan 12</div>
                <div className="date-price">INR12,238</div>
              </div>
              <div className="date-option">
                <div className="date-range">Jan 6-Jan 13</div>
                <div className="date-price">INR12,238</div>
              </div>
              <div className="date-option">
                <div className="date-range">Jan 7-Jan 14</div>
                <div className="date-price">INR12,238</div>
              </div>
              <div className="date-option">
                <div className="date-range">Jan 9-Jan 16</div>
                <div className="date-price">INR12,238</div>
              </div>
            </div>
          </div>

          {/* Additional Flight Cards */}
          {[1, 2, 3].map((item) => (
            <div className="flight-card" key={item}>
              <div className="flight-header">
                <span className="flight-tag">
                  Flexible ticket upgrade available
                </span>
                <button className="save-flight-btn">Save</button>
              </div>

              <div className="flight-details">
                <div className="departure-info">
                  <div className="flight-time">9:25 AM</div>
                  <div className="flight-date">NMI - Jan 8</div>
                  <div className="airport-code">BOM</div>
                  <div className="airport-name">Mumbai</div>
                </div>

                <div className="duration-info">
                  <div className="duration-label">Total duration</div>
                  <div className="duration-value">
                    {item === 1 ? "1h 50m" : "2h 20m"}
                  </div>
                  <div className="stops-info">Non-stop</div>
                </div>

                <div className="arrival-info">
                  <div className="flight-time">
                    {item === 1
                      ? "12:45 PM"
                      : item === 2
                      ? "3:00 PM"
                      : "1:50 PM"}
                  </div>
                  <div className="flight-date">DEL - Jan 15</div>
                  <div className="airport-code">DEL</div>
                  <div className="airport-name">
                    Delhi International Airport
                  </div>
                </div>
              </div>

              <div className="flight-price-section">
                <div className="price-info">
                  <div className="old-price">INR12,678.57</div>
                  <div className="current-price">
                    <span className="currency">INR</span> 12,238
                  </div>
                </div>
                <button className="select-flight-btn">Select</button>
              </div>
            </div>
          ))}

          {/* Service Info */}
          <div className="service-info">
            <div className="service-header">
              <h3 className="service-title">Service</h3>
              <div className="service-buttons">
                <button className="service-btn">Save</button>
                <button className="service-btn save">Save</button>
                <button className="service-btn">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingFlightResults;
