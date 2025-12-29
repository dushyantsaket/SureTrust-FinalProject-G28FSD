import "./AttractionCard.css";

export default function AttractionCard({ attraction }) {
  if (!attraction) return null;

  return (
    <div className="attraction-card">
      {/* IMAGE */}
      <div className="attraction-card__image-container">
        <img
          src={attraction.image_url}
          alt={attraction.name}
          className="attraction-card__image"
        />

        <div className="attraction-card__rating">
          ★ {(attraction.rating || 0).toFixed(1)}
        </div>
      </div>

      {/* CONTENT */}
      <div className="attraction-card__content">
        <h3 className="attraction-card__name">{attraction.name}</h3>

        <p className="attraction-card__location">{attraction.location}</p>

        <p className="attraction-card__description">{attraction.description}</p>

        {/* DETAILS */}
        <div className="attraction-card__details">
          <div className="attraction-card__detail-item">
            ⏱ <span>{attraction.duration_hours || 0} hours</span>
          </div>

          <div className="attraction-card__detail-item">
            👥{" "}
            <span>
              {(attraction.review_count || 0).toLocaleString()} reviews
            </span>
          </div>
        </div>

        {/* INCLUDES */}
        {Array.isArray(attraction.includes) &&
          attraction.includes.length > 0 && (
            <div className="attraction-card__includes">
              {attraction.includes.slice(0, 2).map((item, index) => (
                <div key={index} className="attraction-card__include-item">
                  ✓ {item}
                </div>
              ))}
            </div>
          )}

        {/* FREE CANCELLATION */}
        {attraction.cancellation_available && (
          <p className="attraction-card__cancellation">
            ✓ Free cancellation available
          </p>
        )}

        {/* FOOTER */}
        <div className="attraction-card__footer">
          <div className="attraction-card__pricing">
            <span className="attraction-card__from-label">From</span>
            <span className="attraction-card__price">
              ₹ {(attraction.price || 0).toLocaleString()}
            </span>
          </div>

          <button className="attraction-card__button">See availability</button>
        </div>
      </div>
    </div>
  );
}
