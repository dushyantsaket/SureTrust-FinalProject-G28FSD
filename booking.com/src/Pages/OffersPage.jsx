import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./OffersPage.css";

// ------------------ DEALS DATA (FIXED, SINGLE ARRAY) ------------------
const deals = [
  {
    title: "Super Collection O Mahakal",
    location: "Ujjain, India",
    rating: "7.9 Good • 98 reviews",
    price: "₹ 3,240",
    original: "₹ 6,113",
    image:
      "https://th.bing.com/th/id/OIP.FowFPOVmZMvGcpD_HTH6RwHaEK?w=335&h=187&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "The Sky Imperial Sethji Ni Wadi",
    location: "Indore, India",
    rating: "8.4 Very Good • 44 reviews",
    price: "₹ 14,110",
    original: "₹ 16,600",
    image:
      "https://th.bing.com/th/id/OIP.4gcqVL9-TMhq8Kh7hrgduQHaEK?w=210&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "Super Collection O Omkar Nagar",
    location: "Nagpur, India",
    rating: "9.0 Wonderful • 56 reviews",
    price: "₹ 3,398",
    original: "₹ 6,441",
    image:
      "https://th.bing.com/th/id/OIP.WoAOtYDF49oxh5pYUHFTHQHaEK?w=255&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "Hotel Ananthsree Inn",
    location: "Ujjain, India",
    rating: "7.8 Good • 161 reviews",
    price: "₹ 4,335",
    original: "₹ 7,226",
    image:
      "https://th.bing.com/th/id/OIP.J1P-b72ZulrYLn4KFuK1vQHaE8?w=291&h=194&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },

  // EXTRA DEALS (10+ MORE)
  {
    title: "The Fern Residency",
    location: "Bhopal, India",
    rating: "8.2 Very Good • 200 reviews",
    price: "₹ 6,520",
    original: "₹ 8,199",
    image:
      "https://th.bing.com/th/id/OIP.CaXCuMEPIePSAW73uLkOSQHaHa?w=167&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "Taj Lake Palace",
    location: "Udaipur, India",
    rating: "9.4 Superb • 1,112 reviews",
    price: "₹ 42,500",
    original: "₹ 60,000",
    image:
      "https://th.bing.com/th/id/OIP.yuizSVUqJEAjIwRocBzIAwAAAA?w=200&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "The Leela Palace",
    location: "New Delhi, India",
    rating: "9.3 Superb • 900 reviews",
    price: "₹ 29,900",
    original: "₹ 45,000",
    image:
      "https://th.bing.com/th/id/OIP.NFyvA5l2CiywZb85tYLhsQHaFj?w=224&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "Marriott Courtyard",
    location: "Mumbai, India",
    rating: "8.7 Excellent • 1,245 reviews",
    price: "₹ 11,500",
    original: "₹ 16,300",
    image:
      "https://th.bing.com/th/id/OIP.YBTqmp5N-MdewiKcDU9oGAHaFj?w=207&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "Hotel Radisson Blu",
    location: "Jaipur, India",
    rating: "8.1 Very Good • 2,100 reviews",
    price: "₹ 7,600",
    original: "₹ 12,200",
    image:
      "https://th.bing.com/th/id/OIP.cQyi1npZDwPmQXmME-iV9gHaEK?w=288&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "Holiday Inn Express",
    location: "Pune, India",
    rating: "8.0 Very Good • 350 reviews",
    price: "₹ 5,250",
    original: "₹ 9,000",
    image:
      "https://th.bing.com/th/id/OIP.03knDhgmkzDGzLew8m0dMAHaEK?w=252&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "The Umrao",
    location: "New Delhi, India",
    rating: "8.5 Excellent • 700 reviews",
    price: "₹ 12,400",
    original: "₹ 18,999",
    image:
      "https://th.bing.com/th/id/OIP.T08cFNQ8FfTTANMPhFwwkQHaEU?w=259&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "ITC Grand Chola",
    location: "Chennai, India",
    rating: "9.1 Superb • 2,333 reviews",
    price: "₹ 18,545",
    original: "₹ 24,990",
    image:
      "https://th.bing.com/th/id/OIP.GJ0f1aV0Wp3WnGqvulfDzgHaF7?w=211&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
  {
    title: "Hyatt Regency",
    location: "Kolkata, India",
    rating: "8.4 Very Good • 1,022 reviews",
    price: "₹ 9,999",
    original: "₹ 14,500",
    image:
      "https://th.bing.com/th/id/OIP.Mxtjhd5cMNamzciC7HadZQHaET?w=256&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
  },
];

// ------------------ SLIDER DATA ------------------
const promoBanners = [
  {
    caption: "Early 2026 Deals",
    title: "At least 15% off",
    subtitle: "Save on your next stay with Early 2026 Deals",
    btn: "Explore deals",
    img: "https://r-xx.bstatic.com/xdata/images/xphoto/248x248/617102726.jpeg?k=53213209311f5bd09c92829da56d538bd77abbf521aae5658dc434a0ac448e1a&o=",
  },
  {
    caption: "Late Escape Deals",
    title: "Go for a good time, not a long time",
    subtitle: "Squeeze out the last bit of sun with at least 15% off",
    btn: "Find deals",
    img: "https://r-xx.bstatic.com/xdata/images/xphoto/1080x308/591152843.jpeg?k=468bcc25489a1e4b2648eba9720840b9eb7d1c7243c3c2aae97a84fd7da6378c&o=",
  },
];

const OffersPage = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % promoBanners.length);
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? promoBanners.length - 1 : prev - 1));

  return (
    <div className="offers-page">
      <div className="container">
        {/* ---- CAROUSEL ---- */}
        <div className="promo-carousel">
          {promoBanners.map((banner, i) => (
            <div
              key={i}
              className={`promo-slide ${i === index ? "active" : ""}`}
            >
              <div className="promo-text">
                <span className="caption">{banner.caption}</span>
                <h3>{banner.title}</h3>
                <p className="subtitle">{banner.subtitle}</p>
                <button className="filled-btn">{banner.btn}</button>
              </div>

              <div className="promo-image">
                <img src={banner.img} alt={banner.title} />
              </div>
            </div>
          ))}

          <button className="carousel-btn left" onClick={prevSlide}>
            ❮
          </button>
          <button className="carousel-btn right" onClick={nextSlide}>
            ❯
          </button>
        </div>

        {/* ---- WEEKEND DEALS ---- */}
        <h2>Deals for the weekend</h2>
        <p className="section-subtitle">
          Save on stays for the upcoming weekend
        </p>

        <div className="card-grid deals-grid">
          {deals.map((deal) => (
            <div key={deal.title} className="deal-card">
              {/* FIX → IMAGE RENDER */}
              <div className="property-photo">
                <img src={deal.image} alt={deal.title} />
              </div>

              <h3>{deal.title}</h3>
              <p className="muted">{deal.location}</p>

              <p className="rating-pill">{deal.rating}</p>

              <div className="price-line">
                <span className="original-price">{deal.original}</span>
                <span className="current-price">{deal.price}</span>
              </div>

              <p className="muted">2 nights</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OffersPage;
