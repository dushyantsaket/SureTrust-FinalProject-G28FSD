// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const NAV_ITEMS = [
//   // { key: "stays", label: "Stays", path: "/" },
//   // { key: "flights", label: "Flights", path: "/search?tab=flights" },
//   // {
//   //   key: "flight-hotel",
//   //   label: "Flight + Hotel",
//   //   path: "/flight-hotel",
//   // },
//   // { key: "car", label: "Car rental", path: "/Car-rental" },
//   // // { key: "Attractions", label: "Attractions", path: "/Attractions" },
//   // { key: "attractions", label: "Attractions", path: "/attractions" },
//   // { key: "taxis", label: "Airport taxis", path: "/airport-taxis" },
//   { key: "stays", label: "Stays", path: "/" },
//   { key: "flights", label: "Flights", path: "/search?tab=flights" },
//   { key: "flight-hotel", label: "Flight + Hotel", path: "/flight-hotel" },
//   { key: "car", label: "Car rental", path: "/car-rental" },
//   { key: "attractions", label: "Attractions", path: "/attractions" },
//   { key: "taxis", label: "Airport taxis", path: "/airport-taxis" },
// ];

// const Header = () => {
//   const [activeTab, setActiveTab] = useState("stays");
//   const navigate = useNavigate();

//   const handleNavClick = (item) => {
//     setActiveTab(item.key);
//     navigate(item.path);
//   };

//   return (
//     <header className="site-header">
//       <div className="header-bar">
//         <div className="container header-top">
//           <Link className="brand" to="/">
//             Booking.com
//           </Link>
//           <div className="header-actions">
//             <button className="ghost-btn">INR</button>
//             <button className="ghost-btn">
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/16022/16022214.png"
//                 alt="india"
//                 style={{ width: 20, height: 20 }}
//               ></img>
//             </button>
//             <Link className="ghost-btn" to="/help">
//               Help
//             </Link>
//             <Link className="ghost-btn" to="/list-property">
//               List your property
//             </Link>
//             <button className="ghost-btn">Register</button>
//             <button className="filled-btn">Sign in</button>
//           </div>
//         </div>
//       </div>

//       <div className="nav-bar">
//         <div className="container nav-content">
//           <div className="nav-pills">
//             {NAV_ITEMS.map((item) => (
//               <button
//                 key={item.key}
//                 className={`nav-pill ${activeTab === item.key ? "active" : ""}`}
//                 onClick={() => handleNavClick(item)}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </div>

//           <div className="secondary-links">
//             <Link to="/offers">Offers</Link>
//             <Link to="/explore-india">Explore India</Link>
//             <Link to="/properties">Properties</Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

// import React from "react";
// import { Link, NavLink } from "react-router-dom";
// // import "./Style.css";
// import "./Header.css";

// const NAV_ITEMS = [
//   { label: "Stays", path: "/" },
//   { label: "Flights", path: "/search?tab=flights" },
//   { label: "Flight + Hotel", path: "/flight-hotel" },
//   { label: "Car rental", path: "/car-rental" },
//   { label: "Attractions", path: "/attractions" },
//   { label: "Airport taxis", path: "/airport-taxis" },
// ];

// const Header = () => {
//   return (
//     <header className="site-header">
//       {/* Top bar */}
//       <div className="header-bar">
//         <div className="container header-top">
//           <Link className="brand" to="/">
//             Booking.com
//           </Link>

//           <div className="header-actions">
//             <button className="ghost-btn">INR</button>

//             <Link
//               className="ghost-btn"
//               to="/country-selection"
//               style={{
//                 cursor: "pointer",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <img
//                 src="https://cdn-icons-png.flaticon.com/128/16022/16022214.png"
//                 alt="India"
//                 style={{ width: 20, height: 20 }}
//               />
//             </Link>

//             <Link className="ghost-btn" to="/help">
//               Help
//             </Link>
//             <Link className="ghost-btn" to="/list-property">
//               List your property
//             </Link>
//             <Link className="ghost-btn" to="/register">
//               Register
//             </Link>
//             <Link className="filled-btn" to="/login">
//               Sign in
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Navigation */}
//       <div className="nav-bar">
//         <div className="container nav-content">
//           <div className="nav-pills">
//             {NAV_ITEMS.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 className={({ isActive }) =>
//                   `nav-pill ${isActive ? "active" : ""}`
//                 }
//               >
//                 {item.label}
//               </NavLink>
//             ))}
//           </div>

//           <div className="secondary-links">
//             <Link to="/offers">Offers</Link>
//             <Link to="/explore-india">Explore India</Link>
//             <Link to="/properties">Properties</Link>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const NAV_ITEMS = [
  { label: "Stays", path: "/" },
  { label: "Flights", path: "/flights" },
  { label: "Flight + Hotel", path: "/flights-hotel" },
  { label: "Car rental", path: "/car-rental" },
  { label: "Attractions", path: "/attractions" },
  { label: "Airport taxis", path: "/airport-taxis" },
];

const Header = () => {
  return (
    <header className="site-header">
      {/* Top bar - first blue section */}
      <div className="header-top-bar">
        <div className="container">
          <div className="header-top-content">
            <Link className="brand" to="/">
              booking.com
            </Link>

            <div className="header-right-actions">
              {/* Language/Currency selector */}
              <div className="currency-selector">
                <select className="currency-dropdown">
                  <option value="INR">INR</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                </select>
              </div>

              {/* Country flag */}
              <button className="country-btn">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India"
                  className="flag-icon"
                />
                <span className="country-name">India</span>
              </button>

              {/* Help link */}
              <Link className="help-link" to="/help">
                Need help?
              </Link>

              {/* Property listing */}
              <Link className="property-link" to="/properties">
                List your property
              </Link>

              {/* Auth buttons */}
              <div className="auth-buttons">
                <Link className="register-btn" to="/register">
                  Register
                </Link>
                <Link className="signin-btn" to="/login">
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar - second blue section */}
      <div className="nav-bar">
        <div className="container">
          <div className="nav-content">
            <div className="nav-main-pills">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `nav-pill ${isActive ? "active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Additional links */}
            <div className="nav-secondary-links">
              <Link to="/offers" className="secondary-link">
                <span className="offer-badge">🎁</span> Offers
              </Link>
              <Link to="/explore-india" className="secondary-link">
                Explore India
              </Link>
              <Link to="/properties" className="secondary-link">
                Properties
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
