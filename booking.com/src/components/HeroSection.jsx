import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./HeroSection.css";
import Register from "./Register";
// import HotelDetails from "../Pages/HotelDeatils";

const HeroSection = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    location: "",
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    rooms: 1,
    flights: false,
  });

  // ------------------ LOCATION OPTIONS ------------------
  const locations = {
    "Popular Indian Cities": [
      "Delhi",
      "Mumbai",
      "Indore",
      "Rewa",
      "Jaipur",
      "Pune",
      "Bhopal",
      "Lucknow",
      "Hyderabad",
      "Bengaluru",
      "Chennai",
      "Ahmedabad",
    ],
    "Indian States / Regions": [
      "Uttar Pradesh (UP)",
      "Madhya Pradesh (MP)",
      "Gujarat",
      "Rajasthan",
      "Maharashtra",
      "Tamil Nadu",
      "Kerala",
      "Punjab",
    ],
    "Most Popular Countries / Regions": [
      "India",
      "Algeria",
      "Thailand",
      "Singapore",
      "Dubai",
      "Malaysia",
      "Nepal",
      "Sri Lanka",
    ],
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    navigate(`/search?city=${form.location}`);
  };

  return (
    <section className="hero-section">
      <div className="container">
        <h1 className="hero-title">Find your next stay</h1>
        <p className="hero-subtitle">
          Search deals on hotels, homes, and much more...
        </p>

        {/* ---------------- SEARCH BOX ---------------- */}
        <div className="search-box">
          {/* LOCATION DROPDOWN */}
          <div className="search-field">
            <label>Location</label>
            <select
              name="location"
              value={form.location}
              onChange={handleChange}
            >
              <option value="">Select location</option>

              {Object.entries(locations).map(([groupName, groupItems]) => (
                <optgroup key={groupName} label={groupName}>
                  {groupItems.map((loc, i) => (
                    <option key={i} value={loc}>
                      {loc}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
          </div>

          {/* CHECK IN */}
          <div className="search-field">
            <label>Check-in</label>
            <input
              type="date"
              name="checkIn"
              value={form.checkIn}
              onChange={handleChange}
            />
          </div>

          {/* CHECK OUT */}
          <div className="search-field">
            <label>Check-out</label>
            <input
              type="date"
              name="checkOut"
              value={form.checkOut}
              onChange={handleChange}
            />
          </div>

          {/* GUESTS */}
          <div className="search-field">
            <label>Guests</label>
            <input
              type="number"
              name="adults"
              min="1"
              value={form.adults}
              onChange={handleChange}
            />
          </div>

          {/* SEARCH BUTTON */}
          <Link to="/ghotel-search">
            <button className="search-btn">Search</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
