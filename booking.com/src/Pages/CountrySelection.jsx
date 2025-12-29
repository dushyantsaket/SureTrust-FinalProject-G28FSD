import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CountrySelection.css";

const countries = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "IT", name: "Italy", flag: "🇮🇹" },
  { code: "ES", name: "Spain", flag: "🇪🇸" },
  { code: "NL", name: "Netherlands", flag: "🇳🇱" },
  { code: "PT", name: "Portugal", flag: "🇵🇹" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
  { code: "MX", name: "Mexico", flag: "🇲🇽" },
  { code: "AR", name: "Argentina", flag: "🇦🇷" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "KR", name: "South Korea", flag: "🇰🇷" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AE", name: "United Arab Emirates", flag: "🇦🇪" },
  { code: "SG", name: "Singapore", flag: "🇸🇬" },
  { code: "TH", name: "Thailand", flag: "🇹🇭" },
];

const suggestedCountries = [
  { code: "IN", name: "हिन्दी", flag: "🇮🇳", language: "Hindi" },
  { code: "US", name: "English (US)", flag: "🇺🇸", language: "English" },
  { code: "FR", name: "Français", flag: "🇫🇷", language: "French" },
  { code: "CN", name: "简体中文", flag: "🇨🇳", language: "Chinese" },
];

function CountrySelection() {
  const navigate = useNavigate();
  const [selectedCountry, setSelectedCountry] = useState("GB");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCountrySelect = (countryCode) => {
    setSelectedCountry(countryCode);
    // Save selection to localStorage or context
    localStorage.setItem("selectedCountry", countryCode);
    navigate(-1); // Go back to previous page
  };

  return (
    <div className="country-selection-container">
      <div className="country-modal-overlay">
        <div className="country-modal">
          <div className="country-modal-header">
            <h2>Select your language</h2>
            <button
              className="close-button"
              onClick={() => navigate(-1)}
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="suggested-section">
            <h3>Suggested for you</h3>
            <div className="suggested-countries">
              {suggestedCountries.map((country) => (
                <button
                  key={country.code}
                  className={`suggested-country-card ${
                    selectedCountry === country.code ? "selected" : ""
                  }`}
                  onClick={() => handleCountrySelect(country.code)}
                >
                  <span className="country-flag">{country.flag}</span>
                  <span className="country-name">{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="divider"></div>

          <div className="all-languages-section">
            <h3>All languages</h3>
            <div className="search-box">
              <input
                type="text"
                placeholder="Search languages..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>
            <div className="countries-grid">
              {filteredCountries.map((country) => (
                <button
                  key={country.code}
                  className={`country-card ${
                    selectedCountry === country.code ? "selected" : ""
                  }`}
                  onClick={() => handleCountrySelect(country.code)}
                >
                  <span className="country-flag">{country.flag}</span>
                  <span className="country-name">{country.name}</span>
                  {selectedCountry === country.code && (
                    <span className="checkmark">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountrySelection;

