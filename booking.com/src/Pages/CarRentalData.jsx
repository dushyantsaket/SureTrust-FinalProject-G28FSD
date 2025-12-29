// Attractions.js
import React, { useState } from "react";
import "./CarRentalData.css";

const Attractions = () => {
  const [selectedDate, setSelectedDate] = useState("Any dates");
  const [filters, setFilters] = useState({
    freeCancellation: false,
    duration: [],
    startTime: [],
    language: [],
    category: [],
  });

  const toggleFilter = (filterType, value) => {
    setFilters((prev) => {
      const currentValues = prev[filterType];
      const updatedValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];

      return {
        ...prev,
        [filterType]: updatedValues,
      };
    });
  };

  const attractionsData = [
    {
      id: 1,
      title: "Taj Mahal and Agra Fort Private Skip Line Tour",
      location: "Agra",
      description:
        "Take on the iconic Taj Mahal & Agra Fort Private Skip-the-Line Tour for a memorable journey through Mughal history and architecture. Your private guide will ensure a personalized experience.",
      duration: "4 hours - 6 hours",
      freeCancellation: true,
      languages: ["English", "Spanish", "French"],
      price: "Rs. 6,349",
      availableFrom: "Available from tomorrow",
      rating: 4.8,
      reviewCount: 154,
      images: ["attraction1.jpg", "attraction2.jpg", "attraction3.jpg"],
    },
    {
      id: 2,
      title: "Taj Mahal Fast Track Entry with Guided Tour from Agra",
      location: "Agra",
      description:
        "This package is designed to give you a seamless and enriching experience of Agra's two most celebrated monuments—the Taj Mahal and Agra Fort—on the same day.",
      duration: "4 hours - 5 hours",
      freeCancellation: true,
      languages: ["English", "Hindi"],
      price: "Rs. 3,600",
      availableFrom: "Available from tomorrow",
      rating: 4.7,
      reviewCount: 203,
      images: ["attraction4.jpg", "attraction5.jpg"],
    },
    {
      id: 3,
      title: "Sunrise Taj Mahal and Agra Fort Tour By Car",
      location: "Agra",
      description:
        "Watch the magic of sunrise as you travel from Delhi to Agra for a breathtaking view of the Taj Mahal, glowing in soft golden light. This comfortable, private...",
      duration: "13 hours - 14 hours",
      freeCancellation: true,
      languages: ["English"],
      price: "Rs. 12,799",
      availableFrom: "Available from 16 Dec",
      rating: 4.9,
      reviewCount: 89,
      images: ["attraction6.jpg"],
    },
    {
      id: 4,
      title: "Agra To Ranthambore via Fatehpur Sikri",
      location: "Agra",
      description:
        "We are providing the ultimate luxury with the air-conditioned private car to make your journey from Agra to Ranthambore comfortable and scenic.",
      duration: "5 hours",
      freeCancellation: true,
      languages: ["English"],
      price: "Rs. 15,999",
      availableFrom: "Available from 16 Dec",
      rating: 4.6,
      reviewCount: 42,
      images: ["attraction7.jpg"],
    },
    {
      id: 5,
      title: "2 Days Taj Mahal Agra Tour with Fatehpur Sikri From Delhi",
      location: "Agra",
      description:
        "Embark on an unforgettable Taj Mahal and Agra Tour with Fatehpur Sikri, where history, architecture, and culture come alive. This journey begins with...",
      duration: "2 days",
      freeCancellation: true,
      languages: ["English", "German"],
      price: "Rs. 25,499",
      availableFrom: "Available from 16 Dec",
      rating: 4.8,
      reviewCount: 76,
      images: ["attraction8.jpg"],
    },
  ];

  const filterOptions = {
    category: [
      { id: "cat1", label: "Sightseeing tours" },
      { id: "cat2", label: "Private and luxury" },
      { id: "cat3", label: "Cultural & theme tours" },
      { id: "cat4", label: "Multi-day tours" },
      { id: "cat5", label: "Day trips & excursions" },
    ],
    duration: [
      { id: "dur1", label: "Up to 1 hour" },
      { id: "dur2", label: "1 to 4 hours" },
      { id: "dur3", label: "4 hours to 1 day" },
      { id: "dur4", label: "1 to 3 days" },
      { id: "dur5", label: "3+ days" },
    ],
    startTime: [
      { id: "time1", label: "06:00 - 12:00" },
      { id: "time2", label: "12:00 - 17:00" },
      { id: "time3", label: "17:00 - 21:00" },
    ],
    language: [
      { id: "lang1", label: "English" },
      { id: "lang2", label: "French" },
      { id: "lang3", label: "Spanish" },
      { id: "lang4", label: "German" },
      { id: "lang5", label: "Italian" },
    ],
  };

  return (
    <div className="attractions-container">
      {/* Header */}
      <header className="header">
        <nav className="header-nav">
          <div className="header-logo">
            <a href="/" className="logo-link" aria-label="Booking.com">
              <svg width="180" height="30" viewBox="0 0 180 30">
                <path fill="#003580" d="M0 0h180v30H0z" />
              </svg>
            </a>
          </div>
          <div className="header-actions">
            <button className="currency-btn">INR</button>
            <button className="language-btn">
              <img
                src="https://t-cf.bstatic.com/design-assets/assets/v3.172.2/images-flags/In@3x.png"
                alt="English (UK)"
              />
            </button>
            <a href="/help" className="help-link">
              Help
            </a>
            <a href="/register" className="register-btn">
              Register
            </a>
            <a href="/login" className="login-btn">
              Sign in
            </a>
          </div>
        </nav>

        <nav className="main-nav">
          <ul className="nav-menu">
            <li>
              <a href="/stays">Stays</a>
            </li>
            <li>
              <a href="/flights">Flights</a>
            </li>
            <li>
              <a href="/packages">Flight + Hotel</a>
            </li>
            <li>
              <a href="/cars">Car rental</a>
            </li>
            <li className="active">
              <a href="/attractions">Attractions</a>
            </li>
            <li>
              <a href="/taxis">Airport taxis</a>
            </li>
            <li>
              <button className="more-btn">More</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        {/* Search Bar */}
        <div className="search-bar-container">
          <div className="search-bar">
            <form className="search-form">
              <div className="search-input-group">
                <div className="input-with-icon">
                  <svg
                    className="location-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56m1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65s7.881 7.312 12.87 5.192c4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06"></path>
                  </svg>
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    defaultValue="Agra"
                    className="destination-input"
                  />
                  <button type="button" className="clear-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="m13.31 12 6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="search-input-group">
                <button type="button" className="date-selector">
                  <svg
                    className="calendar-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5M7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0m10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0"></path>
                  </svg>
                  <div className="date-text">
                    <span className="date-label">Dates</span>
                    <span className="date-value">{selectedDate}</span>
                  </div>
                </button>
              </div>

              <button type="submit" className="search-button">
                Search
              </button>
            </form>

            <div className="search-summary">
              <div className="summary-item">
                <svg
                  className="location-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.464 6.56a8.313 8.313 0 1 1-15.302 6.504A8.313 8.313 0 0 1 17.464 6.56m1.38-.586C16.724.986 10.963-1.339 5.974.781.988 2.9-1.337 8.662.783 13.65s7.881 7.312 12.87 5.192c4.987-2.12 7.312-7.881 5.192-12.87zM15.691 16.75l7.029 7.03a.75.75 0 0 0 1.06-1.06l-7.029-7.03a.75.75 0 0 0-1.06 1.06"></path>
                </svg>
                <span>Agra</span>
              </div>
              <div className="summary-item">
                <svg
                  className="calendar-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5M7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0m10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0"></path>
                </svg>
                <span>{selectedDate}</span>
              </div>
              <button className="edit-search-btn">Edit your search</button>
            </div>
          </div>
        </div>

        <div className="content-wrapper">
          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            <a href="/attractions">Home</a>
            <span className="separator">›</span>
            <span className="current">Agra</span>
          </div>

          {/* Page Title and Sort */}
          <div className="page-header">
            <h1 className="page-title">Agra attractions</h1>
            <div className="sort-container">
              <button className="sort-button">
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M10.28 15.22a.75.75 0 0 1 0 1.06l-4.5 4.5a.8.8 0 0 1-.24.16.73.73 0 0 1-.58 0 .8.8 0 0 1-.24-.16l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3.75a.75.75 0 0 1 1.5 0v14.69l3.22-3.22a.75.75 0 0 1 1.06 0m13.5-7.5-4.5-4.5a.8.8 0 0 0-.28-.16.73.73 0 0 0-.58 0 .8.8 0 0 0-.24.16l-4.5 4.5a.75.75 0 1 0 1.06 1.06L18 5.56v14.69a.75.75 0 0 0 1.5 0V5.56l3.22 3.22a.75.75 0 0 0 1.06 0 .75.75 0 0 0 0-1.06"></path>
                </svg>
                Sort by: Our top picks
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path d="M12 20.09a1.24 1.24 0 0 1-.88-.36L6 14.61a.75.75 0 1 1 1.06-1.06L12 18.49l4.94-4.94A.75.75 0 0 1 18 14.61l-5.12 5.12a1.24 1.24 0 0 1-.88.36m6-9.46a.75.75 0 0 0 0-1.06l-5.12-5.11a1.24 1.24 0 0 0-1.754-.006l-.006.006L6 9.57a.75.75 0 0 0 0 1.06.74.74 0 0 0 1.06 0L12 5.7l4.94 4.93a.73.73 0 0 0 .53.22c.2 0 .39-.078.53-.22"></path>
                </svg>
              </button>
            </div>
          </div>

          <div className="main-layout">
            {/* Left Sidebar - Filters */}
            <aside className="filters-sidebar">
              <div className="filters-section">
                <h3 className="filters-title">Filter by:</h3>

                <div className="filter-group">
                  <h4 className="filter-group-title">Category</h4>
                  <ul className="filter-list">
                    {filterOptions.category.map((option) => (
                      <li key={option.id} className="filter-item">
                        <input
                          type="checkbox"
                          id={option.id}
                          checked={filters.category.includes(option.label)}
                          onChange={() =>
                            toggleFilter("category", option.label)
                          }
                          className="filter-checkbox"
                        />
                        <label htmlFor={option.id} className="filter-label">
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="filter-group">
                  <h4 className="filter-group-title">Duration</h4>
                  <ul className="filter-list">
                    {filterOptions.duration.map((option) => (
                      <li key={option.id} className="filter-item">
                        <input
                          type="checkbox"
                          id={option.id}
                          checked={filters.duration.includes(option.label)}
                          onChange={() =>
                            toggleFilter("duration", option.label)
                          }
                          className="filter-checkbox"
                        />
                        <label htmlFor={option.id} className="filter-label">
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="filter-group">
                  <h4 className="filter-group-title">Start time</h4>
                  <ul className="filter-list">
                    {filterOptions.startTime.map((option) => (
                      <li key={option.id} className="filter-item">
                        <input
                          type="checkbox"
                          id={option.id}
                          checked={filters.startTime.includes(option.label)}
                          onChange={() =>
                            toggleFilter("startTime", option.label)
                          }
                          className="filter-checkbox"
                        />
                        <label htmlFor={option.id} className="filter-label">
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="filter-group">
                  <h4 className="filter-group-title">Show results with</h4>
                  <div className="filter-item">
                    <input
                      type="checkbox"
                      id="free-cancellation"
                      checked={filters.freeCancellation}
                      onChange={() =>
                        setFilters((prev) => ({
                          ...prev,
                          freeCancellation: !prev.freeCancellation,
                        }))
                      }
                      className="filter-checkbox"
                    />
                    <label htmlFor="free-cancellation" className="filter-label">
                      <span className="free-cancellation-badge">
                        Free cancellation
                      </span>
                    </label>
                  </div>
                </div>

                <div className="filter-group">
                  <h4 className="filter-group-title">Language</h4>
                  <ul className="filter-list">
                    {filterOptions.language.map((option) => (
                      <li key={option.id} className="filter-item">
                        <input
                          type="checkbox"
                          id={option.id}
                          checked={filters.language.includes(option.label)}
                          onChange={() =>
                            toggleFilter("language", option.label)
                          }
                          className="filter-checkbox"
                        />
                        <label htmlFor={option.id} className="filter-label">
                          {option.label}
                        </label>
                      </li>
                    ))}
                  </ul>
                  <button className="show-more-languages">
                    Show more languages
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content - Attraction Cards */}
            <div className="attractions-list">
              {attractionsData.map((attraction) => (
                <div key={attraction.id} className="attraction-card">
                  <div className="attraction-content">
                    <div className="attraction-info">
                      <h3 className="attraction-title">
                        <a href={`/attractions/${attraction.id}`}>
                          {attraction.title}
                        </a>
                      </h3>
                      <div className="attraction-location">
                        {attraction.location}
                      </div>
                      <p className="attraction-description">
                        {attraction.description}
                      </p>

                      <div className="attraction-features">
                        <div className="feature">
                          <svg
                            className="feature-icon"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.25 14.25a8.25 8.25 0 1 1-16.5 0 8.25 8.25 0 0 1 16.5 0m1.5 0c0-5.385-4.365-9.75-9.75-9.75s-9.75 4.365-9.75 9.75S6.615 24 12 24s9.75-4.365 9.75-9.75m-3.22-6.22 1.875-1.875a.75.75 0 0 0-1.06-1.06L17.47 6.97a.75.75 0 0 0 1.06 1.06m.44-2.25.75.75a.75.75 0 1 0 1.06-1.06l-.75-.75a.75.75 0 1 0-1.06 1.06m-6.22-.53V.75a.75.75 0 0 0-1.5 0v4.5a.75.75 0 0 0 1.5 0M14.25 0h-4.5a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5m-1.694 14.497-3.75-4.15a.75.75 0 0 0-1.113 1.005l3.75 4.15a.75.75 0 0 0 1.114-1.005z"></path>
                          </svg>
                          <span>{attraction.duration}</span>
                        </div>

                        {attraction.freeCancellation && (
                          <div className="feature">
                            <svg
                              className="feature-icon"
                              width="20"
                              height="20"
                              viewBox="0 0 24 24"
                            >
                              <path d="M22.5 17.25a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0m1.5 0a6.75 6.75 0 1 0-13.5 0 6.75 6.75 0 0 0 13.5 0m-4.676-2.194-2.905 3.873h-.002l-1.499-1.5a.75.75 0 1 0-1.06 1.061l1.5 1.5a1.502 1.502 0 0 0 2.26-.16l2.906-3.874a.75.75 0 0 0-1.2-.9M8.25 16.5h-6a.75.75 0 0 1-.75-.75V3.765a.75.75 0 0 1 .75-.75h13.5a.75.75 0 0 1 .75.75V8.25a.75.75 0 0 0 1.5 0V3.765a2.25 2.25 0 0 0-2.25-2.25H2.25A2.25 2.25 0 0 0 0 3.765V15.75A2.25 2.25 0 0 0 2.25 18h6a.75.75 0 0 0 0-1.5m-7.5-9h16.5V6H.75zm5.243-3.75v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0m7.5 0v-3a.75.75 0 0 0-1.5 0v3a.75.75 0 0 0 1.5 0"></path>
                            </svg>
                            <span className="free-cancellation-text">
                              Free cancellation available
                            </span>
                          </div>
                        )}
                      </div>

                      <div className="attraction-languages">
                        <span className="languages-label">Languages: </span>
                        {attraction.languages.join(", ")}
                      </div>
                    </div>

                    <div className="attraction-pricing">
                      <div className="price-info">
                        <div className="price-label">From</div>
                        <div className="price-amount">{attraction.price}</div>
                        <div className="availability">
                          {attraction.availableFrom}
                        </div>
                      </div>
                      <a
                        href={`/attractions/${attraction.id}`}
                        className="see-availability-btn"
                      >
                        See availability
                        <svg
                          className="arrow-icon"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                        >
                          <path d="M9.91 19.24c.24 0 .47-.09.64-.27l6.06-6.06c.25-.25.39-.59.39-.94s-.12-.69-.36-.94l-6.06-6.06a.909.909 0 0 0-1.3 1.27l.02.02 5.69 5.72-5.72 5.72c-.35.35-.36.91-.02 1.27l.02.02c.17.17.4.27.64.27"></path>
                        </svg>
                      </a>
                    </div>
                  </div>

                  <div className="attraction-images">
                    <div className="image-gallery">
                      {attraction.images.slice(0, 3).map((img, index) => (
                        <div key={index} className="thumbnail">
                          <img
                            src={`/api/placeholder/108/108`}
                            alt={attraction.title}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="main-image">
                      <img
                        src={`/api/placeholder/220/220`}
                        alt={attraction.title}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="/covid">COVID-19 FAQs</a>
              </li>
              <li>
                <a href="/help">Customer Service Help</a>
              </li>
              <li>
                <a href="/safety">Safety Resource Centre</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Discover</h4>
            <ul>
              <li>
                <a href="/genius">Genius loyalty programme</a>
              </li>
              <li>
                <a href="/seasonal">Seasonal and holiday deals</a>
              </li>
              <li>
                <a href="/articles">Travel articles</a>
              </li>
              <li>
                <a href="/business">Booking.com for Business</a>
              </li>
              <li>
                <a href="/carfees">Car fees</a>
              </li>
              <li>
                <a href="/restrictions">Flight restrictions</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Terms and settings</h4>
            <ul>
              <li>
                <a href="/privacy">Privacy & cookies</a>
              </li>
              <li>
                <a href="/terms">Terms & conditions</a>
              </li>
              <li>
                <a href="/accessibility">Accessibility Statement</a>
              </li>
              <li>
                <a href="/corporate">Corporate values</a>
              </li>
              <li>
                <a href="/delivery">Website Delivery Statement</a>
              </li>
              <li>
                <a href="/humanrights">Human Rights Statement</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Partners</h4>
            <ul>
              <li>
                <a href="/extranet">Extranet login</a>
              </li>
              <li>
                <a href="/partnerhelp">Partner help</a>
              </li>
              <li>
                <a href="/property">List your property</a>
              </li>
              <li>
                <a href="/affiliate">Become an affiliate</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>
                <a href="/about">About Booking.com</a>
              </li>
              <li>
                <a href="/howitworks">How it works</a>
              </li>
              <li>
                <a href="/sustainability">Sustainability</a>
              </li>
              <li>
                <a href="/press">Press centre</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
              <li>
                <a href="/investors">Investor relations</a>
              </li>
              <li>
                <a href="/contact">Corporate contact</a>
              </li>
              <li>
                <a href="/reporting">Content guidelines and reporting</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            Booking.com is part of Booking Holdings Inc., the world leader in
            online travel and related services.
            <br />
            Copyright © 1996-2025 Booking.com™. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Attractions;
