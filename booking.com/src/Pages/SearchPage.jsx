import React, { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchPage.css";

const tabs = [
  { key: "stays", label: "Stays" },
  { key: "flights", label: "Flights" },
  { key: "packages", label: "Flight + Hotel" },
  { key: "cars", label: "Car rental" },
  { key: "attractions", label: "Attractions" },
  { key: "taxis", label: "Airport taxis" },
];

const countries = [
  { name: "United Kingdom", img: "/img/uk.jpg" },
  { name: "India", img: "/img/india.jpg" },
  { name: "United Arab Emirates", img: "/img/uae.jpg" },
  { name: "Anywhere", img: "/img/world.jpg" },
];

const popularFlights = [
  {
    route: "Mumbai to London",
    dates: "16 Dec - 24 Mar · Round trip",
    img: "/img/london.jpg",
  },
  {
    route: "Mumbai to Dubai",
    dates: "12 Dec - 6 Feb · Round trip",
    img: "/img/dubai.jpg",
  },
  {
    route: "Mumbai to Bangkok",
    dates: "15 Dec - 23 Dec · Round trip",
    img: "/img/bangkok.jpg",
  },
  {
    route: "Mumbai to Frankfurt/Main",
    dates: "12 Dec - 4 Feb · Round trip",
    img: "/img/frankfurt.jpg",
  },
];

const topFlights = [
  "Mumbai → London",
  "Mumbai → New Delhi",
  "Mumbai → Bengaluru",
  "Mumbai → Dubai",
  "Mumbai → Hyderabad",
  "Mumbai → Chennai",
  "Mumbai → Bangkok",
  "Mumbai → Kolkata",
  "Mumbai → Cochin",
];

const SearchPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const initialTab = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("tab") || "flights";
  }, [location.search]);

  const [activeTab, setActiveTab] = useState(initialTab);

  const [flightsForm, setFlightsForm] = useState({
    from: "Mumbai",
    to: "",
    dateFrom: "",
    dateTo: "",
    travelers: "1 adult",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightsForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    navigate("/flights-results", {
      state: flightsForm,
    });
  };

  return (
    <div className="search-page">
      {/* ----------------------------------------------------- */}
      {/* HERO + TABS + SEARCH BAR */}
      {/* ----------------------------------------------------- */}

      <div className="hero-section">
        <div className="top-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`tab-btn ${activeTab === tab.key ? "active" : ""}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <h1 className="hero-title">Compare and book cheap flights with ease</h1>
        <p className="hero-sub">Discover your next dream destination</p>

        <div className="flight-search-box">
          <div className="flight-options">
            <span>Round trip</span>
            <span>One way</span>
            <span>Multi-city</span>
            <span>Economy</span>
            <span>
              <input type="checkbox" /> Direct flights only
            </span>
          </div>

          <div className="search-fields">
            <div className="field">
              <label>Leaving from</label>
              <input
                name="from"
                value={flightsForm.from}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Going to</label>
              <input
                name="to"
                placeholder="Destination"
                value={flightsForm.to}
                onChange={handleChange}
              />
            </div>

            <div className="field">
              <label>Travel dates</label>
              <div className="date-row">
                <input type="date" name="dateFrom" onChange={handleChange} />
                <input type="date" name="dateTo" onChange={handleChange} />
              </div>
            </div>

            <div className="field">
              <label>Travellers</label>
              <input
                name="travelers"
                value={flightsForm.travelers}
                onChange={handleChange}
              />
            </div>

            <button className="explore-btn" onClick={handleSearch}>
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* ----------------------------------------------------- */}
      {/* CONTINUE WHERE YOU LEFT OFF */}
      {/* ----------------------------------------------------- */}

      <div className="section">
        <h2>Continue where you left off</h2>
        <div className="continue-card">
          <p>Mumbai to Delhi International Airport</p>
          <span>10 Jan, 1 traveller, one way</span>
        </div>
      </div>

      {/* ----------------------------------------------------- */}
      {/* EXPLORE BY COUNTRY */}
      {/* ----------------------------------------------------- */}

      <div className="section">
        <h2>Explore by country</h2>
        <p>Discover trending destinations, just a flight away</p>

        <div className="country-grid">
          {countries.map((c) => (
            <div className="country-card" key={c.name}>
              <img src={c.img} alt={c.name} />
              <span>{c.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------- */}
      {/* POPULAR FLIGHTS */}
      {/* ----------------------------------------------------- */}

      <div className="section">
        <h2>Popular flights near you</h2>

        <div className="popular-grid">
          {popularFlights.map((pf) => (
            <div className="popular-card" key={pf.route}>
              <img src={pf.img} alt="" />
              <h4>{pf.route}</h4>
              <p>{pf.dates}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ----------------------------------------------------- */}
      {/* ACCOUNT BENEFITS */}
      {/* ----------------------------------------------------- */}

      <div className="section account-box">
        <h3>Your account, your travel</h3>
        <p>All your trip details in one place</p>
        <button>Sign in</button>
        <button>Register</button>
      </div>

      {/* ----------------------------------------------------- */}
      {/* WHY BOOK WITH US */}
      {/* ----------------------------------------------------- */}

      <div className="section features">
        <div className="feature-card">
          <h4>Search a huge selection</h4>
          <p>Easily compare flights, airlines and prices – all in one place</p>
        </div>

        <div className="feature-card">
          <h4>Pay no hidden fees</h4>
          <p>Get a clear price breakdown, every step of the way</p>
        </div>

        <div className="feature-card">
          <h4>Get more flexibility</h4>
          <p>Change your travel dates with flexible tickets</p>
        </div>
      </div>

      {/* ----------------------------------------------------- */}
      {/* TOP FLIGHTS FROM INDIA */}
      {/* ----------------------------------------------------- */}

      <div className="section">
        <h2>Top flights from India</h2>

        <div className="top-flight-grid">
          {topFlights.map((tf) => (
            <div className="top-flight-item" key={tf}>
              {tf}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
