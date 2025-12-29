// // import React from "react";
// // import { Routes, Route, Navigate } from "react-router-dom";

// // import Header from "./components/Header";
// // import Footer from "./components/Footer";

// // import HomePage from "./Pages/HomePage";
// // import SearchPage from "./Pages/SearchPage";
// // import OffersPage from "./Pages/OffersPage";
// // import IndiaPage from "./Pages/IndiaPage";
// // import PropertiesPage from "./Pages/PropertiesPage";
// // import HotelDetails from "./Pages/HotelDeatils";
// // import HotelSearch from "./Pages/HotelSearch";
// // import HotelBooking from "./Pages/HotelBooking";
// // import HotelPayment from "./Pages/HotelPayment";
// // import HotelConfirmation from "./Pages/HotelConfirmation";
// // import Flights from "./Pages/Flights";
// // import SearchBox from "./components/SearchBox";
// // import Sign from "./components/Sigin";
// // import Register from "./components/Register";
// // import CountrySelection from "./Pages/CountrySelection";
// // import BookingFlightResults from "./Pages/BookingFlightResults";
// // import FlightSeatSelection from "./Pages/FlightSeatSelection";
// // import FlightClassSelection from "./Pages/FlightClassSelection";
// // import FlightPayment from "./Pages/FlightPayment";
// // import FlightConfirmation from "./Pages/FlightConfirmation";
// // import FlightsHotel from "./Pages/FlightsHotel";
// // import CarRental from "./Pages/CarRental";
// // import CarRentalResults from "./Pages/CarRentalResults";
// // import Attractions from "./Pages/Attractions";
// // import AirportTaxi from "./Pages/AirportTexi";

// // import "./components/style.css";
// // import "./App.css";
// // import FlightSearch from "./Pages/FlightSearch";
// // import AttractionCard from "./Pages/AttractionCard";

// // function App() {
// //   return (
// //     <div className="app">
// //       <Header />
// //       <main>
// //         <Routes>
// //           <Route path="/" element={<HomePage />} />
// //           <Route path="/search" element={<SearchPage />} />
// //           <Route path="/offers" element={<OffersPage />} />
// //           <Route path="/explore-india" element={<IndiaPage />} />
// //           <Route path="/properties" element={<PropertiesPage />} />
// //           <Route path="/searchbox" element={<SearchBox />} />
// //           <Route path="/searchpage" element={<SearchPage />} />
// //           <Route path="/hotel" element={<HotelDetails />} />
// //           <Route path="/search-results" element={<HotelSearch />} />
// //           <Route path="/flights" element={<Flights />} />
// //           <Route path="/hotel/:id" element={<HotelDetails />} />

// //           {/* Hotel Routes */}
// //           <Route path="/hotel-booking" element={<HotelBooking />} />
// //           <Route path="/hotel-payment" element={<HotelPayment />} />
// //           <Route path="/hotel-confirmation" element={<HotelConfirmation />} />

// //           {/* Authentication Routes */}
// //           <Route path="/login" element={<Sign />} />
// //           <Route path="/sign" element={<Sign />} />
// //           <Route path="/register" element={<Register />} />
// //           <Route path="/country-selection" element={<CountrySelection />} />

// //           {/* Flight Routes */}
// //           <Route path="/flight-results" element={<BookingFlightResults />} />
// //           <Route
// //             path="/flight-seat-selection"
// //             element={<FlightSeatSelection />}
// //           />
// //           <Route
// //             path="/flight-class-selection"
// //             element={<FlightClassSelection />}
// //           />
// //           <Route path="/flight-payment" element={<FlightPayment />} />
// //           <Route path="/flight-confirmation" element={<FlightConfirmation />} />
// //           <Route path="/flight-hotel" element={<FlightsHotel />} />

// //           {/* Car Rental Routes */}
// //           <Route path="/car-rental" element={<CarRental />} />
// //           <Route path="/car-rental/results" element={<CarRentalResults />} />

// //           {/* Other Routes */}
// //           <Route path="/attractions" element={<Attractions />} />
// //           <Route path="/airport-taxis" element={<AirportTaxi />} />

// //           <Route path="/hotel/:id/gallery" element={<HotelDetails />} />
// //           <Route path="/hotel/:id/reviews" element={<HotelSearch />} />
// //           <Route path="/hotel/:id/location" element={<HotelPayment />} />
// //           <Route path="/hotel/:id/facilities" element={<HotelDetails />} />
// //           <Route path="/hotel/:id/policies" element={<HotelDetails />} />
// //           <Route path="FlightSearch" element={<FlightSearch />} />
// //           <Route path="/flight-search" element={<FlightCard />} />
// //           <Route path="/flight-card" element={<AttractionCard />} />
// //           <Route path="/attraction-card" element={<AttractionCard1 />} />
// //           <Route path="*" element={<Navigate to="/" replace />} />
// //         </Routes>
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// import Header from "./components/Header";
// import Footer from "./components/Footer";

// import HomePage from "./Pages/HomePage";
// import SearchPage from "./Pages/SearchPage";
// import OffersPage from "./Pages/OffersPage";
// import IndiaPage from "./Pages/IndiaPage";
// import PropertiesPage from "./Pages/PropertiesPage";

// import HotelDetails from "./Pages/HotelDeatils";
// import HotelSearch from "./Pages/HotelSearch";
// import HotelBooking from "./Pages/HotelBooking";
// import HotelPayment from "./Pages/HotelPayment";
// import HotelConfirmation from "./Pages/HotelConfirmation";
// import HotelBookingPage from "./components/GhotelSearch";

// import Flights from "./Pages/Flights";
// import FlightSearch from "./Pages/FlightSearch";
// import BookingFlightResults from "./Pages/BookingFlightResults";
// import FlightSeatSelection from "./Pages/FlightSeatSelection";
// import FlightClassSelection from "./Pages/FlightClassSelection";
// import FlightPayment from "./Pages/FlightPayment";
// import FlightConfirmation from "./Pages/FlightConfirmation";
// import FlightsHotel from "./Pages/FlightsHotel";

// import SearchBox from "./components/SearchBox";
// import Sign from "./components/Sigin";
// import Register from "./components/Register";
// import CountrySelection from "./Pages/CountrySelection";

// import CarRental from "./Pages/CarRental";
// import CarRentalResults from "./Pages/CarRentalResults";

// import Attractions from "./Pages/Attractions";
// import AirportTaxi from "./Pages/AirportTexi";
// import AttractionCard1 from "./Pages/AttractionCard1";
// import GHotelSearch from "./components/GhotelSearch";
// import HotelDetailsCard from "./Pages/HotelDetailsCard";
// import flightsData from "./Pages/FlightsData";

// import "./components/style.css";
// import "./App.css";

// function App() {
//   return (
//     <div className="app">
//       <Header />

//       <main>
//         <Routes>
//           {/* Home */}
//           <Route path="/" element={<HomePage />} />
//           {/* Search */}
//           <Route path="/search" element={<SearchPage />} />
//           <Route path="/searchbox" element={<SearchBox />} />
//           <Route path="/searchpage" element={<SearchPage />} />
//           {/* Offers & Explore */}
//           <Route path="/offers" element={<OffersPage />} />
//           <Route path="/explore-india" element={<IndiaPage />} />
//           {/* Properties & Hotels */}
//           <Route path="/properties" element={<PropertiesPage />} />
//           <Route path="/hotel/:id" element={<HotelDetails />} />
//           <Route path="/search-results" element={<HotelSearch />} />
//           <Route path="/hotel-booking" element={<HotelBooking />} />
//           <Route path="/hotel-payment" element={<HotelPayment />} />
//           <Route path="/hotel-confirmation" element={<HotelConfirmation />} />
//           {/* Hotel Sub Routes */}
//           <Route path="/hotel/:id/gallery" element={<HotelDetails />} />
//           <Route path="/hotel/:id/reviews" element={<HotelSearch />} />

//           <Route path="/hotel/:id/location" element={<HotelPayment />} />
//           <Route path="/hotel/:id/facilities" element={<HotelDetails />} />
//           <Route path="/hotel/:id/policies" element={<HotelDetails />} />
//           {/* Auth */}
//           <Route path="/login" element={<Sign />} />
//           <Route path="/sign" element={<Sign />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/country-selection" element={<CountrySelection />} />
//           {/* Flights */}
//           <Route path="/flights" element={<Flights />} />
//           <Route path="/flight-search" element={<FlightSearch />} />
//           <Route path="/flight-results" element={<BookingFlightResults />} />
//           <Route path="/flights-Data" element={<flightsData />} />

//           <Route path="/hotel/:id" element={<HotelDetails />} />
//           <Route path="/hotel-details-card" element={<HotelDetailsCard />} />
//           <Route path="/hotel-booking-page" element={<HotelBookingPage />} />

//           <Route
//             path="/flight-seat-selection"
//             element={<FlightSeatSelection />}
//           />
//           <Route
//             path="/flight-class-selection"
//             element={<FlightClassSelection />}
//           />
//           <Route path="/flight-payment" element={<FlightPayment />} />
//           <Route path="/flight-confirmation" element={<FlightConfirmation />} />
//           <Route path="/flights-hotel" element={<FlightsHotel />} />
//           {/* Car Rental */}
//           <Route path="/car-rental" element={<CarRental />} />
//           <Route path="/car-rental/results" element={<CarRentalResults />} />
//           {/* Attractions & Taxi */}
//           <Route path="/attractions" element={<Attractions />} />
//           <Route path="/airport-taxis" element={<AirportTaxi />} />
//           <Route path="/hotel/:id" element={<HotelDetails />} />
//           <Route path="/attraction-card" element={<AttractionCard1 />} />
//           <Route path="/hotel-details-card" element={<HotelDetailsCard />} />
//           {/* Fallback */}
//           <Route path="/Ghotels" element={<GHotelSearch />} />

//           <Route path="*" element={<Navigate to="/" replace />} />
//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

// Pages
import HomePage from "./Pages/HomePage";
import SearchPage from "./Pages/SearchPage";
import OffersPage from "./Pages/OffersPage";
import IndiaPage from "./Pages/IndiaPage";
import PropertiesPage from "./Pages/PropertiesPage";

// Hotels
import HotelDetails from "./Pages/HotelDeatils";
import HotelSearch from "./Pages/HotelSearch";
import HotelBooking from "./Pages/HotelBooking";
import HotelPayment from "./Pages/HotelPayment";
import HotelConfirmation from "./Pages/HotelConfirmation";
import HotelDetailsCard from "./Pages/HotelDetailsCard";

// Flights
import Flights from "./Pages/Flights";
import FlightSearch from "./Pages/FlightSearch";
import BookingFlightResults from "./Pages/BookingFlightResults";
import FlightSeatSelection from "./Pages/FlightSeatSelection";
import FlightClassSelection from "./Pages/FlightClassSelection";
import FlightPayment from "./Pages/FlightPayment";
import FlightConfirmation from "./Pages/FlightConfirmation";
import FlightsHotel from "./Pages/FlightsHotel";
import FlightsData from "./Pages/FlightsData";

// Auth & Utils
import SearchBox from "./components/SearchBox";
import Sign from "./components/Sigin";
import Register from "./components/Register";
import CountrySelection from "./Pages/CountrySelection";

// Car Rental
import CarRental from "./Pages/CarRental";
import CarRentalResults from "./Pages/CarRentalResults";

// Attractions
import Attractions from "./Pages/Attractions";
import AirportTaxi from "./Pages/AirportTexi";
import AttractionCard1 from "./Pages/AttractionCard1";

// ✅ GhotelSearch exports FlightBookingSystem (default)
import GhotelSearch from "./components/GhotelSearch";
import Attractive1 from "./Pages/Attractive1";

import "./components/style.css";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* Search */}
          <Route path="/search" element={<SearchPage />} />
          <Route path="/searchbox" element={<SearchBox />} />

          {/* Offers & Explore */}
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/explore-india" element={<IndiaPage />} />

          {/* Properties & Hotels */}
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/search-results" element={<HotelSearch />} />
          <Route path="/hotel/:id" element={<HotelDetails />} />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/hotel-payment" element={<HotelPayment />} />
          <Route path="/hotel-confirmation" element={<HotelConfirmation />} />
          <Route path="/hotel-details-card" element={<HotelDetailsCard />} />
          <Route path="/ghotel-search" element={<GhotelSearch />} />

          {/* Auth */}
          <Route path="/login" element={<Sign />} />
          <Route path="/register" element={<Register />} />
          <Route path="/country-selection" element={<CountrySelection />} />

          {/* Flights */}
          <Route path="/flights" element={<Flights />} />
          <Route path="/flight-search" element={<FlightSearch />} />
          <Route path="/flight-results" element={<BookingFlightResults />} />
          <Route path="/flights-data" element={<FlightsData />} />
          <Route
            path="/flight-seat-selection"
            element={<FlightSeatSelection />}
          />
          <Route
            path="/flight-class-selection"
            element={<FlightClassSelection />}
          />
          {/* <Route path="/Attractive1" element={<Attractive1 />} /> */}
          <Route path="/Attractive1" element={<Attractive1 />} />

          <Route path="/flight-payment" element={<FlightPayment />} />
          <Route path="/flight-confirmation" element={<FlightConfirmation />} />
          <Route path="/flights-hotel" element={<FlightsHotel />} />

          {/* Flight Booking System (GhotelSearch.jsx) */}
          {/* <Route path="/flight-booking" element={<FlightBookingSystem />} /> */}

          {/* Car Rental */}
          <Route path="/car-rental" element={<CarRental />} />
          <Route path="/car-rental/results" element={<CarRentalResults />} />

          {/* Attractions & Taxi */}
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/airport-taxis" element={<AirportTaxi />} />
          <Route path="/attraction-card" element={<AttractionCard1 />} />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
