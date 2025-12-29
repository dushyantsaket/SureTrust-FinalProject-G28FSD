// // // // import React, { useState, useRef, useMemo } from "react";
// // // // import "./flights.css";
// // // // // Mock Data
// // // // const POPULAR_ROUTES = [
// // // //   {
// // // //     from: "Mumbai",
// // // //     to: "London",
// // // //     img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=100&q=80",
// // // //   },
// // // //   {
// // // //     from: "Mumbai",
// // // //     to: "Dubai",
// // // //     img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=100&q=80",
// // // //   },
// // // //   {
// // // //     from: "Mumbai",
// // // //     to: "Bangkok",
// // // //     img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=100&q=80",
// // // //   },
// // // //   {
// // // //     from: "Mumbai",
// // // //     to: "Singapore",
// // // //     img: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=100&q=80",
// // // //   },
// // // //   {
// // // //     from: "Mumbai",
// // // //     to: "New York",
// // // //     img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=100&q=80",
// // // //   },
// // // //   {
// // // //     from: "Mumbai",
// // // //     to: "Paris",
// // // //     img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=100&q=80",
// // // //   },
// // // // ];

// // // // const MOCK_FLIGHTS = [
// // // //   {
// // // //     id: "1",
// // // //     airline: "IndiGo",
// // // //     airlineLogo:
// // // //       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png",
// // // //     departureTime: "08:55",
// // // //     arrivalTime: "10:55",
// // // //     duration: "2h",
// // // //     price: 13470,
// // // //     stops: 0,
// // // //     type: "Economy",
// // // //   },
// // // //   {
// // // //     id: "2",
// // // //     airline: "Air India",
// // // //     airlineLogo:
// // // //       "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Air_India_Logo.svg/2560px-Air_India_Logo.svg.png",
// // // //     departureTime: "11:30",
// // // //     arrivalTime: "13:45",
// // // //     duration: "2h 15m",
// // // //     price: 14213,
// // // //     stops: 0,
// // // //     type: "Economy",
// // // //   },
// // // //   {
// // // //     id: "3",
// // // //     airline: "Vistara",
// // // //     airlineLogo:
// // // //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Vistara_logo.svg/2560px-Vistara_logo.svg.png",
// // // //     departureTime: "14:20",
// // // //     arrivalTime: "16:35",
// // // //     duration: "2h 15m",
// // // //     price: 15885,
// // // //     stops: 1,
// // // //     type: "Premium Economy",
// // // //   },
// // // //   {
// // // //     id: "4",
// // // //     airline: "SpiceJet",
// // // //     airlineLogo:
// // // //       "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/SpiceJet_logo.svg/2560px-SpiceJet_logo.svg.png",
// // // //     departureTime: "19:45",
// // // //     arrivalTime: "22:00",
// // // //     duration: "2h 15m",
// // // //     price: 12238,
// // // //     stops: 0,
// // // //     type: "Economy",
// // // //   },
// // // // ];

// // // // const AIRLINES = ["IndiGo", "Air India", "Vistara", "SpiceJet", "Go First"];
// // // // const STOP_TYPES = ["Direct only", "1 stop max", "2 stops max", "Any"];
// // // // const TIME_SLOTS = [
// // // //   { label: "Morning (5am–11am)", value: "morning" },
// // // //   { label: "Afternoon (11am–5pm)", value: "afternoon" },
// // // //   { label: "Evening (5pm–9pm)", value: "evening" },
// // // //   { label: "Night (9pm–5am)", value: "night" },
// // // // ];

// // // // // Components
// // // // const Navbar = () => {
// // // //   return (
// // // //     <nav className="navbar">
// // // //       <div className="navbar-container">
// // // //         <div className="navbar-left">
// // // //           <h1 className="navbar-logo">Booking.com</h1>
// // // //           <div className="navbar-menu">
// // // //             {/* <button className="navbar-menu-item">
// // // //               <span>🏨</span> Stays
// // // //             </button>
// // // //             <button className="navbar-menu-item active">
// // // //               <span>✈️</span> Flights
// // // //             </button>
// // // //             <button className="navbar-menu-item">
// // // //               <span>🏩</span> Flight + Hotel
// // // //             </button>
// // // //             <button className="navbar-menu-item">
// // // //               <span>🚗</span> Car rentals
// // // //             </button>
// // // //             <button className="navbar-menu-item">
// // // //               <span>🎡</span> Attractions
// // // //             </button>
// // // //             <button className="navbar-menu-item">
// // // //               <span>🚕</span> Airport taxis
// // // //             </button> */}
// // // //           </div>
// // // //         </div>
// // // //         <div className="navbar-right">
// // // //           <button className="navbar-action">INR</button>
// // // //           <img
// // // //             src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
// // // //             alt="India"
// // // //             className="navbar-flag"
// // // //           />
// // // //           <button className="navbar-action">❓</button>
// // // //           <button className="navbar-btn">Register</button>
// // // //           <button className="navbar-btn">Sign in</button>
// // // //         </div>
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // const BookingHeader = ({ currentStep, onStepClick }) => {
// // // //   const steps = [
// // // //     { label: "Choose your fare", step: "FARE_SELECTION" },
// // // //     { label: "Your details", step: "PASSENGER_DETAILS" },
// // // //     { label: "Extras", step: "SEAT_SELECTION" },
// // // //     { label: "Check and pay", step: "PAYMENT_REVIEW" },
// // // //   ];

// // // //   const getStepIndex = (step) => {
// // // //     switch (step) {
// // // //       case "FARE_SELECTION":
// // // //         return 0;
// // // //       case "PASSENGER_DETAILS":
// // // //         return 1;
// // // //       case "SEAT_SELECTION":
// // // //         return 2;
// // // //       case "PAYMENT_REVIEW":
// // // //         return 3;
// // // //       default:
// // // //         return -1;
// // // //     }
// // // //   };

// // // //   const currentIndex = getStepIndex(currentStep);

// // // //   return (
// // // //     <div className="booking-header">
// // // //       <div className="booking-header-container">
// // // //         <div className="booking-steps">
// // // //           <div className="booking-steps-line"></div>
// // // //           {steps.map((s, idx) => (
// // // //             <div key={s.step} className="booking-step-wrapper">
// // // //               <div
// // // //                 className={`booking-step-circle ${
// // // //                   idx <= currentIndex ? "active" : ""
// // // //                 }`}
// // // //               >
// // // //                 {idx + 1}
// // // //               </div>
// // // //               <span
// // // //                 className={`booking-step-label ${
// // // //                   idx <= currentIndex ? "active" : ""
// // // //                 }`}
// // // //               >
// // // //                 {s.label}
// // // //               </span>
// // // //             </div>
// // // //           ))}
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const FlightModal = ({ flight, onClose, onContinue }) => {
// // // //   return (
// // // //     <div className="flight-modal-overlay">
// // // //       <div className="flight-modal">
// // // //         <div className="flight-modal-header">
// // // //           <h3>Your flight to New Delhi</h3>
// // // //           <button onClick={onClose} className="flight-modal-close">
// // // //             ×
// // // //           </button>
// // // //         </div>

// // // //         <div className="flight-modal-content">
// // // //           <div className="flight-modal-details">
// // // //             <div>
// // // //               <div className="flight-modal-title">
// // // //                 <h4>Flight to New Delhi</h4>
// // // //                 <span>
// // // //                   {flight.duration} · {flight.type}
// // // //                 </span>
// // // //                 <button className="flight-share">🔗 Share this flight</button>
// // // //               </div>

// // // //               <div className="flight-timeline">
// // // //                 <div className="flight-timeline-item">
// // // //                   <div className="timeline-dot"></div>
// // // //                   <div className="flight-timeline-content">
// // // //                     <p>Sat, Jan 24 · 08:55 AM</p>
// // // //                     <p>
// // // //                       BOM · Chhatrapati Shivaji International Airport Mumbai
// // // //                     </p>
// // // //                   </div>
// // // //                   <div className="flight-airline">
// // // //                     <img src={flight.airlineLogo} alt={flight.airline} />
// // // //                     <p>{flight.airline} · Economy</p>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="flight-duration-banner">
// // // //                   <span>⏱️</span>
// // // //                   <span>2h flight duration</span>
// // // //                 </div>

// // // //                 <div className="flight-timeline-item">
// // // //                   <div className="timeline-dot"></div>
// // // //                   <div className="flight-timeline-content">
// // // //                     <p>Sat, Jan 24 · 10:55 AM</p>
// // // //                     <p>DEL · Indira Gandhi International Airport New Delhi</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="flight-features">
// // // //               <div className="flight-feature">
// // // //                 <h5>🧳 Included baggage</h5>
// // // //                 <div className="feature-item">
// // // //                   <span>👜</span>
// // // //                   <div>
// // // //                     <p>1 personal item</p>
// // // //                     <p>Must fit under the seat in front of you</p>
// // // //                   </div>
// // // //                   <span className="feature-tag">Included</span>
// // // //                 </div>
// // // //                 <div className="feature-item">
// // // //                   <span>🧳</span>
// // // //                   <div>
// // // //                     <p>1 cabin bag</p>
// // // //                     <p>25 x 35 x 55 cm · Max weight 7 kg</p>
// // // //                   </div>
// // // //                   <span className="feature-tag">Included</span>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="flight-feature">
// // // //                 <h5>📑 Fare rules</h5>
// // // //                 <div className="feature-item">
// // // //                   <span>📅</span>
// // // //                   <p>
// // // //                     You're allowed to change this flight, for a fee of INR 3,500
// // // //                     plus fare difference.
// // // //                   </p>
// // // //                 </div>
// // // //                 <div className="feature-item">
// // // //                   <span>💳</span>
// // // //                   <p>
// // // //                     Cancellations are allowed for a fee. Partial refunds apply
// // // //                     if cancelled 24h before.
// // // //                   </p>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="flight-modal-footer">
// // // //           <div className="flight-price">
// // // //             <span>INR {flight.price.toLocaleString()}</span>
// // // //             <span>ⓘ</span>
// // // //           </div>
// // // //           <button onClick={onContinue} className="flight-continue-btn">
// // // //             Continue
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const Home = ({ onSearch }) => {
// // // //   const scrollRef = useRef(null);

// // // //   const scroll = (direction) => {
// // // //     if (scrollRef.current) {
// // // //       const { scrollLeft, clientWidth } = scrollRef.current;
// // // //       const scrollTo =
// // // //         direction === "left"
// // // //           ? scrollLeft - clientWidth
// // // //           : scrollLeft + clientWidth;
// // // //       scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="home">
// // // //       <div className="home-hero">
// // // //         <div className="home-hero-content">
// // // //           <h2>Compare and book cheap flights with ease</h2>
// // // //           <p>Discover your next dream destination</p>

// // // //           <div className="search-box">
// // // //             <div className="search-options">
// // // //               <label>
// // // //                 <input type="radio" name="triptype" defaultChecked /> Round-trip
// // // //               </label>
// // // //               <label>
// // // //                 <input type="radio" name="triptype" /> One-way
// // // //               </label>
// // // //               <label>
// // // //                 <input type="radio" name="triptype" /> Multi-city
// // // //               </label>
// // // //               <select>
// // // //                 <option>Economy</option>
// // // //                 <option>Premium Economy</option>
// // // //                 <option>Business</option>
// // // //                 <option>First</option>
// // // //               </select>
// // // //               <label>
// // // //                 <input type="checkbox" /> Direct flights only
// // // //               </label>
// // // //             </div>

// // // //             <div className="search-fields">
// // // //               <div className="search-field">
// // // //                 <span>✈️</span>
// // // //                 <div>
// // // //                   <span>Leaving from</span>
// // // //                   <input type="text" defaultValue="Mumbai All airports" />
// // // //                 </div>
// // // //               </div>
// // // //               <div className="search-field">
// // // //                 <span>✈️</span>
// // // //                 <div>
// // // //                   <span>Going to</span>
// // // //                   <input type="text" placeholder="Where to?" />
// // // //                 </div>
// // // //               </div>
// // // //               <div className="search-field">
// // // //                 <span>📅</span>
// // // //                 <div>
// // // //                   <span>Travel dates</span>
// // // //                   <span>Sat, Jan 24, 2026 — Sat...</span>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="search-field">
// // // //                 <span>👤</span>
// // // //                 <div>
// // // //                   <span>Travelers</span>
// // // //                   <span>1 adult</span>
// // // //                 </div>
// // // //               </div>
// // // //               <button onClick={onSearch} className="search-btn">
// // // //                 Search
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="home-content">
// // // //         <section>
// // // //           <h3>Continue where you left off</h3>
// // // //           <div className="recent-searches">
// // // //             <div onClick={onSearch} className="recent-search">
// // // //               <div className="recent-search-img">
// // // //                 <img
// // // //                   src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=100&q=80"
// // // //                   alt="Delhi"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <h4>Mumbai to Delhi International Airport</h4>
// // // //                 <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
// // // //               </div>
// // // //             </div>
// // // //             <div onClick={onSearch} className="recent-search">
// // // //               <div className="recent-search-img">
// // // //                 <img
// // // //                   src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=100&q=80"
// // // //                   alt="Hindon"
// // // //                 />
// // // //               </div>
// // // //               <div>
// // // //                 <h4>Mumbai to Hindon Airport</h4>
// // // //                 <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         <section>
// // // //           <h3>Explore Anywhere</h3>
// // // //           <div className="explore-map">
// // // //             <img
// // // //               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
// // // //               alt="Map"
// // // //             />
// // // //             <div className="explore-map-center">
// // // //               <div>
// // // //                 <span>📍</span> Find flights to anywhere
// // // //               </div>
// // // //             </div>
// // // //             <button>Open Map</button>
// // // //           </div>
// // // //         </section>

// // // //         <section className="countries-section">
// // // //           <div className="section-header">
// // // //             <div>
// // // //               <h3>Explore by country</h3>
// // // //               <p>Discover trending destinations, just a flight away</p>
// // // //             </div>
// // // //             <div className="scroll-controls">
// // // //               <button onClick={() => scroll("left")}>←</button>
// // // //               <button onClick={() => scroll("right")}>→</button>
// // // //             </div>
// // // //           </div>

// // // //           <div ref={scrollRef} className="countries-grid">
// // // //             {[
// // // //               {
// // // //                 name: "United Kingdom",
// // // //                 img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
// // // //                 flag: "🇬🇧",
// // // //               },
// // // //               {
// // // //                 name: "India",
// // // //                 img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80",
// // // //                 flag: "🇮🇳",
// // // //               },
// // // //               {
// // // //                 name: "United Arab Emirates",
// // // //                 img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
// // // //                 flag: "🇦🇪",
// // // //               },
// // // //               {
// // // //                 name: "Thailand",
// // // //                 img: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=400&q=80",
// // // //                 flag: "🇹🇭",
// // // //               },
// // // //               {
// // // //                 name: "Germany",
// // // //                 img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
// // // //                 flag: "🇩🇪",
// // // //               },
// // // //               {
// // // //                 name: "France",
// // // //                 img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
// // // //                 flag: "🇫🇷",
// // // //               },
// // // //             ].map((country) => (
// // // //               <div
// // // //                 key={country.name}
// // // //                 onClick={onSearch}
// // // //                 className="country-card"
// // // //               >
// // // //                 <img src={country.img} alt={country.name} />
// // // //                 <div className="country-overlay"></div>
// // // //                 <div className="country-info">
// // // //                   <div>
// // // //                     <span>{country.flag}</span>
// // // //                     <h4>{country.name}</h4>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //             <div className="country-card-all">
// // // //               <div>🌏</div>
// // // //               <div>Anywhere</div>
// // // //               <p>Explore all destinations</p>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         <section>
// // // //           <h3>Popular flights near you</h3>
// // // //           <p>Find deals on domestic and international flights</p>
// // // //           <div className="flight-tabs">
// // // //             <button className="active">International</button>
// // // //             <button>Domestic</button>
// // // //           </div>
// // // //           <div className="popular-flights">
// // // //             {[
// // // //               {
// // // //                 city: "London",
// // // //                 date: "Jan 7 - Jan 15",
// // // //                 img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
// // // //               },
// // // //               {
// // // //                 city: "Dubai",
// // // //                 date: "Dec 26 - Jan 28",
// // // //                 img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
// // // //               },
// // // //               {
// // // //                 city: "Bangkok",
// // // //                 date: "Jan 1 - Jan 10",
// // // //                 img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=80",
// // // //               },
// // // //               {
// // // //                 city: "Frankfurt",
// // // //                 date: "Dec 24 - Jan 15",
// // // //                 img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
// // // //               },
// // // //             ].map((flight) => (
// // // //               <div key={flight.city} onClick={onSearch} className="flight-card">
// // // //                 <img src={flight.img} alt={flight.city} />
// // // //                 <div>
// // // //                   <h4>Mumbai to {flight.city}</h4>
// // // //                   <p>{flight.date} · Round trip</p>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </section>

// // // //         <section className="account-section">
// // // //           <div>
// // // //             <div className="account-icon">💎</div>
// // // //             <div>
// // // //               <h3>Your account, your travel</h3>
// // // //               <p>
// // // //                 All your trip details in one place. Sign in to book faster and
// // // //                 manage your trip with ease.
// // // //               </p>
// // // //               <div className="account-buttons">
// // // //                 <button>Sign in</button>
// // // //                 <button>Register</button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //           <div className="genius-badge">
// // // //             <img
// // // //               src="https://cf.bstatic.com/static/img/genius/genius_loyalty_badge/9d201e74a81617498c4d23a10363234907a97217.png"
// // // //               alt="Genius"
// // // //             />
// // // //           </div>
// // // //         </section>

// // // //         <section className="features-section">
// // // //           <div className="feature">
// // // //             <span>🔍</span>
// // // //             <div>
// // // //               <h4>Search a huge selection</h4>
// // // //               <p>
// // // //                 Easily compare flights, airlines, and prices - all in one place
// // // //               </p>
// // // //             </div>
// // // //           </div>
// // // //           <div className="feature">
// // // //             <span>💰</span>
// // // //             <div>
// // // //               <h4>Pay no hidden fees</h4>
// // // //               <p>Get a clear price breakdown every step of the way</p>
// // // //             </div>
// // // //           </div>
// // // //           <div className="feature">
// // // //             <span>✈️</span>
// // // //             <div>
// // // //               <h4>Get more flexibility</h4>
// // // //               <p>Change your travel dates with the Flexible ticket option*</p>
// // // //             </div>
// // // //           </div>
// // // //         </section>

// // // //         <section>
// // // //           <h3>Top flights from India</h3>
// // // //           <div className="route-tabs">
// // // //             {[
// // // //               "Popular routes",
// // // //               "Cities",
// // // //               "Countries",
// // // //               "Regions",
// // // //               "Airports",
// // // //             ].map((tab, i) => (
// // // //               <button key={tab} className={i === 0 ? "active" : ""}>
// // // //                 {tab}
// // // //               </button>
// // // //             ))}
// // // //           </div>
// // // //           <div className="routes-grid">
// // // //             {POPULAR_ROUTES.map((route, idx) => (
// // // //               <div key={idx} onClick={onSearch} className="route-item">
// // // //                 <img src={route.img} alt={route.to} />
// // // //                 <span>
// // // //                   {route.from} → {route.to}
// // // //                 </span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </section>

// // // //         <section>
// // // //           <h3>Frequently asked questions</h3>
// // // //           <div className="faq-grid">
// // // //             {[
// // // //               "How do I find the cheapest flights on Booking.com?",
// // // //               "Can I book one-way flights on Booking.com?",
// // // //               "How far in advance can I book a flight?",
// // // //               "Do flights get cheaper closer to departure?",
// // // //               "What is a flexible ticket?",
// // // //               "Does Booking.com charge credit card fees?",
// // // //             ].map((q) => (
// // // //               <div key={q} className="faq-item">
// // // //                 <span>{q}</span>
// // // //                 <span>⌄</span>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </section>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const SearchResults = ({ onViewDetails }) => {
// // // //   const [selectedAirlines, setSelectedAirlines] = useState(AIRLINES);
// // // //   const [selectedStops, setSelectedStops] = useState("Any");
// // // //   const [maxPrice, setMaxPrice] = useState(30000);

// // // //   const filteredFlights = useMemo(() => {
// // // //     return MOCK_FLIGHTS.filter((flight) => {
// // // //       const airlineMatch = selectedAirlines.includes(flight.airline);
// // // //       const stopsMatch =
// // // //         selectedStops === "Any" ||
// // // //         (selectedStops === "Direct only" && flight.stops === 0) ||
// // // //         (selectedStops === "1 stop max" && flight.stops <= 1);
// // // //       const priceMatch = flight.price <= maxPrice;
// // // //       return airlineMatch && stopsMatch && priceMatch;
// // // //     });
// // // //   }, [selectedAirlines, selectedStops, maxPrice]);

// // // //   return (
// // // //     <div className="search-results">
// // // //       <div className="search-results-header">
// // // //         <div className="search-results-container">
// // // //           <div className="search-bar">
// // // //             <div className="search-bar-field">
// // // //               <span>📍</span>
// // // //               <span>Mumbai → Delhi</span>
// // // //             </div>
// // // //             <div className="search-bar-field">
// // // //               <span>📅</span>
// // // //               <span>Sat, Jan 24</span>
// // // //             </div>
// // // //             <button>Search</button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="search-results-content">
// // // //         <div className="filters-sidebar">
// // // //           <div className="filter-section">
// // // //             <h4>Search summary</h4>
// // // //             <p>
// // // //               Showing {filteredFlights.length} results for your trip to Delhi
// // // //             </p>
// // // //             <button>View summary</button>
// // // //           </div>

// // // //           <div className="filter-section">
// // // //             <div className="filter-header">
// // // //               <h3>Filters</h3>
// // // //               <button>Clear all</button>
// // // //             </div>

// // // //             <div className="filter-group">
// // // //               <h4>Stops</h4>
// // // //               {STOP_TYPES.map((stop) => (
// // // //                 <label key={stop}>
// // // //                   <div>
// // // //                     <input
// // // //                       type="radio"
// // // //                       name="stops"
// // // //                       checked={selectedStops === stop}
// // // //                       onChange={() => setSelectedStops(stop)}
// // // //                     />
// // // //                     <span>{stop}</span>
// // // //                   </div>
// // // //                   <span>1996</span>
// // // //                 </label>
// // // //               ))}
// // // //             </div>

// // // //             <div className="filter-group">
// // // //               <h4>Airlines</h4>
// // // //               {AIRLINES.map((airline) => (
// // // //                 <label key={airline}>
// // // //                   <div>
// // // //                     <input
// // // //                       type="checkbox"
// // // //                       checked={selectedAirlines.includes(airline)}
// // // //                       onChange={() => {
// // // //                         setSelectedAirlines((prev) =>
// // // //                           prev.includes(airline)
// // // //                             ? prev.filter((a) => a !== airline)
// // // //                             : [...prev, airline]
// // // //                         );
// // // //                       }}
// // // //                     />
// // // //                     <span>{airline}</span>
// // // //                   </div>
// // // //                   <span>443</span>
// // // //                 </label>
// // // //               ))}
// // // //               <button>Show all ⌄</button>
// // // //             </div>

// // // //             <div className="filter-group">
// // // //               <h4>Price range</h4>
// // // //               <input
// // // //                 type="range"
// // // //                 min="10000"
// // // //                 max="30000"
// // // //                 value={maxPrice}
// // // //                 onChange={(e) => setMaxPrice(parseInt(e.target.value))}
// // // //               />
// // // //               <div className="price-range">
// // // //                 <span>INR 10,000</span>
// // // //                 <span>INR {maxPrice.toLocaleString()}</span>
// // // //               </div>
// // // //             </div>

// // // //             <div className="filter-group">
// // // //               <h4>Flight times</h4>
// // // //               <div className="time-tabs">
// // // //                 <button className="active">Departing</button>
// // // //                 <button>Returning</button>
// // // //               </div>
// // // //               {TIME_SLOTS.map((slot) => (
// // // //                 <label key={slot.label}>
// // // //                   <input type="checkbox" />
// // // //                   <span>{slot.label}</span>
// // // //                 </label>
// // // //               ))}
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="flights-main">
// // // //           <div className="sort-tabs">
// // // //             <button className="active">
// // // //               <span>Best</span>
// // // //               <span>The best combination</span>
// // // //             </button>
// // // //             <button>
// // // //               <span>Cheapest</span>
// // // //               <span>From INR 12,238</span>
// // // //             </button>
// // // //             <button>
// // // //               <span>Fastest</span>
// // // //               <span>From INR 13,389</span>
// // // //             </button>
// // // //           </div>

// // // //           <div className="price-alert">
// // // //             <div>
// // // //               <span>🌍</span>
// // // //               <div>
// // // //                 <p>We found better prices! Compare nearby dates.</p>
// // // //                 <p>Actual prices shown in next step.</p>
// // // //               </div>
// // // //             </div>
// // // //             <div className="price-dates">
// // // //               {["Jan 5–Jan 12", "Jan 6–Jan 13", "Jan 7–Jan 14"].map((d, i) => (
// // // //                 <div key={i}>
// // // //                   <p>{d}</p>
// // // //                   <p>INR 12,238</p>
// // // //                 </div>
// // // //               ))}
// // // //             </div>
// // // //           </div>

// // // //           <div className="flights-list">
// // // //             {filteredFlights.map((flight) => (
// // // //               <div key={flight.id} className="flight-card-result">
// // // //                 <div className="flight-card-main">
// // // //                   <div className="flight-badges">
// // // //                     <span className="best-badge">Best</span>
// // // //                     <span className="flexible-badge">
// // // //                       Flexible ticket upgrade available
// // // //                     </span>
// // // //                   </div>

// // // //                   <div className="flight-details">
// // // //                     <div className="flight-airline-logo">
// // // //                       <img src={flight.airlineLogo} alt={flight.airline} />
// // // //                     </div>
// // // //                     <div className="flight-time">
// // // //                       <span>{flight.departureTime}</span>
// // // //                       <span>BOM · Jan 24</span>
// // // //                     </div>
// // // //                     <div className="flight-route">
// // // //                       <div className="flight-route-line">
// // // //                         <span className="route-dot"></span>
// // // //                         <div className="route-line">
// // // //                           <div
// // // //                             className={`route-stops ${
// // // //                               flight.stops === 0 ? "direct" : "stop"
// // // //                             }`}
// // // //                           >
// // // //                             {flight.stops === 0
// // // //                               ? "Direct"
// // // //                               : `${flight.stops} stop`}
// // // //                           </div>
// // // //                         </div>
// // // //                         <span className="route-dot"></span>
// // // //                       </div>
// // // //                       <span>{flight.duration}</span>
// // // //                     </div>
// // // //                     <div className="flight-time">
// // // //                       <span>{flight.arrivalTime}</span>
// // // //                       <span>DEL · Jan 24</span>
// // // //                     </div>
// // // //                   </div>

// // // //                   <div className="flight-footer">
// // // //                     <span>{flight.airline}</span>
// // // //                     <button>Explore ticket options ⌄</button>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="flight-card-side">
// // // //                   <div>
// // // //                     <span className="fare-type">Saver</span>
// // // //                     <div className="flight-price-display">
// // // //                       <span>INR {flight.price.toLocaleString()}</span>
// // // //                       <span>ⓘ</span>
// // // //                     </div>
// // // //                     <p>Includes taxes and charges</p>
// // // //                   </div>

// // // //                   <button
// // // //                     onClick={() => onViewDetails(flight)}
// // // //                     className="view-details-btn"
// // // //                   >
// // // //                     View details
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const FareSelection = ({ flight, onContinue }) => {
// // // //   const FARES = [
// // // //     {
// // // //       name: "Eco Value",
// // // //       price: 14213,
// // // //       benefits: [
// // // //         "1 personal item",
// // // //         "1 cabin bag (7 kg)",
// // // //         "1 checked bag (15 kg)",
// // // //         "Flight change allowed for a fee",
// // // //         "Partial refund if you cancel",
// // // //         "Choose your own seats",
// // // //       ],
// // // //     },
// // // //     {
// // // //       name: "Eco Classic",
// // // //       price: 15885,
// // // //       popular: true,
// // // //       benefits: [
// // // //         "1 personal item",
// // // //         "1 cabin bag (7 kg)",
// // // //         "1 checked bag (20 kg)",
// // // //         "Flight change allowed for a fee",
// // // //         "Partial refund if you cancel",
// // // //         "Choose your own seats",
// // // //       ],
// // // //     },
// // // //     {
// // // //       name: "Eco Flex",
// // // //       price: 18027,
// // // //       benefits: [
// // // //         "1 personal item",
// // // //         "1 cabin bag (7 kg)",
// // // //         "1 checked bag (25 kg)",
// // // //         "Flight change allowed",
// // // //         "Partial refund if you cancel",
// // // //         "Choose your own seats",
// // // //       ],
// // // //     },
// // // //     {
// // // //       name: "Business Value",
// // // //       price: 67079,
// // // //       benefits: [
// // // //         "1 personal item",
// // // //         "1 cabin bag (10 kg)",
// // // //         "1 checked bag (30 kg)",
// // // //         "Flight change allowed for a fee",
// // // //         "Partial refund if you cancel",
// // // //         "Choose your own seats",
// // // //       ],
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <div className="fare-selection">
// // // //       <div className="fare-selection-header">
// // // //         <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
// // // //         <h2>Mumbai to New Delhi</h2>
// // // //       </div>

// // // //       <div className="fare-selection-title">
// // // //         <h3>Choose your fare</h3>
// // // //         <button>‹ Back to results</button>
// // // //       </div>

// // // //       <div className="fares-grid">
// // // //         {FARES.map((fare) => (
// // // //           <div
// // // //             key={fare.name}
// // // //             className={`fare-card ${fare.popular ? "popular" : ""}`}
// // // //           >
// // // //             {fare.popular && (
// // // //               <div className="fare-popular-tag">Popular Choice</div>
// // // //             )}
// // // //             <div className="fare-card-content">
// // // //               <div className="fare-header">
// // // //                 <h4>{fare.name}</h4>
// // // //                 <span>ⓘ</span>
// // // //               </div>
// // // //               <p>Total price INR {fare.price.toLocaleString()}</p>

// // // //               <div className="fare-benefits-title">Included in this fare:</div>
// // // //               <div className="fare-benefits">
// // // //                 {fare.benefits.map((benefit, i) => (
// // // //                   <div key={i} className="fare-benefit">
// // // //                     <span>
// // // //                       {benefit.includes("personal")
// // // //                         ? "👜"
// // // //                         : benefit.includes("cabin")
// // // //                         ? "🎒"
// // // //                         : benefit.includes("checked")
// // // //                         ? "🧳"
// // // //                         : benefit.includes("change")
// // // //                         ? "🔄"
// // // //                         : benefit.includes("refund")
// // // //                         ? "💰"
// // // //                         : "💺"}
// // // //                     </span>
// // // //                     <span>{benefit}</span>
// // // //                   </div>
// // // //                 ))}
// // // //               </div>

// // // //               <button
// // // //                 onClick={() => onContinue(fare.name)}
// // // //                 className="fare-select-btn"
// // // //               >
// // // //                 Continue
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         ))}
// // // //       </div>

// // // //       <div className="fare-warning">
// // // //         <span>⚠️</span>
// // // //         <p>
// // // //           Flight changes: if your new flight costs more than the original one,
// // // //           you'll need to pay the fare difference.
// // // //         </p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const PassengerDetails = ({ onContinue }) => {
// // // //   const [details, setDetails] = useState({
// // // //     firstName: "",
// // // //     lastName: "",
// // // //     email: "",
// // // //     phone: "",
// // // //   });

// // // //   return (
// // // //     <div className="passenger-details">
// // // //       <div className="passenger-container">
// // // //         <div className="passenger-main">
// // // //           <div className="passenger-header">
// // // //             <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
// // // //             <h2>Mumbai to New Delhi</h2>
// // // //           </div>

// // // //           <h3>Fill in your details</h3>

// // // //           <div className="passenger-card">
// // // //             <div className="passenger-card-header">
// // // //               <div className="passenger-icon">👤</div>
// // // //               <h3>Adult 1</h3>
// // // //             </div>

// // // //             <div className="passenger-card-content">
// // // //               <button className="add-details-btn">
// // // //                 Add this traveler's details
// // // //               </button>

// // // //               <div className="baggage-info">
// // // //                 <div className="baggage-item">
// // // //                   <span>👜</span>
// // // //                   <div>
// // // //                     <p>1 personal item</p>
// // // //                     <p className="included-tag">Included</p>
// // // //                     <p>Fits under the seat in front of you</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="baggage-item">
// // // //                   <span>🧳</span>
// // // //                   <div>
// // // //                     <p>1 cabin bag</p>
// // // //                     <p className="included-tag">Included</p>
// // // //                     <p>25 x 35 x 55 cm · 7 kg</p>
// // // //                   </div>
// // // //                 </div>
// // // //                 <div className="baggage-item">
// // // //                   <span>🏢</span>
// // // //                   <div>
// // // //                     <p>1 checked bag</p>
// // // //                     <p className="included-tag">Included</p>
// // // //                     <p>Max weight 15 kg</p>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="contact-card">
// // // //             <h3>Contact details</h3>
// // // //             <p>* Required</p>
// // // //             <div className="contact-form">
// // // //               <div className="form-group">
// // // //                 <label>Contact email *</label>
// // // //                 <input
// // // //                   type="email"
// // // //                   value={details.email}
// // // //                   placeholder="Enter your email"
// // // //                   onChange={(e) =>
// // // //                     setDetails((prev) => ({ ...prev, email: e.target.value }))
// // // //                   }
// // // //                 />
// // // //                 <p>We'll send your flight confirmation here</p>
// // // //               </div>
// // // //               <div className="form-group">
// // // //                 <label>Phone number *</label>
// // // //                 <div className="phone-input">
// // // //                   <button className="country-code">
// // // //                     <img
// // // //                       src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
// // // //                       alt="India"
// // // //                     />
// // // //                     <span>+91</span>
// // // //                     <span>⌄</span>
// // // //                   </button>
// // // //                   <input
// // // //                     type="tel"
// // // //                     value={details.phone}
// // // //                     placeholder="000 000 0000"
// // // //                     onChange={(e) =>
// // // //                       setDetails((prev) => ({ ...prev, phone: e.target.value }))
// // // //                     }
// // // //                   />
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="info-card">
// // // //             <div>
// // // //               <span>🧳</span>
// // // //               <div>
// // // //                 <h4>Good to know</h4>
// // // //                 <p>Special or oversized baggage policies</p>
// // // //               </div>
// // // //             </div>
// // // //             <span>›</span>
// // // //           </div>

// // // //           <div className="passenger-navigation">
// // // //             <button>‹ Back</button>
// // // //             <button onClick={() => onContinue(details)} className="next-btn">
// // // //               Next
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         <div className="passenger-sidebar">
// // // //           <div className="price-summary">
// // // //             <h4>Price details</h4>
// // // //             <div className="price-breakdown">
// // // //               <div className="price-item">
// // // //                 <span>Flight</span>
// // // //                 <span>
// // // //                   INR 13,470.98 <span>⌄</span>
// // // //                 </span>
// // // //               </div>
// // // //               <div className="price-subitem">
// // // //                 <span>Adult (1)</span>
// // // //                 <span>INR 13,470.98</span>
// // // //               </div>
// // // //             </div>
// // // //             <div className="price-total">
// // // //               <span>Total</span>
// // // //               <div>
// // // //                 <p>INR 13,470.98</p>
// // // //                 <p>Includes taxes and charges</p>
// // // //               </div>
// // // //             </div>

// // // //             <div className="price-guarantee">
// // // //               <div>
// // // //                 <span>✓</span>
// // // //                 <span>No hidden fees - track your price at every step</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const SeatSelection = ({ onContinue }) => {
// // // //   return (
// // // //     <div className="seat-selection">
// // // //       <div className="seat-container">
// // // //         <h2>Select your seat</h2>

// // // //         <div className="seat-content">
// // // //           <div className="seat-main">
// // // //             <div className="seat-card">
// // // //               <div className="seat-card-header">
// // // //                 <div>
// // // //                   <h4>Mumbai to New Delhi</h4>
// // // //                   <p>2h · IndiGo</p>
// // // //                 </div>
// // // //                 <span>⌄</span>
// // // //               </div>
// // // //               <div className="seat-not-selected">
// // // //                 <span>💺</span>
// // // //                 <p>No seat selected</p>
// // // //               </div>
// // // //               <button className="select-seat-btn">
// // // //                 Select a seat from INR 0.00 →
// // // //               </button>
// // // //             </div>

// // // //             <div className="seat-card disabled">
// // // //               <div className="seat-card-header">
// // // //                 <div>
// // // //                   <h4>New Delhi to Mumbai</h4>
// // // //                   <p>2h 15m · IndiGo</p>
// // // //                 </div>
// // // //                 <span>⌄</span>
// // // //               </div>
// // // //               <div className="seat-not-selected">
// // // //                 <span>💺</span>
// // // //                 <p>No seat selected</p>
// // // //               </div>
// // // //               <button disabled>Select a seat from INR 0.00</button>
// // // //             </div>
// // // //           </div>

// // // //           <div className="seat-sidebar">
// // // //             <div className="seat-price-summary">
// // // //               <h4>Price details</h4>
// // // //               <div className="seat-price-breakdown">
// // // //                 <div className="seat-price-item">
// // // //                   <span>Flight</span>
// // // //                   <span>
// // // //                     INR 13,470.98 <span>⌄</span>
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //               <div className="seat-price-total">
// // // //                 <span>Total</span>
// // // //                 <div>
// // // //                   <p>INR 13,470.98</p>
// // // //                   <p>Includes taxes and charges</p>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="seat-actions">
// // // //                 <button onClick={onContinue} className="skip-seat-btn">
// // // //                   Skip seat selection
// // // //                 </button>
// // // //                 <button className="back-btn">‹ Back</button>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // const PaymentReview = ({ onPay }) => {
// // // //   return (
// // // //     <div className="payment-review">
// // // //       <div className="payment-container">
// // // //         <div className="payment-main">
// // // //           <h2>Check and pay</h2>

// // // //           <div className="payment-card">
// // // //             <div className="payment-flight">
// // // //               <div className="flight-info">
// // // //                 <div className="flight-logo">
// // // //                   <img
// // // //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
// // // //                     alt="Indigo"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h4>Mumbai (BOM) to New Delhi (DEL)</h4>
// // // //                   <p>
// // // //                     Sat, Jan 24 · 08:55 AM - 10:55 AM · Direct · 2h · Economy
// // // //                   </p>
// // // //                 </div>
// // // //                 <button>View flight details</button>
// // // //               </div>

// // // //               <div className="payment-flight-return">
// // // //                 <div className="flight-logo">
// // // //                   <img
// // // //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
// // // //                     alt="Indigo"
// // // //                   />
// // // //                 </div>
// // // //                 <div>
// // // //                   <h4>New Delhi (DEL) to Mumbai (BOM)</h4>
// // // //                   <p>
// // // //                     Sat, Jan 31 · 11:45 AM - 02:00 PM · Direct · 2h 15m ·
// // // //                     Economy
// // // //                   </p>
// // // //                 </div>
// // // //                 <button>View flight details</button>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="payment-card">
// // // //             <h3>Contact details</h3>
// // // //             <p>Primary Contact</p>
// // // //             <div className="contact-details">
// // // //               <p>DUSHYANT MART</p>
// // // //               <p>+91 9910444525</p>
// // // //               <p>dushyantfurnituremart@gmail.com</p>
// // // //             </div>
// // // //           </div>

// // // //           <div className="payment-card">
// // // //             <h3>Traveller details</h3>
// // // //             <div className="traveller-details">
// // // //               <span>👤</span>
// // // //               <div>
// // // //                 <p>DUSHYANT MART</p>
// // // //                 <p>Adult · Male</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="payment-card">
// // // //             <div className="payment-method-header">
// // // //               <h3>Your payment</h3>
// // // //               <p>Simple, safe and secure.</p>
// // // //             </div>
// // // //             <div className="payment-method-content">
// // // //               <div className="payment-options">
// // // //                 <label>How would you like to pay?</label>
// // // //                 <div className="payment-methods">
// // // //                   {["MasterCard", "Visa", "Amex", "Discover", "UPI"].map(
// // // //                     (p) => (
// // // //                       <div key={p} className="payment-method">
// // // //                         <div className="card-icon"></div>
// // // //                         <span>{p}</span>
// // // //                       </div>
// // // //                     )
// // // //                   )}
// // // //                 </div>

// // // //                 <div className="card-details">
// // // //                   <div className="card-form-group">
// // // //                     <label>Cardholder's Name *</label>
// // // //                     <input type="text" defaultValue="DUSHYANT MART" />
// // // //                   </div>
// // // //                   <div className="card-form-group">
// // // //                     <label>Card Number *</label>
// // // //                     <div className="card-input">
// // // //                       <input type="text" placeholder="0000 0000 0000 0000" />
// // // //                       <span>💳</span>
// // // //                     </div>
// // // //                   </div>
// // // //                   <div className="card-form-row">
// // // //                     <div className="card-form-group">
// // // //                       <label>Expiry Date *</label>
// // // //                       <input type="text" placeholder="MM / YY" />
// // // //                     </div>
// // // //                     <div className="card-form-group">
// // // //                       <label>CVC *</label>
// // // //                       <div className="card-input">
// // // //                         <input type="text" placeholder="123" />
// // // //                         <span>ⓘ</span>
// // // //                       </div>
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="payment-terms">
// // // //                 <p>
// // // //                   By clicking "Pay now" you agree with the{" "}
// // // //                   <span>terms and conditions</span> and{" "}
// // // //                   <span>privacy policies</span> of Booking.com, Gotogate
// // // //                   International AB, IndiGo and with the <span>fare rules</span>.
// // // //                 </p>

// // // //                 <div className="payment-actions">
// // // //                   <button>‹ Back</button>
// // // //                   <button onClick={onPay} className="pay-now-btn">
// // // //                     <span>🔒</span> Pay now
// // // //                   </button>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         <div className="payment-sidebar">
// // // //           <div className="payment-summary">
// // // //             <h4>Price details</h4>
// // // //             <div className="payment-breakdown">
// // // //               <div className="payment-item">
// // // //                 <span>Flight</span>
// // // //                 <span>
// // // //                   INR 13,470.98 <span>⌄</span>
// // // //                 </span>
// // // //               </div>
// // // //               <div className="payment-subitem">
// // // //                 <span>Adult (1)</span>
// // // //                 <span>INR 13,470.98</span>
// // // //               </div>
// // // //             </div>
// // // //             <div className="payment-total">
// // // //               <span>Total</span>
// // // //               <div>
// // // //                 <p>INR 13,470.98</p>
// // // //                 <p>Includes taxes and charges</p>
// // // //               </div>
// // // //             </div>

// // // //             <div className="payment-guarantee">
// // // //               <div>
// // // //                 <span>✓</span>
// // // //                 <span>No hidden fees — here's what you'll pay</span>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // // Main App Component
// // // // const FlightsApp = () => {
// // // //   const [currentStep, setCurrentStep] = useState("HOME");
// // // //   const [selectedFlight, setSelectedFlight] = useState(null);
// // // //   const [showFlightModal, setShowFlightModal] = useState(false);

// // // //   const handleSearch = () => {
// // // //     setCurrentStep("SEARCH_RESULTS");
// // // //   };

// // // //   const handleViewFlightDetails = (flight) => {
// // // //     setSelectedFlight(flight);
// // // //     setShowFlightModal(true);
// // // //   };

// // // //   const handleContinueFromModal = () => {
// // // //     setShowFlightModal(false);
// // // //     setCurrentStep("FARE_SELECTION");
// // // //   };

// // // //   const handleSelectFare = (fare) => {
// // // //     setCurrentStep("PASSENGER_DETAILS");
// // // //   };

// // // //   const handlePassengerDetails = (details) => {
// // // //     setCurrentStep("SEAT_SELECTION");
// // // //   };

// // // //   const handleSeatSelection = () => {
// // // //     setCurrentStep("PAYMENT_REVIEW");
// // // //   };

// // // //   const handlePayment = () => {
// // // //     alert("Payment successful! Booking confirmed.");
// // // //     setCurrentStep("HOME");
// // // //   };

// // // //   return (
// // // //     <div className="flights-app">
// // // //       <Navbar />

// // // //       {currentStep !== "HOME" && currentStep !== "SEARCH_RESULTS" && (
// // // //         <BookingHeader currentStep={currentStep} onStepClick={setCurrentStep} />
// // // //       )}

// // // //       {currentStep === "HOME" && <Home onSearch={handleSearch} />}

// // // //       {currentStep === "SEARCH_RESULTS" && (
// // // //         <SearchResults onViewDetails={handleViewFlightDetails} />
// // // //       )}

// // // //       {currentStep === "FARE_SELECTION" && selectedFlight && (
// // // //         <FareSelection flight={selectedFlight} onContinue={handleSelectFare} />
// // // //       )}

// // // //       {currentStep === "PASSENGER_DETAILS" && (
// // // //         <PassengerDetails onContinue={handlePassengerDetails} />
// // // //       )}

// // // //       {currentStep === "SEAT_SELECTION" && (
// // // //         <SeatSelection onContinue={handleSeatSelection} />
// // // //       )}

// // // //       {currentStep === "PAYMENT_REVIEW" && (
// // // //         <PaymentReview onPay={handlePayment} />
// // // //       )}

// // // //       {showFlightModal && selectedFlight && (
// // // //         <FlightModal
// // // //           flight={selectedFlight}
// // // //           onClose={() => setShowFlightModal(false)}
// // // //           onContinue={handleContinueFromModal}
// // // //         />
// // // //       )}
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FlightsApp;

// // // import React, { useState, useRef, useMemo } from "react";
// // // import "./flights.css";

// // // // Mock Data
// // // const POPULAR_ROUTES = [
// // //   {
// // //     from: "Mumbai",
// // //     to: "London",
// // //     img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
// // //   },
// // //   {
// // //     from: "Mumbai",
// // //     to: "Dubai",
// // //     img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
// // //   },
// // //   {
// // //     from: "Mumbai",
// // //     to: "Bangkok",
// // //     img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=80",
// // //   },
// // //   {
// // //     from: "Mumbai",
// // //     to: "Singapore",
// // //     img: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=400&q=80",
// // //   },
// // //   {
// // //     from: "Mumbai",
// // //     to: "New York",
// // //     img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
// // //   },
// // //   {
// // //     from: "Mumbai",
// // //     to: "Paris",
// // //     img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
// // //   },
// // // ];

// // // const MOCK_FLIGHTS = [
// // //   {
// // //     id: "1",
// // //     airline: "IndiGo",
// // //     airlineLogo:
// // //       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png",
// // //     departureTime: "08:55",
// // //     arrivalTime: "10:55",
// // //     duration: "2h",
// // //     price: 13470,
// // //     stops: 0,
// // //     type: "Economy",
// // //   },
// // //   {
// // //     id: "2",
// // //     airline: "Air India",
// // //     airlineLogo:
// // //       "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Air_India_Logo.svg/2560px-Air_India_Logo.svg.png",
// // //     departureTime: "11:30",
// // //     arrivalTime: "13:45",
// // //     duration: "2h 15m",
// // //     price: 14213,
// // //     stops: 0,
// // //     type: "Economy",
// // //   },
// // //   {
// // //     id: "3",
// // //     airline: "Vistara",
// // //     airlineLogo:
// // //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Vistara_logo.svg/2560px-Vistara_logo.svg.png",
// // //     departureTime: "14:20",
// // //     arrivalTime: "16:35",
// // //     duration: "2h 15m",
// // //     price: 15885,
// // //     stops: 1,
// // //     type: "Premium Economy",
// // //   },
// // //   {
// // //     id: "4",
// // //     airline: "SpiceJet",
// // //     airlineLogo:
// // //       "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/SpiceJet_logo.svg/2560px-SpiceJet_logo.svg.png",
// // //     departureTime: "19:45",
// // //     arrivalTime: "22:00",
// // //     duration: "2h 15m",
// // //     price: 12238,
// // //     stops: 0,
// // //     type: "Economy",
// // //   },
// // // ];

// // // const AIRLINES = ["IndiGo", "Air India", "Vistara", "SpiceJet", "Go First"];
// // // const STOP_TYPES = ["Direct only", "1 stop max", "2 stops max", "Any"];
// // // const TIME_SLOTS = [
// // //   { label: "Morning (5am–11am)", value: "morning" },
// // //   { label: "Afternoon (11am–5pm)", value: "afternoon" },
// // //   { label: "Evening (5pm–9pm)", value: "evening" },
// // //   { label: "Night (9pm–5am)", value: "night" },
// // // ];

// // // // Components
// // // const Navbar = () => {
// // //   return (
// // //     <nav className="navbar">
// // //       <div className="navbar-container">
// // //         <div className="navbar-left">
// // //           <h1 className="navbar-logo">Booking.com</h1>
// // //           <div className="navbar-menu">
// // //             <button className="navbar-menu-item">
// // //               <span>🏨</span> Stays
// // //             </button>
// // //             <button className="navbar-menu-item active">
// // //               <span>✈️</span> Flights
// // //             </button>
// // //             <button className="navbar-menu-item">
// // //               <span>🏩</span> Flight + Hotel
// // //             </button>
// // //             <button className="navbar-menu-item">
// // //               <span>🚗</span> Car rentals
// // //             </button>
// // //             <button className="navbar-menu-item">
// // //               <span>🎡</span> Attractions
// // //             </button>
// // //             <button className="navbar-menu-item">
// // //               <span>🚕</span> Airport taxis
// // //             </button>
// // //           </div>
// // //         </div>
// // //         <div className="navbar-right">
// // //           <button className="navbar-action">INR</button>
// // //           <img
// // //             src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
// // //             alt="India"
// // //             className="navbar-flag"
// // //           />
// // //           <button className="navbar-action">❓</button>
// // //           <button className="navbar-btn">Register</button>
// // //           <button className="navbar-btn">Sign in</button>
// // //         </div>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // const BookingHeader = ({ currentStep, onStepClick }) => {
// // //   const steps = [
// // //     { label: "Choose your fare", step: "FARE_SELECTION" },
// // //     { label: "Your details", step: "PASSENGER_DETAILS" },
// // //     { label: "Extras", step: "SEAT_SELECTION" },
// // //     { label: "Check and pay", step: "PAYMENT_REVIEW" },
// // //   ];

// // //   const getStepIndex = (step) => {
// // //     switch (step) {
// // //       case "FARE_SELECTION":
// // //         return 0;
// // //       case "PASSENGER_DETAILS":
// // //         return 1;
// // //       case "SEAT_SELECTION":
// // //         return 2;
// // //       case "PAYMENT_REVIEW":
// // //         return 3;
// // //       default:
// // //         return -1;
// // //     }
// // //   };

// // //   const currentIndex = getStepIndex(currentStep);

// // //   return (
// // //     <div className="booking-header">
// // //       <div className="booking-header-container">
// // //         <div className="booking-steps">
// // //           <div className="booking-steps-line"></div>
// // //           {steps.map((s, idx) => (
// // //             <div key={s.step} className="booking-step-wrapper">
// // //               <div
// // //                 className={`booking-step-circle ${
// // //                   idx <= currentIndex ? "active" : ""
// // //                 }`}
// // //               >
// // //                 {idx + 1}
// // //               </div>
// // //               <span
// // //                 className={`booking-step-label ${
// // //                   idx <= currentIndex ? "active" : ""
// // //                 }`}
// // //               >
// // //                 {s.label}
// // //               </span>
// // //             </div>
// // //           ))}
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const FlightModal = ({ flight, onClose, onContinue }) => {
// // //   return (
// // //     <div className="flight-modal-overlay">
// // //       <div className="flight-modal">
// // //         <div className="flight-modal-header">
// // //           <h3>Your flight to New Delhi</h3>
// // //           <button onClick={onClose} className="flight-modal-close">
// // //             ×
// // //           </button>
// // //         </div>

// // //         <div className="flight-modal-content">
// // //           <div className="flight-modal-details">
// // //             <div>
// // //               <div className="flight-modal-title">
// // //                 <h4>Flight to New Delhi</h4>
// // //                 <span>
// // //                   {flight.duration} · {flight.type}
// // //                 </span>
// // //                 <button className="flight-share">🔗 Share this flight</button>
// // //               </div>

// // //               <div className="flight-timeline">
// // //                 <div className="flight-timeline-item">
// // //                   <div className="timeline-dot"></div>
// // //                   <div className="flight-timeline-content">
// // //                     <p>Sat, Jan 24 · 08:55 AM</p>
// // //                     <p>
// // //                       BOM · Chhatrapati Shivaji International Airport Mumbai
// // //                     </p>
// // //                   </div>
// // //                   <div className="flight-airline">
// // //                     <img src={flight.airlineLogo} alt={flight.airline} />
// // //                     <p>{flight.airline} · Economy</p>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flight-duration-banner">
// // //                   <span>⏱️</span>
// // //                   <span>2h flight duration</span>
// // //                 </div>

// // //                 <div className="flight-timeline-item">
// // //                   <div className="timeline-dot"></div>
// // //                   <div className="flight-timeline-content">
// // //                     <p>Sat, Jan 24 · 10:55 AM</p>
// // //                     <p>DEL · Indira Gandhi International Airport New Delhi</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="flight-features">
// // //               <div className="flight-feature">
// // //                 <h5>🧳 Included baggage</h5>
// // //                 <div className="feature-item">
// // //                   <span>👜</span>
// // //                   <div>
// // //                     <p>1 personal item</p>
// // //                     <p>Must fit under the seat in front of you</p>
// // //                   </div>
// // //                   <span className="feature-tag">Included</span>
// // //                 </div>
// // //                 <div className="feature-item">
// // //                   <span>🧳</span>
// // //                   <div>
// // //                     <p>1 cabin bag</p>
// // //                     <p>25 × 35 × 55 cm · Max weight 7 kg</p>
// // //                   </div>
// // //                   <span className="feature-tag">Included</span>
// // //                 </div>
// // //               </div>
// // //               <div className="flight-feature">
// // //                 <h5>📑 Fare rules</h5>
// // //                 <div className="feature-item">
// // //                   <span>📅</span>
// // //                   <p>
// // //                     You're allowed to change this flight, for a fee of INR 3,500
// // //                     plus fare difference.
// // //                   </p>
// // //                 </div>
// // //                 <div className="feature-item">
// // //                   <span>💳</span>
// // //                   <p>
// // //                     Cancellations are allowed for a fee. Partial refunds apply
// // //                     if cancelled 24h before.
// // //                   </p>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="flight-modal-footer">
// // //           <div className="flight-price">
// // //             <span>INR {flight.price.toLocaleString()}</span>
// // //             <span>ⓘ</span>
// // //           </div>
// // //           <button onClick={onContinue} className="flight-continue-btn">
// // //             Continue
// // //           </button>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const Home = ({ onSearch }) => {
// // //   const scrollRef = useRef(null);

// // //   const scroll = (direction) => {
// // //     if (scrollRef.current) {
// // //       const { scrollLeft, clientWidth } = scrollRef.current;
// // //       const scrollTo =
// // //         direction === "left"
// // //           ? scrollLeft - clientWidth
// // //           : scrollLeft + clientWidth;
// // //       scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
// // //     }
// // //   };

// // //   return (
// // //     <div className="home">
// // //       <div className="home-hero">
// // //         <div className="home-hero-content">
// // //           <h2>Compare and book cheap flights with ease</h2>
// // //           <p>Discover your next dream destination</p>

// // //           <div className="search-box">
// // //             <div className="search-options">
// // //               <label>
// // //                 <input type="radio" name="triptype" defaultChecked /> Round-trip
// // //               </label>
// // //               <label>
// // //                 <input type="radio" name="triptype" /> One-way
// // //               </label>
// // //               <label>
// // //                 <input type="radio" name="triptype" /> Multi-city
// // //               </label>
// // //               <select>
// // //                 <option>Economy</option>
// // //                 <option>Premium Economy</option>
// // //                 <option>Business</option>
// // //                 <option>First</option>
// // //               </select>
// // //               <label>
// // //                 <input type="checkbox" /> Direct flights only
// // //               </label>
// // //             </div>

// // //             <div className="search-fields">
// // //               <div className="search-field">
// // //                 <span>✈️</span>
// // //                 <div>
// // //                   <span>Leaving from</span>
// // //                   <input type="text" defaultValue="Mumbai All airports" />
// // //                 </div>
// // //               </div>
// // //               <div className="search-field">
// // //                 <span>✈️</span>
// // //                 <div>
// // //                   <span>Going to</span>
// // //                   <input type="text" placeholder="Where to?" />
// // //                 </div>
// // //               </div>
// // //               <div className="search-field">
// // //                 <span>📅</span>
// // //                 <div>
// // //                   <span>Travel dates</span>
// // //                   <span>Sat, Jan 24, 2026 — Sat, Jan 31, 2026</span>
// // //                 </div>
// // //               </div>
// // //               <div className="search-field">
// // //                 <span>👤</span>
// // //                 <div>
// // //                   <span>Travelers</span>
// // //                   <span>1 adult</span>
// // //                 </div>
// // //               </div>
// // //               <button onClick={onSearch} className="search-btn">
// // //                 Search
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="home-content">
// // //         <section>
// // //           <h3>Continue where you left off</h3>
// // //           <div className="recent-searches">
// // //             <div onClick={onSearch} className="recent-search">
// // //               <div className="recent-search-img">
// // //                 <img
// // //                   src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80"
// // //                   alt="Delhi"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <h4>Mumbai to Delhi International Airport</h4>
// // //                 <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
// // //               </div>
// // //             </div>
// // //             <div onClick={onSearch} className="recent-search">
// // //               <div className="recent-search-img">
// // //                 <img
// // //                   src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80"
// // //                   alt="Hindon"
// // //                 />
// // //               </div>
// // //               <div>
// // //                 <h4>Mumbai to Hindon Airport</h4>
// // //                 <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <section>
// // //           <h3>Explore Anywhere</h3>
// // //           <div className="explore-map">
// // //             <img
// // //               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
// // //               alt="Map"
// // //             />
// // //             <div className="explore-map-center">
// // //               <div>
// // //                 <span>📍</span> Find flights to anywhere
// // //               </div>
// // //             </div>
// // //             <button>Open Map</button>
// // //           </div>
// // //         </section>

// // //         <section className="countries-section">
// // //           <div className="section-header">
// // //             <div>
// // //               <h3>Explore by country</h3>
// // //               <p>Discover trending destinations, just a flight away</p>
// // //             </div>
// // //             <div className="scroll-controls">
// // //               <button onClick={() => scroll("left")}>←</button>
// // //               <button onClick={() => scroll("right")}>→</button>
// // //             </div>
// // //           </div>

// // //           <div ref={scrollRef} className="countries-grid">
// // //             {[
// // //               {
// // //                 name: "United Kingdom",
// // //                 img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
// // //                 flag: "🇬🇧",
// // //               },
// // //               {
// // //                 name: "India",
// // //                 img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80",
// // //                 flag: "🇮🇳",
// // //               },
// // //               {
// // //                 name: "United Arab Emirates",
// // //                 img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
// // //                 flag: "🇦🇪",
// // //               },
// // //               {
// // //                 name: "Thailand",
// // //                 img: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=400&q=80",
// // //                 flag: "🇹🇭",
// // //               },
// // //               {
// // //                 name: "Germany",
// // //                 img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
// // //                 flag: "🇩🇪",
// // //               },
// // //               {
// // //                 name: "France",
// // //                 img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
// // //                 flag: "🇫🇷",
// // //               },
// // //             ].map((country) => (
// // //               <div
// // //                 key={country.name}
// // //                 onClick={onSearch}
// // //                 className="country-card"
// // //               >
// // //                 <img src={country.img} alt={country.name} />
// // //                 <div className="country-overlay"></div>
// // //                 <div className="country-info">
// // //                   <div>
// // //                     <span>{country.flag}</span>
// // //                     <h4>{country.name}</h4>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //             <div className="country-card-all">
// // //               <div>🌏</div>
// // //               <div>Anywhere</div>
// // //               <p>Explore all destinations</p>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <section>
// // //           <h3>Popular flights near you</h3>
// // //           <p>Find deals on domestic and international flights</p>
// // //           <div className="flight-tabs">
// // //             <button className="active">International</button>
// // //             <button>Domestic</button>
// // //           </div>
// // //           <div className="popular-flights">
// // //             {[
// // //               {
// // //                 city: "London",
// // //                 date: "Jan 7 - Jan 15",
// // //                 img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
// // //               },
// // //               {
// // //                 city: "Dubai",
// // //                 date: "Dec 26 - Jan 28",
// // //                 img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
// // //               },
// // //               {
// // //                 city: "Bangkok",
// // //                 date: "Jan 1 - Jan 10",
// // //                 img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=80",
// // //               },
// // //               {
// // //                 city: "Frankfurt",
// // //                 date: "Dec 24 - Jan 15",
// // //                 img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
// // //               },
// // //             ].map((flight) => (
// // //               <div key={flight.city} onClick={onSearch} className="flight-card">
// // //                 <img src={flight.img} alt={flight.city} />
// // //                 <div>
// // //                   <h4>Mumbai to {flight.city}</h4>
// // //                   <p>{flight.date} · Round trip</p>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </section>

// // //         <section className="account-section">
// // //           <div>
// // //             <div className="account-icon">💎</div>
// // //             <div>
// // //               <h3>Your account, your travel</h3>
// // //               <p>
// // //                 All your trip details in one place. Sign in to book faster and
// // //                 manage your trip with ease.
// // //               </p>
// // //               <div className="account-buttons">
// // //                 <button>Sign in</button>
// // //                 <button>Register</button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //           <div className="genius-badge">
// // //             <img
// // //               src="https://cf.bstatic.com/static/img/genius/genius_loyalty_badge/9d201e74a81617498c4d23a10363234907a97217.png"
// // //               alt="Genius"
// // //             />
// // //           </div>
// // //         </section>

// // //         <section className="features-section">
// // //           <div className="feature">
// // //             <span>🔍</span>
// // //             <div>
// // //               <h4>Search a huge selection</h4>
// // //               <p>
// // //                 Easily compare flights, airlines, and prices - all in one place
// // //               </p>
// // //             </div>
// // //           </div>
// // //           <div className="feature">
// // //             <span>💰</span>
// // //             <div>
// // //               <h4>Pay no hidden fees</h4>
// // //               <p>Get a clear price breakdown every step of the way</p>
// // //             </div>
// // //           </div>
// // //           <div className="feature">
// // //             <span>✈️</span>
// // //             <div>
// // //               <h4>Get more flexibility</h4>
// // //               <p>Change your travel dates with the Flexible ticket option*</p>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         <section>
// // //           <h3>Top flights from India</h3>
// // //           <div className="route-tabs">
// // //             {[
// // //               "Popular routes",
// // //               "Cities",
// // //               "Countries",
// // //               "Regions",
// // //               "Airports",
// // //             ].map((tab, i) => (
// // //               <button key={tab} className={i === 0 ? "active" : ""}>
// // //                 {tab}
// // //               </button>
// // //             ))}
// // //           </div>
// // //           <div className="routes-grid">
// // //             {POPULAR_ROUTES.map((route, idx) => (
// // //               <div key={idx} onClick={onSearch} className="route-item">
// // //                 <img src={route.img} alt={route.to} />
// // //                 <span>
// // //                   {route.from} → {route.to}
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </section>

// // //         <section>
// // //           <h3>Frequently asked questions</h3>
// // //           <div className="faq-grid">
// // //             {[
// // //               "How do I find the cheapest flights on Booking.com?",
// // //               "Can I book one-way flights on Booking.com?",
// // //               "How far in advance can I book a flight?",
// // //               "Do flights get cheaper closer to departure?",
// // //               "What is a flexible ticket?",
// // //               "Does Booking.com charge credit card fees?",
// // //             ].map((q) => (
// // //               <div key={q} className="faq-item">
// // //                 <span>{q}</span>
// // //                 <span>⌄</span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const SearchResults = ({ onViewDetails }) => {
// // //   const [selectedAirlines, setSelectedAirlines] = useState(AIRLINES);
// // //   const [selectedStops, setSelectedStops] = useState("Any");
// // //   const [maxPrice, setMaxPrice] = useState(30000);

// // //   const filteredFlights = useMemo(() => {
// // //     return MOCK_FLIGHTS.filter((flight) => {
// // //       const airlineMatch = selectedAirlines.includes(flight.airline);
// // //       const stopsMatch =
// // //         selectedStops === "Any" ||
// // //         (selectedStops === "Direct only" && flight.stops === 0) ||
// // //         (selectedStops === "1 stop max" && flight.stops <= 1);
// // //       const priceMatch = flight.price <= maxPrice;
// // //       return airlineMatch && stopsMatch && priceMatch;
// // //     });
// // //   }, [selectedAirlines, selectedStops, maxPrice]);

// // //   return (
// // //     <div className="search-results">
// // //       <div className="search-results-header">
// // //         <div className="search-results-container">
// // //           <div className="search-bar">
// // //             <div className="search-bar-field">
// // //               <span>📍</span>
// // //               <span>Mumbai → Delhi</span>
// // //             </div>
// // //             <div className="search-bar-field">
// // //               <span>📅</span>
// // //               <span>Sat, Jan 24</span>
// // //             </div>
// // //             <button>Search</button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="search-results-content">
// // //         <div className="filters-sidebar">
// // //           <div className="filter-section">
// // //             <h4>Search summary</h4>
// // //             <p>
// // //               Showing {filteredFlights.length} results for your trip to Delhi
// // //             </p>
// // //             <button>View summary</button>
// // //           </div>

// // //           <div className="filter-section">
// // //             <div className="filter-header">
// // //               <h3>Filters</h3>
// // //               <button>Clear all</button>
// // //             </div>

// // //             <div className="filter-group">
// // //               <h4>Stops</h4>
// // //               {STOP_TYPES.map((stop) => (
// // //                 <label key={stop}>
// // //                   <div>
// // //                     <input
// // //                       type="radio"
// // //                       name="stops"
// // //                       checked={selectedStops === stop}
// // //                       onChange={() => setSelectedStops(stop)}
// // //                     />
// // //                     <span>{stop}</span>
// // //                   </div>
// // //                   <span>1996</span>
// // //                 </label>
// // //               ))}
// // //             </div>

// // //             <div className="filter-group">
// // //               <h4>Airlines</h4>
// // //               {AIRLINES.map((airline) => (
// // //                 <label key={airline}>
// // //                   <div>
// // //                     <input
// // //                       type="checkbox"
// // //                       checked={selectedAirlines.includes(airline)}
// // //                       onChange={() => {
// // //                         setSelectedAirlines((prev) =>
// // //                           prev.includes(airline)
// // //                             ? prev.filter((a) => a !== airline)
// // //                             : [...prev, airline]
// // //                         );
// // //                       }}
// // //                     />
// // //                     <span>{airline}</span>
// // //                   </div>
// // //                   <span>443</span>
// // //                 </label>
// // //               ))}
// // //               <button>Show all ⌄</button>
// // //             </div>

// // //             <div className="filter-group">
// // //               <h4>Price range</h4>
// // //               <input
// // //                 type="range"
// // //                 min="10000"
// // //                 max="30000"
// // //                 value={maxPrice}
// // //                 onChange={(e) => setMaxPrice(parseInt(e.target.value))}
// // //               />
// // //               <div className="price-range">
// // //                 <span>INR 10,000</span>
// // //                 <span>INR {maxPrice.toLocaleString()}</span>
// // //               </div>
// // //             </div>

// // //             <div className="filter-group">
// // //               <h4>Flight times</h4>
// // //               <div className="time-tabs">
// // //                 <button className="active">Departing</button>
// // //                 <button>Returning</button>
// // //               </div>
// // //               {TIME_SLOTS.map((slot) => (
// // //                 <label key={slot.label}>
// // //                   <input type="checkbox" />
// // //                   <span>{slot.label}</span>
// // //                 </label>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="flights-main">
// // //           <div className="sort-tabs">
// // //             <button className="active">
// // //               <span>Best</span>
// // //               <span>The best combination</span>
// // //             </button>
// // //             <button>
// // //               <span>Cheapest</span>
// // //               <span>From INR 12,238</span>
// // //             </button>
// // //             <button>
// // //               <span>Fastest</span>
// // //               <span>From INR 13,389</span>
// // //             </button>
// // //           </div>

// // //           <div className="price-alert">
// // //             <div>
// // //               <span>🌍</span>
// // //               <div>
// // //                 <p>We found better prices! Compare nearby dates.</p>
// // //                 <p>Actual prices shown in next step.</p>
// // //               </div>
// // //             </div>
// // //             <div className="price-dates">
// // //               {["Jan 5–Jan 12", "Jan 6–Jan 13", "Jan 7–Jan 14"].map((d, i) => (
// // //                 <div key={i}>
// // //                   <p>{d}</p>
// // //                   <p>INR 12,238</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="flights-list">
// // //             {filteredFlights.map((flight) => (
// // //               <div key={flight.id} className="flight-card-result">
// // //                 <div className="flight-card-main">
// // //                   <div className="flight-badges">
// // //                     <span className="best-badge">Best</span>
// // //                     <span className="flexible-badge">
// // //                       Flexible ticket upgrade available
// // //                     </span>
// // //                   </div>

// // //                   <div className="flight-details">
// // //                     <div className="flight-airline-logo">
// // //                       <img src={flight.airlineLogo} alt={flight.airline} />
// // //                     </div>
// // //                     <div className="flight-time">
// // //                       <span>{flight.departureTime}</span>
// // //                       <span>BOM · Jan 24</span>
// // //                     </div>
// // //                     <div className="flight-route">
// // //                       <div className="flight-route-line">
// // //                         <span className="route-dot"></span>
// // //                         <div className="route-line">
// // //                           <div
// // //                             className={`route-stops ${
// // //                               flight.stops === 0 ? "direct" : "stop"
// // //                             }`}
// // //                           >
// // //                             {flight.stops === 0
// // //                               ? "Direct"
// // //                               : `${flight.stops} stop`}
// // //                           </div>
// // //                         </div>
// // //                         <span className="route-dot"></span>
// // //                       </div>
// // //                       <span>{flight.duration}</span>
// // //                     </div>
// // //                     <div className="flight-time">
// // //                       <span>{flight.arrivalTime}</span>
// // //                       <span>DEL · Jan 24</span>
// // //                     </div>
// // //                   </div>

// // //                   <div className="flight-footer">
// // //                     <span>{flight.airline}</span>
// // //                     <button>Explore ticket options ⌄</button>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flight-card-side">
// // //                   <div>
// // //                     <span className="fare-type">Saver</span>
// // //                     <div className="flight-price-display">
// // //                       <span>INR {flight.price.toLocaleString()}</span>
// // //                       <span>ⓘ</span>
// // //                     </div>
// // //                     <p>Includes taxes and charges</p>
// // //                   </div>

// // //                   <button
// // //                     onClick={() => onViewDetails(flight)}
// // //                     className="view-details-btn"
// // //                   >
// // //                     View details
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const FareSelection = ({ flight, onContinue }) => {
// // //   const FARES = [
// // //     {
// // //       name: "Eco Value",
// // //       price: 14213,
// // //       benefits: [
// // //         "1 personal item",
// // //         "1 cabin bag (7 kg)",
// // //         "1 checked bag (15 kg)",
// // //         "Flight change allowed for a fee",
// // //         "Partial refund if you cancel",
// // //         "Choose your own seats",
// // //       ],
// // //     },
// // //     {
// // //       name: "Eco Classic",
// // //       price: 15885,
// // //       popular: true,
// // //       benefits: [
// // //         "1 personal item",
// // //         "1 cabin bag (7 kg)",
// // //         "1 checked bag (20 kg)",
// // //         "Flight change allowed for a fee",
// // //         "Partial refund if you cancel",
// // //         "Choose your own seats",
// // //       ],
// // //     },
// // //     {
// // //       name: "Eco Flex",
// // //       price: 18027,
// // //       benefits: [
// // //         "1 personal item",
// // //         "1 cabin bag (7 kg)",
// // //         "1 checked bag (25 kg)",
// // //         "Flight change allowed",
// // //         "Partial refund if you cancel",
// // //         "Choose your own seats",
// // //       ],
// // //     },
// // //     {
// // //       name: "Business Value",
// // //       price: 67079,
// // //       benefits: [
// // //         "1 personal item",
// // //         "1 cabin bag (10 kg)",
// // //         "1 checked bag (30 kg)",
// // //         "Flight change allowed for a fee",
// // //         "Partial refund if you cancel",
// // //         "Choose your own seats",
// // //       ],
// // //     },
// // //   ];

// // //   return (
// // //     <div className="fare-selection">
// // //       <div className="fare-selection-header">
// // //         <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
// // //         <h2>Mumbai to New Delhi</h2>
// // //       </div>

// // //       <div className="fare-selection-title">
// // //         <h3>Choose your fare</h3>
// // //         <button>‹ Back to results</button>
// // //       </div>

// // //       <div className="fares-grid">
// // //         {FARES.map((fare) => (
// // //           <div
// // //             key={fare.name}
// // //             className={`fare-card ${fare.popular ? "popular" : ""}`}
// // //           >
// // //             {fare.popular && (
// // //               <div className="fare-popular-tag">Popular Choice</div>
// // //             )}
// // //             <div className="fare-card-content">
// // //               <div className="fare-header">
// // //                 <h4>{fare.name}</h4>
// // //                 <span>ⓘ</span>
// // //               </div>
// // //               <p>Total price INR {fare.price.toLocaleString()}</p>

// // //               <div className="fare-benefits-title">Included in this fare:</div>
// // //               <div className="fare-benefits">
// // //                 {fare.benefits.map((benefit, i) => (
// // //                   <div key={i} className="fare-benefit">
// // //                     <span>
// // //                       {benefit.includes("personal")
// // //                         ? "👜"
// // //                         : benefit.includes("cabin")
// // //                         ? "🎒"
// // //                         : benefit.includes("checked")
// // //                         ? "🧳"
// // //                         : benefit.includes("change")
// // //                         ? "🔄"
// // //                         : benefit.includes("refund")
// // //                         ? "💰"
// // //                         : "💺"}
// // //                     </span>
// // //                     <span>{benefit}</span>
// // //                   </div>
// // //                 ))}
// // //               </div>

// // //               <button
// // //                 onClick={() => onContinue(fare.name)}
// // //                 className="fare-select-btn"
// // //               >
// // //                 Continue
// // //               </button>
// // //             </div>
// // //           </div>
// // //         ))}
// // //       </div>

// // //       <div className="fare-warning">
// // //         <span>⚠️</span>
// // //         <p>
// // //           Flight changes: if your new flight costs more than the original one,
// // //           you'll need to pay the fare difference.
// // //         </p>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const PassengerDetails = ({ onContinue }) => {
// // //   const [details, setDetails] = useState({
// // //     firstName: "",
// // //     lastName: "",
// // //     email: "",
// // //     phone: "",
// // //   });

// // //   return (
// // //     <div className="passenger-details">
// // //       <div className="passenger-container">
// // //         <div className="passenger-main">
// // //           <div className="passenger-header">
// // //             <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
// // //             <h2>Mumbai to New Delhi</h2>
// // //           </div>

// // //           <h3>Fill in your details</h3>

// // //           <div className="passenger-card">
// // //             <div className="passenger-card-header">
// // //               <div className="passenger-icon">👤</div>
// // //               <h3>Adult 1</h3>
// // //             </div>

// // //             <div className="passenger-card-content">
// // //               <button className="add-details-btn">
// // //                 Add this traveler's details
// // //               </button>

// // //               <div className="baggage-info">
// // //                 <div className="baggage-item">
// // //                   <span>👜</span>
// // //                   <div>
// // //                     <p>1 personal item</p>
// // //                     <p className="included-tag">Included</p>
// // //                     <p>Fits under the seat in front of you</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="baggage-item">
// // //                   <span>🧳</span>
// // //                   <div>
// // //                     <p>1 cabin bag</p>
// // //                     <p className="included-tag">Included</p>
// // //                     <p>25 × 35 × 55 cm · 7 kg</p>
// // //                   </div>
// // //                 </div>
// // //                 <div className="baggage-item">
// // //                   <span>🏢</span>
// // //                   <div>
// // //                     <p>1 checked bag</p>
// // //                     <p className="included-tag">Included</p>
// // //                     <p>Max weight 15 kg</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="contact-card">
// // //             <h3>Contact details</h3>
// // //             <p>* Required</p>
// // //             <div className="contact-form">
// // //               <div className="form-group">
// // //                 <label>Contact email *</label>
// // //                 <input
// // //                   type="email"
// // //                   value={details.email}
// // //                   placeholder="Enter your email"
// // //                   onChange={(e) =>
// // //                     setDetails((prev) => ({ ...prev, email: e.target.value }))
// // //                   }
// // //                 />
// // //                 <p>We'll send your flight confirmation here</p>
// // //               </div>
// // //               <div className="form-group">
// // //                 <label>Phone number *</label>
// // //                 <div className="phone-input">
// // //                   <button className="country-code">
// // //                     <img
// // //                       src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
// // //                       alt="India"
// // //                     />
// // //                     <span>+91</span>
// // //                     <span>⌄</span>
// // //                   </button>
// // //                   <input
// // //                     type="tel"
// // //                     value={details.phone}
// // //                     placeholder="000 000 0000"
// // //                     onChange={(e) =>
// // //                       setDetails((prev) => ({ ...prev, phone: e.target.value }))
// // //                     }
// // //                   />
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="info-card">
// // //             <div>
// // //               <span>🧳</span>
// // //               <div>
// // //                 <h4>Good to know</h4>
// // //                 <p>Special or oversized baggage policies</p>
// // //               </div>
// // //             </div>
// // //             <span>›</span>
// // //           </div>

// // //           <div className="passenger-navigation">
// // //             <button>‹ Back</button>
// // //             <button onClick={() => onContinue(details)} className="next-btn">
// // //               Next
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="passenger-sidebar">
// // //           <div className="price-summary">
// // //             <h4>Price details</h4>
// // //             <div className="price-breakdown">
// // //               <div className="price-item">
// // //                 <span>Flight</span>
// // //                 <span>
// // //                   INR 13,470.98 <span>⌄</span>
// // //                 </span>
// // //               </div>
// // //               <div className="price-subitem">
// // //                 <span>Adult (1)</span>
// // //                 <span>INR 13,470.98</span>
// // //               </div>
// // //             </div>
// // //             <div className="price-total">
// // //               <span>Total</span>
// // //               <div>
// // //                 <p>INR 13,470.98</p>
// // //                 <p>Includes taxes and charges</p>
// // //               </div>
// // //             </div>

// // //             <div className="price-guarantee">
// // //               <div>
// // //                 <span>✓</span>
// // //                 <span>No hidden fees - track your price at every step</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const SeatSelection = ({ onContinue }) => {
// // //   return (
// // //     <div className="seat-selection">
// // //       <div className="seat-container">
// // //         <h2>Select your seat</h2>

// // //         <div className="seat-content">
// // //           <div className="seat-main">
// // //             <div className="seat-card">
// // //               <div className="seat-card-header">
// // //                 <div>
// // //                   <h4>Mumbai to New Delhi</h4>
// // //                   <p>2h · IndiGo</p>
// // //                 </div>
// // //                 <span>⌄</span>
// // //               </div>
// // //               <div className="seat-not-selected">
// // //                 <span>💺</span>
// // //                 <p>No seat selected</p>
// // //               </div>
// // //               <button className="select-seat-btn">
// // //                 Select a seat from INR 0.00 →
// // //               </button>
// // //             </div>

// // //             <div className="seat-card disabled">
// // //               <div className="seat-card-header">
// // //                 <div>
// // //                   <h4>New Delhi to Mumbai</h4>
// // //                   <p>2h 15m · IndiGo</p>
// // //                 </div>
// // //                 <span>⌄</span>
// // //               </div>
// // //               <div className="seat-not-selected">
// // //                 <span>💺</span>
// // //                 <p>No seat selected</p>
// // //               </div>
// // //               <button disabled>Select a seat from INR 0.00</button>
// // //             </div>
// // //           </div>

// // //           <div className="seat-sidebar">
// // //             <div className="seat-price-summary">
// // //               <h4>Price details</h4>
// // //               <div className="seat-price-breakdown">
// // //                 <div className="seat-price-item">
// // //                   <span>Flight</span>
// // //                   <span>
// // //                     INR 13,470.98 <span>⌄</span>
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //               <div className="seat-price-total">
// // //                 <span>Total</span>
// // //                 <div>
// // //                   <p>INR 13,470.98</p>
// // //                   <p>Includes taxes and charges</p>
// // //                 </div>
// // //               </div>

// // //               <div className="seat-actions">
// // //                 <button onClick={onContinue} className="skip-seat-btn">
// // //                   Skip seat selection
// // //                 </button>
// // //                 <button className="back-btn">‹ Back</button>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // const PaymentReview = ({ onPay }) => {
// // //   return (
// // //     <div className="payment-review">
// // //       <div className="payment-container">
// // //         <div className="payment-main">
// // //           <h2>Check and pay</h2>

// // //           <div className="payment-card">
// // //             <div className="payment-flight">
// // //               <div className="flight-info">
// // //                 <div className="flight-logo">
// // //                   <img
// // //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
// // //                     alt="Indigo"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <h4>Mumbai (BOM) to New Delhi (DEL)</h4>
// // //                   <p>
// // //                     Sat, Jan 24 · 08:55 AM - 10:55 AM · Direct · 2h · Economy
// // //                   </p>
// // //                 </div>
// // //                 <button>View flight details</button>
// // //               </div>

// // //               <div className="payment-flight-return">
// // //                 <div className="flight-logo">
// // //                   <img
// // //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
// // //                     alt="Indigo"
// // //                   />
// // //                 </div>
// // //                 <div>
// // //                   <h4>New Delhi (DEL) to Mumbai (BOM)</h4>
// // //                   <p>
// // //                     Sat, Jan 31 · 11:45 AM - 02:00 PM · Direct · 2h 15m ·
// // //                     Economy
// // //                   </p>
// // //                 </div>
// // //                 <button>View flight details</button>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="payment-card">
// // //             <h3>Contact details</h3>
// // //             <p>Primary Contact</p>
// // //             <div className="contact-details">
// // //               <p>DUSHYANT MART</p>
// // //               <p>+91 9910444525</p>
// // //               <p>dushyantfurnituremart@gmail.com</p>
// // //             </div>
// // //           </div>

// // //           <div className="payment-card">
// // //             <h3>Traveller details</h3>
// // //             <div className="traveller-details">
// // //               <span>👤</span>
// // //               <div>
// // //                 <p>DUSHYANT MART</p>
// // //                 <p>Adult · Male</p>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="payment-card">
// // //             <div className="payment-method-header">
// // //               <h3>Your payment</h3>
// // //               <p>Simple, safe and secure.</p>
// // //             </div>
// // //             <div className="payment-method-content">
// // //               <div className="payment-options">
// // //                 <label>How would you like to pay?</label>
// // //                 <div className="payment-methods">
// // //                   {["MasterCard", "Visa", "Amex", "Discover", "UPI"].map(
// // //                     (p) => (
// // //                       <div key={p} className="payment-method">
// // //                         <div className="card-icon"></div>
// // //                         <span>{p}</span>
// // //                       </div>
// // //                     )
// // //                   )}
// // //                 </div>

// // //                 <div className="card-details">
// // //                   <div className="card-form-group">
// // //                     <label>Cardholder's Name *</label>
// // //                     <input type="text" defaultValue="DUSHYANT MART" />
// // //                   </div>
// // //                   <div className="card-form-group">
// // //                     <label>Card Number *</label>
// // //                     <div className="card-input">
// // //                       <input type="text" placeholder="0000 0000 0000 0000" />
// // //                       <span>💳</span>
// // //                     </div>
// // //                   </div>
// // //                   <div className="card-form-row">
// // //                     <div className="card-form-group">
// // //                       <label>Expiry Date *</label>
// // //                       <input type="text" placeholder="MM / YY" />
// // //                     </div>
// // //                     <div className="card-form-group">
// // //                       <label>CVC *</label>
// // //                       <div className="card-input">
// // //                         <input type="text" placeholder="123" />
// // //                         <span>ⓘ</span>
// // //                       </div>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>

// // //               <div className="payment-terms">
// // //                 <p>
// // //                   By clicking "Pay now" you agree with the{" "}
// // //                   <span>terms and conditions</span> and{" "}
// // //                   <span>privacy policies</span> of Booking.com, Gotogate
// // //                   International AB, IndiGo and with the <span>fare rules</span>.
// // //                 </p>

// // //                 <div className="payment-actions">
// // //                   <button>‹ Back</button>
// // //                   <button onClick={onPay} className="pay-now-btn">
// // //                     <span>🔒</span> Pay now
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="payment-sidebar">
// // //           <div className="payment-summary">
// // //             <h4>Price details</h4>
// // //             <div className="payment-breakdown">
// // //               <div className="payment-item">
// // //                 <span>Flight</span>
// // //                 <span>
// // //                   INR 13,470.98 <span>⌄</span>
// // //                 </span>
// // //               </div>
// // //               <div className="payment-subitem">
// // //                 <span>Adult (1)</span>
// // //                 <span>INR 13,470.98</span>
// // //               </div>
// // //             </div>
// // //             <div className="payment-total">
// // //               <span>Total</span>
// // //               <div>
// // //                 <p>INR 13,470.98</p>
// // //                 <p>Includes taxes and charges</p>
// // //               </div>
// // //             </div>

// // //             <div className="payment-guarantee">
// // //               <div>
// // //                 <span>✓</span>
// // //                 <span>No hidden fees — here's what you'll pay</span>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // // Main App Component
// // // const FlightsApp = () => {
// // //   const [currentStep, setCurrentStep] = useState("HOME");
// // //   const [selectedFlight, setSelectedFlight] = useState(null);
// // //   const [showFlightModal, setShowFlightModal] = useState(false);

// // //   const handleSearch = () => {
// // //     setCurrentStep("SEARCH_RESULTS");
// // //   };

// // //   const handleViewFlightDetails = (flight) => {
// // //     setSelectedFlight(flight);
// // //     setShowFlightModal(true);
// // //   };

// // //   const handleContinueFromModal = () => {
// // //     setShowFlightModal(false);
// // //     setCurrentStep("FARE_SELECTION");
// // //   };

// // //   const handleSelectFare = (fare) => {
// // //     setCurrentStep("PASSENGER_DETAILS");
// // //   };

// // //   const handlePassengerDetails = (details) => {
// // //     setCurrentStep("SEAT_SELECTION");
// // //   };

// // //   const handleSeatSelection = () => {
// // //     setCurrentStep("PAYMENT_REVIEW");
// // //   };

// // //   const handlePayment = () => {
// // //     alert("Payment successful! Booking confirmed.");
// // //     setCurrentStep("HOME");
// // //   };

// // //   return (
// // //     <div className="flights-app">
// // //       <Navbar />

// // //       {currentStep !== "HOME" && currentStep !== "SEARCH_RESULTS" && (
// // //         <BookingHeader currentStep={currentStep} onStepClick={setCurrentStep} />
// // //       )}

// // //       {currentStep === "HOME" && <Home onSearch={handleSearch} />}

// // //       {currentStep === "SEARCH_RESULTS" && (
// // //         <SearchResults onViewDetails={handleViewFlightDetails} />
// // //       )}

// // //       {currentStep === "FARE_SELECTION" && selectedFlight && (
// // //         <FareSelection flight={selectedFlight} onContinue={handleSelectFare} />
// // //       )}

// // //       {currentStep === "PASSENGER_DETAILS" && (
// // //         <PassengerDetails onContinue={handlePassengerDetails} />
// // //       )}

// // //       {currentStep === "SEAT_SELECTION" && (
// // //         <SeatSelection onContinue={handleSeatSelection} />
// // //       )}

// // //       {currentStep === "PAYMENT_REVIEW" && (
// // //         <PaymentReview onPay={handlePayment} />
// // //       )}

// // //       {showFlightModal && selectedFlight && (
// // //         <FlightModal
// // //           flight={selectedFlight}
// // //           onClose={() => setShowFlightModal(false)}
// // //           onContinue={handleContinueFromModal}
// // //         />
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default FlightsApp;
// // import React, { useState, useRef, useMemo } from "react";
// // // import "./flights.css";

// // // Mock Data
// // const POPULAR_ROUTES = [
// //   {
// //     from: "Mumbai",
// //     to: "London",
// //     img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
// //   },
// //   {
// //     from: "Mumbai",
// //     to: "Dubai",
// //     img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
// //   },
// //   {
// //     from: "Mumbai",
// //     to: "Bangkok",
// //     img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=80",
// //   },
// //   {
// //     from: "Mumbai",
// //     to: "Singapore",
// //     img: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=400&q=80",
// //   },
// //   {
// //     from: "Mumbai",
// //     to: "New York",
// //     img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
// //   },
// //   {
// //     from: "Mumbai",
// //     to: "Paris",
// //     img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
// //   },
// // ];

// // const MOCK_FLIGHTS = [
// //   {
// //     id: "1",
// //     airline: "IndiGo",
// //     airlineLogo:
// //       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png",
// //     departureTime: "08:55",
// //     arrivalTime: "10:55",
// //     duration: "2h",
// //     price: 13470,
// //     stops: 0,
// //     type: "Economy",
// //   },
// //   {
// //     id: "2",
// //     airline: "Air India",
// //     airlineLogo:
// //       "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Air_India_Logo.svg/2560px-Air_India_Logo.svg.png",
// //     departureTime: "11:30",
// //     arrivalTime: "13:45",
// //     duration: "2h 15m",
// //     price: 14213,
// //     stops: 0,
// //     type: "Economy",
// //   },
// //   {
// //     id: "3",
// //     airline: "Vistara",
// //     airlineLogo:
// //       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Vistara_logo.svg/2560px-Vistara_logo.svg.png",
// //     departureTime: "14:20",
// //     arrivalTime: "16:35",
// //     duration: "2h 15m",
// //     price: 15885,
// //     stops: 1,
// //     type: "Premium Economy",
// //   },
// //   {
// //     id: "4",
// //     airline: "SpiceJet",
// //     airlineLogo:
// //       "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/SpiceJet_logo.svg/2560px-SpiceJet_logo.svg.png",
// //     departureTime: "19:45",
// //     arrivalTime: "22:00",
// //     duration: "2h 15m",
// //     price: 12238,
// //     stops: 0,
// //     type: "Economy",
// //   },
// // ];

// // const AIRLINES = ["IndiGo", "Air India", "Vistara", "SpiceJet", "Go First"];
// // const STOP_TYPES = ["Direct only", "1 stop max", "2 stops max", "Any"];
// // const TIME_SLOTS = [
// //   { label: "Morning (5am–11am)", value: "morning" },
// //   { label: "Afternoon (11am–5pm)", value: "afternoon" },
// //   { label: "Evening (5pm–9pm)", value: "evening" },
// //   { label: "Night (9pm–5am)", value: "night" },
// // ];

// // // Components
// // // const Navbar = () => {
// // //   return (
// // //     // <nav className="navbar">
// // //   <div className="navbar-container">
// // //     <div className="navbar-left">
// // //       <h1 className="navbar-logo">Booking.com</h1>
// // //       <div className="navbar-menu">
// // //         <button className="navbar-menu-item">
// // //           <span>🏨</span> Stays
// // //         </button>
// // //         <button className="navbar-menu-item active">
// // //           <span>✈️</span> Flights
// // //         </button>
// // //         <button className="navbar-menu-item">
// // //           <span>🏩</span> Flight + Hotel
// // //         </button>
// // //         <button className="navbar-menu-item">
// // //           <span>🚗</span> Car rentals
// // //         </button>
// // //         <button className="navbar-menu-item">
// // //           <span>🎡</span> Attractions
// // //         </button>
// // //         <button className="navbar-menu-item">
// // //           <span>🚕</span> Airport taxis
// // //         </button>
// // //       </div>
// // //     </div>
// // //     <div className="navbar-right">
// // //       <button className="navbar-action">INR</button>
// // //       <img
// // //         src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
// // //         alt="India"
// // //         className="navbar-flag"
// // //       />
// // //       <button className="navbar-action">❓</button>
// // //       <button className="navbar-btn">Register</button>
// // //       <button className="navbar-btn">Sign in</button>
// // //     </div>
// // //   </div>
// // //     // </nav>
// // //   )
// // // };

// // const BookingHeader = ({ currentStep, onStepClick }) => {
// //   const steps = [
// //     { label: "Choose your fare", step: "FARE_SELECTION" },
// //     { label: "Your details", step: "PASSENGER_DETAILS" },
// //     { label: "Extras", step: "SEAT_SELECTION" },
// //     { label: "Check and pay", step: "PAYMENT_REVIEW" },
// //   ];

// //   const getStepIndex = (step) => {
// //     switch (step) {
// //       case "FARE_SELECTION":
// //         return 0;
// //       case "PASSENGER_DETAILS":
// //         return 1;
// //       case "SEAT_SELECTION":
// //         return 2;
// //       case "PAYMENT_REVIEW":
// //         return 3;
// //       default:
// //         return -1;
// //     }
// //   };

// //   const currentIndex = getStepIndex(currentStep);

// //   return (
// //     <div className="booking-header">
// //       <div className="booking-header-container">
// //         <div className="booking-steps">
// //           <div className="booking-steps-line"></div>
// //           {steps.map((s, idx) => (
// //             <div key={s.step} className="booking-step-wrapper">
// //               <div
// //                 className={`booking-step-circle ${
// //                   idx <= currentIndex ? "active" : ""
// //                 }`}
// //               >
// //                 {idx + 1}
// //               </div>
// //               <span
// //                 className={`booking-step-label ${
// //                   idx <= currentIndex ? "active" : ""
// //                 }`}
// //               >
// //                 {s.label}
// //               </span>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const FlightModal = ({ flight, onClose, onContinue }) => {
// //   return (
// //     <div className="flight-modal-overlay">
// //       <div className="flight-modal">
// //         <div className="flight-modal-header">
// //           <h3>Your flight to New Delhi</h3>
// //           <button onClick={onClose} className="flight-modal-close">
// //             ×
// //           </button>
// //         </div>

// //         <div className="flight-modal-content">
// //           <div className="flight-modal-details">
// //             <div>
// //               <div className="flight-modal-title">
// //                 <h4>Flight to New Delhi</h4>
// //                 <span>
// //                   {flight.duration} · {flight.type}
// //                 </span>
// //                 <button className="flight-share">🔗 Share this flight</button>
// //               </div>

// //               <div className="flight-timeline">
// //                 <div className="flight-timeline-item">
// //                   <div className="timeline-dot"></div>
// //                   <div className="flight-timeline-content">
// //                     <p>Sat, Jan 24 · 08:55 AM</p>
// //                     <p>
// //                       BOM · Chhatrapati Shivaji International Airport Mumbai
// //                     </p>
// //                   </div>
// //                   <div className="flight-airline">
// //                     <img src={flight.airlineLogo} alt={flight.airline} />
// //                     <p>{flight.airline} · Economy</p>
// //                   </div>
// //                 </div>

// //                 <div className="flight-duration-banner">
// //                   <span>⏱️</span>
// //                   <span>2h flight duration</span>
// //                 </div>

// //                 <div className="flight-timeline-item">
// //                   <div className="timeline-dot"></div>
// //                   <div className="flight-timeline-content">
// //                     <p>Sat, Jan 24 · 10:55 AM</p>
// //                     <p>DEL · Indira Gandhi International Airport New Delhi</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             <div className="flight-features">
// //               <div className="flight-feature">
// //                 <h5>🧳 Included baggage</h5>
// //                 <div className="feature-item">
// //                   <span>👜</span>
// //                   <div>
// //                     <p>1 personal item</p>
// //                     <p>Must fit under the seat in front of you</p>
// //                   </div>
// //                   <span className="feature-tag">Included</span>
// //                 </div>
// //                 <div className="feature-item">
// //                   <span>🧳</span>
// //                   <div>
// //                     <p>1 cabin bag</p>
// //                     <p>25 × 35 × 55 cm · Max weight 7 kg</p>
// //                   </div>
// //                   <span className="feature-tag">Included</span>
// //                 </div>
// //               </div>
// //               <div className="flight-feature">
// //                 <h5>📑 Fare rules</h5>
// //                 <div className="feature-item">
// //                   <span>📅</span>
// //                   <p>
// //                     You're allowed to change this flight, for a fee of INR 3,500
// //                     plus fare difference.
// //                   </p>
// //                 </div>
// //                 <div className="feature-item">
// //                   <span>💳</span>
// //                   <p>
// //                     Cancellations are allowed for a fee. Partial refunds apply
// //                     if cancelled 24h before.
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flight-modal-footer">
// //           <div className="flight-price">
// //             <span>INR {flight.price.toLocaleString()}</span>
// //             <span>ⓘ</span>
// //           </div>
// //           <button onClick={onContinue} className="flight-continue-btn">
// //             Continue
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Commented out Home component
// //     // <div className="home">
// //     //   <div className="home-hero">
// //     //     <div className="home-hero-content">
// //     //       <h2>Compare and book cheap flights with ease</h2>
// //     //       <p>Discover your next dream destination</p>

// //     //       <div className="search-box">
// //     //         <div className="search-options">
// //     //           <label>
// //     //             <input type="radio" name="triptype" defaultChecked /> Round-trip
// //     //           </label>
// //     //           <label>
// //     //             <input type="radio" name="triptype" /> One-way
// //     //           </label>
// //     //           <label>
// //     //             <input type="radio" name="triptype" /> Multi-city
// //     //           </label>
// //     //           <select>
// //     //             <option>Economy</option>
// //     //             <option>Premium Economy</option>
// //     //             <option>Business</option>
// //     //             <option>First</option>
// //     //           </select>
// //     //           <label>
// //     //             <input type="checkbox" /> Direct flights only
// //     //           </label>
// //     //         </div>

// //     //         <div className="search-fields">
// //     //           <div className="search-field">
// //     //             <span>✈️</span>
// //     //             <div>
// //     //               <span>Leaving from</span>
// //     //               <input type="text" defaultValue="Mumbai All airports" />
// //     //             </div>
// //     //           </div>
// //     //           <div className="search-field">
// //     //             <span>✈️</span>
// //     //             <div>
// //     //               <span>Going to</span>
// //     //               <input type="text" placeholder="Where to?" />
// //     //             </div>
// //     //           </div>
// //     //           <div className="search-field">
// //     //             <span>📅</span>
// //     //             <div>
// //     //               <span>Travel dates</span>
// //     //               <span>Sat, Jan 24, 2026 — Sat, Jan 31, 2026</span>
// //     //             </div>
// //     //           </div>
// //     //           <div className="search-field">
// //     //             <span>👤</span>
// //     //             <div>
// //     //               <span>Travelers</span>
// //     //               <span>1 adult</span>
// //     //             </div>
// //     //           </div>
// //     //           <button onClick={onSearch} className="search-btn">
// //     //             Search
// //     //           </button>
// //     //         </div>
// //     //       </div>
// //     //     </div>
// //     //   </div>

// //     //   <div className="home-content">
// //     //     <section>
// //     //       <h3>Continue where you left off</h3>
// //     //       <div className="recent-searches">
// //     //         <div onClick={onSearch} className="recent-search">
// //     //           <div className="recent-search-img">
// //     //             <img
// //     //               src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80"
// //     //               alt="Delhi"
// //     //             />
// //     //           </div>
// //     //           <div>
// //     //             <h4>Mumbai to Delhi International Airport</h4>
// //     //             <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
// //     //           </div>
// //     //         </div>
// //     //         <div onClick={onSearch} className="recent-search">
// //     //           <div className="recent-search-img">
// //     //             <img
// //     //               src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80"
// //     //               alt="Hindon"
// //     //             />
// //     //           </div>
// //     //           <div>
// //     //             <h4>Mumbai to Hindon Airport</h4>
// //     //             <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
// //     //           </div>
// //     //         </div>
// //     //       </div>
// //     //     </section>
// // < div className="home-content">
// //         <section>
// //           <h3>Explore Anywhere</h3>
// //           <div className="explore-map">
// //             <img
// //               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
// //               alt="Map"
// //             />
// //             <div className="explore-map-center">
// //               <div>
// //                 <span>📍</span> Find flights to anywhere
// //               </div>
// //             </div>
// //             <button>Open Map</button>
// //           </div>
// //         </section>

// //         <section className="countries-section">
// //           <div className="section-header">
// //             <div>
// //               <h3>Explore by country</h3>
// //               <p>Discover trending destinations, just a flight away</p>
// //             </div>
// //             <div className="scroll-controls">
// //               <button onClick={() => scroll("left")}>←</button>
// //               <button onClick={() => scroll("right")}>→</button>
// //             </div>
// //           </div>

// //           <div ref={scrollRef} className="countries-grid">
// //             {[
// //               {
// //                 name: "United Kingdom",
// //                 img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
// //                 flag: "🇬🇧",
// //               },
// //               {
// //                 name: "India",
// //                 img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80",
// //                 flag: "🇮🇳",
// //               },
// //               {
// //                 name: "United Arab Emirates",
// //                 img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
// //                 flag: "🇦🇪",
// //               },
// //               {
// //                 name: "Thailand",
// //                 img: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=400&q=80",
// //                 flag: "🇹🇭",
// //               },
// //               {
// //                 name: "Germany",
// //                 img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
// //                 flag: "🇩🇪",
// //               },
// //               {
// //                 name: "France",
// //                 img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
// //                 flag: "🇫🇷",
// //               },
// //             ].map((country) => (
// //               <div
// //                 key={country.name}
// //                 onClick={onSearch}
// //                 className="country-card"
// //               >
// //                 <img src={country.img} alt={country.name} />
// //                 <div className="country-overlay"></div>
// //                 <div className="country-info">
// //                   <div>
// //                     <span>{country.flag}</span>
// //                     <h4>{country.name}</h4>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //             <div className="country-card-all">
// //               <div>🌏</div>
// //               <div>Anywhere</div>
// //               <p>Explore all destinations</p>
// //             </div>
// //           </div>
// //         </section>

// //         <section>
// //           <h3>Popular flights near you</h3>
// //           <p>Find deals on domestic and international flights</p>
// //           <div className="flight-tabs">
// //             <button className="active">International</button>
// //             <button>Domestic</button>
// //           </div>
// //           <div className="popular-flights">
// //             {[
// //               {
// //                 city: "London",
// //                 date: "Jan 7 - Jan 15",
// //                 img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
// //               },
// //               {
// //                 city: "Dubai",
// //                 date: "Dec 26 - Jan 28",
// //                 img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
// //               },
// //               {
// //                 city: "Bangkok",
// //                 date: "Jan 1 - Jan 10",
// //                 img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=80",
// //               },
// //               {
// //                 city: "Frankfurt",
// //                 date: "Dec 24 - Jan 15",
// //                 img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
// //               },
// //             ].map((flight) => (
// //               <div key={flight.city} onClick={onSearch} className="flight-card">
// //                 <img src={flight.img} alt={flight.city} />
// //                 <div>
// //                   <h4>Mumbai to {flight.city}</h4>
// //                   <p>{flight.date} · Round trip</p>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         <section className="account-section">
// //           <div>
// //             <div className="account-icon">💎</div>
// //             <div>
// //               <h3>Your account, your travel</h3>
// //               <p>
// //                 All your trip details in one place. Sign in to book faster and
// //                 manage your trip with ease.
// //               </p>
// //               <div className="account-buttons">
// //                 <button>Sign in</button>
// //                 <button>Register</button>
// //               </div>
// //             </div>
// //           </div>
// //           <div className="genius-badge">
// //             <img
// //               src="https://cf.bstatic.com/static/img/genius/genius_loyalty_badge/9d201e74a81617498c4d23a10363234907a97217.png"
// //               alt="Genius"
// //             />
// //           </div>
// //         </section>

// //         <section className="features-section">
// //           <div className="feature">
// //             <span>🔍</span>
// //             <div>
// //               <h4>Search a huge selection</h4>
// //               <p>
// //                 Easily compare flights, airlines, and prices - all in one place
// //               </p>
// //             </div>
// //           </div>
// //           <div className="feature">
// //             <span>💰</span>
// //             <div>
// //               <h4>Pay no hidden fees</h4>
// //               <p>Get a clear price breakdown every step of the way</p>
// //             </div>
// //           </div>
// //           <div className="feature">
// //             <span>✈️</span>
// //             <div>
// //               <h4>Get more flexibility</h4>
// //               <p>Change your travel dates with the Flexible ticket option*</p>
// //             </div>
// //           </div>
// //         </section>

// //         <section>
// //           <h3>Top flights from India</h3>
// //           <div className="route-tabs">
// //             {[
// //               "Popular routes",
// //               "Cities",
// //               "Countries",
// //               "Regions",
// //               "Airports",
// //             ].map((tab, i) => (
// //               <button key={tab} className={i === 0 ? "active" : ""}>
// //                 {tab}
// //               </button>
// //             ))}
// //           </div>
// //           <div className="routes-grid">
// //             {POPULAR_ROUTES.map((route, idx) => (
// //               <div key={idx} onClick={onSearch} className="route-item">
// //                 <img src={route.img} alt={route.to} />
// //                 <span>
// //                   {route.from} → {route.to}
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         <section className="faq-section">
// //           <h3>Frequently asked questions</h3>
// //           <div className="faq-grid">
// //             {[
// //               "How do I find the cheapest flights on Booking.com?",
// //               "Can I book one-way flights on Booking.com?",
// //               "How far in advance can I book a flight?",
// //               "Do flights get cheaper closer to departure?",
// //               "What is a flexible ticket?",
// //               "Does Booking.com charge credit card fees?",
// //             ].map((q) => (
// //               <div key={q} className="faq-item">
// //                 <span>{q}</span>
// //                 <span>⌄</span>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         <footer className="footer">
// //           <div className="footer-top">
// //             <div className="footer-section">
// //               <h4>Booking.com</h4>
// //               <p>Manage your trips</p>
// //               <p>Customer Service help</p>
// //               <p>Safety resource centre</p>
// //             </div>
// //             <div className="footer-section">
// //               <h4>Stream</h4>
// //               <p>Genius loyalty programme</p>
// //               <p>Seasonal and holiday deals</p>
// //               <p>Travel articles</p>
// //               <p>Booking.com for Business</p>
// //             </div>
// //             <div className="footer-section">
// //               <h4>Terms and settings</h4>
// //               <p>Privacy & cookies</p>
// //               <p>Terms and conditions</p>
// //               <p>Accessibility Statement</p>
// //               <p>Modern Slavery Statement</p>
// //             </div>
// //             <div className="footer-section">
// //               <h4>Partners</h4>
// //               <p>Investor relations</p>
// //               <p>List your property</p>
// //               <p>Become an affiliate</p>
// //             </div>
// //           </div>
// //           <div className="footer-bottom">
// //             <p>Copyright © 1996-2025 booking.com™. All rights reserved.</p>
// //             <div className="footer-logo">Booking.com</div>
// //           </div>
// //         </footer>
// //       </div>
// //     </div>
// //   );
// // };

// // // const SearchResults = ({ onViewDetails }) => {
// // //   const [selectedAirlines, setSelectedAirlines] = useState(AIRLINES);
// // //   const [selectedStops, setSelectedStops] = useState("Any");
// // //   const [maxPrice, setMaxPrice] = useState(30000);

// // //   const filteredFlights = useMemo(() => {
// // //     return MOCK_FLIGHTS.filter((flight) => {
// // //       const airlineMatch = selectedAirlines.includes(flight.airline);
// // //       const stopsMatch =
// // //         selectedStops === "Any" ||
// // //         (selectedStops === "Direct only" && flight.stops === 0) ||
// // //         (selectedStops === "1 stop max" && flight.stops <= 1);
// // //       const priceMatch = flight.price <= maxPrice;
// // //       return airlineMatch && stopsMatch && priceMatch;
// // //     });
// // //   }, [selectedAirlines, selectedStops, maxPrice]);

// // //   return (
// // //     <div className="search-results">
// // //       <div className="search-results-header">
// // //         <div className="search-results-container">
// // //           <div className="search-summary">
// // //             <div className="search-summary-item">
// // //               <span>📍</span>
// // //               <div>
// // //                 <div>Mumbai → Delhi</div>
// // //                 <div>Round trip • 1 traveler</div>
// // //               </div>
// // //             </div>
// // //             <div className="search-summary-item">
// // //               <span>📅</span>
// // //               <div>
// // //                 <div>Sat, Jan 24 - Sat, Jan 31</div>
// // //                 <div>Economy</div>
// // //               </div>
// // //             </div>
// // //             <button className="edit-search-btn">Edit search</button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="search-results-content">
// // //         <div className="filters-sidebar">
// // //           <div className="filter-section">
// // //             <div className="filter-header">
// // //               <h3>Filters</h3>
// // //               <button>Clear all</button>
// // //             </div>

// // //             <div className="filter-group">
// // //               <h4>Search summary</h4>
// // //               <p>
// // //                 Showing {filteredFlights.length} results for your trip to Delhi
// // //               </p>
// // //               <button>View summary</button>
// // //             </div>

// // //             <div className="filter-group">
// // //               <h4>Stops</h4>
// // //               {STOP_TYPES.map((stop) => (
// // //                 <label key={stop}>
// // //                   <div>
// // //                     <input
// // //                       type="radio"
// // //                       name="stops"
// // //                       checked={selectedStops === stop}
// // //                       onChange={() => setSelectedStops(stop)}
// // //                     />
// // //                     <span>{stop}</span>
// // //                   </div>
// // //                   <span>1996</span>
// // //                 </label>
// // //               ))}
// // //             </div>

// // //             <div className="filter-group">
// // //               <h4>Airlines</h4>
// // //               {AIRLINES.map((airline) => (
// // //                 <label key={airline}>
// // //                   <div>
// // //                     <input
// // //                       type="checkbox"
// // //                       checked={selectedAirlines.includes(airline)}
// // //                       onChange={() => {
// // //                         setSelectedAirlines((prev) =>
// // //                           prev.includes(airline)
// // //                             ? prev.filter((a) => a !== airline)
// // //                             : [...prev, airline]
// // //                         );
// // //                       }}
// // //                     />
// // //                     <span>{airline}</span>
// // //                   </div>
// // //                   <span>443</span>
// // //                 </label>
// // //               ))}
// // //               <button>Show all ⌄</button>
// // //             </div>

// // //             <div className="filter-group">
// // //               <h4>Price range</h4>
// // //               <input
// // //                 type="range"
// // //                 min="10000"
// // //                 max="30000"
// // //                 value={maxPrice}
// // //                 onChange={(e) => setMaxPrice(parseInt(e.target.value))}
// // //               />
// // //               <div className="price-range">
// // //                 <span>INR 10,000</span>
// // //                 <span>INR {maxPrice.toLocaleString()}</span>
// // //               </div>
// // //             </div>

// // //             <div className="filter-group">
// // //               <h4>Flight times</h4>
// // //               <div className="time-tabs">
// // //                 <button className="active">Departing</button>
// // //                 <button>Returning</button>
// // //               </div>
// // //               {TIME_SLOTS.map((slot) => (
// // //                 <label key={slot.label}>
// // //                   <input type="checkbox" />
// // //                   <span>{slot.label}</span>
// // //                 </label>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="flights-main">
// // //           <div className="sort-tabs">
// // //             <button className="active">
// // //               <span>Best</span>
// // //               <span>The best combination</span>
// // //             </button>
// // //             <button>
// // //               <span>Cheapest</span>
// // //               <span>From INR 12,238</span>
// // //             </button>
// // //             <button>
// // //               <span>Fastest</span>
// // //               <span>From INR 13,389</span>
// // //             </button>
// // //           </div>

// // //           <div className="price-alert">
// // //             <div>
// // //               <span>🌍</span>
// // //               <div>
// // //                 <p>We found better prices! Compare nearby dates.</p>
// // //                 <p>Actual prices shown in next step.</p>
// // //               </div>
// // //             </div>
// // //             <div className="price-dates">
// // //               {["Jan 5–Jan 12", "Jan 6–Jan 13", "Jan 7–Jan 14"].map((d, i) => (
// // //                 <div key={i}>
// // //                   <p>{d}</p>
// // //                   <p>INR 12,238</p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>

// // //           <div className="flights-list">
// // //             {filteredFlights.map((flight) => (
// // //               <div key={flight.id} className="flight-card-result">
// // //                 <div className="flight-card-main">
// // //                   <div className="flight-badges">
// // //                     <span className="best-badge">Best</span>
// // //                     <span className="flexible-badge">
// // //                       Flexible ticket upgrade available
// // //                     </span>
// // //                   </div>

// // //                   <div className="flight-details">
// // //                     <div className="flight-airline-logo">
// // //                       <img src={flight.airlineLogo} alt={flight.airline} />
// // //                     </div>
// // //                     <div className="flight-time">
// // //                       <span>{flight.departureTime}</span>
// // //                       <span>BOM · Jan 24</span>
// // //                     </div>
// // //                     <div className="flight-route">
// // //                       <div className="flight-route-line">
// // //                         <span className="route-dot"></span>
// // //                         <div className="route-line">
// // //                           <div
// // //                             className={`route-stops ${
// // //                               flight.stops === 0 ? "direct" : "stop"
// // //                             }`}
// // //                           >
// // //                             {flight.stops === 0
// // //                               ? "Direct"
// // //                               : `${flight.stops} stop`}
// // //                           </div>
// // //                         </div>
// // //                         <span className="route-dot"></span>
// // //                       </div>
// // //                       <span>{flight.duration}</span>
// // //                     </div>
// // //                     <div className="flight-time">
// // //                       <span>{flight.arrivalTime}</span>
// // //                       <span>DEL · Jan 24</span>
// // //                     </div>
// // //                   </div>

// // //                   <div className="flight-footer">
// // //                     <span>{flight.airline}</span>
// // //                     <button>Explore ticket options ⌄</button>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flight-card-side">
// // //                   <div>
// // //                     <span className="fare-type">Saver</span>
// // //                     <div className="flight-price-display">
// // //                       <span>INR {flight.price.toLocaleString()}</span>
// // //                       <span>ⓘ</span>
// // //                     </div>
// // //                     <p>Includes taxes and charges</p>
// // //                   </div>

// // //                   <button
// // //                     onClick={() => onViewDetails(flight)}
// // //                     className="view-details-btn"
// // //                   >
// // //                     View details
// // //                   </button>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // const FareSelection = ({ flight, onContinue }) => {
// //   const FARES = [
// //     {
// //       name: "Eco Value",
// //       price: 14213,
// //       benefits: [
// //         "1 personal item",
// //         "1 cabin bag (7 kg)",
// //         "1 checked bag (15 kg)",
// //         "Flight change allowed for a fee",
// //         "Partial refund if you cancel",
// //         "Choose your own seats",
// //       ],
// //     },
// //     {
// //       name: "Eco Classic",
// //       price: 15885,
// //       popular: true,
// //       benefits: [
// //         "1 personal item",
// //         "1 cabin bag (7 kg)",
// //         "1 checked bag (20 kg)",
// //         "Flight change allowed for a fee",
// //         "Partial refund if you cancel",
// //         "Choose your own seats",
// //       ],
// //     },
// //     {
// //       name: "Eco Flex",
// //       price: 18027,
// //       benefits: [
// //         "1 personal item",
// //         "1 cabin bag (7 kg)",
// //         "1 checked bag (25 kg)",
// //         "Flight change allowed",
// //         "Partial refund if you cancel",
// //         "Choose your own seats",
// //       ],
// //     },
// //     {
// //       name: "Business Value",
// //       price: 67079,
// //       benefits: [
// //         "1 personal item",
// //         "1 cabin bag (10 kg)",
// //         "1 checked bag (30 kg)",
// //         "Flight change allowed for a fee",
// //         "Partial refund if you cancel",
// //         "Choose your own seats",
// //       ],
// //     },
// //   ];

// //   return (
// //     <div className="fare-selection">
// //       <div className="fare-selection-header">
// //         <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
// //         <h2>Mumbai to New Delhi</h2>
// //       </div>

// //       <div className="fare-selection-title">
// //         <h3>Choose your fare</h3>
// //         <button>‹ Back to results</button>
// //       </div>

// //       <div className="fares-grid">
// //         {FARES.map((fare) => (
// //           <div
// //             key={fare.name}
// //             className={`fare-card ${fare.popular ? "popular" : ""}`}
// //           >
// //             {fare.popular && (
// //               <div className="fare-popular-tag">Popular Choice</div>
// //             )}
// //             <div className="fare-card-content">
// //               <div className="fare-header">
// //                 <h4>{fare.name}</h4>
// //                 <span>ⓘ</span>
// //               </div>
// //               <p>Total price INR {fare.price.toLocaleString()}</p>

// //               <div className="fare-benefits-title">Included in this fare:</div>
// //               <div className="fare-benefits">
// //                 {fare.benefits.map((benefit, i) => (
// //                   <div key={i} className="fare-benefit">
// //                     <span>
// //                       {benefit.includes("personal")
// //                         ? "👜"
// //                         : benefit.includes("cabin")
// //                         ? "🎒"
// //                         : benefit.includes("checked")
// //                         ? "🧳"
// //                         : benefit.includes("change")
// //                         ? "🔄"
// //                         : benefit.includes("refund")
// //                         ? "💰"
// //                         : "💺"}
// //                     </span>
// //                     <span>{benefit}</span>
// //                   </div>
// //                 ))}
// //               </div>

// //               <button
// //                 onClick={() => onContinue(fare.name)}
// //                 className="fare-select-btn"
// //               >
// //                 Continue
// //               </button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="fare-warning">
// //         <span>⚠️</span>
// //         <p>
// //           Flight changes: if your new flight costs more than the original one,
// //           you'll need to pay the fare difference.
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // const PassengerDetails = ({ onContinue }) => {
// //   const [details, setDetails] = useState({
// //     firstName: "",
// //     lastName: "",
// //     email: "",
// //     phone: "",
// //   });

// //   return (
// //     <div className="passenger-details">
// //       <div className="passenger-container">
// //         <div className="passenger-main">
// //           <div className="passenger-header">
// //             <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
// //             <h2>Mumbai to New Delhi</h2>
// //           </div>

// //           <h3>Fill in your details</h3>

// //           <div className="passenger-card">
// //             <div className="passenger-card-header">
// //               <div className="passenger-icon">👤</div>
// //               <h3>Adult 1</h3>
// //             </div>

// //             <div className="passenger-card-content">
// //               <button className="add-details-btn">
// //                 Add this traveler's details
// //               </button>

// //               <div className="baggage-info">
// //                 <div className="baggage-item">
// //                   <span>👜</span>
// //                   <div>
// //                     <p>1 personal item</p>
// //                     <p className="included-tag">Included</p>
// //                     <p>Fits under the seat in front of you</p>
// //                   </div>
// //                 </div>
// //                 <div className="baggage-item">
// //                   <span>🧳</span>
// //                   <div>
// //                     <p>1 cabin bag</p>
// //                     <p className="included-tag">Included</p>
// //                     <p>25 × 35 × 55 cm · 7 kg</p>
// //                   </div>
// //                 </div>
// //                 <div className="baggage-item">
// //                   <span>🏢</span>
// //                   <div>
// //                     <p>1 checked bag</p>
// //                     <p className="included-tag">Included</p>
// //                     <p>Max weight 15 kg</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="contact-card">
// //             <h3>Contact details</h3>
// //             <p>* Required</p>
// //             <div className="contact-form">
// //               <div className="form-group">
// //                 <label>Contact email *</label>
// //                 <input
// //                   type="email"
// //                   value={details.email}
// //                   placeholder="Enter your email"
// //                   onChange={(e) =>
// //                     setDetails((prev) => ({ ...prev, email: e.target.value }))
// //                   }
// //                 />
// //                 <p>We'll send your flight confirmation here</p>
// //               </div>
// //               <div className="form-group">
// //                 <label>Phone number *</label>
// //                 <div className="phone-input">
// //                   <button className="country-code">
// //                     <img
// //                       src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
// //                       alt="India"
// //                     />
// //                     <span>+91</span>
// //                     <span>⌄</span>
// //                   </button>
// //                   <input
// //                     type="tel"
// //                     value={details.phone}
// //                     placeholder="000 000 0000"
// //                     onChange={(e) =>
// //                       setDetails((prev) => ({ ...prev, phone: e.target.value }))
// //                     }
// //                   />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="info-card">
// //             <div>
// //               <span>🧳</span>
// //               <div>
// //                 <h4>Good to know</h4>
// //                 <p>Special or oversized baggage policies</p>
// //               </div>
// //             </div>
// //             <span>›</span>
// //           </div>

// //           <div className="passenger-navigation">
// //             <button>‹ Back</button>
// //             <button onClick={() => onContinue(details)} className="next-btn">
// //               Next
// //             </button>
// //           </div>
// //         </div>

// //         <div className="passenger-sidebar">
// //           <div className="price-summary">
// //             <h4>Price details</h4>
// //             <div className="price-breakdown">
// //               <div className="price-item">
// //                 <span>Flight</span>
// //                 <span>
// //                   INR 13,470.98 <span>⌄</span>
// //                 </span>
// //               </div>
// //               <div className="price-subitem">
// //                 <span>Adult (1)</span>
// //                 <span>INR 13,470.98</span>
// //               </div>
// //             </div>
// //             <div className="price-total">
// //               <span>Total</span>
// //               <div>
// //                 <p>INR 13,470.98</p>
// //                 <p>Includes taxes and charges</p>
// //               </div>
// //             </div>

// //             <div className="price-guarantee">
// //               <div>
// //                 <span>✓</span>
// //                 <span>No hidden fees - track your price at every step</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const SeatSelection = ({ onContinue }) => {
// //   return (
// //     <div className="seat-selection">
// //       <div className="seat-container">
// //         <h2>Select your seat</h2>

// //         <div className="seat-content">
// //           <div className="seat-main">
// //             <div className="seat-card">
// //               <div className="seat-card-header">
// //                 <div>
// //                   <h4>Mumbai to New Delhi</h4>
// //                   <p>2h · IndiGo</p>
// //                 </div>
// //                 <span>⌄</span>
// //               </div>
// //               <div className="seat-not-selected">
// //                 <span>💺</span>
// //                 <p>No seat selected</p>
// //               </div>
// //               <button className="select-seat-btn">
// //                 Select a seat from INR 0.00 →
// //               </button>
// //             </div>

// //             <div className="seat-card disabled">
// //               <div className="seat-card-header">
// //                 <div>
// //                   <h4>New Delhi to Mumbai</h4>
// //                   <p>2h 15m · IndiGo</p>
// //                 </div>
// //                 <span>⌄</span>
// //               </div>
// //               <div className="seat-not-selected">
// //                 <span>💺</span>
// //                 <p>No seat selected</p>
// //               </div>
// //               <button disabled>Select a seat from INR 0.00</button>
// //             </div>
// //           </div>

// //           <div className="seat-sidebar">
// //             <div className="seat-price-summary">
// //               <h4>Price details</h4>
// //               <div className="seat-price-breakdown">
// //                 <div className="seat-price-item">
// //                   <span>Flight</span>
// //                   <span>
// //                     INR 13,470.98 <span>⌄</span>
// //                   </span>
// //                 </div>
// //               </div>
// //               <div className="seat-price-total">
// //                 <span>Total</span>
// //                 <div>
// //                   <p>INR 13,470.98</p>
// //                   <p>Includes taxes and charges</p>
// //                 </div>
// //               </div>

// //               <div className="seat-actions">
// //                 <button onClick={onContinue} className="skip-seat-btn">
// //                   Skip seat selection
// //                 </button>
// //                 <button className="back-btn">‹ Back</button>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // const PaymentReview = ({ onPay }) => {
// //   return (
// //     <div className="payment-review">
// //       <div className="payment-container">
// //         <div className="payment-main">
// //           <h2>Check and pay</h2>

// //           <div className="payment-card">
// //             <div className="payment-flight">
// //               <div className="flight-info">
// //                 <div className="flight-logo">
// //                   <img
// //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
// //                     alt="Indigo"
// //                   />
// //                 </div>
// //                 <div>
// //                   <h4>Mumbai (BOM) to New Delhi (DEL)</h4>
// //                   <p>
// //                     Sat, Jan 24 · 08:55 AM - 10:55 AM · Direct · 2h · Economy
// //                   </p>
// //                 </div>
// //                 <button>View flight details</button>
// //               </div>

// //               <div className="payment-flight-return">
// //                 <div className="flight-logo">
// //                   <img
// //                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
// //                     alt="Indigo"
// //                   />
// //                 </div>
// //                 <div>
// //                   <h4>New Delhi (DEL) to Mumbai (BOM)</h4>
// //                   <p>
// //                     Sat, Jan 31 · 11:45 AM - 02:00 PM · Direct · 2h 15m ·
// //                     Economy
// //                   </p>
// //                 </div>
// //                 <button>View flight details</button>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="payment-card">
// //             <h3>Contact details</h3>
// //             <p>Primary Contact</p>
// //             <div className="contact-details">
// //               <p>DUSHYANT MART</p>
// //               <p>+91 9910444525</p>
// //               <p>dushyantfurnituremart@gmail.com</p>
// //             </div>
// //           </div>

// //           <div className="payment-card">
// //             <h3>Traveller details</h3>
// //             <div className="traveller-details">
// //               <span>👤</span>
// //               <div>
// //                 <p>DUSHYANT MART</p>
// //                 <p>Adult · Male</p>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="payment-card">
// //             <div className="payment-method-header">
// //               <h3>Your payment</h3>
// //               <p>Simple, safe and secure.</p>
// //             </div>
// //             <div className="payment-method-content">
// //               <div className="payment-options">
// //                 <label>How would you like to pay?</label>
// //                 <div className="payment-methods">
// //                   {["MasterCard", "Visa", "Amex", "Discover", "UPI"].map(
// //                     (p) => (
// //                       <div key={p} className="payment-method">
// //                         <div className="card-icon"></div>
// //                         <span>{p}</span>
// //                       </div>
// //                     )
// //                   )}
// //                 </div>

// //                 <div className="card-details">
// //                   <div className="card-form-group">
// //                     <label>Cardholder's Name *</label>
// //                     <input type="text" defaultValue="DUSHYANT MART" />
// //                   </div>
// //                   <div className="card-form-group">
// //                     <label>Card Number *</label>
// //                     <div className="card-input">
// //                       <input type="text" placeholder="0000 0000 0000 0000" />
// //                       <span>💳</span>
// //                     </div>
// //                   </div>
// //                   <div className="card-form-row">
// //                     <div className="card-form-group">
// //                       <label>Expiry Date *</label>
// //                       <input type="text" placeholder="MM / YY" />
// //                     </div>
// //                     <div className="card-form-group">
// //                       <label>CVC *</label>
// //                       <div className="card-input">
// //                         <input type="text" placeholder="123" />
// //                         <span>ⓘ</span>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>

// //               <div className="payment-terms">
// //                 <p>
// //                   By clicking "Pay now" you agree with the{" "}
// //                   <span>terms and conditions</span> and{" "}
// //                   <span>privacy policies</span> of Booking.com, Gotogate
// //                   International AB, IndiGo and with the <span>fare rules</span>.
// //                 </p>

// //                 <div className="payment-actions">
// //                   <button>‹ Back</button>
// //                   <button onClick={onPay} className="pay-now-btn">
// //                     <span>🔒</span> Pay now
// //                   </button>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         <div className="payment-sidebar">
// //           <div className="payment-summary">
// //             <h4>Price details</h4>
// //             <div className="payment-breakdown">
// //               <div className="payment-item">
// //                 <span>Flight</span>
// //                 <span>
// //                   INR 13,470.98 <span>⌄</span>
// //                 </span>
// //               </div>
// //               <div className="payment-subitem">
// //                 <span>Adult (1)</span>
// //                 <span>INR 13,470.98</span>
// //               </div>
// //             </div>
// //             <div className="payment-total">
// //               <span>Total</span>
// //               <div>
// //                 <p>INR 13,470.98</p>
// //                 <p>Includes taxes and charges</p>
// //               </div>
// //             </div>

// //             <div className="payment-guarantee">
// //               <div>
// //                 <span>✓</span>
// //                 <span>No hidden fees — here's what you'll pay</span>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // Main App Component
// // const FlightsApp = () => {
// //   return (
// //     <div className="flights-app">
// //       <h1>Flights Page</h1>
// //     </div>
// //   );
// // };

// // export default FlightsApp;
// import React, { useState, useRef, useMemo } from "react";
// import "./flights.css";

// // Mock Data
// const POPULAR_ROUTES = [
//   {
//     from: "Mumbai",
//     to: "London",
//     img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     from: "Mumbai",
//     to: "Dubai",
//     img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     from: "Mumbai",
//     to: "Bangkok",
//     img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     from: "Mumbai",
//     to: "Singapore",
//     img: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     from: "Mumbai",
//     to: "New York",
//     img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     from: "Mumbai",
//     to: "Paris",
//     img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
//   },
// ];

// const MOCK_FLIGHTS = [
//   {
//     id: "1",
//     airline: "IndiGo",
//     airlineLogo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png",
//     departureTime: "08:55",
//     arrivalTime: "10:55",
//     duration: "2h",
//     price: 13470,
//     stops: 0,
//     type: "Economy",
//   },
//   {
//     id: "2",
//     airline: "Air India",
//     airlineLogo:
//       "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Air_India_Logo.svg/2560px-Air_India_Logo.svg.png",
//     departureTime: "11:30",
//     arrivalTime: "13:45",
//     duration: "2h 15m",
//     price: 14213,
//     stops: 0,
//     type: "Economy",
//   },
//   {
//     id: "3",
//     airline: "Vistara",
//     airlineLogo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Vistara_logo.svg/2560px-Vistara_logo.svg.png",
//     departureTime: "14:20",
//     arrivalTime: "16:35",
//     duration: "2h 15m",
//     price: 15885,
//     stops: 1,
//     type: "Premium Economy",
//   },
//   {
//     id: "4",
//     airline: "SpiceJet",
//     airlineLogo:
//       "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/SpiceJet_logo.svg/2560px-SpiceJet_logo.svg.png",
//     departureTime: "19:45",
//     arrivalTime: "22:00",
//     duration: "2h 15m",
//     price: 12238,
//     stops: 0,
//     type: "Economy",
//   },
// ];

// const AIRLINES = ["IndiGo", "Air India", "Vistara", "SpiceJet", "Go First"];
// const STOP_TYPES = ["Direct only", "1 stop max", "2 stops max", "Any"];
// const TIME_SLOTS = [
//   { label: "Morning (5am–11am)", value: "morning" },
//   { label: "Afternoon (11am–5pm)", value: "afternoon" },
//   { label: "Evening (5pm–9pm)", value: "evening" },
//   { label: "Night (9pm–5am)", value: "night" },
// ];

// // Components
// const BookingHeader = ({ currentStep, onStepClick }) => {
//   const steps = [
//     { label: "Choose your fare", step: "FARE_SELECTION" },
//     { label: "Your details", step: "PASSENGER_DETAILS" },
//     { label: "Extras", step: "SEAT_SELECTION" },
//     { label: "Check and pay", step: "PAYMENT_REVIEW" },
//   ];

//   const getStepIndex = (step) => {
//     switch (step) {
//       case "FARE_SELECTION":
//         return 0;
//       case "PASSENGER_DETAILS":
//         return 1;
//       case "SEAT_SELECTION":
//         return 2;
//       case "PAYMENT_REVIEW":
//         return 3;
//       default:
//         return -1;
//     }
//   };

//   const currentIndex = getStepIndex(currentStep);

//   return (
//     <div className="booking-header">
//       <div className="booking-header-container">
//         <div className="booking-steps">
//           <div className="booking-steps-line"></div>
//           {steps.map((s, idx) => (
//             <div key={s.step} className="booking-step-wrapper">
//               <div
//                 className={`booking-step-circle ${
//                   idx <= currentIndex ? "active" : ""
//                 }`}
//               >
//                 {idx + 1}
//               </div>
//               <span
//                 className={`booking-step-label ${
//                   idx <= currentIndex ? "active" : ""
//                 }`}
//               >
//                 {s.label}
//               </span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// const FlightModal = ({ flight, onClose, onContinue }) => {
//   return (
//     <div className="flight-modal-overlay">
//       <div className="flight-modal">
//         <div className="flight-modal-header">
//           <h3>Your flight to New Delhi</h3>
//           <button onClick={onClose} className="flight-modal-close">
//             ×
//           </button>
//         </div>

//         <div className="flight-modal-content">
//           <div className="flight-modal-details">
//             <div>
//               <div className="flight-modal-title">
//                 <h4>Flight to New Delhi</h4>
//                 <span>
//                   {flight.duration} · {flight.type}
//                 </span>
//                 <button className="flight-share">🔗 Share this flight</button>
//               </div>

//               <div className="flight-timeline">
//                 <div className="flight-timeline-item">
//                   <div className="timeline-dot"></div>
//                   <div className="flight-timeline-content">
//                     <p>Sat, Jan 24 · 08:55 AM</p>
//                     <p>
//                       BOM · Chhatrapati Shivaji International Airport Mumbai
//                     </p>
//                   </div>
//                   <div className="flight-airline">
//                     <img src={flight.airlineLogo} alt={flight.airline} />
//                     <p>{flight.airline} · Economy</p>
//                   </div>
//                 </div>

//                 <div className="flight-duration-banner">
//                   <span>⏱️</span>
//                   <span>2h flight duration</span>
//                 </div>

//                 <div className="flight-timeline-item">
//                   <div className="timeline-dot"></div>
//                   <div className="flight-timeline-content">
//                     <p>Sat, Jan 24 · 10:55 AM</p>
//                     <p>DEL · Indira Gandhi International Airport New Delhi</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flight-features">
//               <div className="flight-feature">
//                 <h5>🧳 Included baggage</h5>
//                 <div className="feature-item">
//                   <span>👜</span>
//                   <div>
//                     <p>1 personal item</p>
//                     <p>Must fit under the seat in front of you</p>
//                   </div>
//                   <span className="feature-tag">Included</span>
//                 </div>
//                 <div className="feature-item">
//                   <span>🧳</span>
//                   <div>
//                     <p>1 cabin bag</p>
//                     <p>25 × 35 × 55 cm · Max weight 7 kg</p>
//                   </div>
//                   <span className="feature-tag">Included</span>
//                 </div>
//               </div>
//               <div className="flight-feature">
//                 <h5>📑 Fare rules</h5>
//                 <div className="feature-item">
//                   <span>📅</span>
//                   <p>
//                     You're allowed to change this flight, for a fee of INR 3,500
//                     plus fare difference.
//                   </p>
//                 </div>
//                 <div className="feature-item">
//                   <span>💳</span>
//                   <p>
//                     Cancellations are allowed for a fee. Partial refunds apply
//                     if cancelled 24h before.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flight-modal-footer">
//           <div className="flight-price">
//             <span>INR {flight.price.toLocaleString()}</span>
//             <span>ⓘ</span>
//           </div>
//           <button onClick={onContinue} className="flight-continue-btn">
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Home = ({ onSearch }) => {
//   const [tripType, setTripType] = useState("round-trip");
//   const [travelClass, setTravelClass] = useState("Economy");
//   const [isDirectOnly, setIsDirectOnly] = useState(false);
//   const [departure, setDeparture] = useState("Mumbai All airports");
//   const [destination, setDestination] = useState("");
//   const [travelers, setTravelers] = useState(1);
//   const scrollRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth } = scrollRef.current;
//       const scrollTo =
//         direction === "left"
//           ? scrollLeft - clientWidth
//           : scrollLeft + clientWidth;
//       scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
//     }
//   };

//   const handleSearchClick = () => {
//     onSearch();
//   };

//   return (
//     <div className="home">
//       <div className="home-hero">
//         <div className="home-hero-content">
//           <h2>Compare and book cheap flights with ease</h2>
//           <p>Discover your next dream destination</p>

//           <div className="search-box">
//             <div className="search-options">
//               <label>
//                 <input type="radio" name="triptype" defaultChecked /> Round-trip
//               </label>
//               <label>
//                 <input type="radio" name="triptype" /> One-way
//               </label>
//               <label>
//                 <input type="radio" name="triptype" /> Multi-city
//               </label>
//               <select>
//                 <option>Economy</option>
//                 <option>Premium Economy</option>
//                 <option>Business</option>
//                 <option>First</option>
//               </select>
//               <label>
//                 <input type="checkbox" /> Direct flights only
//               </label>
//             </div>

//             <div className="search-fields">
//               <div className="search-field">
//                 <span>✈️</span>
//                 <div>
//                   <span>Leaving from</span>
//                   <input type="text" defaultValue="Mumbai All airports" />
//                 </div>
//               </div>
//               <div className="search-field">
//                 <span>✈️</span>
//                 <div>
//                   <span>Going to</span>
//                   <input type="text" placeholder="Where to?" />
//                 </div>
//               </div>
//               <div className="search-field">
//                 <span>📅</span>
//                 <div>
//                   <span>Travel dates</span>
//                   <span>Sat, Jan 24, 2026 — Sat, Jan 31, 2026</span>
//                 </div>
//               </div>
//               <div className="search-field">
//                 <span>👤</span>
//                 <div>
//                   <span>Travelers</span>
//                   <span>1 adult</span>
//                 </div>
//               </div>
//               <button onClick={handleSearchClick} className="search-btn">
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="home-content">
//         <section>
//           <h3>Continue where you left off</h3>
//           <div className="recent-searches">
//             <div onClick={onSearch} className="recent-search">
//               <div className="recent-search-img">
//                 <img
//                   src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80"
//                   alt="Delhi"
//                 />
//               </div>
//               <div>
//                 <h4>Mumbai to Delhi International Airport</h4>
//                 <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
//               </div>
//             </div>
//             <div onClick={onSearch} className="recent-search">
//               <div className="recent-search-img">
//                 <img
//                   src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80"
//                   alt="Hindon"
//                 />
//               </div>
//               <div>
//                 <h4>Mumbai to Hindon Airport</h4>
//                 <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
//               </div>
//             </div>
//           </div>
//         </section>

//         <section>
//           <h3>Explore Anywhere</h3>
//           <div className="explore-map">
//             <img
//               src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
//               alt="Map"
//             />
//             <div className="explore-map-center">
//               <div>
//                 <span>📍</span> Find flights to anywhere
//               </div>
//             </div>
//             <button>Open Map</button>
//           </div>
//         </section>

//         <section className="countries-section">
//           <div className="section-header">
//             <div>
//               <h3>Explore by country</h3>
//               <p>Discover trending destinations, just a flight away</p>
//             </div>
//             <div className="scroll-controls">
//               <button onClick={() => scroll("left")}>←</button>
//               <button onClick={() => scroll("right")}>→</button>
//             </div>
//           </div>

//           <div ref={scrollRef} className="countries-grid">
//             {[
//               {
//                 name: "United Kingdom",
//                 img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
//                 flag: "🇬🇧",
//               },
//               {
//                 name: "India",
//                 img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80",
//                 flag: "🇮🇳",
//               },
//               {
//                 name: "United Arab Emirates",
//                 img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
//                 flag: "🇦🇪",
//               },
//               {
//                 name: "Thailand",
//                 img: "https://images.unsplash.com/photo-1528181304800-2f140819ad9c?auto=format&fit=crop&w=400&q=80",
//                 flag: "🇹🇭",
//               },
//               {
//                 name: "Germany",
//                 img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
//                 flag: "🇩🇪",
//               },
//               {
//                 name: "France",
//                 img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=400&q=80",
//                 flag: "🇫🇷",
//               },
//             ].map((country) => (
//               <div
//                 key={country.name}
//                 onClick={onSearch}
//                 className="country-card"
//               >
//                 <img src={country.img} alt={country.name} />
//                 <div className="country-overlay"></div>
//                 <div className="country-info">
//                   <div>
//                     <span>{country.flag}</span>
//                     <h4>{country.name}</h4>
//                   </div>
//                 </div>
//               </div>
//             ))}
//             <div className="country-card-all">
//               <div>🌏</div>
//               <div>Anywhere</div>
//               <p>Explore all destinations</p>
//             </div>
//           </div>
//         </section>

//         <section>
//           <h3>Popular flights near you</h3>
//           <p>Find deals on domestic and international flights</p>
//           <div className="flight-tabs">
//             <button className="active">International</button>
//             <button>Domestic</button>
//           </div>
//           <div className="popular-flights">
//             {[
//               {
//                 city: "London",
//                 date: "Jan 7 - Jan 15",
//                 img: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=400&q=80",
//               },
//               {
//                 city: "Dubai",
//                 date: "Dec 26 - Jan 28",
//                 img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=400&q=80",
//               },
//               {
//                 city: "Bangkok",
//                 date: "Jan 1 - Jan 10",
//                 img: "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=80",
//               },
//               {
//                 city: "Frankfurt",
//                 date: "Dec 24 - Jan 15",
//                 img: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=400&q=80",
//               },
//             ].map((flight) => (
//               <div key={flight.city} onClick={onSearch} className="flight-card">
//                 <img src={flight.img} alt={flight.city} />
//                 <div>
//                   <h4>Mumbai to {flight.city}</h4>
//                   <p>{flight.date} · Round trip</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="account-section">
//           <div>
//             <div className="account-icon">💎</div>
//             <div>
//               <h3>Your account, your travel</h3>
//               <p>
//                 All your trip details in one place. Sign in to book faster and
//                 manage your trip with ease.
//               </p>
//               <div className="account-buttons">
//                 <button>Sign in</button>
//                 <button>Register</button>
//               </div>
//             </div>
//           </div>
//           <div className="genius-badge">
//             <img
//               src="https://cf.bstatic.com/static/img/genius/genius_loyalty_badge/9d201e74a81617498c4d23a10363234907a97217.png"
//               alt="Genius"
//             />
//           </div>
//         </section>

//         <section className="features-section">
//           <div className="feature">
//             <span>🔍</span>
//             <div>
//               <h4>Search a huge selection</h4>
//               <p>
//                 Easily compare flights, airlines, and prices - all in one place
//               </p>
//             </div>
//           </div>
//           <div className="feature">
//             <span>💰</span>
//             <div>
//               <h4>Pay no hidden fees</h4>
//               <p>Get a clear price breakdown every step of the way</p>
//             </div>
//           </div>
//           <div className="feature">
//             <span>✈️</span>
//             <div>
//               <h4>Get more flexibility</h4>
//               <p>Change your travel dates with the Flexible ticket option*</p>
//             </div>
//           </div>
//         </section>

//         <section>
//           <h3>Top flights from India</h3>
//           <div className="route-tabs">
//             {[
//               "Popular routes",
//               "Cities",
//               "Countries",
//               "Regions",
//               "Airports",
//             ].map((tab, i) => (
//               <button key={tab} className={i === 0 ? "active" : ""}>
//                 {tab}
//               </button>
//             ))}
//           </div>
//           <div className="routes-grid">
//             {POPULAR_ROUTES.map((route, idx) => (
//               <div key={idx} onClick={onSearch} className="route-item">
//                 <img src={route.img} alt={route.to} />
//                 <span>
//                   {route.from} → {route.to}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </section>

//         <section className="faq-section">
//           <h3>Frequently asked questions</h3>
//           <div className="faq-grid">
//             {[
//               "How do I find the cheapest flights on Booking.com?",
//               "Can I book one-way flights on Booking.com?",
//               "How far in advance can I book a flight?",
//               "Do flights get cheaper closer to departure?",
//               "What is a flexible ticket?",
//               "Does Booking.com charge credit card fees?",
//             ].map((q) => (
//               <div key={q} className="faq-item">
//                 <span>{q}</span>
//                 <span>⌄</span>
//               </div>
//             ))}
//           </div>
//         </section>

//         <footer className="footer">
//           <div className="footer-top">
//             <div className="footer-section">
//               <h4>Booking.com</h4>
//               <p>Manage your trips</p>
//               <p>Customer Service help</p>
//               <p>Safety resource centre</p>
//             </div>
//             <div className="footer-section">
//               <h4>Stream</h4>
//               <p>Genius loyalty programme</p>
//               <p>Seasonal and holiday deals</p>
//               <p>Travel articles</p>
//               <p>Booking.com for Business</p>
//             </div>
//             <div className="footer-section">
//               <h4>Terms and settings</h4>
//               <p>Privacy & cookies</p>
//               <p>Terms and conditions</p>
//               <p>Accessibility Statement</p>
//               <p>Modern Slavery Statement</p>
//             </div>
//             <div className="footer-section">
//               <h4>Partners</h4>
//               <p>Investor relations</p>
//               <p>List your property</p>
//               <p>Become an affiliate</p>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>Copyright © 1996-2025 booking.com™. All rights reserved.</p>
//             <div className="footer-logo">Booking.com</div>
//           </div>
//         </footer>
//       </div>
//     </div>
//   );
// };

// const SearchResults = ({ onViewDetails }) => {
//   const [selectedAirlines, setSelectedAirlines] = useState(AIRLINES);
//   const [selectedStops, setSelectedStops] = useState("Any");
//   const [maxPrice, setMaxPrice] = useState(30000);

//   const filteredFlights = useMemo(() => {
//     return MOCK_FLIGHTS.filter((flight) => {
//       const airlineMatch = selectedAirlines.includes(flight.airline);
//       const stopsMatch =
//         selectedStops === "Any" ||
//         (selectedStops === "Direct only" && flight.stops === 0) ||
//         (selectedStops === "1 stop max" && flight.stops <= 1);
//       const priceMatch = flight.price <= maxPrice;
//       return airlineMatch && stopsMatch && priceMatch;
//     });
//   }, [selectedAirlines, selectedStops, maxPrice]);

//   return (
//     <div className="search-results">
//       <div className="search-results-header">
//         <div className="search-results-container">
//           <div className="search-summary">
//             <div className="search-summary-item">
//               <span>📍</span>
//               <div>
//                 <div>Mumbai → Delhi</div>
//                 <div>Round trip • 1 traveler</div>
//               </div>
//             </div>
//             <div className="search-summary-item">
//               <span>📅</span>
//               <div>
//                 <div>Sat, Jan 24 - Sat, Jan 31</div>
//                 <div>Economy</div>
//               </div>
//             </div>
//             <button className="edit-search-btn">Edit search</button>
//           </div>
//         </div>
//       </div>

//       <div className="search-results-content">
//         <div className="filters-sidebar">
//           <div className="filter-section">
//             <div className="filter-header">
//               <h3>Filters</h3>
//               <button>Clear all</button>
//             </div>

//             <div className="filter-group">
//               <h4>Search summary</h4>
//               <p>
//                 Showing {filteredFlights.length} results for your trip to Delhi
//               </p>
//               <button>View summary</button>
//             </div>

//             <div className="filter-group">
//               <h4>Stops</h4>
//               {STOP_TYPES.map((stop) => (
//                 <label key={stop}>
//                   <div>
//                     <input
//                       type="radio"
//                       name="stops"
//                       checked={selectedStops === stop}
//                       onChange={() => setSelectedStops(stop)}
//                     />
//                     <span>{stop}</span>
//                   </div>
//                   <span>1996</span>
//                 </label>
//               ))}
//             </div>

//             <div className="filter-group">
//               <h4>Airlines</h4>
//               {AIRLINES.map((airline) => (
//                 <label key={airline}>
//                   <div>
//                     <input
//                       type="checkbox"
//                       checked={selectedAirlines.includes(airline)}
//                       onChange={() => {
//                         setSelectedAirlines((prev) =>
//                           prev.includes(airline)
//                             ? prev.filter((a) => a !== airline)
//                             : [...prev, airline]
//                         );
//                       }}
//                     />
//                     <span>{airline}</span>
//                   </div>
//                   <span>443</span>
//                 </label>
//               ))}
//               <button>Show all ⌄</button>
//             </div>

//             <div className="filter-group">
//               <h4>Price range</h4>
//               <input
//                 type="range"
//                 min="10000"
//                 max="30000"
//                 value={maxPrice}
//                 onChange={(e) => setMaxPrice(parseInt(e.target.value))}
//               />
//               <div className="price-range">
//                 <span>INR 10,000</span>
//                 <span>INR {maxPrice.toLocaleString()}</span>
//               </div>
//             </div>

//             <div className="filter-group">
//               <h4>Flight times</h4>
//               <div className="time-tabs">
//                 <button className="active">Departing</button>
//                 <button>Returning</button>
//               </div>
//               {TIME_SLOTS.map((slot) => (
//                 <label key={slot.label}>
//                   <input type="checkbox" />
//                   <span>{slot.label}</span>
//                 </label>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flights-main">
//           <div className="sort-tabs">
//             <button className="active">
//               <span>Best</span>
//               <span>The best combination</span>
//             </button>
//             <button>
//               <span>Cheapest</span>
//               <span>From INR 12,238</span>
//             </button>
//             <button>
//               <span>Fastest</span>
//               <span>From INR 13,389</span>
//             </button>
//           </div>

//           <div className="price-alert">
//             <div>
//               <span>🌍</span>
//               <div>
//                 <p>We found better prices! Compare nearby dates.</p>
//                 <p>Actual prices shown in next step.</p>
//               </div>
//             </div>
//             <div className="price-dates">
//               {["Jan 5–Jan 12", "Jan 6–Jan 13", "Jan 7–Jan 14"].map((d, i) => (
//                 <div key={i}>
//                   <p>{d}</p>
//                   <p>INR 12,238</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="flights-list">
//             {filteredFlights.map((flight) => (
//               <div key={flight.id} className="flight-card-result">
//                 <div className="flight-card-main">
//                   <div className="flight-badges">
//                     <span className="best-badge">Best</span>
//                     <span className="flexible-badge">
//                       Flexible ticket upgrade available
//                     </span>
//                   </div>

//                   <div className="flight-details">
//                     <div className="flight-airline-logo">
//                       <img src={flight.airlineLogo} alt={flight.airline} />
//                     </div>
//                     <div className="flight-time">
//                       <span>{flight.departureTime}</span>
//                       <span>BOM · Jan 24</span>
//                     </div>
//                     <div className="flight-route">
//                       <div className="flight-route-line">
//                         <span className="route-dot"></span>
//                         <div className="route-line">
//                           <div
//                             className={`route-stops ${
//                               flight.stops === 0 ? "direct" : "stop"
//                             }`}
//                           >
//                             {flight.stops === 0
//                               ? "Direct"
//                               : `${flight.stops} stop`}
//                           </div>
//                         </div>
//                         <span className="route-dot"></span>
//                       </div>
//                       <span>{flight.duration}</span>
//                     </div>
//                     <div className="flight-time">
//                       <span>{flight.arrivalTime}</span>
//                       <span>DEL · Jan 24</span>
//                     </div>
//                   </div>

//                   <div className="flight-footer">
//                     <span>{flight.airline}</span>
//                     <button>Explore ticket options ⌄</button>
//                   </div>
//                 </div>

//                 <div className="flight-card-side">
//                   <div>
//                     <span className="fare-type">Saver</span>
//                     <div className="flight-price-display">
//                       <span>INR {flight.price.toLocaleString()}</span>
//                       <span>ⓘ</span>
//                     </div>
//                     <p>Includes taxes and charges</p>
//                   </div>

//                   <button
//                     onClick={() => onViewDetails(flight)}
//                     className="view-details-btn"
//                   >
//                     View details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const FareSelection = ({ flight, onContinue }) => {
//   const FARES = [
//     {
//       name: "Eco Value",
//       price: 14213,
//       benefits: [
//         "1 personal item",
//         "1 cabin bag (7 kg)",
//         "1 checked bag (15 kg)",
//         "Flight change allowed for a fee",
//         "Partial refund if you cancel",
//         "Choose your own seats",
//       ],
//     },
//     {
//       name: "Eco Classic",
//       price: 15885,
//       popular: true,
//       benefits: [
//         "1 personal item",
//         "1 cabin bag (7 kg)",
//         "1 checked bag (20 kg)",
//         "Flight change allowed for a fee",
//         "Partial refund if you cancel",
//         "Choose your own seats",
//       ],
//     },
//     {
//       name: "Eco Flex",
//       price: 18027,
//       benefits: [
//         "1 personal item",
//         "1 cabin bag (7 kg)",
//         "1 checked bag (25 kg)",
//         "Flight change allowed",
//         "Partial refund if you cancel",
//         "Choose your own seats",
//       ],
//     },
//     {
//       name: "Business Value",
//       price: 67079,
//       benefits: [
//         "1 personal item",
//         "1 cabin bag (10 kg)",
//         "1 checked bag (30 kg)",
//         "Flight change allowed for a fee",
//         "Partial refund if you cancel",
//         "Choose your own seats",
//       ],
//     },
//   ];

//   return (
//     <div className="fare-selection">
//       <div className="fare-selection-header">
//         <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
//         <h2>Mumbai to New Delhi</h2>
//       </div>

//       <div className="fare-selection-title">
//         <h3>Choose your fare</h3>
//         <button>‹ Back to results</button>
//       </div>

//       <div className="fares-grid">
//         {FARES.map((fare) => (
//           <div
//             key={fare.name}
//             className={`fare-card ${fare.popular ? "popular" : ""}`}
//           >
//             {fare.popular && (
//               <div className="fare-popular-tag">Popular Choice</div>
//             )}
//             <div className="fare-card-content">
//               <div className="fare-header">
//                 <h4>{fare.name}</h4>
//                 <span>ⓘ</span>
//               </div>
//               <p>Total price INR {fare.price.toLocaleString()}</p>

//               <div className="fare-benefits-title">Included in this fare:</div>
//               <div className="fare-benefits">
//                 {fare.benefits.map((benefit, i) => (
//                   <div key={i} className="fare-benefit">
//                     <span>
//                       {benefit.includes("personal")
//                         ? "👜"
//                         : benefit.includes("cabin")
//                         ? "🎒"
//                         : benefit.includes("checked")
//                         ? "🧳"
//                         : benefit.includes("change")
//                         ? "🔄"
//                         : benefit.includes("refund")
//                         ? "💰"
//                         : "💺"}
//                     </span>
//                     <span>{benefit}</span>
//                   </div>
//                 ))}
//               </div>

//               <button
//                 onClick={() => onContinue(fare.name)}
//                 className="fare-select-btn"
//               >
//                 Continue
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="fare-warning">
//         <span>⚠️</span>
//         <p>
//           Flight changes: if your new flight costs more than the original one,
//           you'll need to pay the fare difference.
//         </p>
//       </div>
//     </div>
//   );
// };

// const PassengerDetails = ({ onContinue }) => {
//   const [details, setDetails] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//   });

//   return (
//     <div className="passenger-details">
//       <div className="passenger-container">
//         <div className="passenger-main">
//           <div className="passenger-header">
//             <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
//             <h2>Mumbai to New Delhi</h2>
//           </div>

//           <h3>Fill in your details</h3>

//           <div className="passenger-card">
//             <div className="passenger-card-header">
//               <div className="passenger-icon">👤</div>
//               <h3>Adult 1</h3>
//             </div>

//             <div className="passenger-card-content">
//               <button className="add-details-btn">
//                 Add this traveler's details
//               </button>

//               <div className="baggage-info">
//                 <div className="baggage-item">
//                   <span>👜</span>
//                   <div>
//                     <p>1 personal item</p>
//                     <p className="included-tag">Included</p>
//                     <p>Fits under the seat in front of you</p>
//                   </div>
//                 </div>
//                 <div className="baggage-item">
//                   <span>🧳</span>
//                   <div>
//                     <p>1 cabin bag</p>
//                     <p className="included-tag">Included</p>
//                     <p>25 × 35 × 55 cm · 7 kg</p>
//                   </div>
//                 </div>
//                 <div className="baggage-item">
//                   <span>🏢</span>
//                   <div>
//                     <p>1 checked bag</p>
//                     <p className="included-tag">Included</p>
//                     <p>Max weight 15 kg</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="contact-card">
//             <h3>Contact details</h3>
//             <p>* Required</p>
//             <div className="contact-form">
//               <div className="form-group">
//                 <label>Contact email *</label>
//                 <input
//                   type="email"
//                   value={details.email}
//                   placeholder="Enter your email"
//                   onChange={(e) =>
//                     setDetails((prev) => ({ ...prev, email: e.target.value }))
//                   }
//                 />
//                 <p>We'll send your flight confirmation here</p>
//               </div>
//               <div className="form-group">
//                 <label>Phone number *</label>
//                 <div className="phone-input">
//                   <button className="country-code">
//                     <img
//                       src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
//                       alt="India"
//                     />
//                     <span>+91</span>
//                     <span>⌄</span>
//                   </button>
//                   <input
//                     type="tel"
//                     value={details.phone}
//                     placeholder="000 000 0000"
//                     onChange={(e) =>
//                       setDetails((prev) => ({ ...prev, phone: e.target.value }))
//                     }
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="info-card">
//             <div>
//               <span>🧳</span>
//               <div>
//                 <h4>Good to know</h4>
//                 <p>Special or oversized baggage policies</p>
//               </div>
//             </div>
//             <span>›</span>
//           </div>

//           <div className="passenger-navigation">
//             <button>‹ Back</button>
//             <button onClick={() => onContinue(details)} className="next-btn">
//               Next
//             </button>
//           </div>
//         </div>

//         <div className="passenger-sidebar">
//           <div className="price-summary">
//             <h4>Price details</h4>
//             <div className="price-breakdown">
//               <div className="price-item">
//                 <span>Flight</span>
//                 <span>
//                   INR 13,470.98 <span>⌄</span>
//                 </span>
//               </div>
//               <div className="price-subitem">
//                 <span>Adult (1)</span>
//                 <span>INR 13,470.98</span>
//               </div>
//             </div>
//             <div className="price-total">
//               <span>Total</span>
//               <div>
//                 <p>INR 13,470.98</p>
//                 <p>Includes taxes and charges</p>
//               </div>
//             </div>

//             <div className="price-guarantee">
//               <div>
//                 <span>✓</span>
//                 <span>No hidden fees - track your price at every step</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const SeatSelection = ({ onContinue }) => {
//   return (
//     <div className="seat-selection">
//       <div className="seat-container">
//         <h2>Select your seat</h2>

//         <div className="seat-content">
//           <div className="seat-main">
//             <div className="seat-card">
//               <div className="seat-card-header">
//                 <div>
//                   <h4>Mumbai to New Delhi</h4>
//                   <p>2h · IndiGo</p>
//                 </div>
//                 <span>⌄</span>
//               </div>
//               <div className="seat-not-selected">
//                 <span>💺</span>
//                 <p>No seat selected</p>
//               </div>
//               <button className="select-seat-btn">
//                 Select a seat from INR 0.00 →
//               </button>
//             </div>

//             <div className="seat-card disabled">
//               <div className="seat-card-header">
//                 <div>
//                   <h4>New Delhi to Mumbai</h4>
//                   <p>2h 15m · IndiGo</p>
//                 </div>
//                 <span>⌄</span>
//               </div>
//               <div className="seat-not-selected">
//                 <span>💺</span>
//                 <p>No seat selected</p>
//               </div>
//               <button disabled>Select a seat from INR 0.00</button>
//             </div>
//           </div>

//           <div className="seat-sidebar">
//             <div className="seat-price-summary">
//               <h4>Price details</h4>
//               <div className="seat-price-breakdown">
//                 <div className="seat-price-item">
//                   <span>Flight</span>
//                   <span>
//                     INR 13,470.98 <span>⌄</span>
//                   </span>
//                 </div>
//               </div>
//               <div className="seat-price-total">
//                 <span>Total</span>
//                 <div>
//                   <p>INR 13,470.98</p>
//                   <p>Includes taxes and charges</p>
//                 </div>
//               </div>

//               <div className="seat-actions">
//                 <button onClick={onContinue} className="skip-seat-btn">
//                   Skip seat selection
//                 </button>
//                 <button className="back-btn">‹ Back</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const PaymentReview = ({ onPay }) => {
//   return (
//     <div className="payment-review">
//       <div className="payment-container">
//         <div className="payment-main">
//           <h2>Check and pay</h2>

//           <div className="payment-card">
//             <div className="payment-flight">
//               <div className="flight-info">
//                 <div className="flight-logo">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
//                     alt="Indigo"
//                   />
//                 </div>
//                 <div>
//                   <h4>Mumbai (BOM) to New Delhi (DEL)</h4>
//                   <p>
//                     Sat, Jan 24 · 08:55 AM - 10:55 AM · Direct · 2h · Economy
//                   </p>
//                 </div>
//                 <button>View flight details</button>
//               </div>

//               <div className="payment-flight-return">
//                 <div className="flight-logo">
//                   <img
//                     src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
//                     alt="Indigo"
//                   />
//                 </div>
//                 <div>
//                   <h4>New Delhi (DEL) to Mumbai (BOM)</h4>
//                   <p>
//                     Sat, Jan 31 · 11:45 AM - 02:00 PM · Direct · 2h 15m ·
//                     Economy
//                   </p>
//                 </div>
//                 <button>View flight details</button>
//               </div>
//             </div>
//           </div>

//           <div className="payment-card">
//             <h3>Contact details</h3>
//             <p>Primary Contact</p>
//             <div className="contact-details">
//               <p>DUSHYANT MART</p>
//               <p>+91 9910444525</p>
//               <p>dushyantfurnituremart@gmail.com</p>
//             </div>
//           </div>

//           <div className="payment-card">
//             <h3>Traveller details</h3>
//             <div className="traveller-details">
//               <span>👤</span>
//               <div>
//                 <p>DUSHYANT MART</p>
//                 <p>Adult · Male</p>
//               </div>
//             </div>
//           </div>

//           <div className="payment-card">
//             <div className="payment-method-header">
//               <h3>Your payment</h3>
//               <p>Simple, safe and secure.</p>
//             </div>
//             <div className="payment-method-content">
//               <div className="payment-options">
//                 <label>How would you like to pay?</label>
//                 <div className="payment-methods">
//                   {["MasterCard", "Visa", "Amex", "Discover", "UPI"].map(
//                     (p) => (
//                       <div key={p} className="payment-method">
//                         <div className="card-icon"></div>
//                         <span>{p}</span>
//                       </div>
//                     )
//                   )}
//                 </div>

//                 <div className="card-details">
//                   <div className="card-form-group">
//                     <label>Cardholder's Name *</label>
//                     <input type="text" defaultValue="DUSHYANT MART" />
//                   </div>
//                   <div className="card-form-group">
//                     <label>Card Number *</label>
//                     <div className="card-input">
//                       <input type="text" placeholder="0000 0000 0000 0000" />
//                       <span>💳</span>
//                     </div>
//                   </div>
//                   <div className="card-form-row">
//                     <div className="card-form-group">
//                       <label>Expiry Date *</label>
//                       <input type="text" placeholder="MM / YY" />
//                     </div>
//                     <div className="card-form-group">
//                       <label>CVC *</label>
//                       <div className="card-input">
//                         <input type="text" placeholder="123" />
//                         <span>ⓘ</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="payment-terms">
//                 <p>
//                   By clicking "Pay now" you agree with the{" "}
//                   <span>terms and conditions</span> and{" "}
//                   <span>privacy policies</span> of Booking.com, Gotogate
//                   International AB, IndiGo and with the <span>fare rules</span>.
//                 </p>

//                 <div className="payment-actions">
//                   <button>‹ Back</button>
//                   <button onClick={onPay} className="pay-now-btn">
//                     <span>🔒</span> Pay now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="payment-sidebar">
//           <div className="payment-summary">
//             <h4>Price details</h4>
//             <div className="payment-breakdown">
//               <div className="payment-item">
//                 <span>Flight</span>
//                 <span>
//                   INR 13,470.98 <span>⌄</span>
//                 </span>
//               </div>
//               <div className="payment-subitem">
//                 <span>Adult (1)</span>
//                 <span>INR 13,470.98</span>
//               </div>
//             </div>
//             <div className="payment-total">
//               <span>Total</span>
//               <div>
//                 <p>INR 13,470.98</p>
//                 <p>Includes taxes and charges</p>
//               </div>
//             </div>

//             <div className="payment-guarantee">
//               <div>
//                 <span>✓</span>
//                 <span>No hidden fees — here's what you'll pay</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // Main App Component
// const FlightsApp = () => {
//   const [currentStep, setCurrentStep] = useState("HOME");
//   const [selectedFlight, setSelectedFlight] = useState(null);
//   const [showFlightModal, setShowFlightModal] = useState(false);

//   const handleSearch = () => {
//     setCurrentStep("SEARCH_RESULTS");
//   };

//   const handleViewFlightDetails = (flight) => {
//     setSelectedFlight(flight);
//     setShowFlightModal(true);
//   };

//   const handleContinueFromModal = () => {
//     setShowFlightModal(false);
//     setCurrentStep("FARE_SELECTION");
//   };

//   const handleSelectFare = (fare) => {
//     setCurrentStep("PASSENGER_DETAILS");
//   };

//   const handlePassengerDetails = (details) => {
//     setCurrentStep("SEAT_SELECTION");
//   };

//   const handleSeatSelection = () => {
//     setCurrentStep("PAYMENT_REVIEW");
//   };

//   const handlePayment = () => {
//     alert("Payment successful! Booking confirmed.");
//     setCurrentStep("HOME");
//   };

//   return (
//     <div className="flights-app">
//       {currentStep !== "HOME" && currentStep !== "SEARCH_RESULTS" && (
//         <BookingHeader currentStep={currentStep} onStepClick={setCurrentStep} />
//       )}

//       {currentStep === "HOME" && <Home onSearch={handleSearch} />}

//       {currentStep === "SEARCH_RESULTS" && (
//         <SearchResults onViewDetails={handleViewFlightDetails} />
//       )}

//       {currentStep === "FARE_SELECTION" && selectedFlight && (
//         <FareSelection flight={selectedFlight} onContinue={handleSelectFare} />
//       )}

//       {currentStep === "PASSENGER_DETAILS" && (
//         <PassengerDetails onContinue={handlePassengerDetails} />
//       )}

//       {currentStep === "SEAT_SELECTION" && (
//         <SeatSelection onContinue={handleSeatSelection} />
//       )}

//       {currentStep === "PAYMENT_REVIEW" && (
//         <PaymentReview onPay={handlePayment} />
//       )}

//       {showFlightModal && selectedFlight && (
//         <FlightModal
//           flight={selectedFlight}
//           onClose={() => setShowFlightModal(false)}
//           onContinue={handleContinueFromModal}
//         />
//       )}
//     </div>
//   );
// };

// export default FlightsApp;

import React, { useState, useRef, useMemo } from "react";
import "./flights.css";

// Mock Data
const POPULAR_ROUTES = [
  {
    from: "Mumbai",
    to: "London",
    img: "https://q-xx.bstatic.com/xdata/images/city/64x64/977261.webp?k=2e7b71d0d1c3c5b3bd68898ef796748f74272f047d339815da0855a2b478ecf0&o=",
  },
  {
    from: "Mumbai",
    to: "Dubai",
    img: "https://q-xx.bstatic.com/xdata/images/city/64x64/977219.webp?k=5195e2536fa76cce99b3832db957dd594556791764839bb4ac3a64278c99ff4d&o=",
  },
  {
    from: "Mumbai",
    to: "Bangkok",
    img: "https://q-xx.bstatic.com/xdata/images/city/64x64/1000146.webp?k=3be6afb1e1f2595277f68a05a63fbfb4012b1d6dbf3a873ea452d1d52cdf03f3&o=",
  },
  {
    from: "Mumbai",
    to: "Singapore",
    img: "https://q-xx.bstatic.com/xdata/images/city/64x64/1000004.webp?k=8f940a72bf32ea6af21a8ba48cd8f143a6cb8913836996baaaa2e3b4ed9455ce&o=",
  },
  {
    from: "Mumbai",
    to: "New York",
    img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977041.webp?k=b9211f418b65b777dafcce9bf0dcff4a453e9542757b9d06f0581c372738a6a2&o=",
  },
  {
    from: "Mumbai",
    to: "Paris",
    img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977261.webp?k=6e056b414cda72f979d7227aff6f5cb43035a30555649dce0292bae146ba4d57&o=",
  },
];

const MOCK_FLIGHTS = [
  {
    id: "1",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "08:55",
    arrivalTime: "10:55",
    duration: "2h",
    price: 13470,
    stops: 0,
    type: "Economy",
  },
  {
    id: "2",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "11:30",
    arrivalTime: "13:45",
    duration: "2h 15m",
    price: 14213,
    stops: 0,
    type: "Economy",
  },
  {
    id: "3",
    airline: "Vistara",
    airlineLogo:
      "https://th.bing.com/th/id/OIP.1CltM3jcrOVKiCX70tQTRwHaFg?w=219&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    departureTime: "14:20",
    arrivalTime: "16:35",
    duration: "2h 15m",
    price: 15885,
    stops: 1,
    type: "Premium Economy",
  },
  {
    id: "4",
    airline: "SpiceJet",
    airlineLogo:
      "https://th.bing.com/th/id/OADD2.8108926641849_1JN4L7T0OYCHFONWMN?w=32&h=32&o=6&pid=21.2",
    departureTime: "19:45",
    arrivalTime: "22:00",
    duration: "2h 15m",
    price: 12238,
    stops: 0,
    type: "Economy",
  },
  {
    id: "1",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "06:10",
    arrivalTime: "08:10",
    duration: "2h",
    price: 11890,
    stops: 0,
    type: "Economy",
  },
  {
    id: "2",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "07:30",
    arrivalTime: "09:45",
    duration: "2h 15m",
    price: 13540,
    stops: 0,
    type: "Economy",
  },
  {
    id: "3",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "08:55",
    arrivalTime: "11:05",
    duration: "2h 10m",
    price: 15290,
    stops: 0,
    type: "Premium Economy",
  },
  {
    id: "4",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "09:40",
    arrivalTime: "11:50",
    duration: "2h 10m",
    price: 11020,
    stops: 0,
    type: "Economy",
  },
  {
    id: "5",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "10:25",
    arrivalTime: "12:45",
    duration: "2h 20m",
    price: 10480,
    stops: 0,
    type: "Economy",
  },

  {
    id: "6",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "11:15",
    arrivalTime: "13:25",
    duration: "2h 10m",
    price: 12460,
    stops: 0,
    type: "Economy",
  },
  {
    id: "7",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "12:40",
    arrivalTime: "15:10",
    duration: "2h 30m",
    price: 14210,
    stops: 1,
    type: "Economy",
  },
  {
    id: "8",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "13:55",
    arrivalTime: "16:05",
    duration: "2h 10m",
    price: 16840,
    stops: 0,
    type: "Business",
  },
  {
    id: "9",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "14:30",
    arrivalTime: "16:50",
    duration: "2h 20m",
    price: 10990,
    stops: 0,
    type: "Economy",
  },
  {
    id: "10",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "15:20",
    arrivalTime: "17:40",
    duration: "2h 20m",
    price: 10150,
    stops: 1,
    type: "Economy",
  },

  {
    id: "11",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "16:05",
    arrivalTime: "18:05",
    duration: "2h",
    price: 12980,
    stops: 0,
    type: "Economy",
  },
  {
    id: "12",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "17:30",
    arrivalTime: "19:55",
    duration: "2h 25m",
    price: 14670,
    stops: 0,
    type: "Economy",
  },
  {
    id: "13",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "18:10",
    arrivalTime: "20:25",
    duration: "2h 15m",
    price: 17390,
    stops: 0,
    type: "Premium Economy",
  },
  {
    id: "14",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "19:00",
    arrivalTime: "21:20",
    duration: "2h 20m",
    price: 11540,
    stops: 0,
    type: "Economy",
  },
  {
    id: "15",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "19:45",
    arrivalTime: "22:05",
    duration: "2h 20m",
    price: 10320,
    stops: 1,
    type: "Economy",
  },

  {
    id: "16",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "20:30",
    arrivalTime: "22:35",
    duration: "2h 5m",
    price: 12190,
    stops: 0,
    type: "Economy",
  },
  {
    id: "17",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "21:15",
    arrivalTime: "23:40",
    duration: "2h 25m",
    price: 14980,
    stops: 0,
    type: "Business",
  },
  {
    id: "18",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "22:00",
    arrivalTime: "00:20",
    duration: "2h 20m",
    price: 16210,
    stops: 0,
    type: "Premium Economy",
  },
  {
    id: "19",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "22:45",
    arrivalTime: "01:05",
    duration: "2h 20m",
    price: 10870,
    stops: 0,
    type: "Economy",
  },
  {
    id: "20",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "23:30",
    arrivalTime: "01:50",
    duration: "2h 20m",
    price: 9850,
    stops: 1,
    type: "Economy",
  },

  {
    id: "21",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "05:30",
    arrivalTime: "07:40",
    duration: "2h 10m",
    price: 11320,
    stops: 0,
    type: "Economy",
  },
  {
    id: "22",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "06:45",
    arrivalTime: "09:10",
    duration: "2h 25m",
    price: 13860,
    stops: 0,
    type: "Economy",
  },
  {
    id: "23",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "07:20",
    arrivalTime: "09:35",
    duration: "2h 15m",
    price: 15980,
    stops: 0,
    type: "Business",
  },
  {
    id: "24",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "08:10",
    arrivalTime: "10:25",
    duration: "2h 15m",
    price: 11190,
    stops: 0,
    type: "Economy",
  },
  {
    id: "25",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "09:00",
    arrivalTime: "11:20",
    duration: "2h 20m",
    price: 10240,
    stops: 0,
    type: "Economy",
  },
  {
    id: "1",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "06:10",
    arrivalTime: "08:10",
    duration: "2h",
    price: 11890,
    stops: 0,
    type: "Economy",
  },
  {
    id: "2",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "07:30",
    arrivalTime: "09:45",
    duration: "2h 15m",
    price: 13540,
    stops: 0,
    type: "Economy",
  },
  {
    id: "3",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "08:55",
    arrivalTime: "11:05",
    duration: "2h 10m",
    price: 15290,
    stops: 0,
    type: "Premium Economy",
  },
  {
    id: "4",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "09:40",
    arrivalTime: "11:50",
    duration: "2h 10m",
    price: 11020,
    stops: 0,
    type: "Economy",
  },
  {
    id: "5",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "10:25",
    arrivalTime: "12:45",
    duration: "2h 20m",
    price: 10480,
    stops: 0,
    type: "Economy",
  },

  {
    id: "6",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "11:15",
    arrivalTime: "13:25",
    duration: "2h 10m",
    price: 12460,
    stops: 0,
    type: "Economy",
  },
  {
    id: "7",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "12:40",
    arrivalTime: "15:10",
    duration: "2h 30m",
    price: 14210,
    stops: 1,
    type: "Economy",
  },
  {
    id: "8",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "13:55",
    arrivalTime: "16:05",
    duration: "2h 10m",
    price: 16840,
    stops: 0,
    type: "Business",
  },
  {
    id: "9",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "14:30",
    arrivalTime: "16:50",
    duration: "2h 20m",
    price: 10990,
    stops: 0,
    type: "Economy",
  },
  {
    id: "10",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "15:20",
    arrivalTime: "17:40",
    duration: "2h 20m",
    price: 10150,
    stops: 1,
    type: "Economy",
  },

  {
    id: "11",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "16:05",
    arrivalTime: "18:05",
    duration: "2h",
    price: 12980,
    stops: 0,
    type: "Economy",
  },
  {
    id: "12",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "17:30",
    arrivalTime: "19:55",
    duration: "2h 25m",
    price: 14670,
    stops: 0,
    type: "Economy",
  },
  {
    id: "13",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "18:10",
    arrivalTime: "20:25",
    duration: "2h 15m",
    price: 17390,
    stops: 0,
    type: "Premium Economy",
  },
  {
    id: "14",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "19:00",
    arrivalTime: "21:20",
    duration: "2h 20m",
    price: 11540,
    stops: 0,
    type: "Economy",
  },
  {
    id: "15",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "19:45",
    arrivalTime: "22:05",
    duration: "2h 20m",
    price: 10320,
    stops: 1,
    type: "Economy",
  },

  {
    id: "16",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "20:30",
    arrivalTime: "22:35",
    duration: "2h 5m",
    price: 12190,
    stops: 0,
    type: "Economy",
  },
  {
    id: "17",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "21:15",
    arrivalTime: "23:40",
    duration: "2h 25m",
    price: 14980,
    stops: 0,
    type: "Business",
  },
  {
    id: "18",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "22:00",
    arrivalTime: "00:20",
    duration: "2h 20m",
    price: 16210,
    stops: 0,
    type: "Premium Economy",
  },
  {
    id: "19",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "22:45",
    arrivalTime: "01:05",
    duration: "2h 20m",
    price: 10870,
    stops: 0,
    type: "Economy",
  },
  {
    id: "20",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "23:30",
    arrivalTime: "01:50",
    duration: "2h 20m",
    price: 9850,
    stops: 1,
    type: "Economy",
  },

  {
    id: "21",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "05:30",
    arrivalTime: "07:40",
    duration: "2h 10m",
    price: 11320,
    stops: 0,
    type: "Economy",
  },
  {
    id: "22",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "06:45",
    arrivalTime: "09:10",
    duration: "2h 25m",
    price: 13860,
    stops: 0,
    type: "Economy",
  },
  {
    id: "23",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "07:20",
    arrivalTime: "09:35",
    duration: "2h 15m",
    price: 15980,
    stops: 0,
    type: "Business",
  },
  {
    id: "24",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "08:10",
    arrivalTime: "10:25",
    duration: "2h 15m",
    price: 11190,
    stops: 0,
    type: "Economy",
  },
  {
    id: "25",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "09:00",
    arrivalTime: "11:20",
    duration: "2h 20m",
    price: 10240,
    stops: 0,
    type: "Economy",
  },
  {
    id: "1",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "06:10",
    arrivalTime: "08:10",
    duration: "2h",
    price: 11890,
    stops: 0,
    type: "Economy",
  },
  {
    id: "2",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "07:30",
    arrivalTime: "09:45",
    duration: "2h 15m",
    price: 13540,
    stops: 0,
    type: "Economy",
  },
  {
    id: "3",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "08:55",
    arrivalTime: "11:05",
    duration: "2h 10m",
    price: 15290,
    stops: 0,
    type: "Premium Economy",
  },
  {
    id: "4",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "09:40",
    arrivalTime: "11:50",
    duration: "2h 10m",
    price: 11020,
    stops: 0,
    type: "Economy",
  },
  {
    id: "5",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "10:25",
    arrivalTime: "12:45",
    duration: "2h 20m",
    price: 10480,
    stops: 0,
    type: "Economy",
  },

  {
    id: "6",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "11:15",
    arrivalTime: "13:25",
    duration: "2h 10m",
    price: 12460,
    stops: 0,
    type: "Economy",
  },
  {
    id: "7",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "12:40",
    arrivalTime: "15:10",
    duration: "2h 30m",
    price: 14210,
    stops: 1,
    type: "Economy",
  },
  {
    id: "8",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "13:55",
    arrivalTime: "16:05",
    duration: "2h 10m",
    price: 16840,
    stops: 0,
    type: "Business",
  },
  {
    id: "9",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "14:30",
    arrivalTime: "16:50",
    duration: "2h 20m",
    price: 10990,
    stops: 0,
    type: "Economy",
  },
  {
    id: "10",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "15:20",
    arrivalTime: "17:40",
    duration: "2h 20m",
    price: 10150,
    stops: 1,
    type: "Economy",
  },

  {
    id: "11",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "16:05",
    arrivalTime: "18:05",
    duration: "2h",
    price: 12980,
    stops: 0,
    type: "Economy",
  },
  {
    id: "12",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "17:30",
    arrivalTime: "19:55",
    duration: "2h 25m",
    price: 14670,
    stops: 0,
    type: "Economy",
  },
  {
    id: "13",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "18:10",
    arrivalTime: "20:25",
    duration: "2h 15m",
    price: 17390,
    stops: 0,
    type: "Premium Economy",
  },
  {
    id: "14",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "19:00",
    arrivalTime: "21:20",
    duration: "2h 20m",
    price: 11540,
    stops: 0,
    type: "Economy",
  },
  {
    id: "15",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "19:45",
    arrivalTime: "22:05",
    duration: "2h 20m",
    price: 10320,
    stops: 1,
    type: "Economy",
  },

  {
    id: "16",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "20:30",
    arrivalTime: "22:35",
    duration: "2h 5m",
    price: 12190,
    stops: 0,
    type: "Economy",
  },
  {
    id: "17",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "21:15",
    arrivalTime: "23:40",
    duration: "2h 25m",
    price: 14980,
    stops: 0,
    type: "Business",
  },
  {
    id: "18",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "22:00",
    arrivalTime: "00:20",
    duration: "2h 20m",
    price: 16210,
    stops: 0,
    type: "Premium Economy",
  },
  {
    id: "19",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "22:45",
    arrivalTime: "01:05",
    duration: "2h 20m",
    price: 10870,
    stops: 0,
    type: "Economy",
  },
  {
    id: "20",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "23:30",
    arrivalTime: "01:50",
    duration: "2h 20m",
    price: 9850,
    stops: 1,
    type: "Economy",
  },

  {
    id: "21",
    airline: "IndiGo",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/6E.png",
    departureTime: "05:30",
    arrivalTime: "07:40",
    duration: "2h 10m",
    price: 11320,
    stops: 0,
    type: "Economy",
  },
  {
    id: "22",
    airline: "Air India",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/AI.png",
    departureTime: "06:45",
    arrivalTime: "09:10",
    duration: "2h 25m",
    price: 13860,
    stops: 0,
    type: "Economy",
  },
  {
    id: "23",
    airline: "Vistara",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/UK.png",
    departureTime: "07:20",
    arrivalTime: "09:35",
    duration: "2h 15m",
    price: 15980,
    stops: 0,
    type: "Business",
  },
  {
    id: "24",
    airline: "Akasa Air",
    airlineLogo:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Akasa_Air_Logo.png",
    departureTime: "08:10",
    arrivalTime: "10:25",
    duration: "2h 15m",
    price: 11190,
    stops: 0,
    type: "Economy",
  },
  {
    id: "25",
    airline: "SpiceJet",
    airlineLogo: "https://r-xx.bstatic.com/data/airlines_logo/SG.png",
    departureTime: "09:00",
    arrivalTime: "11:20",
    duration: "2h 20m",
    price: 10240,
    stops: 0,
    type: "Economy",
  },
];

const AIRLINES = ["IndiGo", "Air India", "Vistara", "SpiceJet", "Go First"];
const STOP_TYPES = ["Direct only", "1 stop max", "2 stops max", "Any"];
const TIME_SLOTS = [
  { label: "Morning (5am–11am)", value: "morning" },
  { label: "Afternoon (11am–5pm)", value: "afternoon" },
  { label: "Evening (5pm–9pm)", value: "evening" },
  { label: "Night (9pm–5am)", value: "night" },
];

// Components
const BookingHeader = ({ currentStep, onStepClick }) => {
  const steps = [
    { label: "Choose your fare", step: "FARE_SELECTION" },
    { label: "Your details", step: "PASSENGER_DETAILS" },
    { label: "Extras", step: "SEAT_SELECTION" },
    { label: "Check and pay", step: "PAYMENT_REVIEW" },
  ];

  const getStepIndex = (step) => {
    switch (step) {
      case "FARE_SELECTION":
        return 0;
      case "PASSENGER_DETAILS":
        return 1;
      case "SEAT_SELECTION":
        return 2;
      case "PAYMENT_REVIEW":
        return 3;
      default:
        return -1;
    }
  };

  const currentIndex = getStepIndex(currentStep);

  return (
    <div className="booking-header">
      <div className="booking-header-container">
        <div className="booking-steps">
          <div className="booking-steps-line"></div>
          {steps.map((s, idx) => (
            <div key={s.step} className="booking-step-wrapper">
              <div
                className={`booking-step-circle ${
                  idx <= currentIndex ? "active" : ""
                }`}
              >
                {idx + 1}
              </div>
              <span
                className={`booking-step-label ${
                  idx <= currentIndex ? "active" : ""
                }`}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const FlightModal = ({ flight, onClose, onContinue }) => {
  return (
    <div className="flight-modal-overlay">
      <div className="flight-modal">
        <div className="flight-modal-header">
          <h3>Your flight to New Delhi</h3>
          <button onClick={onClose} className="flight-modal-close">
            ×
          </button>
        </div>

        <div className="flight-modal-content">
          <div className="flight-modal-details">
            <div>
              <div className="flight-modal-title">
                <h4>Flight to New Delhi</h4>
                <span>
                  {flight.duration} · {flight.type}
                </span>
                <button className="flight-share">🔗 Share this flight</button>
              </div>

              <div className="flight-timeline">
                <div className="flight-timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="flight-timeline-content">
                    <p>Sat, Jan 24 · 08:55 AM</p>
                    <p>
                      BOM · Chhatrapati Shivaji International Airport Mumbai
                    </p>
                  </div>
                  <div className="flight-airline">
                    <img src={flight.airlineLogo} alt={flight.airline} />
                    <p>{flight.airline} · Economy</p>
                  </div>
                </div>

                <div className="flight-duration-banner">
                  <span>⏱️</span>
                  <span>2h flight duration</span>
                </div>

                <div className="flight-timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="flight-timeline-content">
                    <p>Sat, Jan 24 · 10:55 AM</p>
                    <p>DEL · Indira Gandhi International Airport New Delhi</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flight-features">
              <div className="flight-feature">
                <h5>Included baggage</h5>
                <div className="feature-item">
                  <span></span>
                  <div>
                    <p>1 personal item</p>
                    <p>Must fit under the seat in front of you</p>
                  </div>
                  <span className="feature-tag">Included</span>
                </div>
                <div className="feature-item">
                  <span></span>
                  <div>
                    <p>1 cabin bag</p>
                    <p>25 × 35 × 55 cm · Max weight 7 kg</p>
                  </div>
                  <span className="feature-tag">Included</span>
                </div>
              </div>
              <div className="flight-feature">
                <h5> Fare rules</h5>
                <div className="feature-item">
                  <span></span>
                  <p>
                    You're allowed to change this flight, for a fee of INR 3,500
                    plus fare difference.
                  </p>
                </div>
                <div className="feature-item">
                  <span>💳</span>
                  <p>
                    Cancellations are allowed for a fee. Partial refunds apply
                    if cancelled 24h before.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flight-modal-footer">
          <div className="flight-price">
            <span>INR {flight.price.toLocaleString()}</span>
            <span>ⓘ</span>
          </div>
          <button onClick={onContinue} className="flight-continue-btn">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = ({ onSearch }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    //    {/* UI */}
    //       <div className="home">
    //         <div className="home-hero">
    //           <div className="home-hero-content">
    //             <h2>Compare and book cheap flights with ease</h2>
    //             <p>Discover your next dream destination</p>

    //             <div className="search-box">
    //               {/* TOP OPTIONS */}
    //               <div className="search-options">
    //                 <label>
    //                   <input type="radio" name="triptype" defaultChecked />
    //                   Round-trip
    //                 </label>
    //                 <label>
    //                   <input type="radio" name="triptype" />
    //                   One-way
    //                 </label>
    //                 <label>
    //                   <input type="radio" name="triptype" />
    //                   Multi-city
    //                 </label>

    //                 <select>
    //                   <option>Economy</option>
    //                   <option>Business</option>
    //                 </select>

    //                 <label>
    //                   <input type="checkbox" />
    //                   Direct flights only
    //                 </label>
    //               </div>

    //               {/* SEARCH FIELDS */}
    //               <div className="search-fields">
    //                 <div className="search-field">
    //                   <span className="icon">✈️</span>
    //                   <div>
    //                     <small>Leaving from</small>
    //                     <input defaultValue="Mumbai All airports" />
    //                   </div>
    //                 </div>

    //                 <div className="search-field">
    //                   <span className="icon">✈️</span>
    //                   <div>
    //                     <small>Going to</small>
    //                     <input placeholder="Where to?" />
    //                   </div>
    //                 </div>

    //                 <div className="search-field">
    //                   <span className="icon">📅</span>
    //                   <div>
    //                     <small>Travel dates</small>
    //                     <span className="static-text">
    //                       Sat, Jan 24, 2026 — Sat, Jan 31, 2026
    //                     </span>
    //                   </div>
    //                 </div>

    //                 <div className="search-field">
    //                   <span className="icon">👤</span>
    //                   <div>
    //                     <small>Travelers</small>
    //                     <span className="static-text">1 adult</span>
    //                   </div>
    //                 </div>

    //                 <button className="search-btn" onClick={onSearch}>
    //                   Search
    //                 </button>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //   )
    // }

    //     <style>{`
    //       .home {
    //         background: #003580;
    //         padding: 40px 0;
    //       }

    //       .home-hero-content {
    //         max-width: 1100px;
    //         margin: auto;
    //         color: white;
    //       }

    //       h2 {
    //         font-size: 36px;
    //         margin-bottom: 8px;
    //       }

    //       p {
    //         font-size: 18px;
    //         margin-bottom: 20px;
    //       }

    //       .search-box {
    //         background: #fff;
    //         padding: 16px;
    //         border-radius: 8px;
    //         color: #000;
    //       }

    //       .search-options {
    //         display: flex;
    //         align-items: center;
    //         gap: 16px;
    //         font-size: 14px;
    //         margin-bottom: 12px;
    //       }

    //       .search-options label {
    //         display: flex;
    //         align-items: center;
    //         gap: 6px;
    //       }

    //       .search-options select {
    //         padding: 6px;
    //       }

    //       .search-fields {
    //         display: grid;
    //         grid-template-columns: repeat(5, 1fr);
    //         gap: 8px;
    //         border: 2px solid #febb02;
    //         border-radius: 6px;
    //         padding: 6px;
    //       }

    //       .search-field {
    //         display: flex;
    //         align-items: center;
    //         gap: 8px;
    //         background: #fff;
    //         padding: 10px;
    //         border-right: 1px solid #ddd;
    //       }

    //       .search-field:last-child {
    //         border-right: none;
    //       }

    //       .icon {
    //         font-size: 18px;
    //       }

    //       small {
    //         font-size: 12px;
    //         color: #666;
    //       }

    //       input {
    //         border: none;
    //         outline: none;
    //         font-size: 14px;
    //       }

    //       .static-text {
    //         font-size: 14px;
    //       }

    //       .search-btn {
    //         background: #0071c2;
    //         color: white;
    //         border: none;
    //         padding: 12px;
    //         font-size: 16px;
    //         font-weight: 600;
    //         cursor: pointer;
    //       }

    //       .search-btn:hover {
    //         background: #005fa3;
    //       }
    //     `}
    // </style>
    // )
    //     }

    <div className="home">
      <div className="home-hero">
        <div className="home-hero-content">
          <h2>Compare and book cheap flights with ease</h2>
          <p>Discover your next dream destination</p>

          <div className="search-box">
            <div className="search-options">
              <label>
                <input type="radio" name="triptype" defaultChecked /> Round-trip
              </label>
              <label>
                <input type="radio" name="triptype" /> One-way
              </label>
              <label>
                <input type="radio" name="triptype" /> Multi-city
              </label>
              <select>
                <option>Economy</option>
                <option>Premium Economy</option>
                <option>Business</option>
                <option>First</option>
              </select>
              <label>
                <input type="checkbox" /> Direct flights only
              </label>
            </div>

            <div className="search-fields">
              <div className="search-field">
                <span>✈️</span>
                <div>
                  <span>Leaving from</span>
                  <input type="text" defaultValue="Mumbai All airports" />
                </div>
              </div>
              <div className="search-field">
                <span>✈️</span>
                <div>
                  <span>Going to</span>
                  <input type="text" placeholder="Where to?" />
                </div>
              </div>
              <div className="search-field">
                <span>📅</span>
                <div>
                  <span>Travel dates</span>
                  <span>Sat, Jan 24, 2026 — Sat, Jan 31, 2026</span>
                </div>
              </div>
              <div className="search-field">
                <span>👤</span>
                <div>
                  <span>Travelers</span>
                  <span>1 adult</span>
                </div>
              </div>
              <button onClick={onSearch} className="search-btn">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="home-content">
        <section>
          <h3>Continue where you left off</h3>
          <div className="recent-searches">
            <div onClick={onSearch} className="recent-search">
              <div className="recent-search-img">
                <img
                  src="https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80"
                  alt="Delhi"
                />
              </div>
              <div>
                <h4>Mumbai to Delhi International Airport</h4>
                <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
              </div>
            </div>
            <div onClick={onSearch} className="recent-search">
              <div className="recent-search-img">
                <img
                  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80"
                  alt="Hindon"
                />
              </div>
              <div>
                <h4>Mumbai to Hindon Airport</h4>
                <p>Jan 24 – Jan 31, 1 traveler, round trip</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h3>Explore Anywhere</h3>
          <div className="explore-map">
            <img
              src="https://th.bing.com/th/id/OIP.peOmoTa0t7_DR6R8xRcPXQHaE7?w=300&h=200&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
              alt="Map"
            />
            <div className="explore-map-center">
              <div></div>
            </div>
            {/* <button
              on
              click="https://www.bing.com/search?q=map++&form=ANNTH1&refig=6952434a3b744484b44ec5bcccc0e75d&pc=ASTS&ntref=1"
            >
              Open Map
            </button> */}

            <button
              onClick={() => window.open("https://www.bing.com/maps", "_blank")}
            >
              Open Map
            </button>
          </div>
        </section>

        <section className="countries-section">
          <div className="section-header">
            <div>
              <h3>Explore by country</h3>
              <p>Discover trending destinations, just a flight away</p>
            </div>
            <div className="scroll-controls">
              <button onClick={() => scroll("left")}>←</button>
              <button onClick={() => scroll("right")}>→</button>
            </div>
          </div>

          <div ref={scrollRef} className="countries-grid">
            {[
              {
                name: "United Kingdom",
                img: "https://q-xx.bstatic.com/xdata/images/xphoto/max1200/600014904.webp?k=01bb01e2860a240d860e09baf70ca23b5a250efd34f8e8c0f8307fe3e2d1d593&o=",
                flag: "🇬🇧",
              },
              {
                name: "India",
                img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=400&q=80",
                flag: "🇮🇳",
              },
              {
                name: "United Arab Emirates",
                img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977261.webp?k=6e056b414cda72f979d7227aff6f5cb43035a30555649dce0292bae146ba4d57&o=",
                flag: "🇦🇪",
              },
              {
                name: "Thailand",
                img: "https://lh3.googleusercontent.com/gps-cs-s/AG0ilSwDMjrGcf9Cmv-EkEvKbQ9ESXX5PvCfI1_oXFc6ABhB9J7myIDkQ9tlflPgs2SP7CmzioiS30DIbw-1Nx-vpPkNGVbYiIe6WljCqE_R1PElCfjC_3uUL8_urWVXDaY80JHCAu2g=w540-h312-n-k-no",
                flag: "🇹🇭",
              },
              {
                name: "Germany",
                img: "https://q-xx.bstatic.com/xdata/images/hotel/max280/640599705.jpg?k=0ca5eeb3a3ef34609e50ac7b528664ad8363ae7ce9ffa6d0eaa26543aa7f780b&o=",
                flag: "🇩🇪",
              },
              {
                name: "France",
                img: "https://q-xx.bstatic.com/xdata/images/xphoto/220x330/506981594.webp?k=5bd7bead268c8bbe9c8df5eeddcbfc82eb0a60f02f728defb43691ea8dda3f7f&o=",
                flag: "🇫🇷",
              },
            ].map((country) => (
              <div
                key={country.name}
                onClick={onSearch}
                className="country-card"
              >
                <img src={country.img} alt={country.name} />
                <div className="country-overlay"></div>
                <div className="country-info">
                  <div>
                    <span>{country.flag}</span>
                    <h4>{country.name}</h4>
                  </div>
                </div>
              </div>
            ))}
            <div className="country-card-all">
              <div>🌏</div>
              <div>Anywhere</div>
              <p>Explore all destinations</p>
            </div>
          </div>
        </section>

        <section>
          <h3>Popular flights near you</h3>
          <p>Find deals on domestic and international flights</p>
          <div className="flight-tabs">
            <button className="active">International</button>
            <button>Domestic</button>
          </div>
          <div className="popular-flights">
            {[
              {
                city: "London",
                date: "Jan 7 - Jan 15",
                img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977261.webp?k=6e056b414cda72f979d7227aff6f5cb43035a30555649dce0292bae146ba4d57&o=",
              },
              {
                city: "Dubai",
                date: "Dec 26 - Jan 28",
                img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977219.webp?k=eb68fc1a70f25a5ddca0f4ed69203b9a30ed5ae08d5923ffc045ef366c12229b&o=",
              },
              {
                city: "Bangkok",
                date: "Jan 1 - Jan 10",
                img: "https://q-xx.bstatic.com/xdata/images/city/526x420/977041.webp?k=b9211f418b65b777dafcce9bf0dcff4a453e9542757b9d06f0581c372738a6a2&o=",
              },
              {
                city: "Frankfurt",
                date: "Dec 24 - Jan 15",
                img: "https://www.booking.com/flights/route/city-to-city/in-bombay-to-in-hyderabad.html",
              },
              {
                city: "eonton",
                date: "Jan 7 - Jan 15",
                img: "https://q-xx.bstatic.com/xdata/images/city/64x64/684569.webp?k=5a54e1ff7cb10d54a2a7d74c4d1c3548dfd590b9ca7c1fb2272552b0741bd677&o=",
              },
              {
                city: "fuai",
                date: "Dec 26 - Jan 28",
                img: "https://th.bing.com/th/id/OIP.lU4mJMpegRkyRM_9wQn8IAHaE8?o=7&cb=ucfimg2&rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
              },
              {
                city: "Bangkok",
                date: "Jan 1 - Jan 10",
                img: "https://q-xx.bstatic.com/xdata/images/city/64x64/1000146.webp?k=3be6afb1e1f2595277f68a05a63fbfb4012b1d6dbf3a873ea452d1d52cdf03f3&o=",
              },
              {
                city: "Frankfurt",
                date: "Dec 24 - Jan 15",
                img: "https://flights.booking.com/fly-anywhere?toCountryCode=sg&aid=2311236&label=en-in-booking-desktop-SoQWfYhAMBURf0HSQntj1AS652796016141%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-334108349%3Alp9304059%3Ali%3Adec%3Adm",
              },
              {
                city: "onion",
                date: "Jan 7 - Jan 15",
                img: "https://flights.booking.com/fly-anywhere?toCountryCode=qa&aid=2311236&label=en-in-booking-desktop-SoQWfYhAMBURf0HSQntj1AS652796016141%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-334108349%3Alp9304059%3Ali%3Adec%3Adm",
              },
              {
                city: "ayipi",
                date: "Dec 26 - Jan 28",
                img: "https://flights.booking.com/fly-anywhere?toCountryCode=vn&aid=2311236&label=en-in-booking-desktop-SoQWfYhAMBURf0HSQntj1AS652796016141%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-334108349%3Alp9304059%3Ali%3Adec%3Adm",
              },
              {
                city: "Bangkok",
                date: "Jan 1 - Jan 10",
                img: "https://q-xx.bstatic.com/xdata/images/city/64x64/990510.webp?k=758f5daefa0d602bae1d507ec0b6055b448338d7f0517778f2c0366175f46d80&o=",
              },
              {
                city: "Frankfurt",
                date: "Dec 24 - Jan 15",
                img: "https://flights.booking.com/fly-anywhere?toCountryCode=mv&aid=2311236&label=en-in-booking-desktop-SoQWfYhAMBURf0HSQntj1AS652796016141%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-334108349%3Alp9304059%3Ali%3Adec%3Adm",
              },
            ].map((flight) => (
              <div key={flight.city} onClick={onSearch} className="flight-card">
                <img src={flight.img} alt={flight.city} />
                <div>
                  <h4>Mumbai to {flight.city}</h4>
                  <p>{flight.date} · Round trip</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="account-section">
          <div>
            <div className="account-icon">💎</div>
            <div>
              <h3>Your account, your travel</h3>
              <p>
                All your trip details in one place. Sign in to book faster and
                manage your trip with ease.
              </p>
              <div className="account-buttons">
                <button>Sign in</button>
                <button>Register</button>
              </div>
            </div>
          </div>
          <div className="genius-badge">
            <img
              src="https://cf.bstatic.com/static/img/genius/genius_loyalty_badge/9d201e74a81617498c4d23a10363234907a97217.png"
              alt="Genius"
            />
          </div>
        </section>

        <section className="features-section">
          <div className="feature">
            <span>🔍</span>
            <div>
              <h4>Search a huge selection</h4>
              <p>
                Easily compare flights, airlines, and prices - all in one place
              </p>
            </div>
          </div>
          <div className="feature">
            <span>💰</span>
            <div>
              <h4>Pay no hidden fees</h4>
              <p>Get a clear price breakdown every step of the way</p>
            </div>
          </div>
          <div className="feature">
            <span>✈️</span>
            <div>
              <h4>Get more flexibility</h4>
              <p>Change your travel dates with the Flexible ticket option*</p>
            </div>
          </div>
        </section>

        <section>
          <h3>Top flights from India</h3>
          <div className="route-tabs">
            {[
              "Popular routes",
              "Cities",
              "Countries",
              "Regions",
              "Airports",
            ].map((tab, i) => (
              <button key={tab} className={i === 0 ? "active" : ""}>
                {tab}
              </button>
            ))}
          </div>
          <div className="routes-grid">
            {POPULAR_ROUTES.map((route, idx) => (
              <div key={idx} onClick={onSearch} className="route-item">
                <img src={route.img} alt={`${route.from} to ${route.to}`} />
                <span>
                  {route.from} → {route.to}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="faq-section">
          <h3>Frequently asked questions</h3>
          <div className="faq-grid">
            {[
              "How do I find the cheapest flights on Booking.com?",
              "Can I book one-way flights on Booking.com?",
              "How far in advance can I book a flight?",
              "Do flights get cheaper closer to departure?",
              "What is a flexible ticket?",
              "Does Booking.com charge credit card fees?",
            ].map((q) => (
              <div key={q} className="faq-item">
                <span>{q}</span>
                <span>⌄</span>
              </div>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="footer-top">
            <div className="footer-section">
              <h4>Booking.com</h4>
              <p>Manage your trips</p>
              <p>Customer Service help</p>
              <p>Safety resource centre</p>
            </div>
            <div className="footer-section">
              <h4>Stream</h4>
              <p>Genius loyalty programme</p>
              <p>Seasonal and holiday deals</p>
              <p>Travel articles</p>
              <p>Booking.com for Business</p>
            </div>
            <div className="footer-section">
              <h4>Terms and settings</h4>
              <p>Privacy & cookies</p>
              <p>Terms and conditions</p>
              <p>Accessibility Statement</p>
              <p>Modern Slavery Statement</p>
            </div>
            <div className="footer-section">
              <h4>Partners</h4>
              <p>Investor relations</p>
              <p>List your property</p>
              <p>Become an affiliate</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © 1996-2025 booking.com™. All rights reserved.</p>
            <div className="footer-logo">Booking.com</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

const SearchResults = ({ onViewDetails }) => {
  const [selectedAirlines, setSelectedAirlines] = useState(AIRLINES);
  const [selectedStops, setSelectedStops] = useState("Any");
  const [maxPrice, setMaxPrice] = useState(30000);

  const filteredFlights = useMemo(() => {
    return MOCK_FLIGHTS.filter((flight) => {
      const airlineMatch = selectedAirlines.includes(flight.airline);
      const stopsMatch =
        selectedStops === "Any" ||
        (selectedStops === "Direct only" && flight.stops === 0) ||
        (selectedStops === "1 stop max" && flight.stops <= 1);
      const priceMatch = flight.price <= maxPrice;
      return airlineMatch && stopsMatch && priceMatch;
    });
  }, [selectedAirlines, selectedStops, maxPrice]);

  return (
    <div className="search-results">
      <div className="search-results-header">
        <div className="search-results-container">
          <div className="search-summary">
            <div className="search-summary-item">
              <span></span>
              <div>
                <div>Mumbai → Delhi</div>
                <div>Round trip • 1 traveler</div>
              </div>
            </div>
            <div className="search-summary-item">
              <span></span>
              <div>
                <div>Sat, Jan 24 - Sat, Jan 31</div>
                <div>Economy</div>
              </div>
            </div>
            <button className="edit-search-btn">Edit search</button>
          </div>
        </div>
      </div>

      <div className="search-results-content">
        <div className="filters-sidebar">
          <div className="filter-section">
            <div className="filter-header">
              <h3>Filters</h3>
              <button>Clear all</button>
            </div>

            <div className="filter-group">
              <h4>Search summary</h4>
              <p>
                Showing {filteredFlights.length} results for your trip to Delhi
              </p>
              <button>View summary</button>
            </div>

            <div className="filter-group">
              <h4>Stops</h4>
              {STOP_TYPES.map((stop) => (
                <label key={stop}>
                  <div>
                    <input
                      type="radio"
                      name="stops"
                      checked={selectedStops === stop}
                      onChange={() => setSelectedStops(stop)}
                    />
                    <span>{stop}</span>
                  </div>
                  <span>1996</span>
                </label>
              ))}
            </div>

            <div className="filter-group">
              <h4>Airlines</h4>
              {AIRLINES.map((airline) => (
                <label key={airline}>
                  <div>
                    <input
                      type="checkbox"
                      checked={selectedAirlines.includes(airline)}
                      onChange={() => {
                        setSelectedAirlines((prev) =>
                          prev.includes(airline)
                            ? prev.filter((a) => a !== airline)
                            : [...prev, airline]
                        );
                      }}
                    />
                    <span>{airline}</span>
                  </div>
                  <span>443</span>
                </label>
              ))}
              <button>Show all ⌄</button>
            </div>

            <div className="filter-group">
              <h4>Price range</h4>
              <input
                type="range"
                min="10000"
                max="30000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              />
              <div className="price-range">
                <span>INR 10,000</span>
                <span>INR {maxPrice.toLocaleString()}</span>
              </div>
            </div>

            <div className="filter-group">
              <h4>Flight times</h4>
              <div className="time-tabs">
                <button className="active">Departing</button>
                <button>Returning</button>
              </div>
              {TIME_SLOTS.map((slot) => (
                <label key={slot.label}>
                  <input type="checkbox" />
                  <span>{slot.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flights-main">
          <div className="sort-tabs">
            <button className="active">
              <span>Best</span>
              <span>The best combination</span>
            </button>
            <button>
              <span>Cheapest</span>
              <span>From INR 12,238</span>
            </button>
            <button>
              <span>Fastest</span>
              <span>From INR 13,389</span>
            </button>
          </div>

          <div className="price-alert">
            <div>
              <span>
                <img
                  src="https://t-cf.bstatic.com/design-assets/assets/v3.161.0/illustrations-traveller/FlightsSearch.png"
                  alt="Price Alert"
                />
              </span>
              <div>
                <p>We found better prices! Compare nearby dates.</p>
                <p>Actual prices shown in next step.</p>
              </div>
            </div>
            <div className="price-dates">
              {["Jan 5–Jan 12", "Jan 6–Jan 13", "Jan 7–Jan 14"].map((d, i) => (
                <div key={i}>
                  <p>{d}</p>
                  <p>INR 12,238</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flights-list">
            {filteredFlights.map((flight) => (
              <div key={flight.id} className="flight-card-result">
                <div className="flight-card-main">
                  <div className="flight-badges">
                    <span className="best-badge">Best</span>
                    <span className="flexible-badge">
                      Flexible ticket upgrade available
                    </span>
                  </div>

                  <div className="flight-details">
                    <div className="flight-airline-logo">
                      <img src={flight.airlineLogo} alt={flight.airline} />
                    </div>
                    <div className="flight-time">
                      <span>{flight.departureTime}</span>
                      <span>BOM · Jan 24</span>
                    </div>
                    <div className="flight-route">
                      <div className="flight-route-line">
                        <span className="route-dot"></span>
                        <div className="route-line">
                          <div
                            className={`route-stops ${
                              flight.stops === 0 ? "direct" : "stop"
                            }`}
                          >
                            {flight.stops === 0
                              ? "Direct"
                              : `${flight.stops} stop`}
                          </div>
                        </div>
                        <span className="route-dot"></span>
                      </div>
                      <span>{flight.duration}</span>
                    </div>
                    <div className="flight-time">
                      <span>{flight.arrivalTime}</span>
                      <span>DEL · Jan 24</span>
                    </div>
                  </div>

                  <div className="flight-footer">
                    <span>{flight.airline}</span>
                    <button>Explore ticket options ⌄</button>
                  </div>
                </div>

                <div className="flight-card-side">
                  <div>
                    <span className="fare-type">Saver</span>
                    <div className="flight-price-display">
                      <span>INR {flight.price.toLocaleString()}</span>
                      <span>ⓘ</span>
                    </div>
                    <p>Includes taxes and charges</p>
                  </div>

                  <button
                    onClick={() => onViewDetails(flight)}
                    className="view-details-btn"
                  >
                    View details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FareSelection = ({ flight, onContinue }) => {
  const FARES = [
    {
      name: "Eco Value",
      price: 14213,
      benefits: [
        "1 personal item",
        "1 cabin bag (7 kg)",
        "1 checked bag (15 kg)",
        "Flight change allowed for a fee",
        "Partial refund if you cancel",
        "Choose your own seats",
      ],
    },
    {
      name: "Eco Classic",
      price: 15885,
      popular: true,
      benefits: [
        "1 personal item",
        "1 cabin bag (7 kg)",
        "1 checked bag (20 kg)",
        "Flight change allowed for a fee",
        "Partial refund if you cancel",
        "Choose your own seats",
      ],
    },
    {
      name: "Eco Flex",
      price: 18027,
      benefits: [
        "1 personal item",
        "1 cabin bag (7 kg)",
        "1 checked bag (25 kg)",
        "Flight change allowed",
        "Partial refund if you cancel",
        "Choose your own seats",
      ],
    },
    {
      name: "Business Value",
      price: 67079,
      benefits: [
        "1 personal item",
        "1 cabin bag (10 kg)",
        "1 checked bag (30 kg)",
        "Flight change allowed for a fee",
        "Partial refund if you cancel",
        "Choose your own seats",
      ],
    },
  ];

  return (
    <div className="fare-selection">
      <div className="fare-selection-header">
        <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
        <h2>Mumbai to New Delhi</h2>
      </div>

      <div className="fare-selection-title">
        <h3>Choose your fare</h3>
        <button>‹ Back to results</button>
      </div>

      <div className="fares-grid">
        {FARES.map((fare) => (
          <div
            key={fare.name}
            className={`fare-card ${fare.popular ? "popular" : ""}`}
          >
            {fare.popular && (
              <div className="fare-popular-tag">Popular Choice</div>
            )}
            <div className="fare-card-content">
              <div className="fare-header">
                <h4>{fare.name}</h4>
                <span>ⓘ</span>
              </div>
              <p>Total price INR {fare.price.toLocaleString()}</p>

              <div className="fare-benefits-title">Included in this fare:</div>
              <div className="fare-benefits">
                {fare.benefits.map((benefit, i) => (
                  <div key={i} className="fare-benefit">
                    <span>
                      {benefit.includes("personal")
                        ? "👜"
                        : benefit.includes("cabin")
                        ? "🎒"
                        : benefit.includes("checked")
                        ? "🧳"
                        : benefit.includes("change")
                        ? "🔄"
                        : benefit.includes("refund")
                        ? "💰"
                        : "💺"}
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onContinue(fare.name)}
                className="fare-select-btn"
              >
                Continue
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="fare-warning">
        <span>⚠️</span>
        <p>
          Flight changes: if your new flight costs more than the original one,
          you'll need to pay the fare difference.
        </p>
      </div>
    </div>
  );
};

const PassengerDetails = ({ onContinue }) => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  return (
    <div className="passenger-details">
      <div className="passenger-container">
        <div className="passenger-main">
          <div className="passenger-header">
            <p>Round trip · 1 traveler · Sat, Jan 24 - Sat, Jan 31</p>
            <h2>Mumbai to New Delhi</h2>
          </div>

          <h3>Fill in your details</h3>

          <div className="passenger-card">
            <div className="passenger-card-header">
              <div className="passenger-icon">👤</div>
              <h3>Adult 1</h3>
            </div>

            <div className="passenger-card-content">
              <button className="add-details-btn">
                Add this traveler's details
              </button>

              <div className="baggage-info">
                <div className="baggage-item">
                  <span>👜</span>
                  <div>
                    <p>1 personal item</p>
                    <p className="included-tag">Included</p>
                    <p>Fits under the seat in front of you</p>
                  </div>
                </div>
                <div className="baggage-item">
                  <span>🧳</span>
                  <div>
                    <p>1 cabin bag</p>
                    <p className="included-tag">Included</p>
                    <p>25 × 35 × 55 cm · 7 kg</p>
                  </div>
                </div>
                <div className="baggage-item">
                  <span>🏢</span>
                  <div>
                    <p>1 checked bag</p>
                    <p className="included-tag">Included</p>
                    <p>Max weight 15 kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-card">
            <h3>Contact details</h3>
            <p>* Required</p>
            <div className="contact-form">
              <div className="form-group">
                <label>Contact email *</label>
                <input
                  type="email"
                  value={details.email}
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setDetails((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <p>We'll send your flight confirmation here</p>
              </div>
              <div className="form-group">
                <label>Phone number *</label>
                <div className="phone-input">
                  <button className="country-code">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                      alt="India"
                    />
                    <span>+91</span>
                    <span>⌄</span>
                  </button>
                  <input
                    type="tel"
                    value={details.phone}
                    placeholder="000 000 0000"
                    onChange={(e) =>
                      setDetails((prev) => ({ ...prev, phone: e.target.value }))
                    }
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <div>
              <span>🧳</span>
              <div>
                <h4>Good to know</h4>
                <p>Special or oversized baggage policies</p>
              </div>
            </div>
            <span>›</span>
          </div>

          <div className="passenger-navigation">
            <button>‹ Back</button>
            <button onClick={() => onContinue(details)} className="next-btn">
              Next
            </button>
          </div>
        </div>

        <div className="passenger-sidebar">
          <div className="price-summary">
            <h4>Price details</h4>
            <div className="price-breakdown">
              <div className="price-item">
                <span>Flight</span>
                <span>
                  INR 13,470.98 <span>⌄</span>
                </span>
              </div>
              <div className="price-subitem">
                <span>Adult (1)</span>
                <span>INR 13,470.98</span>
              </div>
            </div>
            <div className="price-total">
              <span>Total</span>
              <div>
                <p>INR 13,470.98</p>
                <p>Includes taxes and charges</p>
              </div>
            </div>

            <div className="price-guarantee">
              <div>
                <span>✓</span>
                <span>No hidden fees - track your price at every step</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SeatSelection = ({ onContinue }) => {
  return (
    <div className="seat-selection">
      <div className="seat-container">
        <h2>Select your seat</h2>

        <div className="seat-content">
          <div className="seat-main">
            <div className="seat-card">
              <div className="seat-card-header">
                <div>
                  <h4>Mumbai to New Delhi</h4>
                  <p>2h · IndiGo</p>
                </div>
                <span>⌄</span>
              </div>
              <div className="seat-not-selected">
                <span>💺</span>
                <p>No seat selected</p>
              </div>
              <button className="select-seat-btn">
                Select a seat from INR 0.00 →
              </button>
            </div>

            <div className="seat-card disabled">
              <div className="seat-card-header">
                <div>
                  <h4>New Delhi to Mumbai</h4>
                  <p>2h 15m · IndiGo</p>
                </div>
                <span>⌄</span>
              </div>
              <div className="seat-not-selected">
                <span>💺</span>
                <p>No seat selected</p>
              </div>
              <button disabled>Select a seat from INR 0.00</button>
            </div>
          </div>

          <div className="seat-sidebar">
            <div className="seat-price-summary">
              <h4>Price details</h4>
              <div className="seat-price-breakdown">
                <div className="seat-price-item">
                  <span>Flight</span>
                  <span>
                    INR 13,470.98 <span>⌄</span>
                  </span>
                </div>
              </div>
              <div className="seat-price-total">
                <span>Total</span>
                <div>
                  <p>INR 13,470.98</p>
                  <p>Includes taxes and charges</p>
                </div>
              </div>

              <div className="seat-actions">
                <button onClick={onContinue} className="skip-seat-btn">
                  Skip seat selection
                </button>
                <button className="back-btn">‹ Back</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentReview = ({ onPay }) => {
  return (
    <div className="payment-review">
      <div className="payment-container">
        <div className="payment-main">
          <h2>Check and pay</h2>

          <div className="payment-card">
            <div className="payment-flight">
              <div className="flight-info">
                <div className="flight-logo">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
                    alt="Indigo"
                  />
                </div>
                <div>
                  <h4>Mumbai (BOM) to New Delhi (DEL)</h4>
                  <p>
                    Sat, Jan 24 · 08:55 AM - 10:55 AM · Direct · 2h · Economy
                  </p>
                </div>
                <button>View flight details</button>
              </div>

              <div className="payment-flight-return">
                <div className="flight-logo">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/IndiGo_Airlines_logo.svg/2560px-IndiGo_Airlines_logo.svg.png"
                    alt="Indigo"
                  />
                </div>
                <div>
                  <h4>New Delhi (DEL) to Mumbai (BOM)</h4>
                  <p>
                    Sat, Jan 31 · 11:45 AM - 02:00 PM · Direct · 2h 15m ·
                    Economy
                  </p>
                </div>
                <button>View flight details</button>
              </div>
            </div>
          </div>

          <div className="payment-card">
            <h3>Contact details</h3>
            <p>Primary Contact</p>
            <div className="contact-details">
              <p>DUSHYANT MART</p>
              <p>+91 9910444525</p>
              <p>dushyantfurnituremart@gmail.com</p>
            </div>
          </div>

          <div className="payment-card">
            <h3>Traveller details</h3>
            <div className="traveller-details">
              <span>👤</span>
              <div>
                <p>DUSHYANT MART</p>
                <p>Adult · Male</p>
              </div>
            </div>
          </div>

          <div className="payment-card">
            <div className="payment-method-header">
              <h3>Your payment</h3>
              <p>Simple, safe and secure.</p>
            </div>
            <div className="payment-method-content">
              <div className="payment-options">
                <label>How would you like to pay?</label>
                <div className="payment-methods">
                  {["MasterCard", "Visa", "Amex", "Discover", "UPI"].map(
                    (p) => (
                      <div key={p} className="payment-method">
                        <div className="card-icon"></div>
                        <span>{p}</span>
                      </div>
                    )
                  )}
                </div>

                <div className="card-details">
                  <div className="card-form-group">
                    <label>Cardholder's Name *</label>
                    <input type="text" defaultValue="DUSHYANT MART" />
                  </div>
                  <div className="card-form-group">
                    <label>Card Number *</label>
                    <div className="card-input">
                      <input type="text" placeholder="0000 0000 0000 0000" />
                      <span>💳</span>
                    </div>
                  </div>
                  <div className="card-form-row">
                    <div className="card-form-group">
                      <label>Expiry Date *</label>
                      <input type="text" placeholder="MM / YY" />
                    </div>
                    <div className="card-form-group">
                      <label>CVC *</label>
                      <div className="card-input">
                        <input type="text" placeholder="123" />
                        <span>ⓘ</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="payment-terms">
                <p>
                  By clicking "Pay now" you agree with the{" "}
                  <span>terms and conditions</span> and{" "}
                  <span>privacy policies</span> of Booking.com, Gotogate
                  International AB, IndiGo and with the <span>fare rules</span>.
                </p>

                <div className="payment-actions">
                  <button>‹ Back</button>
                  <button onClick={onPay} className="pay-now-btn">
                    <span>🔒</span> Pay now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-sidebar">
          <div className="payment-summary">
            <h4>Price details</h4>
            <div className="payment-breakdown">
              <div className="payment-item">
                <span>Flight</span>
                <span>
                  INR 13,470.98 <span>⌄</span>
                </span>
              </div>
              <div className="payment-subitem">
                <span>Adult (1)</span>
                <span>INR 13,470.98</span>
              </div>
            </div>
            <div className="payment-total">
              <span>Total</span>
              <div>
                <p>INR 13,470.98</p>
                <p>Includes taxes and charges</p>
              </div>
            </div>

            <div className="payment-guarantee">
              <div>
                <span>✓</span>
                <span>No hidden fees — here's what you'll pay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const FlightsApp = () => {
  const [currentStep, setCurrentStep] = useState("HOME");
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [showFlightModal, setShowFlightModal] = useState(false);

  const handleSearch = () => {
    setCurrentStep("SEARCH_RESULTS");
  };

  const handleViewFlightDetails = (flight) => {
    setSelectedFlight(flight);
    setShowFlightModal(true);
  };

  const handleContinueFromModal = () => {
    setShowFlightModal(false);
    setCurrentStep("FARE_SELECTION");
  };

  const handleSelectFare = (fare) => {
    setCurrentStep("PASSENGER_DETAILS");
  };

  const handlePassengerDetails = (details) => {
    setCurrentStep("SEAT_SELECTION");
  };

  const handleSeatSelection = () => {
    setCurrentStep("PAYMENT_REVIEW");
  };

  const handlePayment = () => {
    alert("Payment successful! Booking confirmed.");
    setCurrentStep("HOME");
  };

  return (
    <div className="flights-app">
      {currentStep !== "HOME" && currentStep !== "SEARCH_RESULTS" && (
        <BookingHeader currentStep={currentStep} onStepClick={setCurrentStep} />
      )}

      {currentStep === "HOME" && <Home onSearch={handleSearch} />}

      {currentStep === "SEARCH_RESULTS" && (
        <SearchResults onViewDetails={handleViewFlightDetails} />
      )}

      {currentStep === "FARE_SELECTION" && selectedFlight && (
        <FareSelection flight={selectedFlight} onContinue={handleSelectFare} />
      )}

      {currentStep === "PASSENGER_DETAILS" && (
        <PassengerDetails onContinue={handlePassengerDetails} />
      )}

      {currentStep === "SEAT_SELECTION" && (
        <SeatSelection onContinue={handleSeatSelection} />
      )}

      {currentStep === "PAYMENT_REVIEW" && (
        <PaymentReview onPay={handlePayment} />
      )}

      {showFlightModal && selectedFlight && (
        <FlightModal
          flight={selectedFlight}
          onClose={() => setShowFlightModal(false)}
          onContinue={handleContinueFromModal}
        />
      )}
    </div>
  );
};

export default FlightsApp;
