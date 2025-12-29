import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [language, setLanguage] = useState("English (US)");
  const [currency, setCurrency] = useState("INR");

  const quickLinks = [
    { name: "Countries", url: "https://www.booking.com/country.html" },
    { name: "Regions", url: "https://www.booking.com/region.html" },
    { name: "Cities", url: "https://www.booking.com/city.html" },
    { name: "Districts", url: "https://www.booking.com/district.html" },
    { name: "Airports", url: "https://www.booking.com/airport.html" },
    { name: "Hotels", url: "https://www.booking.com/hotel/index.html" },
    {
      name: "Places of interest",
      url: "https://www.booking.com/landmark.html",
    },
    {
      name: "Vacation Homes",
      url: "https://www.booking.com/booking-home/index.html",
    },
    {
      name: "Apartments",
      url: "https://www.booking.com/apartments/index.html",
    },
    { name: "Resorts", url: "https://www.booking.com/resorts/index.html" },
    { name: "Villas", url: "https://www.booking.com/villas/index.html" },
    { name: "Hostels", url: "https://www.booking.com/hostels/index.html" },
    {
      name: "B&Bs",
      url: "https://www.booking.com/bed-and-breakfast/index.html",
    },
    {
      name: "Guest Houses",
      url: "https://www.booking.com/guest-house/index.html",
    },
    {
      name: "Unique places to stay",
      url: "https://www.booking.com/accommodations.html",
    },
    {
      name: "All destinations",
      url: "https://www.booking.com/destination.html",
    },
    {
      name: "All flight destinations",
      url: "https://www.booking.com/flights/sitemap.html",
    },
    {
      name: "All car rental locations",
      url: "https://www.booking.com/cars/sitemap.html",
    },
    {
      name: "All vacation destinations",
      url: "https://www.booking.com/holidays/sitemap.html",
    },
    { name: "Guides", url: "https://www.booking.com/guides/index.html" },
    { name: "Discover", url: "https://www.booking.com/discover.html" },
    { name: "Reviews", url: "https://www.booking.com/reviews.html" },
    {
      name: "Discover monthly stays",
      url: "https://www.booking.com/extended-stays/index.html",
    },
  ];

  const supportLinks = [
    {
      name: "Manage your trips",
      url: "https://secure.booking.com/content/cs.html",
    },
    {
      name: "Contact Customer Service",
      url: "https://secure.booking.com/help.html",
    },
    {
      name: "Safety Resource Center",
      url: "https://www.booking.com/trust_and_safety.html",
    },
  ];

  const discoverLinks = [
    {
      name: "Genius loyalty program",
      url: "https://www.booking.com/genius.html",
    },
    {
      name: "Seasonal and holiday deals",
      url: "https://www.booking.com/deals/index.html",
    },
    { name: "Travel articles", url: "https://www.booking.com/articles.html" },
    { name: "Booking.com for Business", url: "https://business.booking.com/" },
    {
      name: "Traveller Review Awards",
      url: "https://www.booking.com/traveller-awards/index.html",
    },
    { name: "Car rental", url: "https://www.booking.com/cars/index.html" },
    { name: "Flight finder", url: "https://booking.kayak.com/" },
    { name: "Restaurant reservations", url: "https://www.opentable.com/" },
    {
      name: "Booking.com for Travel Agents",
      url: "https://www.booking.com/affiliate-program/v2/index.html",
    },
  ];

  const legalLinks = [
    {
      name: "Privacy Notice",
      url: "https://www.booking.com/content/privacy.html",
    },
    {
      name: "Terms of Service",
      url: "https://www.booking.com/content/terms.html",
    },
    {
      name: "Accessibility Statement",
      url: "https://www.booking.com/content/accessibility_statement.html",
    },
    {
      name: "Grievance officer",
      url: "https://secure.booking.com/content/complaints.html",
    },
    {
      name: "Modern Slavery Statement",
      url: "https://www.bookingholdings.com/modern-slavery-statement/",
    },
    {
      name: "Human Rights Statement",
      url: "https://www.bookingholdings.com/about/compliance-and-ethics/human-rights/",
    },
  ];

  const partnerLinks = [
    { name: "Extranet login", url: "https://admin.booking.com/" },
    { name: "Partner help", url: "https://partner.booking.com/en-us" },
    { name: "List your property", url: "https://join.booking.com/" },
    {
      name: "Become an affiliate",
      url: "https://www.booking.com/affiliate-program/v2/index.html",
    },
  ];

  const aboutLinks = [
    {
      name: "About Booking.com",
      url: "https://www.booking.com/content/about.html",
    },
    {
      name: "How We Work",
      url: "https://www.booking.com/content/how_we_work.html",
    },
    { name: "Sustainability", url: "https://www.sustainability.booking.com/" },
    { name: "Press center", url: "https://news.booking.com/en-in" },
    { name: "Careers", url: "https://careers.booking.com/" },
    { name: "Investor relations", url: "https://www.bookingholdings.com/" },
    {
      name: "Corporate contact",
      url: "https://www.booking.com/content/contact-us.html",
    },
    {
      name: "Content guidelines and reporting",
      url: "https://www.booking.com/content-moderation-policy/overview-page.html",
    },
  ];

  const whyBookingFeatures = [
    { name: "Book now, pay at the property" },
    { name: "FREE cancellation on most rooms" },
    { name: "300M+ reviews from fellow travelers" },
    { name: "24/7 customer service" },
    { name: "2+ million properties worldwide" },
  ];

  return (
    <footer className="booking-footer">
      <div className="container">
        {/* Quick Links Section */}
        <div className="quick-links-section">
          <nav aria-label="Quick Links">
            <ul className="quick-links-list">
              {quickLinks.map((link, index) => (
                <li key={index} className="quick-link-item">
                  <a
                    href={`${link.url}?aid=304142`}
                    className="quick-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main Footer Columns */}
        <div className="footer-columns">
          <div className="footer-column">
            <h3 className="column-title">Support</h3>
            <ul className="link-list">
              {supportLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <a
                    href={`${link.url}?aid=304142`}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Discover</h3>
            <ul className="link-list">
              {discoverLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <a
                    href={`${link.url}?aid=304142`}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Terms & Policies</h3>
            <ul className="link-list">
              {legalLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <a
                    href={`${link.url}?aid=304142`}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Partners</h3>
            <ul className="link-list">
              {partnerLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <a
                    href={`${link.url}?aid=304142`}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">About</h3>
            <ul className="link-list">
              {aboutLinks.map((link, index) => (
                <li key={index} className="link-item">
                  <a
                    href={`${link.url}?aid=304142`}
                    className="footer-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">Why Booking.com?</h3>
            <ul className="why-booking-list">
              {whyBookingFeatures.map((feature, index) => (
                <li key={index} className="why-booking-item">
                  <span className="check-icon">✓</span>
                  {feature.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Language and Currency Selector */}
        <div className="footer-controls">
          <div className="language-currency">
            <div className="picker-container">
              <button
                className="picker-button"
                aria-label={`Language: ${language}`}
                data-testid="footer-language-picker-trigger-desktop"
                onClick={() => {
                  /* Handle language picker */
                }}
              >
                <span className="picker-content">
                  <span className="flag">🇮🇳</span>
                  <span className="text">{language}</span>
                </span>
              </button>
            </div>

            <div className="picker-container">
              <button
                className="picker-button"
                aria-label={`Prices in ${currency}`}
                data-testid="footer-currency-picker-trigger-desktop"
                onClick={() => {
                  /* Handle currency picker */
                }}
              >
                <span className="picker-content">
                  <span className="text">{currency}</span>
                </span>
              </button>
            </div>
          </div>

          <hr className="divider" />

          {/* Copyright Section */}
          <div className="copyright-section">
            <div className="copyright-text">
              <p>
                Booking.com is part of Booking Holdings Inc., the world leader
                in online travel and related services.
              </p>
              <p className="copyright-year">
                Copyright © 1996–2024 Booking.com™. All rights reserved.
              </p>
            </div>
            <div className="corporate-logos">
              <span className="booking-holdings">Booking Holdings</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .booking-footer {
          background: #003580;
          color: white;
          padding: 3rem 0 2rem;
          margin-top: 4rem;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            sans-serif;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .quick-links-section {
          padding: 2rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .quick-links-list {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .quick-link-item {
          flex: 0 0 auto;
        }

        .quick-link {
          color: white;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 500;
          opacity: 0.9;
          transition: opacity 0.2s ease;
          white-space: nowrap;
        }

        .quick-link:hover {
          opacity: 1;
          text-decoration: underline;
        }

        .footer-columns {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2.5rem;
          padding: 2.5rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-column {
          display: flex;
          flex-direction: column;
        }

        .column-title {
          font-size: 1rem;
          font-weight: 600;
          margin: 0 0 1rem 0;
          color: white;
        }

        .link-list,
        .why-booking-list {
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .link-item {
          margin-bottom: 0.75rem;
        }

        .footer-link {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.875rem;
          line-height: 1.4;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: white;
          text-decoration: underline;
        }

        .why-booking-item {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.875rem;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: flex-start;
          line-height: 1.4;
        }

        .check-icon {
          color: #4caf50;
          margin-right: 0.5rem;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 0.1rem;
        }

        .footer-controls {
          padding-top: 2rem;
        }

        .language-currency {
          display: flex;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .picker-container {
          position: relative;
        }

        .picker-button {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 4px;
          padding: 0.625rem 1rem;
          color: white;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          min-width: 120px;
        }

        .picker-button:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }

        .picker-content {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .flag {
          font-size: 1rem;
        }

        .divider {
          border: none;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          margin: 1.5rem 0;
        }

        .copyright-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
        }

        .copyright-text {
          flex: 1;
          min-width: 300px;
        }

        .copyright-text p {
          margin: 0;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.5;
        }

        .copyright-year {
          margin-top: 0.5rem !important;
        }

        .corporate-logos {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }

        .booking-holdings {
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          opacity: 0.9;
        }

        @media (max-width: 1024px) {
          .footer-columns {
            grid-template-columns: repeat(3, 1fr);
          }

          .quick-links-list {
            gap: 1.25rem;
          }
        }

        @media (max-width: 768px) {
          .footer-columns {
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
          }

          .quick-links-list {
            gap: 1rem;
          }

          .quick-link {
            font-size: 0.85rem;
          }

          .booking-footer {
            padding: 2rem 0 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .footer-columns {
            grid-template-columns: 1fr;
          }

          .language-currency {
            flex-direction: column;
            gap: 0.75rem;
          }

          .copyright-section {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .copyright-text {
            min-width: auto;
          }

          .quick-links-section {
            padding: 1.5rem 0;
          }

          .footer-columns {
            padding: 2rem 0;
          }
        }

        @media (max-width: 480px) {
          .quick-links-list {
            gap: 0.75rem;
          }

          .quick-link {
            font-size: 0.8rem;
          }

          .column-title {
            font-size: 0.95rem;
          }

          .footer-link,
          .why-booking-item {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
