// import React, { useState } from "react";
// // import React from "react";
// import "./Attractive1.css";
// import { Routes } from "react-router-dom";

// // ==================== TYPES ====================
// const ViewType = {
//   ATTRACTIONS: "attractions",
//   ATTRACTION_DETAIL: "attraction_detail",
//   FLIGHTS: "flights",
//   FLIGHT_RESULTS: "flight_results",
//   USER_DETAILS: "user_details",
//   PAYMENT: "payment",
//   BOOKING_SUCCESS: "booking_success",
// };

// // ==================== DATA ====================
// const ATTRACTIONS = [
//   {
//     id: 1,
//     name: "The Beatles Story Experience",
//     location: "Liverpool",
//     description:
//       "Immerse yourself in the world of The Beatles at this award-winning attraction. Explore the Fab Four's story from humble beginnings to global stardom through interactive exhibits and authentic memorabilia.",
//     price: 2499,
//     rating: 4.8,
//     reviewsCount: 3450,
//     duration: "2-3 hours",
//     images: [
//       "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=400&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?w=400&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&auto=format&fit=crop",
//     ],
//     highlights: [
//       "Interactive audio guide in multiple languages",
//       "See John Lennon's iconic round glasses",
//       "Replica of the Cavern Club stage",
//       "Exclusive interviews with Paul McCartney",
//       "Virtual reality Beatles concert experience",
//     ],
//     includes: [
//       "Entry ticket to all exhibition areas",
//       "Multilingual audio guide",
//       "Complimentary cloakroom",
//       "Free WiFi throughout the venue",
//       "Digital souvenir photo (optional)",
//     ],
//   },
//   {
//     id: 2,
//     name: "Liverpool Football Club Stadium Tour",
//     location: "Liverpool",
//     description:
//       'Walk in the footsteps of legends at Anfield Stadium. Explore the home of Liverpool FC with access to player areas, museum, and the famous "This Is Anfield" sign.',
//     price: 3299,
//     rating: 4.9,
//     reviewsCount: 5210,
//     duration: "3-4 hours",
//     images: [
//       "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=800&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1511204579483-e5c2b1d69acd?w=400&auto=format&fit=crop",
//       "https://images.unsplash.com/photo-1543321269-9d86d3680e1c?w=400&auto=format&fit=crop",
//     ],
//     highlights: [
//       "Walk through the player's tunnel",
//       "Visit the home dressing room",
//       "See the Champions League trophies",
//       "Interactive video presentations",
//       "Press room experience",
//     ],
//     includes: [
//       "Guided stadium tour",
//       "Museum entry",
//       "Official LFC gift shop discount",
//       "Audio guide in 8 languages",
//       "Complimentary matchday programme",
//     ],
//   },
// ];

// const FLIGHTS = [
//   {
//     id: 1,
//     airline: "Air India",
//     departure: "08:30",
//     arrival: "14:45",
//     duration: "9h 15m",
//     stops: 0,
//     class: "Economy",
//     price: 42500,
//   },
//   {
//     id: 2,
//     airline: "British Airways",
//     departure: "11:15",
//     arrival: "17:30",
//     duration: "9h 15m",
//     stops: 0,
//     class: "Economy",
//     price: 48900,
//   },
//   {
//     id: 3,
//     airline: "Emirates",
//     departure: "02:45",
//     arrival: "12:15",
//     duration: "12h 30m",
//     stops: 1,
//     class: "Economy",
//     price: 38500,
//   },
// ];

// // ==================== STYLES ====================
// const styles = `
//   /* Reset & Base Styles */
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   body {
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
//     background-color: #f8f9fa;
//     color: #333;
//   }

//   /* Layout */
//   .app-container {
//     min-height: 100vh;
//     display: flex;
//     flex-direction: column;
//   }

//   .main-content {
//     flex: 1;
//     padding: 20px;
//     max-width: 1400px;
//     margin: 0 auto;
//     width: 100%;
//   }

//   .container {
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
//   }

//   /* Header */
//   .header {
//     background: linear-gradient(135deg, #003580 0%, #0052ad 100%);
//     color: white;
//     position: sticky;
//     top: 0;
//     z-index: 100;
//     box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
//   }

//   .header-top {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     padding: 15px 20px;
//   }

//   .logo {
//     font-size: 1.8rem;
//     font-weight: 800;
//     cursor: pointer;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     letter-spacing: -0.5px;
//   }

//   .logo i {
//     font-size: 1.6rem;
//   }

//   .header-actions {
//     display: flex;
//     align-items: center;
//     gap: 20px;
//   }

//   .header-btn {
//     background: white;
//     color: #003580;
//     border: none;
//     padding: 8px 20px;
//     border-radius: 6px;
//     font-weight: 600;
//     cursor: pointer;
//     transition: all 0.2s ease;
//   }

//   .header-btn:hover {
//     background: #f0f0f0;
//     transform: translateY(-1px);
//   }

//   /* Navigation Tabs */
//   .nav-tabs {
//     display: flex;
//     gap: 5px;
//     padding: 0 20px 10px;
//     overflow-x: auto;
//     scrollbar-width: none;
//   }

//   .nav-tabs::-webkit-scrollbar {
//     display: none;
//   }

//   .nav-tab {
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     padding: 12px 24px;
//     border-radius: 30px;
//     border: 2px solid transparent;
//     background: transparent;
//     color: white;
//     cursor: pointer;
//     white-space: nowrap;
//     font-weight: 600;
//     transition: all 0.3s ease;
//   }

//   .nav-tab:hover {
//     background: rgba(255, 255, 255, 0.1);
//     transform: translateY(-1px);
//   }

//   .nav-tab.active {
//     background: rgba(255, 255, 255, 0.15);
//     border-color: white;
//     box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//   }

//   /* Buttons */
//   .btn {
//     padding: 12px 24px;
//     border-radius: 8px;
//     font-weight: 600;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     border: none;
//     display: inline-flex;
//     align-items: center;
//     justify-content: center;
//     gap: 10px;
//     font-size: 15px;
//   }

//   .btn-primary {
//     background: linear-gradient(135deg, #006ce4 0%, #0052ad 100%);
//     color: white;
//     box-shadow: 0 4px 15px rgba(0, 108, 228, 0.2);
//   }

//   .btn-primary:hover {
//     transform: translateY(-2px);
//     box-shadow: 0 6px 20px rgba(0, 108, 228, 0.3);
//   }

//   .btn-secondary {
//     background: white;
//     color: #006ce4;
//     border: 2px solid #006ce4;
//   }

//   .btn-secondary:hover {
//     background: #f0f7ff;
//     transform: translateY(-2px);
//   }

//   .btn-disabled {
//     background: #e0e0e0;
//     color: #999;
//     cursor: not-allowed;
//     box-shadow: none;
//   }

//   .btn-disabled:hover {
//     transform: none;
//   }

//   /* Cards */
//   .card {
//     background: white;
//     border-radius: 16px;
//     box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//     overflow: hidden;
//     transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1);
//   }

//   .card:hover {
//     transform: translateY(-5px);
//     box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
//   }

//   /* Gallery Grid */
//   .gallery-grid {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     grid-template-rows: repeat(2, 200px);
//     gap: 12px;
//     margin-bottom: 40px;
//     border-radius: 16px;
//     overflow: hidden;
//   }

//   .gallery-main {
//     grid-column: span 2;
//     grid-row: span 2;
//   }

//   .gallery-item {
//     position: relative;
//     overflow: hidden;
//     border-radius: 8px;
//   }

//   .gallery-item img {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//     transition: transform 0.5s ease;
//   }

//   .gallery-item:hover img {
//     transform: scale(1.05);
//   }

//   /* Forms */
//   .form-group {
//     margin-bottom: 25px;
//   }

//   .form-label {
//     display: block;
//     margin-bottom: 10px;
//     font-weight: 600;
//     font-size: 14px;
//     color: #555;
//   }

//   .form-input {
//     width: 100%;
//     padding: 14px;
//     border: 2px solid #e0e0e0;
//     border-radius: 10px;
//     font-size: 16px;
//     transition: all 0.3s ease;
//     background: #fff;
//   }

//   .form-input:focus {
//     outline: none;
//     border-color: #006ce4;
//     box-shadow: 0 0 0 4px rgba(0, 108, 228, 0.1);
//   }

//   /* Ticket Counter */
//   .ticket-counter {
//     display: flex;
//     align-items: center;
//     gap: 20px;
//   }

//   .counter-btn {
//     width: 36px;
//     height: 36px;
//     border-radius: 50%;
//     border: 2px solid #006ce4;
//     background: white;
//     color: #006ce4;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     cursor: pointer;
//     font-size: 14px;
//     transition: all 0.2s ease;
//   }

//   .counter-btn:hover {
//     background: #006ce4;
//     color: white;
//     transform: scale(1.1);
//   }

//   .counter-value {
//     min-width: 30px;
//     text-align: center;
//     font-weight: 700;
//     font-size: 18px;
//     color: #333;
//   }

//   /* Footer */
//   .footer {
//     background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
//     color: white;
//     padding: 60px 0 40px;
//     margin-top: 80px;
//   }

//   .footer-grid {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
//     gap: 40px;
//     max-width: 1200px;
//     margin: 0 auto;
//     padding: 0 20px;
//   }

//   .footer-section h4 {
//     margin-bottom: 25px;
//     font-size: 18px;
//     font-weight: 700;
//     color: #fff;
//   }

//   .footer-section ul {
//     list-style: none;
//   }

//   .footer-section li {
//     margin-bottom: 15px;
//     color: #bbb;
//     font-size: 15px;
//     cursor: pointer;
//     transition: all 0.3s ease;
//     padding: 5px 0;
//   }

//   .footer-section li:hover {
//     color: white;
//     transform: translateX(5px);
//   }

//   /* Utility Classes */
//   .flex { display: flex; }
//   .flex-col { flex-direction: column; }
//   .items-center { align-items: center; }
//   .justify-between { justify-content: space-between; }
//   .gap-2 { gap: 8px; }
//   .gap-4 { gap: 16px; }
//   .gap-6 { gap: 24px; }
//   .mb-2 { margin-bottom: 8px; }
//   .mb-4 { margin-bottom: 16px; }
//   .mb-6 { margin-bottom: 24px; }
//   .mb-8 { margin-bottom: 32px; }
//   .mt-4 { margin-top: 16px; }
//   .mt-6 { margin-top: 24px; }
//   .mt-8 { margin-top: 32px; }
//   .text-center { text-align: center; }
//   .text-right { text-align: right; }
//   .font-bold { font-weight: 600; }
//   .font-extrabold { font-weight: 700; }
//   .text-sm { font-size: 14px; }
//   .text-base { font-size: 16px; }
//   .text-lg { font-size: 18px; }
//   .text-xl { font-size: 20px; }
//   .text-2xl { font-size: 24px; }
//   .text-3xl { font-size: 30px; }
//   .text-4xl { font-size: 36px; }
//   .text-gray-500 { color: #666; }
//   .text-gray-600 { color: #555; }
//   .text-blue-600 { color: #006ce4; }
//   .text-green-600 { color: #00a854; }
//   .text-red-500 { color: #ff4d4f; }
//   .text-white { color: white; }
//   .bg-blue-50 { background: #f0f7ff; }
//   .bg-green-50 { background: #f6ffed; }
//   .rounded-lg { border-radius: 12px; }
//   .rounded-xl { border-radius: 16px; }
//   .rounded-2xl { border-radius: 20px; }
//   .shadow-sm { box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
//   .shadow-md { box-shadow: 0 4px 20px rgba(0,0,0,0.12); }
//   .shadow-lg { box-shadow: 0 10px 30px rgba(0,0,0,0.15); }
//   .border { border: 1px solid #e0e0e0; }
//   .border-2 { border-width: 2px; }
//   .border-t { border-top: 1px solid #e0e0e0; }
//   .border-b { border-bottom: 1px solid #e0e0e0; }
//   .w-full { width: 100%; }
//   .h-full { height: 100%; }
//   .cursor-pointer { cursor: pointer; }
//   .transition-all { transition: all 0.3s ease; }
//   .hover\\:scale-105:hover { transform: scale(1.05); }
//   .hover\\:shadow-xl:hover { box-shadow: 0 20px 40px rgba(0,0,0,0.2); }

//   /* Animations */
//   @keyframes fadeIn {
//     from { opacity: 0; transform: translateY(20px); }
//     to { opacity: 1; transform: translateY(0); }
//   }

//   @keyframes slideIn {
//     from { transform: translateX(-20px); opacity: 0; }
//     to { transform: translateX(0); opacity: 1; }
//   }

//   @keyframes zoomIn {
//     from { transform: scale(0.9); opacity: 0; }
//     to { transform: scale(1); opacity: 1; }
//   }

//   .animate-fade-in {
//     animation: fadeIn 0.5s ease-out;
//   }

//   .animate-slide-in {
//     animation: slideIn 0.5s ease-out;
//   }

//   .animate-zoom-in {
//     animation: zoomIn 0.5s ease-out;
//   }

//   /* Responsive Design */
//   @media (max-width: 1024px) {
//     .gallery-grid {
//       grid-template-columns: 1fr 1fr;
//       grid-template-rows: auto;
//     }

//     .gallery-main {
//       grid-column: span 1;
//       grid-row: span 1;
//     }
//   }

//   @media (max-width: 768px) {
//     .main-content {
//       padding: 15px;
//     }

//     .header-top {
//       flex-direction: column;
//       gap: 15px;
//       text-align: center;
//     }

//     .header-actions {
//       width: 100%;
//       justify-content: center;
//     }

//     .nav-tabs {
//       justify-content: flex-start;
//       padding: 0 15px 10px;
//     }

//     .nav-tab {
//       padding: 10px 16px;
//       font-size: 14px;
//     }

//     .btn {
//       padding: 10px 20px;
//       font-size: 14px;
//     }

//     .text-3xl { font-size: 26px; }
//     .text-4xl { font-size: 30px; }

//     .gallery-grid {
//       grid-template-columns: 1fr;
//       grid-template-rows: 250px;
//     }

//     .gallery-main {
//       height: 250px;
//     }
//   }

//   @media (max-width: 480px) {
//     .main-content {
//       padding: 10px;
//     }

//     .logo {
//       font-size: 1.5rem;
//     }

//     .header-btn {
//       padding: 6px 12px;
//       font-size: 14px;
//     }

//     .footer-grid {
//       grid-template-columns: 1fr;
//       text-align: center;
//     }
//   }

//   /* Custom Scrollbar */
//   ::-webkit-scrollbar {
//     width: 10px;
//     height: 10px;
//   }

//   ::-webkit-scrollbar-track {
//     background: #f1f1f1;
//     border-radius: 10px;
//   }

//   ::-webkit-scrollbar-thumb {
//     background: #c1c1c1;
//     border-radius: 10px;
//   }

//   ::webkit-scrollbar-thumb:hover {
//     background: #a1a1a1;
//   }

//   /* Loading Spinner */
//   .spinner {
//     animation: spin 1s linear infinite;
//   }

//   @keyframes spin {
//     0% { transform: rotate(0deg); }
//     100% { transform: rotate(360deg); }
//   }

//   /* Gradient Text */
//   .gradient-text {
//     background: linear-gradient(135deg, #006ce4 0%, #00c6ff 100%);
//     -webkit-background-clip: text;
//     -webkit-text-fill-color: transparent;
//     background-clip: text;
//   }
// `;

// // ==================== HEADER COMPONENT ====================
// const Header = ({ currentView, onNavigate }) => {
//   const tabs = [
//     {
//       id: ViewType.ATTRACTIONS,
//       label: "Attractions",
//       icon: "fa-map-location-dot",
//     },
//     { id: ViewType.FLIGHTS, label: "Flights", icon: "fa-plane" },
//     { id: "stays", label: "Stays", icon: "fa-bed" },
//     { id: "car", label: "Car rental", icon: "fa-car" },
//     { id: "taxi", label: "Airport taxis", icon: "fa-taxi" },
//   ];

//   return (
//     <header className="header">
//       <div className="header-top">
//         <div className="logo" onClick={() => onNavigate(ViewType.ATTRACTIONS)}>
//           <i className="fas fa-compass"></i>
//           <span>BookingGo</span>
//         </div>
//         <div className="header-actions">
//           <span className="hidden md:inline">INR</span>
//           <img
//             src="https://flagcdn.com/w20/in.png"
//             alt="India"
//             width="20"
//             height="15"
//           />
//           <i className="fa-regular fa-circle-question text-lg cursor-pointer"></i>
//           <button className="header-btn">Register</button>
//           <button className="header-btn">Sign in</button>
//         </div>
//       </div>

//       <div className="nav-tabs">
//         {tabs.map((tab) => (
//           <button
//             key={tab.id}
//             onClick={() =>
//               typeof tab.id === "string" ? null : onNavigate(tab.id)
//             }
//             className={`nav-tab ${currentView === tab.id ? "active" : ""}`}
//           >
//             <i className={`fas ${tab.icon}`}></i>
//             <span>{tab.label}</span>
//           </button>
//         ))}
//       </div>
//     </header>
//   );
// };

// // ==================== ATTRACTIONS LIST COMPONENT ====================
// const AttractionsList = ({ onSelect }) => {
//   const [searchTerm, setSearchTerm] = useState("Liverpool");
//   const [filteredAttractions, setFilteredAttractions] = useState(ATTRACTIONS);

//   const handleSearch = () => {
//     const filtered = ATTRACTIONS.filter(
//       (a) =>
//         a.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
//         a.name.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredAttractions(filtered);
//   };

//   return (
//     <div className="animate-fade-in">
//       {/* Search Bar */}
//       <div
//         className="card mb-8"
//         style={{
//           background: "linear-gradient(135deg, #ffd700 0%, #ffed4e 100%)",
//           padding: "4px",
//         }}
//       >
//         <div className="bg-white rounded-xl p-2 flex flex-col md:flex-row gap-2">
//           <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r">
//             <i className="fa-solid fa-location-dot text-gray-400 mr-3"></i>
//             <input
//               type="text"
//               placeholder="Where are you going?"
//               className="w-full outline-none bg-transparent"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               onKeyPress={(e) => e.key === "Enter" && handleSearch()}
//             />
//           </div>
//           <div className="flex-1 flex items-center px-4 py-3 border-b md:border-b-0 md:border-r">
//             <i className="fa-regular fa-calendar text-gray-400 mr-3"></i>
//             <span className="text-gray-600">Select dates</span>
//           </div>
//           <button onClick={handleSearch} className="btn btn-primary px-8 py-3">
//             Search
//           </button>
//         </div>
//       </div>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Sidebar Filters */}
//         <div className="lg:w-1/4 space-y-6">
//           <div className="card p-6">
//             <h3 className="font-bold border-b pb-3 mb-4">Filter by:</h3>

//             <div className="mb-6">
//               <h4 className="font-semibold mb-3">Location</h4>
//               {[
//                 "Manchester",
//                 "Liverpool",
//                 "Chester",
//                 "Blackpool",
//                 "London",
//                 "Edinburgh",
//               ].map((loc) => (
//                 <label
//                   key={loc}
//                   className="flex items-center space-x-3 mb-3 text-sm cursor-pointer"
//                 >
//                   <input type="checkbox" className="w-4 h-4 rounded" />
//                   <span>{loc}</span>
//                 </label>
//               ))}
//             </div>

//             <div className="mb-6">
//               <h4 className="font-semibold mb-3">Category</h4>
//               {[
//                 "Tours",
//                 "Museums",
//                 "Nature",
//                 "Food & Drink",
//                 "Entertainment",
//               ].map((cat) => (
//                 <label
//                   key={cat}
//                   className="flex items-center space-x-3 mb-3 text-sm cursor-pointer"
//                 >
//                   <input type="checkbox" className="w-4 h-4" />
//                   <span>{cat}</span>
//                 </label>
//               ))}
//             </div>

//             <div>
//               <h4 className="font-semibold mb-3">Review Score</h4>
//               {[4.5, 4, 3.5, 3].map((score) => (
//                 <label
//                   key={score}
//                   className="flex items-center space-x-3 mb-3 text-sm cursor-pointer"
//                 >
//                   <input type="checkbox" className="w-4 h-4" />
//                   <span>{score}+ stars</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
//             <div className="flex items-center gap-2 mb-2 text-blue-700 font-bold">
//               <i className="fa-solid fa-wand-magic-sparkles"></i>
//               <span>Smart Filters</span>
//             </div>
//             <p className="text-sm text-blue-600">
//               AI-suggested activities based on current trends and weather in{" "}
//               {searchTerm}.
//             </p>
//           </div>
//         </div>

//         {/* Results */}
//         <div className="lg:w-3/4 space-y-6">
//           <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 gap-4">
//             <h1 className="text-3xl font-bold gradient-text">
//               {searchTerm} attractions
//             </h1>
//             <div className="flex items-center border rounded-xl px-4 py-3 text-sm bg-white cursor-pointer hover:shadow-md transition-all">
//               <span>Sort by: Our top picks</span>
//               <i className="fa-solid fa-chevron-down ml-2"></i>
//             </div>
//           </div>

//           {filteredAttractions.map((attr) => (
//             <div
//               key={attr.id}
//               className="card overflow-hidden hover:shadow-xl transition-all duration-300"
//             >
//               <div className="flex flex-col md:flex-row">
//                 <div className="md:w-64 h-48 md:h-auto overflow-hidden">
//                   <img
//                     src={attr.images[0]}
//                     alt={attr.name}
//                     className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
//                   />
//                 </div>
//                 <div className="p-6 flex-1 flex flex-col">
//                   <div className="flex-1">
//                     <div className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-3">
//                       <h2
//                         className="text-2xl font-bold text-blue-600 hover:text-blue-800 cursor-pointer transition-colors"
//                         onClick={() => onSelect(attr)}
//                       >
//                         {attr.name}
//                       </h2>
//                       <div className="flex items-center gap-3">
//                         <div className="text-right">
//                           <div className="text-sm font-bold">Exceptional</div>
//                           <div className="text-xs text-gray-500">
//                             {attr.reviewsCount} reviews
//                           </div>
//                         </div>
//                         <div className="bg-blue-800 text-white px-3 py-2 rounded-lg font-bold text-lg">
//                           {attr.rating.toFixed(1)}
//                         </div>
//                       </div>
//                     </div>
//                     <p className="text-sm text-gray-500 mb-3 flex items-center gap-2">
//                       <i className="fa-solid fa-location-dot text-blue-500"></i>
//                       {attr.location} •
//                       <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-xs font-bold">
//                         #1 Best seller
//                       </span>
//                     </p>
//                     <p className="text-gray-600 mb-4">{attr.description}</p>

//                     <div className="flex flex-wrap gap-4 text-sm text-gray-600">
//                       <span className="flex items-center">
//                         <i className="fa-regular fa-clock mr-2 text-blue-500"></i>
//                         Duration: {attr.duration}
//                       </span>
//                       <span className="flex items-center text-green-600 font-medium">
//                         <i className="fa-solid fa-check mr-2"></i>
//                         Free cancellation
//                       </span>
//                     </div>
//                   </div>

//                   <div className="mt-6 flex flex-col items-end">
//                     <div className="text-xs text-gray-500">From</div>
//                     <div className="text-3xl font-bold mb-2">
//                       Rs. {attr.price.toLocaleString()}
//                     </div>
//                     <div className="text-xs text-gray-500 mb-4">
//                       Available from today
//                     </div>
//                     <button
//                       onClick={() => onSelect(attr)}
//                       className="btn btn-primary px-8 py-3"
//                     >
//                       <span>See availability</span>
//                       <i className="fa-solid fa-chevron-right ml-2"></i>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {filteredAttractions.length === 0 && (
//             <div className="card p-12 text-center">
//               <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
//                 <i className="fa-solid fa-magnifying-glass text-3xl text-gray-400"></i>
//               </div>
//               <p className="text-gray-500 text-lg mb-4">
//                 No attractions found for "{searchTerm}"
//               </p>
//               <button
//                 onClick={() => {
//                   setFilteredAttractions(ATTRACTIONS);
//                   setSearchTerm("");
//                 }}
//                 className="text-blue-600 font-bold hover:text-blue-800 transition-colors"
//               >
//                 Clear all filters
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== ATTRACTION DETAIL COMPONENT ====================
// const AttractionDetail = ({ attraction, onBack, onBook }) => {
//   const [counts, setCounts] = useState({
//     adult: 0,
//     child: 0,
//     senior: 0,
//     infant: 0,
//   });
//   const [selectedDate, setSelectedDate] = useState("Mon 29 Dec");
//   const [selectedTime, setSelectedTime] = useState("10:00");

//   const updateCount = (type, delta) => {
//     setCounts((prev) => ({
//       ...prev,
//       [type]: Math.max(0, prev[type] + delta),
//     }));
//   };

//   const totalPrice =
//     counts.adult * attraction.price + counts.child * attraction.price * 0.7;

//   return (
//     <div className="animate-fade-in">
//       <button
//         onClick={onBack}
//         className="flex items-center gap-2 text-blue-600 font-semibold mb-6 hover:text-blue-800 transition-colors hover:gap-3"
//       >
//         <i className="fa-solid fa-arrow-left"></i>
//         <span>Back to results</span>
//       </button>

//       <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
//         <div>
//           <h1 className="text-4xl font-bold mb-3">{attraction.name}</h1>
//           <p className="text-gray-600 flex items-center flex-wrap gap-2">
//             <i className="fa-solid fa-location-dot mr-1 text-blue-500"></i>
//             {attraction.location} •
//             <span className="text-blue-600 font-bold">
//               #1 Best seller in {attraction.location}
//             </span>
//           </p>
//         </div>
//         <div className="flex items-center gap-2">
//           <button className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110">
//             <i className="fa-regular fa-heart text-lg"></i>
//           </button>
//           <button className="w-12 h-12 border rounded-full flex items-center justify-center hover:bg-gray-50 transition-all hover:scale-110">
//             <i className="fa-solid fa-share-nodes text-lg"></i>
//           </button>
//         </div>
//       </div>

//       {/* Gallery Grid */}
//       <div className="gallery-grid mb-8">
//         <div className="gallery-item gallery-main">
//           <img src={attraction.images[0]} alt="Main" />
//           <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
//             <div className="text-sm font-bold">Main View</div>
//           </div>
//         </div>
//         {attraction.images.slice(1, 5).map((img, index) => (
//           <div key={index} className="gallery-item">
//             <img src={img} alt={`Gallery ${index + 1}`} />
//             {index === 3 && (
//               <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white cursor-pointer transition-all hover:bg-black/70">
//                 <div className="text-2xl font-bold mb-2">+15</div>
//                 <div className="text-sm">More photos</div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>

//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Left Column - Details */}
//         <div className="lg:w-2/3 space-y-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y">
//             {[
//               {
//                 icon: "fa-check-circle",
//                 color: "text-green-600",
//                 title: "Cancellation",
//                 desc: "Free",
//               },
//               {
//                 icon: "fa-clock",
//                 color: "text-blue-600",
//                 title: "Duration",
//                 desc: attraction.duration,
//               },
//               {
//                 icon: "fa-mobile-screen",
//                 color: "text-gray-600",
//                 title: "Tickets",
//                 desc: "Mobile accepted",
//               },
//               {
//                 icon: "fa-headphones",
//                 color: "text-purple-600",
//                 title: "Language",
//                 desc: "English, +5",
//               },
//             ].map((item, index) => (
//               <div key={index} className="flex items-center gap-4">
//                 <div
//                   className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color.replace(
//                     "text-",
//                     "bg-"
//                   )} bg-opacity-10`}
//                 >
//                   <i
//                     className={`fa-solid ${item.icon} ${item.color} text-xl`}
//                   ></i>
//                 </div>
//                 <div>
//                   <div className="text-xs text-gray-500 font-bold uppercase tracking-wider">
//                     {item.title}
//                   </div>
//                   <div className="text-sm font-medium">{item.desc}</div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <section>
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
//               <i className="fa-solid fa-star text-yellow-500"></i>
//               Experience highlights
//             </h2>
//             <ul className="space-y-4">
//               {attraction.highlights.map((h, i) => (
//                 <li
//                   key={i}
//                   className="flex items-start bg-blue-50 p-4 rounded-xl"
//                 >
//                   <i className="fa-solid fa-check-circle text-green-500 mr-3 mt-1"></i>
//                   <span className="text-gray-700">{h}</span>
//                 </li>
//               ))}
//             </ul>
//           </section>

//           <section className="grid md:grid-cols-2 gap-8">
//             <div className="card p-6">
//               <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <i className="fa-solid fa-check-circle text-green-500"></i>
//                 What's included
//               </h2>
//               <ul className="space-y-4">
//                 {attraction.includes.map((inc, i) => (
//                   <li key={i} className="flex items-center text-gray-700">
//                     <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
//                       <i className="fa-solid fa-check text-green-500 text-xs"></i>
//                     </div>
//                     {inc}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <div className="card p-6">
//               <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <i className="fa-solid fa-xmark-circle text-red-500"></i>
//                 What's not included
//               </h2>
//               <ul className="space-y-4">
//                 <li className="flex items-center text-gray-700">
//                   <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
//                     <i className="fa-solid fa-xmark text-red-500 text-xs"></i>
//                   </div>
//                   Food and drinks
//                 </li>
//                 <li className="flex items-center text-gray-700">
//                   <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mr-3">
//                     <i className="fa-solid fa-xmark text-red-500 text-xs"></i>
//                   </div>
//                   Hotel pickup
//                 </li>
//               </ul>
//             </div>
//           </section>

//           <section>
//             <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
//               <i className="fa-solid fa-map-location-dot text-blue-500"></i>
//               Location
//             </h2>
//             <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl h-80 flex items-center justify-center relative overflow-hidden border-2 border-gray-200">
//               <img
//                 src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1200&auto=format&fit=crop"
//                 alt="Map"
//                 className="w-full h-full object-cover opacity-40"
//               />
//               <div className="absolute bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-2xl border flex items-center gap-4 max-w-md">
//                 <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
//                   <i className="fa-solid fa-location-dot text-blue-600 text-xl"></i>
//                 </div>
//                 <div>
//                   <div className="font-bold text-lg">{attraction.name}</div>
//                   <div className="text-sm text-gray-500">
//                     {attraction.location}
//                   </div>
//                   <button className="mt-2 text-blue-600 font-semibold text-sm flex items-center gap-1">
//                     <span>View on map</span>
//                     <i className="fa-solid fa-arrow-up-right-from-square text-xs"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* Right Column - Booking Widget */}
//         <div className="lg:w-1/3">
//           <div className="card p-6 sticky top-4 shadow-2xl border-2">
//             <h3 className="text-2xl font-bold mb-6">Tickets and prices</h3>

//             <div className="mb-8">
//               <p className="font-bold text-sm mb-4 flex items-center gap-2">
//                 <i className="fa-regular fa-calendar text-blue-500"></i>
//                 Search availability by date
//               </p>
//               <div className="flex overflow-x-auto pb-4 gap-3 px-1">
//                 {["Mon 29", "Tue 30", "Wed 31", "Thu 01"].map((date) => (
//                   <button
//                     key={date}
//                     onClick={() => setSelectedDate(date)}
//                     className={`flex-shrink-0 px-5 py-4 border-2 rounded-xl text-center transition-all min-w-[80px] ${
//                       selectedDate.includes(date)
//                         ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-lg"
//                         : "bg-white text-gray-600 hover:border-blue-400 hover:shadow-md"
//                     }`}
//                   >
//                     <div className="text-xs font-medium">
//                       {date.split(" ")[0]}
//                     </div>
//                     <div className="font-bold text-lg">
//                       {date.split(" ")[1]}
//                     </div>
//                   </button>
//                 ))}
//               </div>
//             </div>

//             <div className="mb-8">
//               <p className="font-bold text-sm mb-4 flex items-center gap-2">
//                 <i className="fa-regular fa-clock text-blue-500"></i>
//                 Select time
//               </p>
//               <div className="grid grid-cols-3 gap-3">
//                 {["10:00", "10:15", "10:30", "11:00", "11:15", "11:30"].map(
//                   (time) => (
//                     <button
//                       key={time}
//                       onClick={() => setSelectedTime(time)}
//                       className={`px-4 py-3 border-2 rounded-xl text-sm font-semibold transition-all ${
//                         selectedTime === time
//                           ? "bg-gradient-to-br from-blue-600 to-blue-700 text-white border-blue-600 shadow-lg"
//                           : "hover:border-blue-400 hover:shadow-md"
//                       }`}
//                     >
//                       {time}
//                     </button>
//                   )
//                 )}
//               </div>
//             </div>

//             <div className="space-y-6 mb-8">
//               {[
//                 {
//                   label: "Adult (age 16-99)",
//                   sub: `Rs. ${attraction.price}`,
//                   type: "adult",
//                 },
//                 {
//                   label: "Child (age 5-15)",
//                   sub: `Rs. ${Math.floor(attraction.price * 0.7)}`,
//                   type: "child",
//                 },
//                 {
//                   label: "Senior (age 60-99)",
//                   sub: `Rs. ${attraction.price}`,
//                   type: "senior",
//                 },
//                 { label: "Infant (age 0-4)", sub: "Free", type: "infant" },
//               ].map((ticket) => (
//                 <div
//                   key={ticket.label}
//                   className="flex justify-between items-center py-3 px-2 rounded-lg hover:bg-gray-50"
//                 >
//                   <div>
//                     <div className="text-sm font-bold text-gray-800">
//                       {ticket.label}
//                     </div>
//                     <div className="text-xs text-gray-500">{ticket.sub}</div>
//                   </div>
//                   <div className="ticket-counter">
//                     <button
//                       onClick={() => updateCount(ticket.type, -1)}
//                       className="counter-btn"
//                     >
//                       <i className="fa-solid fa-minus"></i>
//                     </button>
//                     <span className="counter-value">{counts[ticket.type]}</span>
//                     <button
//                       onClick={() => updateCount(ticket.type, 1)}
//                       className="counter-btn"
//                     >
//                       <i className="fa-solid fa-plus"></i>
//                     </button>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="border-t-2 pt-6">
//               <div className="flex justify-between items-center mb-8">
//                 <div className="font-bold text-xl">Total price</div>
//                 <div className="text-right">
//                   <div className="text-3xl font-extrabold text-blue-700">
//                     Rs. {totalPrice.toLocaleString()}
//                   </div>
//                   <div className="text-xs text-gray-500 mt-1">
//                     Includes taxes and charges
//                   </div>
//                 </div>
//               </div>
//               <button
//                 disabled={totalPrice === 0}
//                 onClick={() =>
//                   onBook({
//                     date: selectedDate,
//                     time: selectedTime,
//                     tickets: counts,
//                   })
//                 }
//                 className={`btn w-full py-4 text-lg font-bold rounded-xl ${
//                   totalPrice > 0 ? "btn-primary" : "btn-disabled"
//                 }`}
//               >
//                 <i className="fa-solid fa-ticket"></i>
//                 <span>Book now</span>
//               </button>
//               <p className="text-xs text-gray-500 text-center mt-4">
//                 <i className="fa-solid fa-lock mr-1"></i>
//                 Your payment is secure with us
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== USER DETAILS FORM COMPONENT ====================
// const UserDetailsForm = ({ bookingData, onBack, onSubmit }) => {
//   const [formData, setFormData] = useState({
//     firstName: "Dushyant",
//     lastName: "Singh",
//     email: "",
//     phone: "9244526432",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   const item = bookingData.attraction || {
//     name: "Flight to Destination",
//     price: bookingData.flight?.price || 0,
//   };

//   return (
//     <div className="animate-fade-in">
//       <div className="max-w-6xl mx-auto">
//         <button
//           onClick={onBack}
//           className="flex items-center gap-3 text-blue-600 font-semibold mb-6 hover:text-blue-800 transition-colors"
//         >
//           <i className="fa-solid fa-arrow-left"></i>
//           <span>Back to ticket options</span>
//         </button>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Column - Form */}
//           <div className="lg:w-2/3">
//             <div className="mb-2 text-sm text-gray-500 font-semibold uppercase tracking-wider">
//               Step 1 of 2
//             </div>
//             <h1 className="text-3xl font-bold mb-4">{item.name}</h1>
//             <p className="text-gray-600 mb-8">
//               Complete your booking by providing your details below.
//             </p>

//             <form onSubmit={handleSubmit} className="card p-8 space-y-8">
//               <h2 className="text-2xl font-bold mb-2">Your details</h2>

//               <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 rounded-xl border border-blue-200 mb-6 flex items-center gap-3">
//                 <i className="fa-regular fa-user-circle text-blue-600 text-xl"></i>
//                 <span className="text-blue-800 font-medium">
//                   Sign in to use your saved details
//                 </span>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="form-group">
//                   <label className="form-label">
//                     First name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     required
//                     className="form-input"
//                     value={formData.firstName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, firstName: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label className="form-label">
//                     Last name <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     required
//                     className="form-input"
//                     value={formData.lastName}
//                     onChange={(e) =>
//                       setFormData({ ...formData, lastName: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label className="form-label">
//                   Email address <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   required
//                   type="email"
//                   className="form-input"
//                   placeholder="your.email@example.com"
//                   value={formData.email}
//                   onChange={(e) =>
//                     setFormData({ ...formData, email: e.target.value })
//                   }
//                 />
//               </div>

//               <div className="form-group">
//                 <label className="form-label">
//                   Mobile number <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex">
//                   <div className="flex items-center gap-2 border-2 border-r-0 border-gray-300 rounded-l-xl px-4 bg-gray-50">
//                     <img
//                       src="https://flagcdn.com/w20/in.png"
//                       alt="India"
//                       width="20"
//                       height="15"
//                     />
//                     <span className="font-medium">+91</span>
//                   </div>
//                   <input
//                     required
//                     className="form-input rounded-l-none"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                   />
//                 </div>
//               </div>

//               <div className="text-sm text-gray-600 leading-relaxed p-4 bg-gray-50 rounded-xl">
//                 By clicking "Payment details" and completing a booking, you
//                 agree with the{" "}
//                 <span className="text-blue-600 font-medium cursor-pointer">
//                   terms and conditions
//                 </span>{" "}
//                 of BookingGo.com and the privacy policy of Musement.
//               </div>

//               <button
//                 type="submit"
//                 className="btn btn-primary w-full py-4 text-lg font-bold rounded-xl"
//               >
//                 <span>Continue to payment</span>
//                 <i className="fa-solid fa-arrow-right"></i>
//               </button>
//             </form>
//           </div>

//           {/* Right Column - Summary */}
//           <div className="lg:w-1/3 space-y-6">
//             <div className="card overflow-hidden">
//               {bookingData.attraction?.images[0] && (
//                 <img
//                   src={bookingData.attraction.images[0]}
//                   alt="Selected"
//                   className="w-full h-48 object-cover"
//                 />
//               )}
//               <div className="p-6">
//                 <h3 className="font-bold text-lg mb-2">{item.name}</h3>
//                 <div className="flex items-center text-gray-500 text-sm gap-2">
//                   <i className="fa-regular fa-calendar"></i>
//                   <span>
//                     {bookingData.date} {bookingData.time}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="card p-6">
//               <div className="flex justify-between items-center mb-6">
//                 <span className="font-bold text-lg">Price Summary</span>
//                 <i className="fa-solid fa-chevron-down text-gray-400"></i>
//               </div>
//               <div className="space-y-4">
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Base price</span>
//                   <span className="font-medium">
//                     Rs. {(item.price || 0).toLocaleString()}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-gray-600">Taxes & fees</span>
//                   <span className="font-medium">Rs. 500</span>
//                 </div>
//                 <div className="border-t pt-4">
//                   <div className="flex justify-between items-center">
//                     <div>
//                       <div className="text-lg font-extrabold">Total</div>
//                       <div className="text-sm text-gray-500">
//                         Inclusive of all charges
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <div className="text-2xl font-extrabold text-blue-700">
//                         Rs. {((item.price || 0) + 500).toLocaleString()}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card p-6 bg-green-50 border-green-100">
//               <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
//                 <i className="fa-solid fa-check-circle text-green-600"></i>
//                 Cancellation policy
//               </h4>
//               <p className="text-sm text-gray-700">
//                 Free cancellation available before the experience starts. It's
//                 possible to cancel or make changes after you book.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== PAYMENT PAGE COMPONENT ====================
// const PaymentPage = ({ bookingData, onBack, onComplete }) => {
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleComplete = () => {
//     setIsProcessing(true);
//     setTimeout(() => {
//       onComplete();
//     }, 2000);
//   };

//   const item = bookingData.attraction || {
//     name: "Flight Trip",
//     price: bookingData.flight?.price || 5000,
//   };

//   return (
//     <div className="animate-fade-in">
//       <div className="max-w-6xl mx-auto">
//         <button
//           onClick={onBack}
//           className="flex items-center gap-3 text-blue-600 font-semibold mb-6 hover:text-blue-800 transition-colors"
//         >
//           <i className="fa-solid fa-arrow-left"></i>
//           <span>Back to your details</span>
//         </button>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Left Column - Payment */}
//           <div className="lg:w-2/3">
//             <div className="mb-2 text-sm text-gray-500 font-semibold uppercase tracking-wider">
//               Step 2 of 2
//             </div>
//             <h1 className="text-3xl font-bold mb-8">Check and pay</h1>

//             <div className="card p-8 space-y-8">
//               <h2 className="text-2xl font-bold mb-4">
//                 How would you like to pay?
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
//                 <button
//                   onClick={() => setPaymentMethod("card")}
//                   className={`p-6 border-2 rounded-xl flex flex-col items-center justify-center gap-4 transition-all ${
//                     paymentMethod === "card"
//                       ? "border-blue-600 bg-blue-50 shadow-md"
//                       : "border-gray-200 hover:border-blue-400"
//                   }`}
//                 >
//                   <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
//                     <i className="fa-solid fa-credit-card text-3xl text-blue-600"></i>
//                   </div>
//                   <span className="font-bold">Credit/Debit Card</span>
//                 </button>
//                 <button
//                   onClick={() => setPaymentMethod("upi")}
//                   className={`p-6 border-2 rounded-xl flex flex-col items-center justify-center gap-4 transition-all ${
//                     paymentMethod === "upi"
//                       ? "border-blue-600 bg-blue-50 shadow-md"
//                       : "border-gray-200 hover:border-blue-400"
//                   }`}
//                 >
//                   <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
//                     <div className="text-2xl font-black text-blue-800 italic">
//                       UPI
//                     </div>
//                   </div>
//                   <span className="font-bold">UPI / GPay / PhonePe</span>
//                 </button>
//                 <button
//                   onClick={() => setPaymentMethod("paypal")}
//                   className={`p-6 border-2 rounded-xl flex flex-col items-center justify-center gap-4 transition-all ${
//                     paymentMethod === "paypal"
//                       ? "border-blue-600 bg-blue-50 shadow-md"
//                       : "border-gray-200 hover:border-blue-400"
//                   }`}
//                 >
//                   <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
//                     <i className="fa-brands fa-paypal text-3xl text-blue-500"></i>
//                   </div>
//                   <span className="font-bold">PayPal</span>
//                 </button>
//               </div>

//               {paymentMethod === "card" && (
//                 <div className="space-y-6 animate-fade-in">
//                   <div className="flex gap-4 grayscale opacity-60">
//                     <i className="fa-brands fa-cc-visa text-3xl"></i>
//                     <i className="fa-brands fa-cc-mastercard text-3xl"></i>
//                     <i className="fa-brands fa-cc-amex text-3xl"></i>
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="form-group">
//                       <label className="form-label">Cardholder's Name *</label>
//                       <input
//                         className="form-input"
//                         defaultValue={
//                           bookingData.userDetails?.firstName +
//                           " " +
//                           bookingData.userDetails?.lastName
//                         }
//                       />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">Card Number *</label>
//                       <div className="relative">
//                         <input
//                           className="form-input pl-12"
//                           placeholder="0000 0000 0000 0000"
//                         />
//                         <i className="fa-solid fa-credit-card absolute left-4 top-4 text-gray-400"></i>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="grid md:grid-cols-2 gap-6">
//                     <div className="form-group">
//                       <label className="form-label">Expiry Date *</label>
//                       <input className="form-input" placeholder="MM / YY" />
//                     </div>
//                     <div className="form-group">
//                       <label className="form-label">CVC *</label>
//                       <input className="form-input" placeholder="123" />
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {paymentMethod === "upi" && (
//                 <div className="text-center space-y-8 py-8 animate-fade-in">
//                   <p className="text-xl font-bold">
//                     Scan the QR code or enter UPI ID
//                   </p>
//                   <div className="mx-auto w-64 h-64 bg-gray-50 flex items-center justify-center border-4 border-dashed border-gray-300 rounded-2xl">
//                     <i className="fa-solid fa-qrcode text-8xl text-gray-200"></i>
//                   </div>
//                   <div className="flex items-center justify-center gap-4 max-w-md mx-auto">
//                     <input className="form-input" placeholder="username@bank" />
//                     <button className="btn btn-secondary px-6">Verify</button>
//                   </div>
//                 </div>
//               )}

//               {paymentMethod === "paypal" && (
//                 <div className="text-center py-12 animate-fade-in">
//                   <button className="bg-[#ffc439] px-16 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 mx-auto hover:bg-[#f2ba36] transition-all hover:scale-105">
//                     <i className="fa-brands fa-paypal text-2xl"></i>
//                     <span>Pay with PayPal</span>
//                   </button>
//                 </div>
//               )}

//               <button
//                 disabled={isProcessing}
//                 onClick={handleComplete}
//                 className={`btn w-full py-4 text-lg font-bold rounded-xl ${
//                   isProcessing ? "btn-disabled" : "btn-primary"
//                 }`}
//               >
//                 {isProcessing ? (
//                   <>
//                     <i className="fa-solid fa-spinner spinner"></i>
//                     <span>Processing your payment...</span>
//                   </>
//                 ) : (
//                   <>
//                     <i className="fa-solid fa-lock"></i>
//                     <span>Complete booking</span>
//                   </>
//                 )}
//               </button>

//               <p className="text-sm text-center text-gray-500">
//                 Your payment is secure with 256-bit SSL encryption. Keep in mind
//                 that your card issuer may charge you a foreign transaction fee.
//               </p>
//             </div>
//           </div>

//           {/* Right Column - Summary */}
//           <div className="lg:w-1/3 space-y-6">
//             <div className="card p-6">
//               <div className="flex items-start gap-4 mb-6">
//                 {bookingData.attraction?.images[0] && (
//                   <img
//                     src={bookingData.attraction.images[0]}
//                     className="w-20 h-20 rounded-xl object-cover"
//                     alt="Thumb"
//                   />
//                 )}
//                 <div>
//                   <h4 className="font-bold text-lg">{item.name}</h4>
//                   <div className="text-sm text-gray-500 flex items-center gap-2 mt-2">
//                     <i className="fa-regular fa-calendar"></i>
//                     {bookingData.date} {bookingData.time}
//                   </div>
//                 </div>
//               </div>
//               <div className="border-t-2 pt-6">
//                 <div className="flex justify-between items-end">
//                   <div>
//                     <div className="text-lg font-extrabold">Total price</div>
//                     <div className="text-sm text-gray-500">
//                       Includes taxes and charges
//                     </div>
//                   </div>
//                   <div className="text-right">
//                     <div className="text-3xl font-extrabold text-blue-700">
//                       Rs. {(item.price || 0).toLocaleString()}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="card p-6 bg-blue-50 border-blue-100">
//               <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
//                 <i className="fa-solid fa-shield-halved text-blue-600"></i>
//                 Payment Protection
//               </h4>
//               <p className="text-sm text-gray-700">
//                 Your payment is protected by BookingGo's Payment Protection
//                 Guarantee. Full refund if the experience is cancelled.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== FLIGHT SEARCH COMPONENT ====================
// const FlightSearch = ({ onSearch }) => {
//   const [tripType, setTripType] = useState("Round-trip");
//   const [travelClass, setTravelClass] = useState("Economy");

//   return (
//     <div className="animate-fade-in">
//       <div className="max-w-6xl mx-auto">
//         <h1 className="text-4xl font-bold mb-4 gradient-text">
//           Compare and book flights with ease
//         </h1>
//         <p className="text-lg text-gray-600 mb-8">
//           Discover your next dream destination
//         </p>

//         <div className="card p-8 border-t-4 border-blue-600 shadow-xl">
//           <div className="flex flex-wrap gap-4 mb-8">
//             <div className="flex bg-gray-100 rounded-xl p-1">
//               {["Round-trip", "One-way", "Multi-city"].map((t) => (
//                 <button
//                   key={t}
//                   onClick={() => setTripType(t)}
//                   className={`px-6 py-2 text-sm font-semibold rounded-lg transition-all ${
//                     tripType === t
//                       ? "bg-white shadow-md"
//                       : "text-gray-500 hover:bg-gray-200"
//                   }`}
//                 >
//                   {t}
//                 </button>
//               ))}
//             </div>

//             <select
//               value={travelClass}
//               onChange={(e) => setTravelClass(e.target.value)}
//               className="bg-gray-100 px-6 py-2 rounded-lg text-sm font-semibold outline-none border-2 border-transparent focus:border-blue-500"
//             >
//               <option>Economy</option>
//               <option>Premium Economy</option>
//               <option>Business</option>
//               <option>First Class</option>
//             </select>

//             <button className="flex items-center gap-2 text-sm font-semibold text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-all">
//               <i className="fa-solid fa-user"></i>
//               <span>1 adult</span>
//             </button>
//           </div>

//           <div className="grid md:grid-cols-12 gap-4">
//             <div className="md:col-span-3 relative">
//               <div className="absolute left-4 top-4 text-gray-400">
//                 <i className="fa-solid fa-plane-departure"></i>
//               </div>
//               <input
//                 defaultValue="Mumbai (BOM)"
//                 className="w-full border-2 border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 outline-none font-semibold"
//               />
//             </div>
//             <div className="md:col-span-3 relative">
//               <div className="absolute left-4 top-4 text-gray-400">
//                 <i className="fa-solid fa-plane-arrival"></i>
//               </div>
//               <input
//                 placeholder="Where to?"
//                 className="w-full border-2 border-gray-300 rounded-xl py-4 pl-12 pr-4 focus:border-blue-500 outline-none font-semibold"
//               />
//             </div>
//             <div className="md:col-span-4 relative">
//               <div className="absolute left-4 top-4 text-gray-400">
//                 <i className="fa-regular fa-calendar"></i>
//               </div>
//               <div className="w-full border-2 border-gray-300 rounded-xl py-4 pl-12 pr-4 font-semibold text-gray-400 cursor-pointer hover:border-blue-400 transition-colors">
//                 Dec 29 — Jan 05
//               </div>
//             </div>
//             <div className="md:col-span-2">
//               <button
//                 onClick={() => onSearch({})}
//                 className="w-full btn btn-primary py-4 rounded-xl font-bold text-lg"
//               >
//                 Search
//               </button>
//             </div>
//           </div>

//           <div className="mt-6 flex items-center gap-6">
//             <label className="flex items-center gap-3 cursor-pointer">
//               <input
//                 type="checkbox"
//                 className="w-5 h-5 text-blue-600 rounded"
//               />
//               <span className="font-semibold">Direct flights only</span>
//             </label>
//           </div>
//         </div>

//         <div className="mt-16 grid md:grid-cols-3 gap-8">
//           {[
//             {
//               icon: "fa-globe",
//               title: "Search the world",
//               desc: "Find flights to over 4,000 destinations around the globe",
//             },
//             {
//               icon: "fa-ticket",
//               title: "Smart search",
//               desc: "Easily track flight prices and buy at the right time",
//             },
//             {
//               icon: "fa-wallet",
//               title: "Best prices",
//               desc: "Get competitive prices from over 500 airlines",
//             },
//           ].map((card) => (
//             <div
//               key={card.title}
//               className="text-center p-8 card hover:shadow-xl"
//             >
//               <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-blue-200 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
//                 <i className={`fa-solid ${card.icon}`}></i>
//               </div>
//               <h3 className="font-bold text-2xl mb-3">{card.title}</h3>
//               <p className="text-gray-600">{card.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== FLIGHT RESULTS COMPONENT ====================
// const FlightResults = ({ onSelect, onBack }) => {
//   return (
//     <div className="animate-fade-in">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-6">
//           <div>
//             <button
//               onClick={onBack}
//               className="text-blue-600 font-semibold mb-3 flex items-center gap-2 hover:text-blue-800"
//             >
//               <i className="fa-solid fa-arrow-left"></i>
//               Edit search
//             </button>
//             <h1 className="text-3xl font-bold">Mumbai (BOM) to London (LHR)</h1>
//             <p className="text-gray-500">15 flights found • Dec 29 - Jan 05</p>
//           </div>
//           <div className="flex bg-white border rounded-xl p-1 gap-1">
//             <button className="px-6 py-3 bg-blue-50 text-blue-600 rounded-lg font-bold text-sm">
//               Best
//             </button>
//             <button className="px-6 py-3 hover:bg-gray-50 rounded-lg font-bold text-sm text-gray-500">
//               Cheapest
//             </button>
//             <button className="px-6 py-3 hover:bg-gray-50 rounded-lg font-bold text-sm text-gray-500">
//               Fastest
//             </button>
//           </div>
//         </div>

//         <div className="space-y-6">
//           {FLIGHTS.map((flight) => (
//             <div
//               key={flight.id}
//               className="card overflow-hidden hover:shadow-xl transition-all"
//             >
//               <div className="p-8 flex flex-col md:flex-row items-center gap-8">
//                 <div className="flex items-center gap-6 w-48">
//                   <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
//                     <i className="fa-solid fa-plane text-2xl"></i>
//                   </div>
//                   <div>
//                     <div className="font-bold text-lg">{flight.airline}</div>
//                     <div className="text-sm text-gray-500">{flight.class}</div>
//                   </div>
//                 </div>

//                 <div className="flex-1 flex justify-between items-center w-full md:w-auto">
//                   <div className="text-center">
//                     <div className="text-2xl font-bold">{flight.departure}</div>
//                     <div className="text-sm text-gray-500 uppercase">BOM</div>
//                   </div>
//                   <div className="flex-1 px-12 text-center space-y-3">
//                     <div className="text-sm text-gray-400">
//                       {flight.duration}
//                     </div>
//                     <div className="h-px bg-gray-300 relative">
//                       <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-500"></div>
//                       <div className="absolute -top-1.5 left-0 w-3 h-3 rounded-full bg-gray-300"></div>
//                       <div className="absolute -top-1.5 right-0 w-3 h-3 rounded-full bg-gray-300"></div>
//                     </div>
//                     <div className="text-sm font-semibold text-blue-600">
//                       {flight.stops === 0
//                         ? "Non-stop"
//                         : `${flight.stops} stop${flight.stops > 1 ? "s" : ""}`}
//                     </div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-2xl font-bold">{flight.arrival}</div>
//                     <div className="text-sm text-gray-500 uppercase">LHR</div>
//                   </div>
//                 </div>

//                 <div className="border-l pl-8 w-full md:w-56 text-right">
//                   <div className="text-xs text-gray-500 mb-2">
//                     {flight.class}
//                   </div>
//                   <div className="text-3xl font-bold mb-4">
//                     Rs. {flight.price.toLocaleString()}
//                   </div>
//                   <button
//                     onClick={() => onSelect(flight)}
//                     className="btn btn-primary w-full py-3"
//                   >
//                     Select <i className="fa-solid fa-chevron-right ml-2"></i>
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-gray-50 px-8 py-4 flex flex-col md:flex-row justify-between text-sm text-gray-600 font-semibold border-t">
//                 <div className="flex flex-wrap gap-6">
//                   <span className="flex items-center gap-2">
//                     <i className="fa-solid fa-suitcase text-blue-500"></i>
//                     Cabin bag included
//                   </span>
//                   <span className="flex items-center gap-2">
//                     <i className="fa-solid fa-briefcase text-green-500"></i>
//                     23kg Checked bag
//                   </span>
//                 </div>
//                 <div className="text-green-600 font-bold mt-2 md:mt-0">
//                   <i className="fa-solid fa-badge-check mr-2"></i>
//                   Flexible ticket available
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// // ==================== SUCCESS PAGE COMPONENT ====================
// const SuccessPage = ({ onHome }) => {
//   return (
//     <div className="animate-zoom-in text-center py-12">
//       <div className="max-w-2xl mx-auto">
//         <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 text-6xl shadow-xl">
//           <i className="fa-solid fa-check"></i>
//         </div>
//         <h1 className="text-5xl font-bold mb-6 gradient-text">
//           Payment Successful!
//         </h1>
//         <p className="text-xl text-gray-600 mb-8 leading-relaxed">
//           Your booking has been confirmed. A confirmation email has been sent to
//           your inbox with all the details.
//         </p>

//         <div className="card p-8 mb-12 text-left bg-gradient-to-br from-gray-50 to-white">
//           <h3 className="font-bold text-2xl border-b pb-4 mb-6">
//             What's next?
//           </h3>
//           <ul className="space-y-6">
//             <li className="flex items-start gap-4">
//               <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex-shrink-0 flex items-center justify-center text-lg font-bold">
//                 1
//               </div>
//               <div>
//                 <p className="font-medium text-lg">Check your email</p>
//                 <p className="text-gray-600">
//                   Your e-tickets and confirmation voucher have been sent to your
//                   email address.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-4">
//               <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex-shrink-0 flex items-center justify-center text-lg font-bold">
//                 2
//               </div>
//               <div>
//                 <p className="font-medium text-lg">Download our app</p>
//                 <p className="text-gray-600">
//                   Get the BookingGo app for easy access to your tickets offline
//                   and exclusive offers.
//                 </p>
//               </div>
//             </li>
//             <li className="flex items-start gap-4">
//               <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex-shrink-0 flex items-center justify-center text-lg font-bold">
//                 3
//               </div>
//               <div>
//                 <p className="font-medium text-lg">Prepare for your trip</p>
//                 <p className="text-gray-600">
//                   Most attractions accept mobile vouchers. Keep your phone
//                   charged and ready!
//                 </p>
//               </div>
//             </li>
//           </ul>
//         </div>

//         <button
//           onClick={onHome}
//           className="btn btn-primary px-16 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl"
//         >
//           <i className="fa-solid fa-compass mr-3"></i>
//           Explore more attractions
//         </button>

//         <p className="text-gray-500 mt-8">
//           Need help?{" "}
//           <span className="text-blue-600 font-medium cursor-pointer">
//             Contact our support team
//           </span>
//         </p>
//       </div>
//     </div>
//   );
// };

// // ==================== FOOTER COMPONENT ====================
// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-grid">
//         <div className="footer-section">
//           <h4>Support</h4>
//           <ul>
//             <li>Help Center</li>
//             <li>Customer Service</li>
//             <li>Contact Us</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Discover</h4>
//           <ul>
//             <li>Mobile App</li>
//             <li>Destinations</li>
//             <li>Reviews</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Terms</h4>
//           <ul>
//             <li>Privacy Policy</li>
//             <li>Cookie Statement</li>
//             <li>MSA</li>
//           </ul>
//         </div>
//         <div className="footer-section">
//           <h4>Partner with us</h4>
//           <ul>
//             <li>Add your property</li>
//             <li>Affiliates</li>
//             <li>Hotels</li>
//           </ul>
//         </div>
//       </div>
//     </footer>
//   );
// };

// // ==================== MAIN APP COMPONENT ====================
// const Attractive1 = () => {
//   const [currentView, setCurrentView] = useState(ViewType.ATTRACTIONS);
//   const [bookingData, setBookingData] = useState({
//     tickets: { adult: 0, child: 0, senior: 0, infant: 0 },
//   });
//   const [history, setHistory] = useState([ViewType.ATTRACTIONS]);

//   const navigateTo = (view, data = {}) => {
//     setBookingData((prev) => ({ ...prev, ...data }));
//     setHistory((prev) => [...prev, view]);
//     setCurrentView(view);
//     window.scrollTo(0, 0);
//   };

//   const goBack = () => {
//     if (history.length > 1) {
//       const newHistory = [...history];
//       newHistory.pop();
//       const prevView = newHistory[newHistory.length - 1];
//       setHistory(newHistory);
//       setCurrentView(prevView);
//     }
//   };

//   const renderView = () => {
//     switch (currentView) {
//       case ViewType.ATTRACTIONS:
//         return (
//           <AttractionsList
//             onSelect={(attr) =>
//               navigateTo(ViewType.ATTRACTION_DETAIL, { attraction: attr })
//             }
//           />
//         );
//       case ViewType.ATTRACTION_DETAIL:
//         return (
//           <AttractionDetail
//             attraction={bookingData.attraction}
//             onBack={goBack}
//             onBook={(selection) => navigateTo(ViewType.USER_DETAILS, selection)}
//           />
//         );
//       case ViewType.USER_DETAILS:
//         return (
//           <UserDetailsForm
//             bookingData={bookingData}
//             onBack={goBack}
//             onSubmit={(details) =>
//               navigateTo(ViewType.PAYMENT, { userDetails: details })
//             }
//           />
//         );
//       case ViewType.PAYMENT:
//         return (
//           <PaymentPage
//             bookingData={bookingData}
//             onBack={goBack}
//             onComplete={() => navigateTo(ViewType.BOOKING_SUCCESS)}
//           />
//         );
//       case ViewType.FLIGHTS:
//         return (
//           <FlightSearch
//             onSearch={(params) => navigateTo(ViewType.FLIGHT_RESULTS, params)}
//           />
//         );
//       case ViewType.FLIGHT_RESULTS:
//         return (
//           <FlightResults
//             onSelect={(flight) => navigateTo(ViewType.USER_DETAILS, { flight })}
//             onBack={goBack}
//           />
//         );
//       case ViewType.BOOKING_SUCCESS:
//         return <SuccessPage onHome={() => navigateTo(ViewType.ATTRACTIONS)} />;
//       default:
//         return <div>View not implemented</div>;
//     }
//   };

//   return (
//     <div className="app-container">
//       <style>{styles}</style>
//       <Header currentView={currentView} onNavigate={navigateTo} />
//       <main className="main-content">{renderView()}</main>
//       <Footer />
//     </div>
//   );
// };

// export default Attractive1;
import React, { useState, useMemo, useEffect } from "react";
import ReactDOM from "react-dom/client";

// --- View Types (replacing enum) ---
const ViewType = {
  ATTRACTIONS: "ATTRACTIONS",
  ATTRACTION_DETAIL: "ATTRACTION_DETAIL",
  USER_DETAILS: "USER_DETAILS",
  PAYMENT: "PAYMENT",
  FLIGHTS: "FLIGHTS",
  FLIGHT_RESULTS: "FLIGHT_RESULTS",
  BOOKING_SUCCESS: "BOOKING_SUCCESS",
};

// --- Interfaces ---
const Attraction = {
  id: "",
  name: "",
  location: "",
  rating: 0,
  reviewsCount: 0,
  price: 0,
  duration: "",
  description: "",
  images: [],
  category: "",
  highlights: [],
  includes: [],
  departurePoint: "",
  endPoint: "",
  additionalInfo: [],
};

const Flight = {
  id: "",
  airline: "",
  departure: "",
  arrival: "",
  basePrice: 0,
  duration: "",
  stops: 0,
};

const BookingData = {
  attraction: null,
  flight: null,
  flightClass: "Economy",
  date: "",
  time: "",
  tickets: {
    adult: 0,
    child: 0,
    senior: 0,
  },
  userDetails: {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  },
};

// --- Data ---
const ATTRACTIONS = Array.from({ length: 25 }).map((_, i) => {
  const names = [
    "Taj Mahal Sunrise Tour",
    "Jaipur City Palace Guide",
    "Goa Beach Scuba Diving",
    "Rishikesh Rafting Adventure",
    "Kerala Backwater Houseboat",
    "Amritsar Golden Temple Tour",
    "Udaipur Lake Pichola Cruise",
    "Varanasi Ganga Aarti Experience",
    "Hampi Ruins Exploration",
    "Mysore Palace Heritage Walk",
    "Ajanta & Ellora Caves Trip",
    "Leh Ladakh Bike Expedition",
    "Jaisalmer Desert Safari",
    "Mumbai Dharavi Tour",
    "Delhi Red Fort Walk",
    "Shimla Toy Train Journey",
    "Darjeeling Tea Garden Visit",
    "Kaziranga Rhino Safari",
    "Munnar Spice Plantation Tour",
    "Andaman Island Snorkeling",
    "Kolkata Victoria Memorial Walk",
    "Madurai Meenakshi Temple Tour",
    "Ranthambore Tiger Safari",
    "Ooty Botanical Garden Tour",
    "Mahabalipuram Shore Temple Visit",
  ];
  const locations = [
    "Agra",
    "Jaipur",
    "Goa",
    "Rishikesh",
    "Kerala",
    "Amritsar",
    "Udaipur",
    "Varanasi",
    "Karnataka",
    "Mysore",
    "Maharashtra",
    "Ladakh",
    "Rajasthan",
    "Mumbai",
    "Delhi",
    "Himachal",
    "West Bengal",
    "Assam",
    "Kerala",
    "Andaman",
    "Kolkata",
    "Tamil Nadu",
    "Rajasthan",
    "Tamil Nadu",
    "Tamil Nadu",
  ];

  return {
    id: `attr-${i}`,
    name: names[i % names.length],
    location: locations[i % locations.length],
    rating: 4.2 + Math.random() * 0.7,
    reviewsCount: Math.floor(Math.random() * 12000) + 500,
    price: Math.floor(Math.random() * 3000) + 800,
    duration: `${Math.floor(Math.random() * 5) + 2} hours`,
    description:
      "Experience the deep cultural roots and breathtaking landscapes of this iconic destination. This package includes a professional guide and exclusive access to key areas.",
    images: [
      `https://picsum.photos/seed/attr${i}/800/600`,
      `https://picsum.photos/seed/attr_alt${i}/800/600`,
    ],
    category: ["Tours", "Adventure", "Nature", "Heritage", "Religious"][i % 5],
    highlights: [
      "Expert Guided Tour",
      "All Entry Fees Included",
      "Photography Spots",
      "Traditional Lunch",
    ],
    includes: [
      "Entry Tickets",
      "Local Guide",
      "Bottled Water",
      "Transport Pickup",
    ],
    departurePoint: "Main Entry Gate / Hotel Lobby",
    endPoint: "Original Departure Point",
    additionalInfo: [
      "Not wheelchair accessible",
      "Carry ID proof",
      "Comfortable shoes recommended",
      "Photography charges extra",
    ],
  };
});

const FLIGHTS_DATA = Array.from({ length: 10 }).map((_, i) => ({
  id: `fl-${i}`,
  airline: ["Indigo", "Air India", "Vistara", "SpiceJet", "Akasa Air"][i % 5],
  departure: `${10 + i}:00 AM`,
  arrival: `${2 + i}:30 PM`,
  basePrice: 4500 + i * 850,
  duration: "4h 30m",
  stops: i % 2 === 0 ? 0 : 1,
}));

// --- CSS Styles (inlined) ---
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    min-height: 100vh;
    color: #1e293b;
    line-height: 1.6;
  }
  
  /* App Container */
  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  /* Header */
  .header {
    background: linear-gradient(135deg, #003580 0%, #0052ad 100%);
    color: white;
    position: sticky;
    top: 0;
    z-index: 1000;
    box-shadow: 0 8px 32px rgba(0, 53, 128, 0.2);
  }
  
  .header-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1rem;
  }
  
  @media (min-width: 768px) {
    .header-container {
      padding: 0 2rem;
    }
  }
  
  .header-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
  
  .logo {
    font-family: 'Poppins', sans-serif;
    font-size: 1.75rem;
    font-weight: 900;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  .logo-highlight {
    color: #ffd700;
  }
  
  .header-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .currency-selector {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 8px;
    cursor: pointer;
  }
  
  .nav-tabs {
    display: flex;
    overflow-x: auto;
    gap: 0.5rem;
    padding-bottom: 0.5rem;
  }
  
  .nav-tabs::-webkit-scrollbar {
    display: none;
  }
  
  .nav-tab {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-bottom: 3px solid transparent;
    white-space: nowrap;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.9);
  }
  
  .nav-tab.active {
    border-bottom-color: #ffd700;
    color: white;
  }
  
  /* Buttons */
  .btn {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    transition: all 0.3s ease;
  }
  
  .btn-primary {
    background: linear-gradient(135deg, #006ce4 0%, #0052ad 100%);
    color: white;
  }
  
  .btn-secondary {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
  
  /* Main Content */
  .main-content {
    flex: 1;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 1rem;
  }
  
  @media (min-width: 768px) {
    .main-content {
      padding: 2rem;
    }
  }
  
  /* Attraction Cards */
  .attraction-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-top: 2rem;
  }
  
  .attraction-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .attraction-card:hover {
    transform: translateY(-4px);
  }
  
  .attraction-image-container {
    height: 200px;
    overflow: hidden;
    position: relative;
  }
  
  .attraction-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .attraction-content {
    padding: 1rem;
  }
  
  .attraction-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1e293b;
  }
  
  .attraction-location {
    color: #64748b;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    gap: 0.25rem;
    margin-bottom: 0.5rem;
  }
  
  .attraction-rating {
    background: #003580;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.25rem;
  }
  
  .attraction-price {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1e293b;
    margin-top: 0.5rem;
  }
  
  /* Search Bar */
  .search-container {
    background: linear-gradient(135deg, #ffd700 0%, #ffed4e 100%);
    padding: 0.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
  }
  
  .search-box {
    background: white;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
  }
  
  .search-input {
    flex: 1;
    padding: 1rem;
    border: none;
    outline: none;
    font-size: 1rem;
  }
  
  .search-button {
    background: linear-gradient(135deg, #006ce4 0%, #0052ad 100%);
    color: white;
    border: none;
    padding: 1rem 1.5rem;
    font-weight: 600;
    cursor: pointer;
  }
  
  /* Form Elements */
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-label {
    display: block;
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #475569;
  }
  
  .form-input {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
  }
  
  /* Flight Card */
  .flight-card {
    background: white;
    border-radius: 12px;
    padding: 1rem;
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  /* Footer */
  .footer {
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
    color: white;
    padding: 2rem 1rem;
    margin-top: auto;
  }
  
  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .footer-bottom {
    text-align: center;
    padding-top: 2rem;
    margin-top: 2rem;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: #94a3b8;
  }
  
  /* Responsive */
  @media (max-width: 640px) {
    .attraction-grid {
      grid-template-columns: 1fr;
    }
    
    .search-box {
      flex-direction: column;
    }
    
    .search-button {
      width: 100%;
    }
  }
`;

// --- Components ---

const Header = ({ currentView, onNavigate }) => (
  <header className="header">
    <div className="header-container">
      <div className="header-top">
        <div className="logo" onClick={() => onNavigate(ViewType.ATTRACTIONS)}>
          Booking<span className="logo-highlight">Go</span>
        </div>
        <div className="header-actions">
          <div className="currency-selector">
            <span>INR</span>
            <img
              src="https://flagcdn.com/w20/in.png"
              alt="IN"
              className="currency-flag"
            />
          </div>
          <button className="btn btn-secondary">Register</button>
          <button className="btn btn-primary">Sign in</button>
        </div>
      </div>

      <nav className="nav-tabs">
        {[
          {
            id: ViewType.ATTRACTIONS,
            icon: "fa-map-location-dot",
            label: "Attractions",
          },
          { id: ViewType.FLIGHTS, icon: "fa-plane", label: "Flights" },
          { id: "stays", icon: "fa-bed", label: "Stays" },
          { id: "car", icon: "fa-car", label: "Car rental" },
        ].map((tab) => (
          <button
            key={tab.label}
            onClick={() => onNavigate(tab.id)}
            className={`nav-tab ${currentView === tab.id ? "active" : ""}`}
          >
            <i className={`fas ${tab.icon}`}></i>
            <span>{tab.label}</span>
          </button>
        ))}
      </nav>
    </div>
  </header>
);

const AttractionsList = ({ onSelect }) => {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search) return ATTRACTIONS;
    return ATTRACTIONS.filter(
      (a) =>
        a.name.toLowerCase().includes(search.toLowerCase()) ||
        a.location.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div>
      <div className="search-container">
        <div className="search-box">
          <div className="search-input-container">
            <i className="fas fa-location-dot search-icon"></i>
            <input
              placeholder="Where are you going?"
              className="search-input"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="search-button">
            <i className="fas fa-search"></i>
            <span>Search</span>
          </button>
        </div>
      </div>

      {search && (
        <div className="search-results">
          Found {filtered.length} attractions
        </div>
      )}

      <div className="attraction-grid">
        {filtered.map((attr) => (
          <div
            key={attr.id}
            className="attraction-card"
            onClick={() => onSelect(attr)}
          >
            <div className="attraction-image-container">
              <img
                src={attr.images[0]}
                alt={attr.name}
                className="attraction-image"
              />
              <div className="attraction-badge">
                <i className="far fa-heart"></i>
              </div>
            </div>

            <div className="attraction-content">
              <h3 className="attraction-title">{attr.name}</h3>
              <p className="attraction-location">
                <i className="fas fa-location-dot"></i>
                {attr.location}
              </p>

              <div className="attraction-meta">
                <span className="attraction-rating">
                  <i className="fas fa-star"></i> {attr.rating.toFixed(1)}
                </span>
              </div>

              <div className="attraction-price-container">
                <div>
                  <div className="attraction-price-label">From</div>
                  <div className="attraction-price">
                    ₹{attr.price.toLocaleString()}
                  </div>
                </div>
                <button className="btn btn-outline">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const AttractionDetail = ({ attraction, onBack, onBook }) => {
  const [adults, setAdults] = useState(1);
  const [selectedTime, setSelectedTime] = useState("10:00 AM");
  const [selectedDate, setSelectedDate] = useState("2024-01-20");

  const totalPrice = attraction.price * adults;

  return (
    <div>
      <button onClick={onBack} className="btn btn-secondary mb-4">
        <i className="fas fa-arrow-left mr-2"></i> Back
      </button>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-3xl font-bold mb-4">{attraction.name}</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-8">
            <div className="lg:col-span-2">
              <img
                src={attraction.images[0]}
                alt={attraction.name}
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="space-y-4">
              <img
                src={attraction.images[1]}
                alt={attraction.name}
                className="w-full h-auto rounded-lg"
              />
              <div className="bg-gray-100 rounded-lg p-4 text-center">
                <i className="fas fa-images text-2xl text-gray-400 mb-2"></i>
                <p className="font-semibold">+12 photos</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {attraction.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <i className="fas fa-check text-green-500 mt-1"></i>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:w-96">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="mb-6">
              <div className="text-sm text-gray-600">Starting from</div>
              <div className="text-3xl font-bold">
                ₹{attraction.price.toLocaleString()}
              </div>
            </div>

            <div className="space-y-6">
              <div className="form-group">
                <label className="form-label">Select Date</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Select Time</label>
                <div className="grid grid-cols-2 gap-2">
                  {["10:00 AM", "12:00 PM", "02:00 PM", "04:00 PM"].map(
                    (time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`py-2 rounded border ${
                          selectedTime === time
                            ? "bg-blue-600 text-white"
                            : "border-gray-300"
                        }`}
                      >
                        {time}
                      </button>
                    )
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Travelers</label>
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded">
                  <span className="font-semibold">Adults</span>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setAdults(Math.max(1, adults - 1))}
                      className="w-8 h-8 rounded-full border border-blue-600 text-blue-600"
                    >
                      <i className="fas fa-minus"></i>
                    </button>
                    <span className="font-bold text-xl">{adults}</span>
                    <button
                      onClick={() => setAdults(adults + 1)}
                      className="w-8 h-8 rounded-full border border-blue-600 text-blue-600"
                    >
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold">Total</span>
                  <span className="text-2xl font-bold">
                    ₹{totalPrice.toLocaleString()}
                  </span>
                </div>
                <button
                  onClick={() =>
                    onBook({ time: selectedTime, tickets: { adult: adults } })
                  }
                  className="btn btn-primary w-full py-3"
                >
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UserDetailsForm = ({ onBack, onSubmit }) => {
  const [form, setForm] = useState({
    firstName: "Dushyant",
    lastName: "Kumar",
    email: "dushyant@example.com",
    phone: "9284556431",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div>
      <button onClick={onBack} className="btn btn-secondary mb-6">
        <i className="fas fa-arrow-left mr-2"></i> Back
      </button>

      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Who's traveling?</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="form-label">First name</label>
              <input
                type="text"
                value={form.firstName}
                onChange={(e) =>
                  setForm({ ...form, firstName: e.target.value })
                }
                className="form-input"
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label">Last name</label>
              <input
                type="text"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="form-input"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email address</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">Phone number</label>
            <div className="flex">
              <span className="bg-gray-100 border border-r-0 rounded-l px-4 py-3">
                +91
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="form-input rounded-l-none"
                required
              />
            </div>
          </div>

          <button type="submit" className="btn btn-primary w-full py-3">
            Continue to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

const PaymentPage = ({ onBack, onComplete }) => {
  const [method, setMethod] = useState("upi");

  return (
    <div>
      <button onClick={onBack} className="btn btn-secondary mb-6">
        <i className="fas fa-arrow-left mr-2"></i> Back
      </button>

      <div className="bg-white rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Secure Payment</h1>

        <div className="flex gap-4 mb-6">
          {["upi", "card", "netbanking"].map((m) => (
            <button
              key={m}
              onClick={() => setMethod(m)}
              className={`px-4 py-2 rounded ${
                method === m ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              {m.toUpperCase()}
            </button>
          ))}
        </div>

        {method === "upi" && (
          <div className="text-center p-8">
            <div className="w-48 h-48 bg-gray-100 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <i className="fas fa-qrcode text-6xl text-gray-400"></i>
            </div>
            <p className="font-bold mb-4">Scan QR Code to Pay</p>
            <input
              placeholder="Enter UPI ID"
              className="form-input text-center"
            />
          </div>
        )}

        <button
          onClick={onComplete}
          className="btn btn-primary w-full py-3 mt-6"
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
};

const FlightSearch = ({ onSearch }) => {
  const [type, setType] = useState("Round-trip");
  const [cls, setCls] = useState("Economy");

  return (
    <div>
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Find Flights</h1>
        <p className="text-gray-600">Discover your next destination</p>
      </div>

      <div className="bg-white rounded-lg p-6">
        <div className="flex gap-4 mb-6">
          {["Round-trip", "One-way"].map((t) => (
            <button
              key={t}
              onClick={() => setType(t)}
              className={`px-4 py-2 rounded ${
                type === t ? "bg-blue-600 text-white" : "bg-gray-100"
              }`}
            >
              {t}
            </button>
          ))}

          <select
            value={cls}
            onChange={(e) => setCls(e.target.value)}
            className="bg-gray-100 px-4 py-2 rounded"
          >
            <option>Economy</option>
            <option>Business</option>
            <option>First Class</option>
          </select>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div>
            <label className="form-label">From</label>
            <div className="flex items-center gap-2">
              <i className="fas fa-plane-departure text-blue-500"></i>
              <input
                type="text"
                defaultValue="Mumbai (BOM)"
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="form-label">To</label>
            <div className="flex items-center gap-2">
              <i className="fas fa-plane-arrival text-green-500"></i>
              <input
                type="text"
                defaultValue="London (LHR)"
                className="form-input"
              />
            </div>
          </div>

          <div>
            <label className="form-label">Dates</label>
            <div className="flex items-center gap-2">
              <i className="far fa-calendar text-blue-500"></i>
              <input
                type="text"
                defaultValue="20 Jan - 29 Jan"
                className="form-input"
                readOnly
              />
            </div>
          </div>
        </div>

        <button
          onClick={() => onSearch({ flightClass: cls })}
          className="btn btn-primary w-full py-3"
        >
          Search Flights
        </button>
      </div>
    </div>
  );
};

const FlightResults = ({ flightClass, onSelect, onBack }) => {
  const multiplier =
    flightClass === "Business" ? 2.5 : flightClass === "First Class" ? 5 : 1;

  return (
    <div>
      <button onClick={onBack} className="btn btn-secondary mb-6">
        <i className="fas fa-arrow-left mr-2"></i> Back
      </button>

      <h1 className="text-2xl font-bold mb-6">Flights to London</h1>

      <div className="space-y-4">
        {FLIGHTS_DATA.map((flight) => {
          const price = flight.basePrice * multiplier;
          return (
            <div
              key={flight.id}
              className="flight-card"
              onClick={() => onSelect(flight)}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="font-bold text-blue-600">
                        {flight.airline.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-bold">{flight.airline}</h3>
                      <p className="text-sm text-gray-600">
                        {flight.stops === 0 ? "Direct" : `${flight.stops} Stop`}{" "}
                        • {flight.duration}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xl font-bold">
                        {flight.departure}
                      </div>
                      <div className="text-sm text-gray-600">BOM</div>
                    </div>

                    <div className="flex-1 px-4">
                      <div className="relative">
                        <div className="h-1 bg-gray-200"></div>
                        <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <i className="fas fa-plane text-blue-600"></i>
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="text-xl font-bold">{flight.arrival}</div>
                      <div className="text-sm text-gray-600">LHR</div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">
                      ₹{price.toLocaleString()}
                    </div>
                    <button className="btn btn-primary mt-2">Select</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const SuccessPage = ({ onHome }) => {
  return (
    <div className="text-center">
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
        <i className="fas fa-check text-green-600 text-3xl"></i>
      </div>

      <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
      <p className="text-gray-600 mb-8">
        Your booking has been successfully processed.
      </p>

      <button onClick={onHome} className="btn btn-primary">
        Back to Home
      </button>
    </div>
  );
};

// --- Root App ---
const App = () => {
  const [view, setView] = useState(ViewType.ATTRACTIONS);
  const [data, setData] = useState({});

  const navigate = (next, updateData = {}) => {
    setData((prev) => ({ ...prev, ...updateData }));
    setView(next);
    window.scrollTo(0, 0);
  };

  const goBack = () => {
    // Simple back navigation - you can enhance this with a history stack
    if (
      view === ViewType.ATTRACTION_DETAIL ||
      view === ViewType.USER_DETAILS ||
      view === ViewType.PAYMENT
    ) {
      setView(ViewType.ATTRACTIONS);
    } else if (view === ViewType.FLIGHT_RESULTS) {
      setView(ViewType.FLIGHTS);
    }
  };

  useEffect(() => {
    // Add Font Awesome
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
    document.head.appendChild(link);

    // Add styles
    const styleElement = document.createElement("style");
    styleElement.innerHTML = styles;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="app-container">
      <Header currentView={view} onNavigate={navigate} />

      <main className="main-content">
        {view === ViewType.ATTRACTIONS && (
          <AttractionsList
            onSelect={(a) =>
              navigate(ViewType.ATTRACTION_DETAIL, { attraction: a })
            }
          />
        )}
        {view === ViewType.ATTRACTION_DETAIL && (
          <AttractionDetail
            attraction={data.attraction}
            onBack={goBack}
            onBook={(d) => navigate(ViewType.USER_DETAILS, d)}
          />
        )}
        {view === ViewType.USER_DETAILS && (
          <UserDetailsForm
            onBack={goBack}
            onSubmit={(d) => navigate(ViewType.PAYMENT, { userDetails: d })}
          />
        )}
        {view === ViewType.PAYMENT && (
          <PaymentPage
            onBack={goBack}
            onComplete={() => navigate(ViewType.BOOKING_SUCCESS)}
          />
        )}
        {view === ViewType.FLIGHTS && (
          <FlightSearch
            onSearch={(p) => navigate(ViewType.FLIGHT_RESULTS, p)}
          />
        )}
        {view === ViewType.FLIGHT_RESULTS && (
          <FlightResults
            flightClass={data.flightClass || "Economy"}
            onSelect={(f) => navigate(ViewType.USER_DETAILS, { flight: f })}
            onBack={goBack}
          />
        )}
        {view === ViewType.BOOKING_SUCCESS && (
          <SuccessPage onHome={() => navigate(ViewType.ATTRACTIONS)} />
        )}
      </main>

      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="logo">
              Booking<span className="logo-highlight">Go</span>
            </div>
            <p className="mt-2 text-gray-400">
              Your travel companion for amazing experiences.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Help Center</li>
              <li>Safety Information</li>
              <li>Cancellation Options</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>support@bookinggo.com</li>
              <li>+91 1800-123-4567</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 BookingGo.com. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

// --- Mount ---
export default App;
