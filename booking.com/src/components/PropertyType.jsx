import React, { useRef, useState } from "react";

const PropertyTypes = () => {
  const scrollContainerRef = useRef(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const propertyTypes = [
    {
      name: "Hotels",
      icon: "🏨",
      rating: 4.8,
      reviews: "12,345 reviews",
      location: "Mahabalipuram, India",
      image:
        "https://www.bing.com/th/id/OIP.Zis2cXdglxbZemS3QNsdZQHaE8?w=244&h=211&c=8&rs=1&qlt=90&o=6&cb=ucfimg1&dpr=1.3&pid=3.1&rm=2&ucfimg=1",
    },
    {
      name: "Apartments",
      icon: "🏢",
      rating: 4.5,
      reviews: "8,901 reviews",
      location: "Chennai, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmPS9CDggRFfjmTKni-CAQBamJlJ6twe-zSw&s",
    },
    {
      name: "Resorts",
      icon: "🌴",
      rating: 4.9,
      reviews: "5,678 reviews",
      location: "Goa, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUtRl6A2CtoYGGT42q9mrXEe8AgcsmCw8vxA&s",
    },
    {
      name: "Villas",
      icon: "🏡",
      rating: 4.7,
      reviews: "3,456 reviews",
      location: "Kerala, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST1L8B0qyaQFT2O9dG7C02qGtH1GiowXvMuA&s",
    },
    {
      name: "Beach Houses",
      icon: "🏖️",
      rating: 4.6,
      reviews: "2,345 reviews",
      location: "Andaman, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOjDJo_E9nzcGg6LDr6VPBkQHBzCHefGg4ig&s",
    },
    {
      name: "Boutique Hotels",
      icon: "🏰",
      rating: 4.4,
      reviews: "4,567 reviews",
      location: "Mumbai, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_oMdaOwEiiuKm1k6SAYiP9O1zpDZ-uU2BsA&s",
    },
    {
      name: "Luxury Resorts",
      icon: "✨",
      rating: 4.9,
      reviews: "1,234 reviews",
      location: "Rajasthan, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGnbg-kjjppl67FSiFrLxy9fdhdfE6lGXqWOoqJ4I3&s",
    },
    {
      name: "Mountain Lodges",
      icon: "⛰️",
      rating: 4.3,
      reviews: "3,210 reviews",
      location: "Himachal, India",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhZ4Sjlmhyb8UF6_FCweYbdwgTbrolzogc6w&s",
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });

      // Update button visibility after scroll
      setTimeout(() => {
        updateButtonVisibility();
      }, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Update button visibility after scroll
      setTimeout(() => {
        updateButtonVisibility();
      }, 300);
    }
  };

  const updateButtonVisibility = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      setShowPrevButton(scrollLeft > 0);
      setShowNextButton(scrollLeft + clientWidth < scrollWidth - 10); // 10px tolerance
    }
  };

  // Initialize button visibility on mount
  React.useEffect(() => {
    updateButtonVisibility();
    window.addEventListener("resize", updateButtonVisibility);

    return () => {
      window.removeEventListener("resize", updateButtonVisibility);
    };
  }, []);

  return (
    <section className="property-types">
      <div className="container">
        <h2>Browse by property type</h2>

        <div className="property-carousel-container">
          {showPrevButton && (
            <button
              aria-label="Previous"
              type="button"
              className="carousel-button prev-button"
              onClick={scrollLeft}
            >
              <span className="button-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M14.09 19.24a.87.87 0 0 1-.64-.27l-6.06-6.06c-.25-.25-.39-.59-.39-.94s.12-.69.36-.94l6.06-6.06a.909.909 0 0 1 1.3 1.27l-.02.02-5.69 5.72 5.72 5.72c.35.35.36.91.02 1.27l-.02.02a.9.9 0 0 1-.64.27"></path>
                </svg>
              </span>
            </button>
          )}

          <div
            className="property-carousel"
            ref={scrollContainerRef}
            onScroll={updateButtonVisibility}
          >
            {propertyTypes.map((type, index) => (
              <div
                key={index}
                role="group"
                aria-roledescription="slide"
                className="property-card-wrapper"
              >
                <a
                  href="#"
                  className="property-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="property-image-container">
                    <div
                      className="property-image-wrapper"
                      style={{ paddingTop: "80%" }}
                    >
                      <div className="property-image">
                        <img
                          src={type.image}
                          alt={type.name}
                          loading="lazy"
                          className="property-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="property-content">
                    <div className="property-header">
                      <div className="property-type-badge">Hotel</div>
                      <div className="property-rating">
                        <span
                          aria-label={`${Math.floor(
                            type.rating
                          )} out of 5 stars`}
                          role="img"
                          className="rating-stars"
                        >
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="star-icon">
                              {i < Math.floor(type.rating) ? "★" : "☆"}
                            </span>
                          ))}
                        </span>
                        <span
                          className="preferred-badge"
                          title="This property is part of our Preferred Partner Program"
                        >
                          <svg viewBox="0 0 128 128" width="16" height="16">
                            <path d="M112 8H16a8 8 0 0 0-8 8v96a8 8 0 0 0 8 8h96a8 8 0 0 0 8-8V16a8 8 0 0 0-8-8zM48 96H24V58h24zm56-25a8.7 8.7 0 0 1-2 6 8.9 8.9 0 0 1 1 4 6.9 6.9 0 0 1-5 7c-.5 4-4.8 8-9 8H56V58l10.3-23.3a5.4 5.4 0 0 1 10.1 2.7 10.3 10.3 0 0 1-.6 2.7L72 52h23c4.5 0 9 3.5 9 8a9.2 9.2 0 0 1-2 5.3 7.5 7.5 0 0 1 2 5.7z"></path>
                          </svg>
                        </span>
                      </div>
                      <div className="property-title">
                        <h3>{type.name} Resort & Spa</h3>
                        <div className="property-location">
                          <div>{type.location}</div>
                        </div>
                      </div>
                      <div className="property-reviews">
                        <div className="review-score">{type.rating}</div>
                        <div aria-hidden="true" className="review-score-visual">
                          {type.rating}
                        </div>
                        <div className="review-details">
                          <div className="review-label">Very Good</div>
                          <div className="review-count">{type.reviews}</div>
                        </div>
                      </div>
                    </div>

                    <div className="property-price">
                      <div className="price-section">
                        <div className="price-label">Starting from</div>
                        <div className="price-amount">
                          <div aria-hidden="true">
                            ₹&nbsp;{Math.floor(Math.random() * 10000) + 20000}
                          </div>
                        </div>
                        <div className="sr-only">Price ₹&nbsp;33,210</div>
                      </div>
                    </div>
                  </div>
                </a>

                <div className="property-actions">
                  <button
                    aria-label="Save this item to a trip list"
                    type="button"
                    className="wishlist-button"
                  >
                    <span className="button-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                      >
                        <path d="m12.45 22.33-9.48-9.98c-1.9-1.9-1.9-4.99 0-6.99 1.9-1.9 4.99-1.9 6.99 0l1.6 1.6c.3.3.8.3 1.1 0l1.6-1.6c1.9-1.9 4.99-1.9 6.99 0 1.9 1.9 1.9 4.99 0 6.99l-9.58 9.98h1.1-.3Zm-1 1.1c.3.3.8.3 1.1 0l9.58-9.98c2.49-2.49 2.49-6.59 0-9.08s-6.59-2.49-9.08 0l-1.6 1.6h1.1l-1.6-1.6c-2.49-2.49-6.59-2.49-9.08 0s-2.49 6.59 0 9.08z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showNextButton && (
            <button
              aria-label="Next"
              type="button"
              className="carousel-button next-button"
              onClick={scrollRight}
            >
              <span className="button-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M9.91 19.24a.87.87 0 0 0 .64-.27l6.06-6.06c.25-.25.39-.59.39-.94s-.12-.69-.36-.94l-6.06-6.06a.909.909 0 0 0-1.3 1.27l.02.02 5.69 5.72-5.72 5.72c-.35.35-.36.91-.02 1.27l.02.02a.9.9 0 0 0 .64.27"></path>
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .property-types {
          padding: 3rem 0;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
        }

        h2 {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: #333;
          font-weight: 700;
        }

        .property-carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .property-carousel {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 1rem 0;
          cursor: grab;
        }

        .property-carousel::-webkit-scrollbar {
          display: none;
        }

        .property-carousel:active {
          cursor: grabbing;
        }

        .property-card-wrapper {
          flex: 0 0 auto;
          width: 280px;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          background: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .property-card-wrapper:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .property-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .property-image-container {
          position: relative;
          overflow: hidden;
        }

        .property-image-wrapper {
          position: relative;
          width: 100%;
          background: linear-gradient(45deg, #f5f5f5, #e0e0e0);
        }

        .property-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .property-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .property-card-wrapper:hover .property-img {
          transform: scale(1.05);
        }

        .property-content {
          padding: 1.2rem;
        }

        .property-header {
          margin-bottom: 1.2rem;
        }

        .property-type-badge {
          display: inline-block;
          font-size: 0.75rem;
          color: #666;
          margin-bottom: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .property-rating {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
        }

        .rating-stars {
          color: #ffb700;
          font-size: 1.1rem;
          display: flex;
          gap: 2px;
        }

        .preferred-badge {
          color: #0071c2;
          cursor: help;
        }

        .property-title h3 {
          font-size: 1.2rem;
          margin: 0.5rem 0;
          color: #333;
          font-weight: 600;
          line-height: 1.3;
        }

        .property-location {
          font-size: 0.875rem;
          color: #666;
          margin-top: 0.25rem;
        }

        .property-reviews {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #f0f0f0;
        }

        .review-score {
          background: #003580;
          color: white;
          padding: 0.4rem 0.6rem;
          border-radius: 6px;
          font-weight: bold;
          font-size: 0.9rem;
          min-width: 36px;
          text-align: center;
        }

        .review-score-visual {
          display: none;
        }

        .review-details {
          flex: 1;
        }

        .review-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #333;
        }

        .review-count {
          font-size: 0.75rem;
          color: #666;
          margin-top: 2px;
        }

        .property-price {
          border-top: 2px solid #f0f0f0;
          padding-top: 1.2rem;
          margin-top: 1rem;
        }

        .price-section {
          text-align: right;
        }

        .price-label {
          font-size: 0.75rem;
          color: #666;
          margin-bottom: 0.25rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .price-amount {
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .property-actions {
          position: absolute;
          top: 1rem;
          right: 1rem;
        }

        .wishlist-button {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(2px);
        }

        .wishlist-button:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          background: white;
        }

        .button-icon {
          color: #666;
          transition: color 0.3s ease;
        }

        .wishlist-button:hover .button-icon {
          color: #ff385c;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 10;
        }

        .carousel-button:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .carousel-button:active {
          transform: translateY(-50%) scale(0.95);
        }

        .prev-button {
          left: -22px;
        }

        .next-button {
          right: -22px;
        }

        .carousel-button .button-icon {
          color: #333;
        }

        @media (max-width: 768px) {
          .property-card-wrapper {
            width: 260px;
          }

          .prev-button {
            left: 10px;
          }

          .next-button {
            right: 10px;
          }

          .carousel-button {
            width: 40px;
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .property-card-wrapper {
            width: 240px;
          }

          .carousel-button {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default PropertyTypes;
