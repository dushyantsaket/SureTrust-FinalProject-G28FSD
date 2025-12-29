// CarRental.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CarRental.css";

const CarRental = () => {
  const navigate = useNavigate();

  const [pickupDate, setPickupDate] = useState("Tue 16 Dec");
  const [dropoffDate, setDropoffDate] = useState("Fri 19 Dec");
  const [pickupTime, setPickupTime] = useState("10:00");
  const [dropoffTime, setDropoffTime] = useState("10:00");
  const [differentLocation, setDifferentLocation] = useState(false);
  const [driverAge, setDriverAge] = useState(true);
  const [activeTab, setActiveTab] = useState("cities");
  const [expandedFaqs, setExpandedFaqs] = useState({});

  const toggleFaq = (id) => {
    setExpandedFaqs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const faqData = {
    left: [
      {
        id: "faq1",
        question: "Why should I book a car rental in India with Booking.com?",
        answer: `We make it easy to find a rental that'll fit your needs. Here's what we offer:
          • Huge selection of cars – from compact vehicles to SUVs
          • Support in 30+ languages
          • Free cancellation up to 48 hours before pick-up time on most bookings.`,
      },
      {
        id: "faq2",
        question: "What do I need to rent a car?",
        answer: `When you're booking the car, you just need a debit or credit card.
          At the rental counter, you'll need:
          • Your passport
          • Your voucher
          • Each driver's driving licence
          • The main driver's credit card (some rental companies also accept debit cards, but most don't).
          
          Important: Please make sure you check the car's rental terms as well, as each rental company has its own rules.`,
      },
      {
        id: "faq3",
        question: "Am I old enough to rent a car?",
        answer:
          "Most companies will rent you a car if you're at least 21 (and some will rent to younger drivers). But if you're under 25, you might still have to pay a 'young driver fee'.",
      },
    ],
    right: [
      {
        id: "faq4",
        question: "Can I book a car for my partner, friend, colleague, etc?",
        answer:
          "Of course. Just put their details in the 'Driver Details' form when you're booking the car.",
      },
      {
        id: "faq5",
        question: "Any tips on choosing the right car?",
        answer: `• Think about where you're going. An SUV might be great for cruising down a Texas freeway, but a smaller car's probably much easier to drive in Rome.
          • See what other people think. You'll find lots of reviews and ratings on our site.
          • Don't forget the gearbox. In some countries, nearly everyone drives a manual car. In others, automatics are the norm.`,
      },
      {
        id: "faq6",
        question: "Is the rental price all inclusive?",
        answer: `The price you see includes the car, mandatory cover and fees that are usually payable at pick-up.
          It also includes any extras you've already added.
          It doesn't include any extra cover you buy when you get to the rental counter.`,
      },
    ],
  };

  const citiesData = [
    {
      name: "El Segundo",
      locations: 103,
      price: "₹ 5,714.76",
      image:
        "https://th.bing.com/th/id/OIP.ykSLFeFfaHs5Ewjpz9aY3AHaEK?w=108&h=108&c=1&bgcl=93da53&r=0&o=7&cb=ucfimg1&dpr=1.3&pid=ImgRC&rm=3&ucfimg=1",
    },
    {
      name: "Dania Beach",
      locations: 92,
      price: "₹ 4,303.71",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5c9e3741999589.57bcaea6be42e.jpg",
    },
    {
      name: "Coolangatta",
      locations: 22,
      price: "₹ 4,942.68",
      image:
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/5c9e3741999589.57bcaea6be42e.jpg",
    },
    {
      name: "Phoenix",
      locations: 78,
      price: "₹ 6,022.93",
      image:
        "https://th.bing.com/th/id/OIP.E9JfBy3DyFnOBnzVuqs1TAHaDA?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Jamaica",
      locations: 79,
      price: "₹ 7,444.15",
      image:
        "https://th.bing.com/th/id/OIP.mf3jPjwP_p1S5Y6447MONQHaEK?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Irving",
      locations: 81,
      price: "₹ 5,660.66",
      image:
        "https://th.bing.com/th/id/OIP.V1M6chhE63hi6_gUI9mOgQHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Madrid",
      locations: 108,
      price: "₹ 4,546.11",
      image:
        "https://th.bing.com/th/id/OIP.0J-M5KB-pWjjytxFsQ5XoQHaFj?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Calgary",
      locations: 46,
      price: "₹ 6,016.71",
      image:
        "https://th.bing.com/th/id/OIP.gLVlJe59rQgZmj9e6pCveQHaEb?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  const airportsData = [
    {
      name: "Miami International Airport",
      locations: 115,
      price: "₹ 5,095.14",
      image:
        "https://th.bing.com/th/id/OIP.p0B9zN1FtPKzZ0NuL8hQiQHaDa?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Ibiza Airport",
      locations: 37,
      price: "₹ 3,028.57",
      image:
        "https://th.bing.com/th/id/OIP.pGB_HZXjVqAUbYp7bk9RbQHaED?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Faro Airport",
      locations: 43,
      price: "₹ 2,856.26",
      image:
        "https://tse2.mm.bing.net/th/id/OIP.HX6bj82yChCmsUaajrxa4wHaEA?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Barcelona El Prat Airport",
      locations: 51,
      price: "₹ 3,605.29",
      image:
        "https://th.bing.com/th/id/OIP.RCZiCLNdjq67Ow6MAQ44bQHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Catania Fontanarossa Airport",
      locations: 63,
      price: "₹ 3,871.05",
      image:
        "https://c8.alamy.com/comp/2YA5WY6/catania-sicily-italy-september-29-2024-exterior-of-catania-fontanarossa-international-airport-arrival-terminal-in-sicily-2YA5WY6.jpg",
    },
    {
      name: "Dublin Airport",
      locations: 36,
      price: "₹ 4,220.41",
      image:
        "https://www.tripsavvy.com/thmb/TzEDsCebK7rLYjSORAjkIVD1IG8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-695935896-5bdc709bc9e77c005139f403.jpg",
    },
    {
      name: "Bari Karol Wojtyla Airport",
      locations: 59,
      price: "₹ 4,533.64",
      image:
        "https://tse1.mm.bing.net/th/id/OIP.SMarimOI6xMr0ks2Kj7ncwHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      name: "Milan Malpensa Airport",
      locations: 129,
      price: "₹ 4,752.13",
      image:
        "https://th.bing.com/th/id/OIP.LPBPC1E_-IDi8q0149qGuwHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    },
  ];

  return (
    <div className="car-rental-container">
      {/* Header */}
      {/* <header className="header">
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
            <li className="active">
              <a href="/cars">Car rental</a>
            </li>
            <li>
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
      </header> */}

      {/* Main Content */}
      <main className="main-content">
        {/* Hero Section */}
        <section className="hero-section">
          <h1>Find your perfect car rental</h1>
          <p>
            Great cars at great prices, from the biggest car rental companies
          </p>
        </section>

        {/* Search Form */}
        <section className="search-section">
          <form className="search-form">
            <div className="search-row">
              <div className="form-group pickup-location">
                <label>Pick-up location</label>
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
                    placeholder="Airport, city or station"
                    defaultValue="Delhi, Delhi, Delhi NCR, India"
                  />
                  <button type="button" className="clear-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="m13.31 12 6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="form-group dropoff-location">
                <label>Drop-off location</label>
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
                    placeholder="Airport, city or station"
                    defaultValue="Delhi, Delhi, Delhi NCR, India"
                  />
                  <button type="button" className="clear-btn">
                    <svg width="24" height="24" viewBox="0 0 24 24">
                      <path d="m13.31 12 6.89-6.89a.93.93 0 1 0-1.31-1.31L12 10.69 5.11 3.8A.93.93 0 0 0 3.8 5.11L10.69 12 3.8 18.89a.93.93 0 0 0 1.31 1.31L12 13.31l6.89 6.89a.93.93 0 1 0 1.31-1.31z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="search-row">
              <div className="form-group pickup-date">
                <label>Pick-up date</label>
                <button type="button" className="date-btn">
                  <svg
                    className="calendar-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5M7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0m10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0"></path>
                  </svg>
                  <span>{pickupDate}</span>
                </button>
              </div>

              <div className="form-group pickup-time">
                <label>Time</label>
                <div className="time-select">
                  <svg
                    className="time-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75m1.5 0C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12m-10.5 0V8.25a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0m-1.28.53 4.687 4.688a.75.75 0 0 0 1.06-1.06L12.53 11.47a.75.75 0 0 0-1.06 1.06"></path>
                  </svg>
                  <select
                    value={pickupTime}
                    onChange={(e) => setPickupTime(e.target.value)}
                  >
                    {Array.from({ length: 48 }, (_, i) => {
                      const hour = Math.floor(i / 2);
                      const minute = i % 2 === 0 ? "00" : "30";
                      return `${hour.toString().padStart(2, "0")}:${minute}`;
                    }).map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="form-group dropoff-date">
                <label>Drop-off date</label>
                <button type="button" className="date-btn">
                  <svg
                    className="calendar-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.502 13.5v8.25a.75.75 0 0 1-.75.75h-19.5a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75h19.5a.75.75 0 0 1 .75.75zm1.5 0V5.25A2.25 2.25 0 0 0 21.752 3h-19.5a2.25 2.25 0 0 0-2.25 2.25v16.5A2.25 2.25 0 0 0 2.252 24h19.5a2.25 2.25 0 0 0 2.25-2.25zm-23.25-3h22.5a.75.75 0 0 0 0-1.5H.752a.75.75 0 0 0 0 1.5M7.502 6V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0m10.5 0V.75a.75.75 0 0 0-1.5 0V6a.75.75 0 0 0 1.5 0"></path>
                  </svg>
                  <span>{dropoffDate}</span>
                </button>
              </div>

              <div className="form-group dropoff-time">
                <label>Time</label>
                <div className="time-select">
                  <svg
                    className="time-icon"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.75 12c0 5.385-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25s9.75 4.365 9.75 9.75m1.5 0C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12 5.787 23.25 12 23.25 23.25 18.213 23.25 12m-10.5 0V8.25a.75.75 0 0 0-1.5 0V12a.75.75 0 0 0 1.5 0m-1.28.53 4.687 4.688a.75.75 0 0 0 1.06-1.06L12.53 11.47a.75.75 0 0 0-1.06 1.06"></path>
                  </svg>
                  <select
                    value={dropoffTime}
                    onChange={(e) => setDropoffTime(e.target.value)}
                  >
                    {Array.from({ length: 48 }, (_, i) => {
                      const hour = Math.floor(i / 2);
                      const minute = i % 2 === 0 ? "00" : "30";
                      return `${hour.toString().padStart(2, "0")}:${minute}`;
                    }).map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="form-options">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="different-location"
                  checked={differentLocation}
                  onChange={(e) => setDifferentLocation(e.target.checked)}
                />
                <label htmlFor="different-location">
                  <span className="checkmark"></span>
                  Drop car off at different location
                </label>
              </div>

              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="driver-age"
                  checked={driverAge}
                  onChange={(e) => setDriverAge(e.target.checked)}
                />
                <label htmlFor="driver-age">
                  <span className="checkmark"></span>
                  Driver aged between 30 - 65?
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="search-btn"
              onClick={(e) => {
                e.preventDefault();
                navigate("/car-rental/results", {
                  state: {
                    pickupLocation: "Delhi, Delhi, Delhi NCR, India",
                    dropoffLocation: differentLocation
                      ? "Different location"
                      : "Delhi, Delhi, Delhi NCR, India",
                    pickupDate,
                    dropoffDate,
                    pickupTime,
                    dropoffTime,
                    driverAge,
                  },
                });
              }}
            >
              Search
            </button>
          </form>
        </section>

        {/* Genius Banner */}
        <section className="genius-banner">
          <div className="banner-content">
            <h2>Travel more, spend less</h2>
            <div className="banner-card">
              <div className="banner-text">
                <h3>Sign in, save money</h3>
                <p>
                  Save 10% on select rental cars - just look for the blue Genius
                  label
                </p>
                <div className="banner-buttons">
                  <a href="/login" className="signin-btn">
                    Sign in
                  </a>
                  <a href="/register" className="register-btn">
                    Register
                  </a>
                </div>
              </div>
              <div className="banner-image">
                <img
                  src="https://t-cf.bstatic.com/design-assets/assets/v3.172.2/illustrations-traveller/GeniusGenericGiftBox.png"
                  alt="Genius Gift Box"
                />
              </div>
            </div>
          </div>
        </section>

        {/* USP Section */}
        <section className="usp-section">
          <h2>Reasons to book car rentals with Booking.com</h2>
          <div className="usp-cards">
            <div className="usp-card">
              <div className="usp-icon">
                <img
                  src="https://t-cf.bstatic.com/design-assets/assets/v3.172.2/illustrations-traveller/CustomerService.webp"
                  alt="Customer Service"
                />
              </div>
              <div className="usp-content">
                <h3>We're here for you</h3>
                <p>Customer support in over 30 languages</p>
              </div>
            </div>

            <div className="usp-card">
              <div className="usp-icon">
                <img
                  src="https://t-cf.bstatic.com/design-assets/assets/v3.172.2/illustrations-traveller/FreeCancellation.webp"
                  alt="Free Cancellation"
                />
              </div>
              <div className="usp-content">
                <h3>Free cancellation</h3>
                <p>Up to 48 hours before pick-up, on most bookings</p>
              </div>
            </div>

            <div className="usp-card">
              <div className="usp-icon">
                <img
                  src="https://t-cf.bstatic.com/design-assets/assets/v3.172.2/illustrations-traveller/Reviews.webp"
                  alt="Reviews"
                />
              </div>
              <div className="usp-content">
                <h3>5 million+ reviews</h3>
                <p>By real, verified customers</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2>Frequently asked questions</h2>
          <div className="faq-columns">
            <div className="faq-column">
              {faqData.left.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`faq-icon ${
                        expandedFaqs[faq.id] ? "expanded" : ""
                      }`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.268 8.913a.9.9 0 0 1-.266.642l-6.057 6.057A1.3 1.3 0 0 1 12 16c-.35.008-.69-.123-.945-.364L4.998 9.58a.91.91 0 0 1 0-1.284.897.897 0 0 1 1.284 0L12 13.99l5.718-5.718a.897.897 0 0 1 1.284 0 .88.88 0 0 1 .266.642"></path>
                    </svg>
                  </button>
                  {expandedFaqs[faq.id] && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="faq-column">
              {faqData.right.map((faq) => (
                <div key={faq.id} className="faq-item">
                  <button
                    className="faq-question"
                    onClick={() => toggleFaq(faq.id)}
                  >
                    <span>{faq.question}</span>
                    <svg
                      className={`faq-icon ${
                        expandedFaqs[faq.id] ? "expanded" : ""
                      }`}
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.268 8.913a.9.9 0 0 1-.266.642l-6.057 6.057A1.3 1.3 0 0 1 12 16c-.35.008-.69-.123-.945-.364L4.998 9.58a.91.91 0 0 1 0-1.284.897.897 0 0 1 1.284 0L12 13.99l5.718-5.718a.897.897 0 0 1 1.284 0 .88.88 0 0 1 .266.642"></path>
                    </svg>
                  </button>
                  {expandedFaqs[faq.id] && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Destinations */}
        <section className="destinations-section">
          <div className="destinations-header">
            <h2>Popular car hire destinations</h2>
            <p>Explore more options to hire a car for cheap</p>
          </div>

          <div className="destinations-tabs">
            <button
              className={`tab-btn ${activeTab === "cities" ? "active" : ""}`}
              onClick={() => setActiveTab("cities")}
            >
              Cities worldwide
            </button>
            <button
              className={`tab-btn ${activeTab === "airports" ? "active" : ""}`}
              onClick={() => setActiveTab("airports")}
            >
              Airports worldwide
            </button>
          </div>

          <div className="destinations-grid">
            {(activeTab === "cities" ? citiesData : airportsData).map(
              (item, index) => (
                <div key={index} className="destination-card">
                  <div className="destination-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="destination-info">
                    <a
                      href={`/cars/city/${item.name
                        .toLowerCase()
                        .replace(" ", "-")}`}
                      className="destination-name"
                    >
                      {item.name}
                    </a>
                    <p className="destination-locations">
                      {item.locations} car hire locations
                    </p>
                    <p className="destination-price">
                      Average price of <span>{item.price}</span> per day
                    </p>
                  </div>
                </div>
              )
            )}
          </div>

          <button className="show-more-btn">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M20.25 11.25h-7.5v-7.5a.75.75 0 0 0-1.5 0v7.5h-7.5a.75.75 0 0 0 0 1.5h7.5v7.5a.75.75 0 0 0 1.5 0v-7.5h7.5a.75.75 0 0 0 0-1.5"></path>
            </svg>
            Show more
          </button>
        </section>
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

export default CarRental;
