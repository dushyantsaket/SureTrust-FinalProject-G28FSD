import React from "react";
import { Link, useLocation } from "react-router-dom";

const fakeHotels = [
  {
    id: 1,
    name: "Sugar Loft Apartments",
    city: "Rio de Janeiro",
    rating: 7.8,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/202173231.jpg",
    desc: "Beautiful apartment with city views.",
  },
  {
    id: 2,
    name: "Hilton Copacabana",
    city: "Rio de Janeiro",
    rating: 8.3,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/242491867.jpg",
    desc: "Luxurious stay with sea view.",
  },
  {
    id: 3,
    name: "Hotel Astoria Palace",
    city: "Rio de Janeiro",
    rating: 8.0,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/68170953.jpg",
    desc: "Panoramic rooftop pool.",
  },
];

export default function SearchResults() {
  const query = new URLSearchParams(useLocation().search);
  const city = query.get("city");

  const hotels = fakeHotels.filter((h) =>
    h.city.toLowerCase().includes(city?.toLowerCase() || "")
  );

  return (
    <>
      <style jsx>{`
        .results-container {
          max-width: 1200px;
          margin: 2rem auto;
          padding: 0 1rem;
        }

        .results-container h2 {
          font-size: 1.8rem;
          color: #333;
          margin-bottom: 2rem;
          font-weight: 600;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f0f0f0;
        }

        .results-container h2 span {
          color: #0071c2;
          font-weight: 700;
        }

        /* Hotel List Grid */
        .hotel-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 2rem;
        }

        /* Hotel Card */
        .hotel-card {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          border: 1px solid #e0e0e0;
        }

        .hotel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .hotel-card img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          border-bottom: 1px solid #f0f0f0;
        }

        .hotel-info {
          padding: 1.5rem;
        }

        .hotel-info h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 0.75rem;
          line-height: 1.3;
        }

        .hotel-info p {
          color: #666;
          font-size: 0.95rem;
          line-height: 1.5;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .rating {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: #003580;
          color: white;
          padding: 0.375rem 0.75rem;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }

        .price-btn {
          display: inline-block;
          background: #0071c2;
          color: white;
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          border: 2px solid #0071c2;
          cursor: pointer;
          text-align: center;
        }

        .price-btn:hover {
          background: white;
          color: #0071c2;
        }

        /* No Results */
        .no-results {
          text-align: center;
          padding: 3rem 1rem;
          background: #f8f9fa;
          border-radius: 8px;
          border: 1px solid #e0e0e0;
          margin-top: 2rem;
        }

        .no-results h3 {
          font-size: 1.5rem;
          color: #333;
          margin-bottom: 1rem;
        }

        .no-results p {
          color: #666;
          margin-bottom: 1.5rem;
        }

        .search-again-btn {
          display: inline-block;
          background: #0071c2;
          color: white;
          text-decoration: none;
          padding: 0.75rem 1.5rem;
          border-radius: 6px;
          font-weight: 600;
          transition: background-color 0.2s ease;
          border: none;
          cursor: pointer;
        }

        .search-again-btn:hover {
          background: #005fa3;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hotel-list {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .results-container {
            margin: 1rem auto;
          }

          .results-container h2 {
            font-size: 1.5rem;
          }

          .hotel-list {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .hotel-card img {
            height: 200px;
          }
        }

        @media (max-width: 480px) {
          .results-container h2 {
            font-size: 1.3rem;
          }

          .hotel-info {
            padding: 1.25rem;
          }

          .hotel-info h3 {
            font-size: 1.2rem;
          }

          .price-btn {
            width: 100%;
            padding: 0.875rem;
          }
        }
      `}</style>

      <div className="results-container">
        <h2>
          Search results for: <span>{city || "All destinations"}</span>
        </h2>

        {hotels.length > 0 ? (
          <div className="hotel-list">
            {hotels.map((hotel) => (
              <div className="hotel-card" key={hotel.id}>
                <img src={hotel.image} alt={hotel.name} />
                <div className="hotel-info">
                  <h3>{hotel.name}</h3>
                  <p>{hotel.desc}</p>
                  <span className="rating">⭐ {hotel.rating}</span>
                  <Link to={`/hotel/${hotel.id}`} className="price-btn">
                    Show prices
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No hotels found for "{city}"</h3>
            <p>Try searching for a different city or check your spelling.</p>
            <Link to="/" className="search-again-btn">
              Search again
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
