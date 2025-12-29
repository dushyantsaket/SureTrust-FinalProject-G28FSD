// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

// export default function SearchBox() {
//   const navigate = useNavigate();

//   const [city, setCity] = useState("");
//   const [checkIn, setCheckIn] = useState("");
//   const [checkOut, setCheckOut] = useState("");
//   const [guests, setGuests] = useState("2 adults · 0 children · 1 room");
//   const [activeField, setActiveField] = useState("destination");

//   const handleSearch = () => {
//     navigate(
//       `/search-results?city=${city}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
//     );
//   };

//   const popularDestinations = [
//     { name: "New Delhi", country: "India", properties: "3,514 properties" },
//     { name: "Bengaluru", country: "India", properties: "3,098 properties" },
//     { name: "Mumbai", country: "India", properties: "1,853 properties" },
//     { name: "Chennai", country: India, properties: "1,214 properties" },
//     { name: "Hyderabad", country: "India", properties: "1,794 properties" },
//   ];

//   return (
//     <>
//       <style jsx>{`
//         .search-section {
//           background: linear-gradient(to right, #1a4fa0, #003580);
//           color: white;
//           padding: 2rem 1rem 4rem;
//           position: relative;
//         }

//         .container {
//           max-width: 1200px;
//           margin: 0 auto;
//         }

//         .section-title {
//           font-size: 2.5rem;
//           font-weight: 700;
//           margin-bottom: 0.5rem;
//           text-align: center;
//         }

//         .section-subtitle {
//           text-align: center;
//           font-size: 1.1rem;
//           opacity: 0.9;
//           margin-bottom: 2.5rem;
//         }

//         /* Main Search Box */
//         .search-container {
//           background: white;
//           border-radius: 12px;
//           padding: 1.5rem;
//           box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
//           margin-bottom: 3rem;
//         }

//         .search-fields {
//           display: grid;
//           grid-template-columns: 2fr 1fr 1fr 1fr auto;
//           gap: 1rem;
//           align-items: stretch;
//         }

//         .search-field {
//           position: relative;
//           cursor: pointer;
//         }

//         .search-field.active {
//           background: #f0f8ff;
//           border-radius: 8px;
//         }

//         .field-label {
//           display: block;
//           font-size: 0.8rem;
//           color: #666;
//           font-weight: 600;
//           margin-bottom: 0.25rem;
//           padding-left: 0.75rem;
//           padding-top: 0.75rem;
//         }

//         .field-input {
//           width: 100%;
//           padding: 0.75rem;
//           border: none;
//           background: transparent;
//           font-size: 1rem;
//           color: #333;
//           outline: none;
//           cursor: pointer;
//         }

//         .field-input::placeholder {
//           color: #999;
//         }

//         .search-divider {
//           width: 1px;
//           background: #e0e0e0;
//           margin: 1rem 0;
//         }

//         /* Popular Destinations */
//         .popular-destinations {
//           margin-top: 1.5rem;
//         }

//         .popular-title {
//           font-size: 0.9rem;
//           color: #666;
//           font-weight: 600;
//           margin-bottom: 1rem;
//         }

//         .destinations-grid {
//           display: grid;
//           grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
//           gap: 1rem;
//         }

//         .destination-item {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 0.75rem;
//           border-radius: 8px;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//         }

//         .destination-item:hover {
//           background: #f5f5f5;
//         }

//         .destination-flag {
//           font-size: 1.5rem;
//         }

//         .destination-info h4 {
//           margin: 0;
//           font-size: 0.95rem;
//           color: #333;
//           font-weight: 600;
//         }

//         .destination-info p {
//           margin: 0.25rem 0 0;
//           font-size: 0.8rem;
//           color: #666;
//         }

//         /* Search Button */
//         .search-button {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           background: #ff5a5f;
//           color: white;
//           border: none;
//           border-radius: 8px;
//           padding: 0 2rem;
//           font-size: 1.1rem;
//           font-weight: 600;
//           cursor: pointer;
//           transition: background-color 0.2s ease;
//           min-width: 140px;
//         }

//         .search-button:hover {
//           background: #ff3b40;
//         }

//         /* Recent Searches */
//         .recent-searches {
//           background: white;
//           border-radius: 8px;
//           padding: 1.5rem;
//           box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
//           margin-top: 2rem;
//         }

//         .recent-title {
//           font-size: 1rem;
//           color: #333;
//           font-weight: 600;
//           margin-bottom: 1rem;
//         }

//         .recent-item {
//           display: flex;
//           align-items: center;
//           gap: 1rem;
//           padding: 1rem;
//           border-radius: 8px;
//           border: 1px solid #e0e0e0;
//           margin-bottom: 0.75rem;
//           cursor: pointer;
//           transition: all 0.2s ease;
//         }

//         .recent-item:hover {
//           border-color: #0071c2;
//           background: #f0f8ff;
//         }

//         .recent-icon {
//           color: #0071c2;
//           font-size: 1.2rem;
//         }

//         .recent-info h4 {
//           margin: 0;
//           font-size: 0.95rem;
//           color: #333;
//           font-weight: 600;
//         }

//         .recent-info p {
//           margin: 0.25rem 0 0;
//           font-size: 0.85rem;
//           color: #666;
//         }

//         /* Responsive Design */
//         @media (max-width: 1024px) {
//           .search-fields {
//             grid-template-columns: 1fr;
//             gap: 0.5rem;
//           }

//           .search-divider {
//             display: none;
//           }

//           .search-field {
//             border: 1px solid #e0e0e0;
//             border-radius: 8px;
//             padding: 0.5rem;
//           }

//           .search-button {
//             margin-top: 1rem;
//             height: 48px;
//           }
//         }

//         @media (max-width: 768px) {
//           .section-title {
//             font-size: 2rem;
//           }

//           .section-subtitle {
//             font-size: 1rem;
//           }

//           .destinations-grid {
//             grid-template-columns: 1fr;
//           }

//           .search-container {
//             padding: 1rem;
//           }
//         }

//         @media (max-width: 480px) {
//           .search-section {
//             padding: 1.5rem 1rem 3rem;
//           }

//           .section-title {
//             font-size: 1.75rem;
//           }

//           .recent-searches {
//             padding: 1rem;
//           }
//         }
//       `}</style>

//       <section className="search-section">
//         <div className="container">
//           <h1 className="section-title">Find your next stay</h1>
//           <p className="section-subtitle">
//             Search low prices on hotels, homes and much more...
//           </p>

//           {/* Main Search Box */}
//           <div className="search-container">
//             <div className="search-fields">
//               {/* Destination Field */}
//               <div
//                 className={`search-field ${
//                   activeField === "destination" ? "active" : ""
//                 }`}
//                 onClick={() => setActiveField("destination")}
//               >
//                 <span className="field-label">Destination/property name</span>
//                 <input
//                   type="text"
//                   className="field-input"
//                   placeholder="Where are you going?"
//                   value={city}
//                   onChange={(e) => setCity(e.target.value)}
//                   onFocus={() => setActiveField("destination")}
//                 />
//               </div>

//               {/* Check-in Date */}
//               <div
//                 className={`search-field ${
//                   activeField === "checkin" ? "active" : ""
//                 }`}
//                 onClick={() => setActiveField("checkin")}
//               >
//                 <span className="field-label">Check-in date</span>
//                 <input
//                   type="date"
//                   className="field-input"
//                   value={checkIn}
//                   onChange={(e) => setCheckIn(e.target.value)}
//                   onFocus={() => setActiveField("checkin")}
//                 />
//               </div>

//               {/* Check-out Date */}
//               <div
//                 className={`search-field ${
//                   activeField === "checkout" ? "active" : ""
//                 }`}
//                 onClick={() => setActiveField("checkout")}
//               >
//                 <span className="field-label">Check-out date</span>
//                 <input
//                   type="date"
//                   className="field-input"
//                   value={checkOut}
//                   onChange={(e) => setCheckOut(e.target.value)}
//                   onFocus={() => setActiveField("checkout")}
//                 />
//               </div>

//               {/* Guests Field */}
//               <div
//                 className={`search-field ${
//                   activeField === "guests" ? "active" : ""
//                 }`}
//                 onClick={() => setActiveField("guests")}
//               >
//                 <span className="field-label">Travellers</span>
//                 <input
//                   type="text"
//                   className="field-input"
//                   placeholder="2 adults · 0 children · 1 room"
//                   value={guests}
//                   onChange={(e) => setGuests(e.target.value)}
//                   onFocus={() => setActiveField("guests")}
//                 />
//               </div>

//               {/* Search Button */}
//               <button className="search-button" onClick={handleSearch}>
//                 Search
//               </button>
//             </div>

//             {/* Popular Destinations */}
//             <div className="popular-destinations">
//               <h3 className="popular-title">Trending destinations</h3>
//               <div className="destinations-grid">
//                 {popularDestinations.map((dest, index) => (
//                   <div
//                     key={index}
//                     className="destination-item"
//                     onClick={() => setCity(dest.name)}
//                   >
//                     <span className="destination-flag">🇮🇳</span>
//                     <div className="destination-info">
//                       <h4>{dest.name}</h4>
//                       <p>{dest.properties}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Recent Searches */}
//           <div className="recent-searches">
//             <h3 className="recent-title">Your recent searches</h3>
//             <div className="recent-item">
//               <span className="recent-icon">📍</span>
//               <div className="recent-info">
//                 <h4>Reigner Girazabad</h4>
//                 <p>Wed 14 Jan – Wed 21 Jan · 1 traveller</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const navigate = useNavigate();

  const [city, setCity] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 adults - 0 children - 1 room");

  const handleSearch = () => {
    navigate(
      `/search-results?city=${city}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`
    );
  };

  const popularDestinations = [
    { name: "New Delhi", country: "India", properties: "3,514 properties" },
    { name: "Bengaluru", country: "India", properties: "3,098 properties" },
    { name: "Mumbai", country: "India", properties: "1,853 properties" },
    { name: "Chennai", country: "India", properties: "1,214 properties" },
    { name: "Hyderabad", country: "India", properties: "1,794 properties" },
  ];

  return (
    <>
      <style jsx>{`
        .search-section {
          background: white;
          color: #3d25d6ff;
          padding: 2rem 1rem 3rem;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #dfceceff;
          text-align: left;
        }

        .section-subtitle {
          text-align: left;
          font-size: 1rem;
          color: #666;
          margin-bottom: 2rem;
        }

        /* Main Search Box */
        .search-container {
          background: #f2f6fa;
          border-radius: 12px;
          padding: 1.5rem;
          margin-bottom: 3rem;
          border: 1px solid #e0e0e0;
        }

        .search-fields {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr auto;
          gap: 1rem;
          align-items: end;
        }

        .search-field {
          display: flex;
          flex-direction: column;
        }

        .field-label {
          font-size: 0.85rem;
          color: #f3f3f3ff;
          font-weight: 500;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .field-label .checkbox {
          width: 18px;
          height: 18px;
          border: 2px solid #666;
          border-radius: 3px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .field-label .checkbox.checked::after {
          content: "✓";
          color: #0071c2;
          font-weight: bold;
        }

        .field-input {
          width: 100%;
          padding: 0.875rem 1rem;
          border: 2px solid #d1d9e6;
          border-radius: 8px;
          font-size: 1rem;
          color: #333;
          outline: none;
          transition: border-color 0.2s ease;
          background: white;
        }

        .field-input:hover {
          border-color: #a6b5d0;
        }

        .field-input:focus {
          border-color: #0071c2;
          box-shadow: 0 0 0 3px rgba(193, 204, 212, 0.1);
        }

        .field-input::placeholder {
          color: #999;
        }

        .city-input {
          background: white
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23666' viewBox='0 0 16 16'%3E%3Cpath d='M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z'/%3E%3Cpath d='M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'/%3E%3C/svg%3E")
            no-repeat right 1rem center;
          background-size: 16px;
          padding-right: 2.5rem;
        }

        .date-input {
          background: white
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23666' viewBox='0 0 16 16'%3E%3Cpath d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z'/%3E%3Cpath d='M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z'/%3E%3C/svg%3E")
            no-repeat right 1rem center;
          background-size: 16px;
          padding-right: 2.5rem;
        }

        .guests-input {
          background: white
            url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23666' viewBox='0 0 16 16'%3E%3Cpath d='M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0 4z'/%3E%3C/svg%3E")
            no-repeat right 1rem center;
          background-size: 16px;
          padding-right: 2.5rem;
        }

        /* Search Button */
        .search-button {
          background: #0071c2;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 0.875rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s ease;
          white-space: nowrap;
          height: fit-content;
        }

        .search-button:hover {
          background: #005fa3;
        }

        /* Recent Searches */
        .recent-searches {
          margin-top: 2.5rem;
        }

        .recent-title {
          font-size: 1.1rem;
          color: #fffbfbff;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .recent-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .recent-item:hover {
          border-color: #0071c2;
          background: #f0f8ff;
        }

        .recent-icon {
          color: #0071c2;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
        }

        .recent-info h4 {
          margin: 0;
          font-size: 0.95rem;
          color: #333;
          font-weight: 600;
        }

        .recent-info p {
          margin: 0.25rem 0 0;
          font-size: 0.85rem;
          color: #666;
        }

        /* Popular Destinations */
        .popular-destinations {
          margin-top: 3rem;
        }

        .popular-title {
          font-size: 1.1rem;
          color: #333;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .destinations-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 1rem;
        }

        .destination-item {
          padding: 0.75rem;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .destination-item:hover {
          border-color: #0071c2;
          background: #f0f8ff;
        }

        .destination-info h4 {
          margin: 0;
          font-size: 0.95rem;
          color: #333;
          font-weight: 600;
        }

        .destination-info p {
          margin: 0.25rem 0 0;
          font-size: 0.8rem;
          color: #666;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .search-fields {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .search-button {
            width: 100%;
            padding: 1rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 768px) {
          .search-section {
            padding: 1.5rem 1rem 2rem;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .section-subtitle {
            font-size: 0.95rem;
          }

          .destinations-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .search-container {
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 1.5rem;
          }

          .destinations-grid {
            grid-template-columns: 1fr;
          }

          .search-fields {
            gap: 0.75rem;
          }

          .field-input {
            padding: 0.75rem;
          }

          .recent-item {
            padding: 0.75rem;
          }
        }
      `}</style>

      <section className="search-section">
        <div className="container">
          <h1 className="section-title">Find your next stay</h1>
          <p className="section-subtitle">
            Search low prices on hotels, homes and much more...
          </p>

          {/* Main Search Box */}
          <div className="search-container">
            <div className="search-fields">
              {/* Destination Field */}
              <div className="search-field">
                <label className="field-label">
                  <span className="checkbox"></span>
                  Where to?
                </label>
                <input
                  type="text"
                  className="field-input city-input"
                  placeholder="Madurai"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>

              {/* Dates Field */}
              <div className="search-field">
                <label className="field-label">
                  <span className="checkbox checked"></span>
                  Dates
                </label>
                <input
                  type="text"
                  className="field-input date-input"
                  placeholder="Check-in date — Check-out date"
                  value={checkIn && checkOut ? `${checkIn} — ${checkOut}` : ""}
                  onFocus={() => {
                    // You can implement a date picker here
                    setCheckIn("Wed 14 Jan");
                    setCheckOut("Wed 21 Jan");
                  }}
                />
              </div>

              {/* Guests Field */}
              <div className="search-field">
                <label className="field-label">
                  <span className="checkbox"></span>
                  Travellers
                </label>
                <input
                  type="text"
                  className="field-input guests-input"
                  placeholder="2 adults - 0 children - 1 room"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>

              {/* Search Button */}
              <button className="search-button" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          {/* Recent Searches */}
          <div className="recent-searches">
            <h3 className="recent-title">Your recent searches</h3>
            <div
              className="recent-item"
              onClick={() => {
                setCity("Reigner Girazabad");
                setCheckIn("Wed 14 Jan");
                setCheckOut("Wed 21 Jan");
                setGuests("1 traveller");
              }}
            >
              <span className="recent-icon">📍</span>
              <div className="recent-info">
                <h4>Reigner Girazabad · RPR + HDO</h4>
                <p>Wed 14 Jan – Wed 21 Jan · 1 traveller</p>
              </div>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="popular-destinations">
            <h3 className="popular-title">Trending destinations</h3>
            <div className="destinations-grid">
              {popularDestinations.map((dest, index) => (
                <div
                  key={index}
                  className="destination-item"
                  onClick={() => setCity(dest.name)}
                >
                  <div className="destination-info">
                    <h4>{dest.name}</h4>
                    <p>{dest.properties}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
