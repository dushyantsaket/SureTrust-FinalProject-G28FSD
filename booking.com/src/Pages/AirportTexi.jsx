// // AirportTaxi.jsx
// import React, { useState } from "react";
// import "./AirportTexi.css"; // 假设有对应的CSS文件

// const AirportTaxi = () => {
//   const [pickupLocation, setPickupLocation] = useState("");
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [returnTrip, setReturnTrip] = useState(false);
//   const [passengerCount, setPassengerCount] = useState("1-3");
//   const [selectedVehicle, setSelectedVehicle] = useState("standard");

//   // 车辆类型数据
//   const vehicleTypes = [
//     {
//       id: "standard",
//       name: "Standard",
//       description: "Skoda Octavia or similar",
//       passengers: 3,
//       bags: 2,
//       features: ["Meet & Greet included", "Free cancellation"],
//       price: "€45.00",
//     },
//     {
//       id: "executive",
//       name: "Executive",
//       description: "Mercedes-Benz E-Class or similar",
//       passengers: 3,
//       bags: 2,
//       features: ["Meet & Greet included", "Free cancellation"],
//       price: "€65.00",
//     },
//   ];

//   // FAQ数据
//   const faqs = [
//     {
//       question: "What happens if my flight is early or delayed?",
//       answer:
//         "Our Meet & Greet service means that if you provide your flight number when booking, we'll track your flight and adjust your pick-up time automatically. Your driver will wait for 45 minutes after your flight arrives.",
//     },
//     {
//       question: "What's included in the price?",
//       answer:
//         "Our prices include all taxes, fees, gratuity and toll road charges. Airport pick-ups include Meet & Greet as standard.",
//     },
//     {
//       question: "How do I pay?",
//       answer:
//         "All services are pre-paid online at the time of booking. We accept most major credit cards, debit cards, and PayPal.",
//     },
//     {
//       question: "Can I cancel my booking?",
//       answer:
//         "Yes. You can cancel for free up to 24 hours before your scheduled pick-up time.",
//     },
//   ];

//   const handleSearch = (e) => {
//     e.preventDefault();
//     console.log("Searching with:", {
//       pickupLocation,
//       destination,
//       date,
//       returnTrip,
//       passengerCount,
//     });
//     // 这里可以添加实际的搜索逻辑
//   };

//   return (
//     <div className="airport-taxi-container">
//       {/* 主标题和搜索表单 */}
//       <section className="hero-section">
//         <h1>Book your airport taxi</h1>
//         <p className="subtitle">
//           Easy airport transfers to and from your accommodation
//         </p>

//         <form onSubmit={handleSearch} className="search-form">
//           <div className="form-row">
//             <div className="form-group">
//               <label htmlFor="pickup">Pickup location</label>
//               <input
//                 type="text"
//                 id="pickup"
//                 placeholder="Enter airport or address"
//                 value={pickupLocation}
//                 onChange={(e) => setPickupLocation(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="destination">Destination</label>
//               <input
//                 type="text"
//                 id="destination"
//                 placeholder="Enter hotel or address"
//                 value={destination}
//                 onChange={(e) => setDestination(e.target.value)}
//                 required
//               />
//             </div>

//             <div className="form-group">
//               <label htmlFor="date">Date</label>
//               <input
//                 type="date"
//                 id="date"
//                 value={date}
//                 onChange={(e) => setDate(e.target.value)}
//                 required
//               />
//             </div>
//           </div>

//           <div className="form-options">
//             <label className="checkbox-label">
//               <input
//                 type="checkbox"
//                 checked={returnTrip}
//                 onChange={(e) => setReturnTrip(e.target.checked)}
//               />
//               Add a return
//             </label>

//             <label className="checkbox-label">
//               <input type="checkbox" />
//               Flight tracking (provide flight number)
//             </label>
//           </div>

//           <button type="submit" className="search-button">
//             Search
//           </button>
//         </form>
//       </section>

//       {/* 服务特色 */}
//       <section className="features-section">
//         <h2>Reasons to book airport taxis with us</h2>
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon">✈️</div>
//             <h3>Flight tracking</h3>
//             <p>
//               Your driver tracks your flight and waits for you if it's delayed
//             </p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">💰</div>
//             <h3>One clear price</h3>
//             <p>
//               Your price is confirmed upfront – no extra costs, no cash required
//             </p>
//           </div>

//           <div className="feature-card">
//             <div className="feature-icon">👨‍✈️</div>
//             <h3>Tried and trusted</h3>
//             <p>We work with professional drivers and have 24/7 customer care</p>
//           </div>
//         </div>
//       </section>

//       {/* 流程说明 */}
//       <section className="process-section">
//         <h2>Airport transfers made easy</h2>
//         <div className="process-steps">
//           <div className="step">
//             <div className="step-number">1</div>
//             <h3>Booking your airport taxi</h3>
//             <p>
//               Confirmation is immediate. Cancel for free up to 24 hours before
//               pick-up
//             </p>
//           </div>

//           <div className="step">
//             <div className="step-number">2</div>
//             <h3>Meeting your driver</h3>
//             <p>
//               You'll be met on arrival. Driver tracks your flight if delayed
//             </p>
//           </div>

//           <div className="step">
//             <div className="step-number">3</div>
//             <h3>Arriving at your destination</h3>
//             <p>
//               Get to your destination quickly and safely – no waiting in line
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* 车辆选择 */}
//       <section className="vehicles-section">
//         <h2>Airport taxis for any kind of trip</h2>

//         <div className="passenger-filter">
//           <label>Sort results by:</label>
//           <div className="filter-buttons">
//             {["1-3 passengers", "4-7 passengers", "All taxis"].map((option) => (
//               <button
//                 key={option}
//                 className={`filter-btn ${
//                   passengerCount === option.split(" ")[0] ? "active" : ""
//                 }`}
//                 onClick={() => setPassengerCount(option.split(" ")[0])}
//               >
//                 {option}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="vehicles-grid">
//           {vehicleTypes.map((vehicle) => (
//             <div
//               key={vehicle.id}
//               className={`vehicle-card ${
//                 selectedVehicle === vehicle.id ? "selected" : ""
//               }`}
//               onClick={() => setSelectedVehicle(vehicle.id)}
//             >
//               <h3>{vehicle.name}</h3>
//               <p className="vehicle-description">{vehicle.description}</p>

//               <div className="vehicle-specs">
//                 <div className="spec">
//                   <span>👤</span>
//                   <span>{vehicle.passengers} passengers</span>
//                 </div>
//                 <div className="spec">
//                   <span>🎒</span>
//                   <span>{vehicle.bags} standard bags</span>
//                 </div>
//                 {vehicle.features.map((feature, index) => (
//                   <div key={index} className="spec">
//                     <span>✓</span>
//                     <span>{feature}</span>
//                   </div>
//                 ))}
//               </div>

//               <div className="vehicle-price">
//                 <span className="price">from {vehicle.price}</span>
//                 <button className="select-btn">Select</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FAQ */}
//       <section className="faq-section">
//         <h2>Find out more about our airport taxi service</h2>
//         <p>See more FAQs on our help page</p>

//         <div className="faq-list">
//           {faqs.map((faq, index) => (
//             <div key={index} className="faq-item">
//               <h3>{faq.question}</h3>
//               <p>{faq.answer}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* 页脚 */}
//       <footer className="footer">
//         <div className="footer-columns">
//           <div className="footer-column">
//             <h4>Support</h4>
//             <ul>
//               <li>
//                 <a href="/help">Help center</a>
//               </li>
//               <li>
//                 <a href="/safety">Safety resource center</a>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <h4>Terms and settings</h4>
//             <ul>
//               <li>
//                 <a href="/privacy">Privacy & cookies</a>
//               </li>
//               <li>
//                 <a href="/terms">Terms of service</a>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-column">
//             <h4>About</h4>
//             <ul>
//               <li>
//                 <a href="/about">About us</a>
//               </li>
//               <li>
//                 <a href="/how-we-work">How we work</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default AirportTaxi;

// AirportTaxi.jsx
import React, { useState } from "react";
import "./AirportTexi.css"; // Fixed filename from "AirportTexi.css"

const AirportTaxi = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [returnTrip, setReturnTrip] = useState(false);
  const [passengerCount, setPassengerCount] = useState("1-3");
  const [selectedVehicle, setSelectedVehicle] = useState("standard");

  // 车辆类型数据
  const vehicleTypes = [
    {
      id: "standard",
      name: "Standard",
      description: "Skoda Octavia or similar",
      passengers: 3,
      bags: 2,
      features: ["Meet & Greet included", "Free cancellation"],
      price: "€45.00",
    },
    {
      id: "executive",
      name: "Executive",
      description: "Mercedes-Benz E-Class or similar",
      passengers: 3,
      bags: 2,
      features: ["Meet & Greet included", "Free cancellation"],
      price: "€65.00",
    },
  ];

  // FAQ数据
  const faqs = [
    {
      question: "What happens if my flight is early or delayed?",
      answer:
        "Our Meet & Greet service means that if you provide your flight number when booking, we'll track your flight and adjust your pick-up time automatically. Your driver will wait for 45 minutes after your flight arrives.",
    },
    {
      question: "What's included in the price?",
      answer:
        "Our prices include all taxes, fees, gratuity and toll road charges. Airport pick-ups include Meet & Greet as standard.",
    },
    {
      question: "How do I pay?",
      answer:
        "All services are pre-paid online at the time of booking. We accept most major credit cards, debit cards, and PayPal.",
    },
    {
      question: "Can I cancel my booking?",
      answer:
        "Yes. You can cancel for free up to 24 hours before your scheduled pick-up time.",
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching with:", {
      pickupLocation,
      destination,
      date,
      returnTrip,
      passengerCount,
    });
    // 这里可以添加实际的搜索逻辑
  };

  return (
    <div className="airport-taxi-container" data-bui-theme="traveller_ex-light">
      {/* 主标题和搜索表单 */}
      <section className="hero-section">
        <h1>Book your airport taxi</h1>
        <p className="subtitle">
          Easy airport transfers to and from your accommodation
        </p>

        <form onSubmit={handleSearch} className="search-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="pickup">Pickup location</label>
              <input
                type="text"
                id="pickup"
                placeholder="Enter airport or address"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                placeholder="Enter hotel or address"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={returnTrip}
                onChange={(e) => setReturnTrip(e.target.checked)}
              />
              Add a return
            </label>

            <label className="checkbox-label">
              <input type="checkbox" />
              Flight tracking (provide flight number)
            </label>
          </div>

          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </section>

      {/* 服务特色 */}
      <section className="features-section">
        <h2>Reasons to book airport taxis with us</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">✈️</div>
            <h3>Flight tracking</h3>
            <p>
              Your driver tracks your flight and waits for you if it's delayed
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">💰</div>
            <h3>One clear price</h3>
            <p>
              Your price is confirmed upfront – no extra costs, no cash required
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">👨‍✈️</div>
            <h3>Tried and trusted</h3>
            <p>We work with professional drivers and have 24/7 customer care</p>
          </div>
        </div>
      </section>

      {/* 流程说明 */}
      <section className="process-section">
        <h2>Airport transfers made easy</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Booking your airport taxi</h3>
            <p>
              Confirmation is immediate. Cancel for free up to 24 hours before
              pick-up
            </p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Meeting your driver</h3>
            <p>
              You'll be met on arrival. Driver tracks your flight if delayed
            </p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Arriving at your destination</h3>
            <p>
              Get to your destination quickly and safely – no waiting in line
            </p>
          </div>
        </div>
      </section>

      {/* 车辆选择 */}
      <section className="vehicles-section">
        <h2>Airport taxis for any kind of trip</h2>

        <div className="passenger-filter">
          <label>Sort results by:</label>
          <div className="filter-buttons">
            {["1-3 passengers", "4-7 passengers", "All taxis"].map((option) => (
              <button
                key={option}
                type="button"
                className={`filter-btn ${
                  passengerCount === option.split(" ")[0] ? "active" : ""
                }`}
                onClick={() => setPassengerCount(option.split(" ")[0])}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="vehicles-grid">
          {vehicleTypes.map((vehicle) => (
            <div
              key={vehicle.id}
              className={`vehicle-card ${
                selectedVehicle === vehicle.id ? "selected" : ""
              }`}
              onClick={() => setSelectedVehicle(vehicle.id)}
            >
              <h3>{vehicle.name}</h3>
              <p className="vehicle-description">{vehicle.description}</p>

              <div className="vehicle-specs">
                <div className="spec">
                  <span>👤</span>
                  <span>{vehicle.passengers} passengers</span>
                </div>
                <div className="spec">
                  <span>🎒</span>
                  <span>{vehicle.bags} standard bags</span>
                </div>
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="spec">
                    <span>✓</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="vehicle-price">
                <span className="price">from {vehicle.price}</span>
                <button type="button" className="select-btn">
                  Select
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2>Find out more about our airport taxi service</h2>
        <p>See more FAQs on our help page</p>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq-item">
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 页脚 */}
      <footer className="footer">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="/help">Help center</a>
              </li>
              <li>
                <a href="/safety">Safety resource center</a>
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
                <a href="/terms">Terms of service</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>
                <a href="/about">About us</a>
              </li>
              <li>
                <a href="/how-we-work">How we work</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AirportTaxi;
