import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, MapPin, Star, Users } from "lucide-react";
import Header from "../components/Header";
import "./HotelSearchCard.css";

// Mock hotel data if supabase is not set up
const mockHotels = [
  {
    id: 1,
    name: "Grand Plaza Hotel",
    location: "New York, Times Square",
    price_per_night: 25000,
    star_rating: 5,
    review_score: 9.2,
    image_url:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800",
    description: "Luxury hotel in the heart of Times Square",
  },
  {
    id: 2,
    name: "Seaside Resort",
    location: "Miami Beach",
    price_per_night: 18000,
    star_rating: 4,
    review_score: 8.5,
    image_url:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800",
    description: "Beachfront resort with ocean view",
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    location: "Swiss Alps",
    price_per_night: 32000,
    star_rating: 5,
    review_score: 9.5,
    image_url:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800",
    description: "Ski-in/ski-out luxury lodge",
  },
  {
    id: 4,
    name: "City Center Inn",
    location: "Tokyo",
    price_per_night: 12000,
    star_rating: 3,
    review_score: 7.8,
    image_url:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800",
    description: "Affordable hotel in central Tokyo",
  },
];

// Fallback HotelCard component
const HotelCard = ({ hotel }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200">
      <div className="flex gap-6">
        <div className="w-64 h-48 flex-shrink-0">
          <img
            src={hotel.image_url}
            alt={hotel.name}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="flex-1">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-800">{hotel.name}</h3>
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="text-sm font-medium">{hotel.star_rating}</span>
            </div>
          </div>

          <p className="text-gray-600 mb-4">{hotel.location}</p>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
              <span>{hotel.review_score}</span>
              <span className="text-xs">Excellent</span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">100+ reviews</span>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{hotel.description}</p>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-xs text-gray-500">Starting from</p>
              <p className="text-2xl font-bold text-blue-600">
                ₹{hotel.price_per_night.toLocaleString()}
              </p>
              <p className="text-sm text-gray-500">per night</p>
            </div>
            <button className="bg-blue-600 text-white px-6 py-3 rounded font-medium hover:bg-blue-700 transition-colors duration-200">
              Select Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function HotelSearch() {
  const [searchParams] = useSearchParams();
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 50000,
    starRating: [],
    minReviewScore: 0,
  });
  const [showFilters, setShowFilters] = useState(true);

  const location = searchParams.get("location") || "";
  const checkIn = searchParams.get("checkIn") || "2024-12-15";
  const checkOut = searchParams.get("checkOut") || "2024-12-20";
  const adults = searchParams.get("adults") || "2";
  const children = searchParams.get("children") || "0";
  const rooms = searchParams.get("rooms") || "1";

  useEffect(() => {
    fetchHotels();
  }, [location, filters]);

  const fetchHotels = async () => {
    setLoading(true);
    // Simulate API delay
    setTimeout(() => {
      try {
        let filteredHotels = mockHotels.filter(
          (hotel) =>
            hotel.price_per_night >= filters.minPrice &&
            hotel.price_per_night <= filters.maxPrice
        );

        if (location) {
          filteredHotels = filteredHotels.filter((hotel) =>
            hotel.location.toLowerCase().includes(location.toLowerCase())
          );
        }

        if (filters.starRating.length > 0) {
          filteredHotels = filteredHotels.filter((hotel) =>
            filters.starRating.includes(hotel.star_rating)
          );
        }

        if (filters.minReviewScore > 0) {
          filteredHotels = filteredHotels.filter(
            (hotel) => hotel.review_score >= filters.minReviewScore
          );
        }

        // Sort by review score
        filteredHotels.sort((a, b) => b.review_score - a.review_score);

        setHotels(filteredHotels);
      } catch (error) {
        console.error("Error fetching hotels:", error);
        setHotels(mockHotels);
      } finally {
        setLoading(false);
      }
    }, 1000);
  };

  const toggleStarRating = (rating) => {
    setFilters((prev) => ({
      ...prev,
      starRating: prev.starRating.includes(rating)
        ? prev.starRating.filter((r) => r !== rating)
        : [...prev.starRating, rating],
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="bg-[#003580] py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-4 bg-yellow-400 rounded-lg p-4">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={location}
                placeholder="Where are you going?"
                className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                readOnly
              />
            </div>
            <div className="text-sm">
              <span className="font-medium">
                {checkIn} — {checkOut}
              </span>
            </div>
            <div className="text-sm">
              <span className="font-medium">
                {adults} adults · {children} children · {rooms} room
              </span>
            </div>
            <button className="bg-[#0071c2] text-white px-6 py-2 rounded font-medium hover:bg-[#005c9e]">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold mb-1">
              {location || "Hotels"}: {hotels.length} properties found
            </h1>
            <div className="flex gap-2">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50"
              >
                <SlidersHorizontal className="w-4 h-4" />
                Filters
              </button>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-white border-2 border-blue-600 text-blue-600 rounded font-medium">
              List
            </button>
            <button className="px-4 py-2 bg-white border border-gray-300 rounded hover:bg-gray-50">
              Grid
            </button>
          </div>
        </div>

        <div className="flex gap-6">
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-4">
                <h3 className="font-bold text-lg mb-4">Filter by:</h3>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">
                    Your budget (per night)
                  </h4>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="number"
                      value={filters.minPrice}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          minPrice: parseInt(e.target.value) || 0,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                      placeholder="Min"
                    />
                    <input
                      type="number"
                      value={filters.maxPrice}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          maxPrice: parseInt(e.target.value) || 50000,
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded"
                      placeholder="Max"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Star rating</h4>
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center gap-2 mb-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={filters.starRating.includes(rating)}
                        onChange={() => toggleStarRating(rating)}
                        className="w-4 h-4"
                      />
                      <span>
                        {"★".repeat(rating)}
                        {"☆".repeat(5 - rating)}
                      </span>
                    </label>
                  ))}
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3">Guest review score</h4>
                  {[
                    { label: "Excellent: 9+", value: 9 },
                    { label: "Very Good: 8+", value: 8 },
                    { label: "Good: 7+", value: 7 },
                    { label: "Pleasant: 6+", value: 6 },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name="reviewScore"
                        checked={filters.minReviewScore === option.value}
                        onChange={() =>
                          setFilters({
                            ...filters,
                            minReviewScore: option.value,
                          })
                        }
                        className="w-4 h-4"
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex-1">
            {loading ? (
              <div className="text-center py-12">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <p className="mt-4 text-gray-600">Loading hotels...</p>
              </div>
            ) : hotels.length === 0 ? (
              <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
                <h3 className="text-xl font-semibold mb-2">
                  No properties found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters or search criteria
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {hotels.map((hotel) => (
                  <HotelCard key={hotel.id} hotel={hotel} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
