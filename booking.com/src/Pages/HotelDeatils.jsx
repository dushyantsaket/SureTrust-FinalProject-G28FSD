import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import "./HotelDetails.css";

const fakeHotels = [
  {
    id: 1,
    name: "Sugar Loft Apartments",
    rating: 7.8,
    reviews: 1240,
    desc: "Beautiful apartment with city views.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/202173231.jpg",
    price: 5000,
    location: "Rio de Janeiro, Brazil",
    facilities: ["Free WiFi", "Swimming Pool", "Restaurant", "Parking"],
  },
  {
    id: 2,
    name: "Hilton Copacabana",
    rating: 8.3,
    reviews: 5240,
    desc: "Luxurious stay with sea view.",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/242491867.jpg",
    price: 12000,
    location: "Rio de Janeiro, Brazil",
    facilities: ["Free WiFi", "Beachfront", "Spa", "Restaurant", "Parking"],
  },
  {
    id: 3,
    name: "Hotel Astoria Palace",
    rating: 8.0,
    reviews: 890,
    desc: "Panoramic rooftop pool.",
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/68170953.jpg",
    price: 7500,
    location: "Rio de Janeiro, Brazil",
    facilities: ["Free WiFi", "Rooftop Pool", "Restaurant", "Fitness Center"],
  },
];

export default function HotelDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  // Get hotel from navigation state or find in fakeHotels
  const stateHotel = location.state?.hotel;
  const hotel = stateHotel ||
    fakeHotels.find((h) => h.id === Number(id)) || {
      ...fakeHotels[0],
      id: id ? Number(id) : 1,
      name: stateHotel?.name || fakeHotels[0].name,
      rating: stateHotel?.rating || fakeHotels[0].rating,
      reviews: stateHotel?.reviews || fakeHotels[0].reviews,
      image: stateHotel?.image || fakeHotels[0].image,
      price: stateHotel?.price || fakeHotels[0].price,
      location: stateHotel?.location || fakeHotels[0].location,
    };

  const [checkIn, setCheckIn] = useState("Mon 22 Dec 2025");
  const [checkOut, setCheckOut] = useState("Thu 15 Jan 2026");
  const [guests, setGuests] = useState("2 adults • 0 children • 1 room");

  const calculateNights = () => {
    // Simple calculation - in real app, parse dates properly
    return 16; // Default nights
  };

  const handleBookNow = () => {
    navigate("/hotel-booking", {
      state: {
        hotel,
        searchParams: {
          checkIn,
          checkOut,
          guests,
          nights: calculateNights(),
        },
      },
    });
  };

  return (
    <div className="hotel-details">
      <div className="hotel-header">
        <div className="hotel-title-section">
          <div className="hotel-rating-badge">
            <span className="stars">★★★★★</span>
            <span className="rating-text">Travel Proud</span>
          </div>
          <h1>{hotel.name}</h1>
          <p className="hotel-location">{hotel.location}</p>
          <a href="#map" className="location-link">
            Great location - show map
          </a>
        </div>
        <div className="hotel-actions">
          <button className="save-button">♡</button>
          <button className="share-button">Share</button>
          <button className="reserve-button" onClick={handleBookNow}>
            Reserve
          </button>
        </div>
      </div>

      <div className="hotel-gallery">
        <div className="main-image">
          <img
            src={hotel.image}
            alt={hotel.name}
            onError={(e) => {
              e.target.src =
                "https://via.placeholder.com/800x500/003b95/ffffff?text=" +
                hotel.name;
            }}
          />
        </div>
        <div className="thumbnail-images">
          <img
            src={hotel.image}
            alt="Hotel view 1"
            onClick={() => navigate(`/hotel/${hotel.id}/gallery`)}
            style={{ cursor: "pointer" }}
          />
          <img
            src={hotel.image}
            alt="Hotel view 2"
            onClick={() => navigate(`/hotel/${hotel.id}/gallery`)}
            style={{ cursor: "pointer" }}
          />
          <div className="more-photos">
            <span>+45 photos</span>
          </div>
        </div>
      </div>

      <div className="hotel-content">
        <div className="hotel-main">
          <div className="key-facilities">
            {hotel.facilities.map((facility, index) => (
              <div key={index} className="facility-item">
                <span className="facility-icon">✓</span>
                <span>{facility}</span>
              </div>
            ))}
          </div>

          <div className="hotel-description">
            <h2>About this property</h2>
            <p>{hotel.desc}</p>
            <p>
              This beautiful property offers stunning views and modern amenities
              for a comfortable stay. Located in the heart of the city, it
              provides easy access to major attractions and transportation.
            </p>
          </div>

          <div className="guest-reviews">
            <h2>Guest reviews</h2>
            <div className="review-summary">
              <div className="overall-rating">
                <span className="rating-number">{hotel.rating}</span>
                <span className="rating-label">Very good</span>
                <span className="reviews-count">{hotel.reviews} reviews</span>
              </div>
              <div className="rating-categories">
                <div className="category">
                  <span>Staff</span>
                  <div className="rating-bar">
                    <div className="rating-fill" style={{ width: "87%" }}></div>
                  </div>
                  <span>8.7</span>
                </div>
                <div className="category">
                  <span>Facilities</span>
                  <div className="rating-bar">
                    <div className="rating-fill" style={{ width: "83%" }}></div>
                  </div>
                  <span>8.3</span>
                </div>
                <div className="category">
                  <span>Cleanliness</span>
                  <div className="rating-bar">
                    <div className="rating-fill" style={{ width: "84%" }}></div>
                  </div>
                  <span>8.4</span>
                </div>
                <div className="category">
                  <span>Comfort</span>
                  <div className="rating-bar">
                    <div className="rating-fill" style={{ width: "85%" }}></div>
                  </div>
                  <span>8.5</span>
                </div>
                <div className="category">
                  <span>Value for money</span>
                  <div className="rating-bar">
                    <div className="rating-fill" style={{ width: "80%" }}></div>
                  </div>
                  <span>8.0</span>
                </div>
                <div className="category">
                  <span>Location</span>
                  <div className="rating-bar">
                    <div className="rating-fill" style={{ width: "83%" }}></div>
                  </div>
                  <span>8.3</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hotel-sidebar">
          <div className="booking-widget">
            <div className="availability-section">
              <h3>Availability</h3>
              <div className="date-inputs">
                <div className="date-input">
                  <label>Check-in date</label>
                  <input
                    type="text"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                  />
                </div>
                <div className="date-input">
                  <label>Check-out date</label>
                  <input
                    type="text"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                  />
                </div>
              </div>
              <div className="guests-input">
                <label>Guests</label>
                <input
                  type="text"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                />
              </div>
              <button
                className="check-availability-btn"
                onClick={handleBookNow}
              >
                Check availability
              </button>
            </div>

            <div className="price-widget">
              <div className="price-display">
                <span className="price-label">
                  Price for {calculateNights()} nights
                </span>
                <span className="price-amount">
                  ₹{(hotel.price * calculateNights()).toLocaleString()}
                </span>
              </div>
              <button className="reserve-button-large" onClick={handleBookNow}>
                Reserve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
