import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OffersSection = () => {
  const navigate = useNavigate();

  // ------------------ CAROUSEL DATA ------------------
  const promoBanners = [
    {
      caption: "Early 2026 Deals",
      title: "At least 15% off",
      subtitle: "Save on your next stay with Early 2026 Deals",
      btn: "Explore deals",
      img: "https://r-xx.bstatic.com/xdata/images/xphoto/248x248/617102726.jpeg?k=53213209311f5bd09c92829da56d538bd77abbf521aae5658dc434a0ac448e1a&o=",
      route: "/offers",
    },
    {
      caption: "Late Escape Deals",
      title: "Go for a good time, not a long time",
      subtitle: "Squeeze out the last bit of sun with at least 15% off",
      btn: "Find deals",
      img: "https://r-xx.bstatic.com/xdata/images/xphoto/1080x308/591152843.jpeg?k=468bcc25489a1e4b2648eba9720840b9eb7d1c7243c3c2aae97a84fd7da6378c&o=",
      route: "/offers",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % promoBanners.length);
  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? promoBanners.length - 1 : prev - 1));

  // ------------------ OFFERS CARDS ------------------
  const offers = [
    {
      title: "Save at least 15% this Singles Day",
      subtitle: "Limited-time deals on stays from Nov 7–9",
      btn: "Explore deals",
      image:
        "https://th.bing.com/th/id/OIP.knpK259L54MStIgRNA_lbwHaE8?w=255&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      route: "/offers",
    },
    {
      title: "Explore India",
      subtitle: "These popular destinations have a lot to offer",
      btn: "Discover",
      image:
        "https://th.bing.com/th?id=OIF.eG3FR%2br9b5VwnFVxZouIDA&w=262&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      route: "/explore-india",
    },
    {
      title: "Explore Time",
      subtitle: "Go for a good time, not a long time. Enjoy up to 15% off.",
      btn: "Find deals",
      image:
        "https://th.bing.com/th/id/OIP.V5hIs0lvDQ5kaG7al6sNeQHaEK?w=282&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      route: "/offers",
    },
  ];

  return (
    <>
      <style jsx>{`
        /* Offers Section */
        .offers-section {
          padding: 3rem 0;
          background: white;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        /* Section Title */
        .offers-section h2 {
          font-size: 2rem;
          font-weight: 700;
          color: #333;
          margin: 2rem 0 0.5rem;
        }

        .section-subtitle {
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 2.5rem;
        }

        /* Promo Carousel */
        .promo-carousel {
          position: relative;
          background: linear-gradient(135deg, #006ce4 0%, #003580 100%);
          border-radius: 12px;
          overflow: hidden;
          height: 280px;
          margin-bottom: 3rem;
        }

        .promo-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          padding: 2rem;
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .promo-slide.active {
          opacity: 1;
        }

        .promo-text {
          color: white;
          max-width: 500px;
        }

        .promo-text .caption {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .promo-text h3 {
          font-size: 2rem;
          font-weight: 700;
          margin: 0 0 1rem;
          line-height: 1.2;
        }

        .promo-text .subtitle {
          font-size: 1rem;
          margin-bottom: 1.5rem;
          opacity: 0.9;
          line-height: 1.5;
        }

        .promo-image {
          display: flex;
          justify-content: flex-end;
        }

        .promo-image img {
          max-height: 200px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .filled-btn {
          background: #ff5a5f;
          color: white;
          border: none;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filled-btn:hover {
          background: #ff3b40;
          transform: translateY(-1px);
        }

        /* Carousel Buttons */
        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(255, 255, 255, 0.9);
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          z-index: 10;
        }

        .carousel-btn:hover {
          background: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .carousel-btn.left {
          left: 1rem;
        }

        .carousel-btn.right {
          right: 1rem;
        }

        /* Offers Grid */
        .offers-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 2rem;
        }

        .offer-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #e0e0e0;
        }

        .offer-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .offer-image {
          width: 100%;
          height: 180px;
          overflow: hidden;
        }

        .offer-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .offer-card:hover .offer-image img {
          transform: scale(1.05);
        }

        .offer-content {
          padding: 1.5rem;
        }

        .offer-content h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #333;
          margin: 0 0 0.75rem;
          line-height: 1.3;
        }

        .offer-content p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1.5rem;
        }

        .btn-outline {
          background: transparent;
          color: #0071c2;
          border: 2px solid #0071c2;
          padding: 0.5rem 1.5rem;
          border-radius: 6px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-outline:hover {
          background: #0071c2;
          color: white;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .promo-carousel {
            height: 250px;
          }

          .promo-text h3 {
            font-size: 1.75rem;
          }

          .offers-grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .offers-section {
            padding: 2rem 0;
          }

          .offers-section h2 {
            font-size: 1.75rem;
          }

          .promo-carousel {
            height: auto;
            min-height: 300px;
          }

          .promo-slide {
            grid-template-columns: 1fr;
            padding: 1.5rem;
            text-align: center;
          }

          .promo-text {
            order: 2;
            max-width: 100%;
          }

          .promo-image {
            order: 1;
            justify-content: center;
            margin-bottom: 1.5rem;
          }

          .promo-image img {
            max-height: 150px;
          }

          .offers-grid {
            grid-template-columns: 1fr;
          }

          .offer-image {
            height: 160px;
          }
        }

        @media (max-width: 480px) {
          .container {
            padding: 0 0.75rem;
          }

          .offers-section h2 {
            font-size: 1.5rem;
          }

          .section-subtitle {
            font-size: 1rem;
          }

          .promo-slide {
            padding: 1.25rem;
          }

          .promo-text h3 {
            font-size: 1.5rem;
          }

          .promo-text .subtitle {
            font-size: 0.9rem;
          }

          .filled-btn {
            padding: 0.625rem 1.5rem;
            font-size: 0.9rem;
          }

          .carousel-btn {
            width: 36px;
            height: 36px;
            font-size: 1rem;
          }

          .offer-content {
            padding: 1.25rem;
          }

          .offer-content h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>

      <section className="offers-section">
        <div className="container">
          {/* ------------------ PROMO BANNER CAROUSEL ------------------ */}
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

                  <button
                    className="filled-btn"
                    onClick={() => navigate(banner.route)}
                  >
                    {banner.btn}
                  </button>
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

          {/* ------------------ TITLE ------------------ */}
          <h2>Offers</h2>
          <p className="section-subtitle">
            Promotions, deals, and special offers for you
          </p>

          {/* ------------------ OFFERS GRID ------------------ */}
          <div className="offers-grid">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="offer-card"
                onClick={() => navigate(offer.route)}
              >
                <div className="offer-image">
                  <img src={offer.image} alt={offer.title} />
                </div>

                <div className="offer-content">
                  <h3>{offer.title}</h3>
                  <p>{offer.subtitle}</p>
                  <button className="btn btn-outline">{offer.btn}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default OffersSection;
