import { Heart } from "lucide-react";
import { Hotel } from "../types";
import { Link } from "react-router-dom";

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <div className="hotel-card">
      <Link to={`/hotels/${hotel.id}`} className="hotel-card__link">
        <div className="hotel-card__image-container">
          <img
            src={hotel.image_url}
            alt={hotel.name}
            className="hotel-card__image"
          />
          <button
            className="hotel-card__favorite-btn"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              // Handle favorite logic here
            }}
          >
            <Heart className="hotel-card__favorite-icon" />
          </button>
        </div>

        <div className="hotel-card__content">
          <div className="hotel-card__header">
            <div className="hotel-card__info">
              <h3 className="hotel-card__name">{hotel.name}</h3>
              <p className="hotel-card__location">{hotel.location}</p>
              {hotel.distance_from_center && (
                <p className="hotel-card__distance">
                  {hotel.distance_from_center} km from center
                </p>
              )}
              <div className="hotel-card__amenities">
                {hotel.amenities.slice(0, 3).map((amenity, index) => (
                  <span key={index} className="hotel-card__amenity-tag">
                    {amenity}
                  </span>
                ))}
              </div>
            </div>

            <div className="hotel-card__review">
              <div className="hotel-card__review-container">
                <div className="hotel-card__review-text">
                  <div className="hotel-card__review-rating">
                    {hotel.review_score >= 9
                      ? "Excellent"
                      : hotel.review_score >= 8
                      ? "Very Good"
                      : hotel.review_score >= 7
                      ? "Good"
                      : "Pleasant"}
                  </div>
                  <div className="hotel-card__review-count">
                    {hotel.review_count.toLocaleString()} reviews
                  </div>
                </div>
                <div className="hotel-card__review-score">
                  {hotel.review_score.toFixed(1)}
                </div>
              </div>
            </div>
          </div>

          <div className="hotel-card__footer">
            <p className="hotel-card__duration">
              {hotel.star_rating} night{hotel.star_rating !== 1 ? "s" : ""}, 2
              adults
            </p>
            <div className="hotel-card__footer-content">
              <div className="hotel-card__features">
                {hotel.amenities.includes("Free cancellation") && (
                  <p className="hotel-card__feature">Free cancellation</p>
                )}
                {hotel.amenities.includes("No prepayment") && (
                  <p className="hotel-card__feature">No prepayment needed</p>
                )}
              </div>
              <div className="hotel-card__pricing">
                <div className="hotel-card__price">
                  ₹ {hotel.price_per_night.toLocaleString()}
                </div>
                <p className="hotel-card__taxes">
                  +₹ {Math.round(hotel.price_per_night * 0.18).toLocaleString()}{" "}
                  taxes and fees
                </p>
                <button
                  className="hotel-card__availability-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Handle availability logic here
                  }}
                >
                  See availability
                </button>
              </div>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .hotel-card {
          background-color: white;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          overflow: hidden;
          transition: box-shadow 0.3s ease;
          text-decoration: none;
          color: inherit;
        }

        .hotel-card__link {
          display: flex;
          gap: 1rem;
          text-decoration: none;
          color: inherit;
        }

        .hotel-card:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
            0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .hotel-card__image-container {
          position: relative;
          width: 16rem;
          height: 14rem;
          flex-shrink: 0;
        }

        .hotel-card__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hotel-card__favorite-btn {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background-color: rgba(255, 255, 255, 0.8);
          padding: 0.5rem;
          border-radius: 9999px;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .hotel-card__favorite-btn:hover {
          background-color: white;
        }

        .hotel-card__favorite-icon {
          width: 1.25rem;
          height: 1.25rem;
        }

        .hotel-card__content {
          flex: 1;
          padding: 1rem;
          display: flex;
          flex-direction: column;
        }

        .hotel-card__header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .hotel-card__info {
          flex: 1;
        }

        .hotel-card__name {
          font-size: 1.25rem;
          font-weight: 600;
          color: #003580;
          margin-bottom: 0.25rem;
          text-decoration: none;
        }

        .hotel-card__name:hover {
          text-decoration: underline;
        }

        .hotel-card__location {
          font-size: 0.875rem;
          color: #2563eb;
          text-decoration: underline;
          margin-bottom: 0.25rem;
        }

        .hotel-card__distance {
          font-size: 0.875rem;
          color: #4b5563;
          margin-bottom: 0.5rem;
        }

        .hotel-card__amenities {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: 0.5rem;
        }

        .hotel-card__amenity-tag {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
          background-color: #f3f4f6;
          border-radius: 0.25rem;
        }

        .hotel-card__review {
          text-align: right;
        }

        .hotel-card__review-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          justify-content: flex-end;
          margin-bottom: 0.25rem;
        }

        .hotel-card__review-text {
          text-align: right;
        }

        .hotel-card__review-rating {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .hotel-card__review-count {
          font-size: 0.75rem;
          color: #4b5563;
        }

        .hotel-card__review-score {
          background-color: #003580;
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 0.25rem;
          font-weight: bold;
        }

        .hotel-card__footer {
          margin-top: auto;
        }

        .hotel-card__duration {
          font-size: 0.75rem;
          color: #4b5563;
          margin-bottom: 0.25rem;
        }

        .hotel-card__footer-content {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .hotel-card__features {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .hotel-card__feature {
          font-size: 0.75rem;
          color: #15803d;
          font-weight: 500;
        }

        .hotel-card__pricing {
          text-align: right;
        }

        .hotel-card__price {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .hotel-card__taxes {
          font-size: 0.75rem;
          color: #4b5563;
        }

        .hotel-card__availability-btn {
          margin-top: 0.5rem;
          background-color: #0071c2;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.25rem;
          font-size: 0.875rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .hotel-card__availability-btn:hover {
          background-color: #005c9e;
        }

        @media (max-width: 768px) {
          .hotel-card__link {
            flex-direction: column;
            gap: 0;
          }

          .hotel-card__image-container {
            width: 100%;
            height: 12rem;
          }

          .hotel-card__header {
            flex-direction: column;
            gap: 0.75rem;
          }

          .hotel-card__review {
            align-self: flex-start;
            text-align: left;
          }

          .hotel-card__review-container {
            justify-content: flex-start;
          }

          .hotel-card__footer-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .hotel-card__pricing {
            align-self: stretch;
            text-align: left;
          }
        }
      `}</style>
    </div>
  );
}
