import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import "./HotelSearch.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function HotelSearch() {
  const query = useQuery();
  const navigate = useNavigate();
  const city = query.get("city");

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

  useEffect(() => {
    async function fetchHotels() {
      setLoading(true);

      try {
        const geoRes = await axios.get(
          "https://booking-com.p.rapidapi.com/v1/hotels/locations",
          {
            params: { name: city, locale: "en-us" },
            headers: {
              "X-RapidAPI-Key": API_KEY,
              "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
            },
          }
        );

        if (!geoRes.data || geoRes.data.length === 0) {
          setHotels([]);
          setLoading(false);
          return;
        }

        const destId = geoRes.data[0].dest_id;

        const hotelRes = await axios.get(
          "https://booking-com.p.rapidapi.com/v1/hotels/search",
          {
            params: {
              checkin_date: "2025-01-05",
              checkout_date: "2025-01-10",
              dest_type: "city",
              dest_id: destId,
              adults_number: 2,
              locale: "en-us",
              units: "metric",
              order_by: "popularity",
            },
            headers: {
              "X-RapidAPI-Key": API_KEY,
              "X-RapidAPI-Host": "booking-com.p.rapidapi.com",
            },
          }
        );

        setHotels(hotelRes.data.result || []);
      } catch (err) {
        console.error("API Error:", err);
      }

      setLoading(false);
    }

    fetchHotels();
  }, [city]);

  if (loading) return <h2>Loading hotels...</h2>;

  return (
    <section className="hotel-search-page">
      <h2>
        {city}: {hotels.length} properties found
      </h2>

      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div
            key={hotel.hotel_id}
            className="hotel-card"
            onClick={() => {
              navigate(`/hotel/${hotel.hotel_id}`, {
                state: {
                  hotel: {
                    id: hotel.hotel_id,
                    name: hotel.hotel_name,
                    rating: hotel.review_score,
                    reviews: hotel.review_nr,
                    image: hotel.max_photo_url,
                    price: hotel.min_total_price,
                    location: `${hotel.city}, ${hotel.country_trans}`,
                  },
                },
              });
            }}
            style={{ cursor: "pointer" }}
          >
            <img
              src={hotel.max_photo_url}
              alt={hotel.hotel_name}
              className="hotel-img"
              onError={(e) => {
                e.target.src =
                  "https://via.placeholder.com/260x210/003b95/ffffff?text=" +
                  hotel.hotel_name;
              }}
            />

            <div className="hotel-info">
              <h3>{hotel.hotel_name}</h3>

              <div className="rating">
                <span className="rate-box">{hotel.review_score}</span>
                <span className="reviews">{hotel.review_nr} reviews</span>
              </div>

              <p className="location">
                {hotel.city}, {hotel.country_trans}
              </p>
              <p className="desc">{hotel.unit_configuration_label}</p>

              <p className="price">
                Starting from{" "}
                <strong>₹{hotel.min_total_price?.toLocaleString()}</strong>
              </p>

              <button
                className="price-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/hotel/${hotel.hotel_id}`, {
                    state: {
                      hotel: {
                        id: hotel.hotel_id,
                        name: hotel.hotel_name,
                        rating: hotel.review_score,
                        reviews: hotel.review_nr,
                        image: hotel.max_photo_url,
                        price: hotel.min_total_price,
                        location: `${hotel.city}, ${hotel.country_trans}`,
                      },
                    },
                  });
                }}
              >
                Show prices
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
