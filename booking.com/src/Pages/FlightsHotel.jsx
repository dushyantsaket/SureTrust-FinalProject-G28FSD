import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FlightHotel.css";

const BookingPage = () => {
  const navigate = useNavigate();
  const [departure, setDeparture] = useState("Raipur (RPR)");
  const [destination, setDestination] = useState("New Delhi");
  const [dates, setDates] = useState("16 Dec - 19 Dec");
  const [travellers, setTravellers] = useState(
    "2 travellers - 1 room - Any class"
  );
  const [partialStay, setPartialStay] = useState(false);

  // Destination data with proper paths
  const destinations = [
    {
      id: 1,
      name: "Jaipur, India",
      price: "From ₹12,816",
      image:
        "https://res.cloudinary.com/lastminute-contenthub/image/upload/c_lfill,ar_10:6/c_limit,w_1920,h_999999/q_auto:eco/f_auto/v1/DAM/Photos/Destinations/Asia/India/shutterstock_2157917463.jpg",
      path: "/flight-hotel/jaipur",
    },
    {
      id: 2,
      name: "Goa, India",
      price: "From ₹15,198",
      image:
        "https://res.cloudinary.com/lastminute-contenthub/image/upload/c_lfill,ar_10:6/c_limit,w_1920,h_999999/q_auto:eco/f_auto/v1/DAM/Photos/Destinations/Asia/India/Goa/eyeem-23764952-123550096.jpg",
      path: "/flight-hotel/goa",
    },
    {
      id: 3,
      name: "Arambol, India",
      price: "From ₹20,915",
      image:
        "https://res.cloudinary.com/lastminute-contenthub/image/upload/c_lfill,ar_10:6/c_limit,w_1920,h_999999/q_auto:eco/f_auto/v1/DAM/Photos/Other/Sports/twenty20_e819bc78-f04a-4f3e-99d3-532ee7281146-v502.jpg",
      path: "/flight-hotel/arambol",
    },
  ];

  const handleDestinationClick = (destination) => {
    navigate(destination.path, { state: { destination } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate to search results with form data
    navigate("/flight-hotel/results", {
      state: {
        departure,
        destination,
        dates,
        travellers,
        partialStay,
      },
    });
  };

  return (
    <div className="booking-page">
      {/* Header/Navigation */}
      <header className="header">
        <div className="logo-container">
          <img
            src="https://res.cloudinary.com/lastminute-contenthub/v1/DAM/Artwork/White%20labels/Bookingcom/lastminutecom/2021/SVG/Booking_lm"
            alt="Booking.com powered by lastminute.com"
            className="logo"
          />
        </div>
        <div className="header-actions">
          <button className="country-selector" aria-label="Select your country">
            <svg
              viewBox="0 0 52 52"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d="M15.786,18H25V5.0507a20.9573,20.9573,0,0,0-2.6927.295C19.3623,7.5239,16.9614,12.1863,15.786,18Z"></path>
              <path d="M18.3633,6.4587A21.0967,21.0967,0,0,0,6.5919,18h7.1247A27.7064,27.7064,0,0,1,18.3633,6.4587Z"></path>
              <path d="M27,18h9.214c-1.1754-5.8137-3.5763-10.4761-6.5213-12.6543A20.9573,20.9573,0,0,0,27,5.0507Z"></path>
              <path d="M45.4081,18A21.0967,21.0967,0,0,0,33.6367,6.4587,27.7064,27.7064,0,0,1,38.2834,18Z"></path>
              <path d="M39,26a45.0356,45.0356,0,0,1-.3944,6h7.51a20.795,20.795,0,0,0,0-12h-7.51A45.0356,45.0356,0,0,1,39,26Z"></path>
              <path d="M15,26a41.2318,41.2318,0,0,0,.4374,6H25V20H15.4374A41.2318,41.2318,0,0,0,15,26Z"></path>
              <path d="M13,26a45.0356,45.0356,0,0,1,.3944-6h-7.51a20.795,20.795,0,0,0,0,12h7.51A45.0356,45.0356,0,0,1,13,26Z"></path>
              <path d="M33.613,45.55A21.0962,21.0962,0,0,0,45.4081,34H38.2834A27.5847,27.5847,0,0,1,33.613,45.55Z"></path>
              <path d="M27,20V32h9.5626A41.2318,41.2318,0,0,0,37,26a41.2318,41.2318,0,0,0-.4374-6Z"></path>
              <path d="M6.5919,34A21.0962,21.0962,0,0,0,18.387,45.55,27.5847,27.5847,0,0,1,13.7166,34Z"></path>
              <path d="M36.214,34H27V46.9493a20.9573,20.9573,0,0,0,2.6927-.295C32.6377,44.4761,35.0386,39.8137,36.214,34Z"></path>
              <path d="M25,34H15.786c1.1754,5.8137,3.5763,10.4761,6.5213,12.6543A20.9573,20.9573,0,0,0,25,46.9493Z"></path>
            </svg>
          </button>
          <button className="account-button" aria-label="Account">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Your entire holiday in one click</h1>
          <h2>Book Flight + Hotel</h2>
          <div className="booking-logo">
            <img
              src="https://res.cloudinary.com/lastminute-contenthub/v1/DAM/Artwork/White%20labels/Bookingcom/lastminutecom/2023/booking-logo_withe-01"
              alt="Booking.com"
            />
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="search-form-section">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="form-tab">
            <h3>Flight + Hotel</h3>
          </div>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="departure">Departure</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="departure"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  placeholder="City or airport"
                  className="form-input"
                />
                <button
                  type="button"
                  className="clear-button"
                  onClick={() => setDeparture("")}
                >
                  <svg
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M26 5C14.387 5 5 14.387 5 26C5 37.613 14.387 47 26 47C37.613 47 47 37.613 47 26C47 14.387 37.613 5 26 5ZM36.5 33.539L33.539 36.5L26 28.961L18.461 36.5L15.5 33.539L23.039 26L15.5 18.461L18.461 15.5L26 23.039L33.539 15.5L36.5 18.461L28.961 26L36.5 33.539Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="destination">Destination</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  id="destination"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  placeholder="Where do you want to go?"
                  className="form-input"
                />
                <button
                  type="button"
                  className="clear-button"
                  onClick={() => setDestination("")}
                >
                  <svg
                    viewBox="0 0 52 52"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                  >
                    <path d="M26 5C14.387 5 5 14.387 5 26C5 37.613 14.387 47 26 47C37.613 47 47 37.613 47 26C47 14.387 37.613 5 26 5ZM36.5 33.539L33.539 36.5L26 28.961L18.461 36.5L15.5 33.539L23.039 26L15.5 18.461L18.461 15.5L26 23.039L33.539 15.5L36.5 18.461L28.961 26L36.5 33.539Z"></path>
                  </svg>
                </button>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="dates">When?</label>
              <button type="button" className="date-button" id="dates">
                <span>{dates}</span>
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="travellers">Travellers/Flight class</label>
              <button
                type="button"
                className="travellers-button"
                id="travellers"
              >
                <span>{travellers}</span>
              </button>
            </div>
          </div>

          <div className="partial-stay">
            <input
              type="checkbox"
              id="partialStay"
              checked={partialStay}
              onChange={(e) => setPartialStay(e.target.checked)}
            />
            <label htmlFor="partialStay">
              I only need a stay for part of my trip
            </label>
          </div>

          <button type="submit" className="submit-button" aria-label="Find">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d="M7.58878 8.55636C7.896 8.09741 7.77299 7.47631 7.31403 7.1691C6.85508 6.86188 6.23398 6.98489 5.92677 7.44385C5.34139 8.31835 5 9.37088 5 10.5001C5 11.6293 5.34139 12.6819 5.92677 13.5564C6.23398 14.0153 6.85508 14.1383 7.31403 13.8311C7.77299 13.5239 7.896 12.9028 7.58878 12.4438C7.21688 11.8883 7 11.221 7 10.5001C7 9.77919 7.21688 9.11196 7.58878 8.55636Z"></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.5 2C5.80557 2 2 5.80558 2 10.5C2 15.1944 5.80557 19 10.5 19C12.4864 19 14.3149 18.3176 15.7617 17.176L19.7929 21.2071C20.1834 21.5976 20.8166 21.5976 21.2071 21.2071C21.5976 20.8166 21.5976 20.1834 21.2071 19.7929L17.176 15.7618C18.3176 14.3149 19 12.4865 19 10.5C19 5.80558 15.1944 2 10.5 2ZM4 10.5C4 6.91015 6.91014 4 10.5 4C14.0898 4 17 6.91015 17 10.5C17 12.2952 16.2735 13.9188 15.0962 15.0962C13.9188 16.2736 12.2952 17 10.5 17C6.91014 17 4 14.0899 4 10.5Z"
              ></path>
            </svg>
            <span>Find</span>
          </button>
        </form>
      </section>

      {/* Destinations Section */}
      <section className="destinations-section">
        <h2>Discover our hottest destinations</h2>
        <div className="destinations-grid">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              className="destination-card"
              onClick={() => handleDestinationClick(dest)}
              style={{ cursor: "pointer" }}
            >
              <figure className="destination-image">
                <img
                  src={dest.image}
                  alt={dest.name}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x300/003b95/ffffff?text=" +
                      dest.name;
                  }}
                />
              </figure>
              <div className="destination-content">
                <h3>{dest.name}</h3>
                <span className="destination-price">{dest.price}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <button className="nav-button" disabled>
            <svg
              viewBox="0 0 52 52"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d="M35.3805 3.80658C35.0925 3.53768 34.7544 3.32816 34.3854 3.18999C34.0164 3.05181 33.6238 2.9877 33.23 3.0013C32.8363 3.0149 32.449 3.10596 32.0905 3.26927C31.7319 3.43257 31.409 3.66493 31.1403 3.95306L12.4733 23.9531C11.9548 24.5086 11.6665 25.2401 11.6665 25.9999C11.6665 26.7598 11.9548 27.4913 12.4733 28.0468L31.1403 48.0468C31.6831 48.6285 32.4349 48.9708 33.2301 48.9982C34.0253 49.0257 34.7988 48.7362 35.3805 48.1933C35.9622 47.6504 36.3045 46.8987 36.3319 46.1035C36.3594 45.3083 36.0699 44.5348 35.527 43.9531L18.7701 25.9999L35.527 8.04682C36.0698 7.4651 36.3594 6.69156 36.3319 5.89636C36.3044 5.10117 35.9622 4.34945 35.3805 3.80658Z"></path>
            </svg>
          </button>
          <button className="nav-button" disabled>
            <svg
              viewBox="0 0 52 52"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path d="M20.86 3.95321C20.5912 3.66518 20.2683 3.43291 19.9097 3.26966C19.5511 3.10641 19.1639 3.01539 18.7702 3.00179C17.975 2.97432 17.2014 3.26387 16.6197 3.80673C16.038 4.3496 15.6958 5.10132 15.6683 5.89652C15.6408 6.69172 15.9304 7.46526 16.4732 8.04697L33.2301 26.0001L16.4732 43.9532C15.9304 44.5349 15.6408 45.3085 15.6683 46.1037C15.6958 46.8989 16.038 47.6506 16.6197 48.1935C17.2014 48.7363 17.975 49.0259 18.7702 48.9984C19.5654 48.9709 20.3171 48.6287 20.86 48.047L39.527 28.047C40.0454 27.4915 40.3337 26.7599 40.3337 26.0001C40.3337 25.2403 40.0454 24.5087 39.527 23.9532L20.86 3.95321Z"></path>
            </svg>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <a
              href="https://res.cloudinary.com/lastminute-contenthub/image/upload/v1708963135/DAM/Legal/Whitelabels/Booking/IN/terms-and-conditions.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              General conditions
            </a>
          </div>
          <div className="footer-column">
            <a
              href="https://booking-in.lastminute.com/en/info/accessibility"
              target="_blank"
              rel="noopener noreferrer"
            >
              Accessibility
            </a>
            <a
              href="https://res.cloudinary.com/lastminute-contenthub/image/upload/v1708963036/DAM/Legal/Whitelabels/Booking/IN/privacy-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy policy
            </a>
          </div>
          <div className="footer-column">
            <a
              href="https://corporate.lastminute.com/fraud-prevention/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fraud Prevention
            </a>
            <a
              href="https://res.cloudinary.com/lastminute-contenthub/image/upload/v1/DAM/Legal/Whitelabels/Booking/IN/cookie-policy.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cookie policy
            </a>
          </div>
          <div className="footer-column">
            <a href="#">Manage cookies</a>
          </div>
          <div className="footer-column">
            <a
              href="https://booking-in.lastminute.com/en/info/useful-information"
              target="_blank"
              rel="noopener noreferrer"
            >
              Useful information
            </a>
          </div>
        </div>

        <div className="footer-legal">
          <p>
            This website is property of BravoNext, S.A headquartered in Vicolo
            de' Calvi, 2, 6830, Chiasso, Switzerland (Company/VAT num.
            CHE-115.704.228), a company belonging to lm Group. © 2025 . All
            rights reserved. The services provided on this website are made
            available by lastminute.com group and its Partners. All the travel
            related products are intermediated or organised by Bravoventure
            India Pvt Ltd. with registered office at "3rd Floor, Wing B, Etamin
            Block, Exora Business Park Kadubeesanahalli Village, Varthur Hobli,
            Outer Ring Road Bengaluru - 560103 India". "lastminute.com",
            "lastminute", "LM", "Top Secret Hotels" and "Top Secret" are all
            registered trademarks owned by a company of lastminute.com group.npm
            BravoNext, S.A. and Bravoventure India Private Ltd are not
            responsible for content on external Web sites.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default BookingPage;
