// import { useState, useEffect } from "react";
// // import { Search, SlidersHorizontal } from "lucide-react";
// import Header from "../components/Header";
// // import AttractionCard from "../components/AttractionCard";
// // import { supabase } from "../lib/supabase";
// import "./Attractions.css";
// import { useNavigate } from "react-router-dom";
// const navigate = useNavigate();

// export default function Attractions() {
//   const [attractions, setAttractions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchLocation, setSearchLocation] = useState("Agra");

//   const [filters, setFilters] = useState({
//     categories: [],
//     maxPrice: 50000,
//     minRating: 0,
//     freeCancellation: false,
//   });

//   useEffect(() => {
//     fetchAttractions();
//     // eslint-disable-next-line
//   }, [searchLocation, filters]);

//   const fetchAttractions = async () => {
//     setLoading(true);
//     try {
//       let query = supabase
//         .from("attractions")
//         .select("*")
//         .lte("price", filters.maxPrice)
//         .gte("rating", filters.minRating);

//       if (searchLocation) {
//         query = query.ilike("location", `%${searchLocation}%`);
//       }

//       if (filters.categories.length > 0) {
//         query = query.in("category", filters.categories);
//       }

//       if (filters.freeCancellation) {
//         query = query.eq("cancellation_available", true);
//       }

//       const { data, error } = await query.order("rating", {
//         ascending: false,
//       });

//       if (error) throw error;
//       setAttractions(data || []);
//     } catch (error) {
//       console.error("Error fetching attractions:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handlePriceChange = (value) => {
//     setFilters({ ...filters, maxPrice: value });
//   };

//   return (
//     <div className="attractions-page">
//       <Header />

//       {/* HERO */}
//       <div className="attractions-page__hero">
//         <div className="attractions-page__hero-container">
//           <h1 className="attractions-page__title">
//             Attractions, activities and experiences
//           </h1>

//           <div className="attractions-page__search-form">
//             <div className="attractions-page__search-wrapper">
//               <div className="attractions-page__search-input">
//                 <Search className="attractions-page__search-icon" />
//                 <input
//                   type="text"
//                   value={searchLocation}
//                   onChange={(e) => setSearchLocation(e.target.value)}
//                   className="attractions-page__search-field"
//                   placeholder="City or attraction"
//                 />
//               </div>
//               <button
//                 onClick={() => navigate("/Attractive1")}
//                 className="attractions-page__search-button"
//               >
//                 Search
//               </button>

//               {/* <button
//                 onClick={() => navigate("/Attractive1")}
//                 className="attractions-page__search-button"
//               >
//                 Search
//               </button> */}

//               {/*
//               <button
//                 onClick={"/Attractive1"}
//                 className="attractions-page__search-button"
//               >
//                 Search
//               </button> */}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* MAIN */}
//       <div className="attractions-page__main">
//         <div className="attractions-page__header">
//           <h2 className="attractions-page__results-title">
//             {searchLocation} attractions
//           </h2>
//           <p className="attractions-page__results-count">
//             {attractions.length} results found
//           </p>
//         </div>

//         <div className="attractions-page__layout">
//           {/* FILTERS */}
//           <aside className="attractions-page__filters">
//             <div className="attractions-page__filter-sidebar">
//               <div className="attractions-page__filter-header">
//                 <SlidersHorizontal className="attractions-page__filter-icon" />
//                 <h3 className="attractions-page__filter-title">Filter by:</h3>
//               </div>

//               {/* CATEGORY */}
//               <div className="attractions-page__filter-section">
//                 <h4 className="attractions-page__filter-subtitle">Category</h4>
//                 {[
//                   "Tours",
//                   "Activities",
//                   "Attractions",
//                   "Museums",
//                   "Entertainment",
//                 ].map((category) => (
//                   <label
//                     key={category}
//                     className="attractions-page__category-option"
//                   >
//                     <input
//                       type="checkbox"
//                       checked={filters.categories.includes(category)}
//                       onChange={(e) =>
//                         setFilters({
//                           ...filters,
//                           categories: e.target.checked
//                             ? [...filters.categories, category]
//                             : filters.categories.filter((c) => c !== category),
//                         })
//                       }
//                     />
//                     <span>{category}</span>
//                   </label>
//                 ))}
//               </div>

//               {/* PRICE */}
//               <div className="attractions-page__filter-section">
//                 <h4 className="attractions-page__filter-subtitle">
//                   Price range
//                 </h4>
//                 <input
//                   type="range"
//                   min="0"
//                   max="50000"
//                   step="500"
//                   value={filters.maxPrice}
//                   onChange={(e) => handlePriceChange(Number(e.target.value))}
//                 />
//                 <div className="attractions-page__price-value">
//                   Up to ₹{filters.maxPrice.toLocaleString()}
//                 </div>
//               </div>

//               {/* RATING */}
//               <div className="attractions-page__filter-section">
//                 <h4 className="attractions-page__filter-subtitle">Rating</h4>
//                 {[4.5, 4.0, 3.5, 3.0].map((rating) => (
//                   <label
//                     key={rating}
//                     className="attractions-page__rating-option"
//                   >
//                     <input
//                       type="radio"
//                       name="rating"
//                       checked={filters.minRating === rating}
//                       onChange={() =>
//                         setFilters({
//                           ...filters,
//                           minRating: rating,
//                         })
//                       }
//                     />
//                     <span>{rating}+ ★</span>
//                   </label>
//                 ))}
//               </div>

//               {/* CANCELLATION */}
//               <div className="attractions-page__filter-section">
//                 <label className="attractions-page__cancellation-option">
//                   <input
//                     type="checkbox"
//                     checked={filters.freeCancellation}
//                     onChange={(e) =>
//                       setFilters({
//                         ...filters,
//                         freeCancellation: e.target.checked,
//                       })
//                     }
//                   />
//                   <span>Free cancellation</span>
//                 </label>
//               </div>
//             </div>
//           </aside>

//           {/* RESULTS */}
//           <section className="attractions-page__results">
//             {loading ? (
//               <div className="attractions-page__loading">
//                 <div className="attractions-page__spinner"></div>
//                 <p>Loading attractions...</p>
//               </div>
//             ) : attractions.length === 0 ? (
//               <div className="attractions-page__empty-state">
//                 <h3>No attractions found</h3>
//                 <p>Try adjusting your search or filters</p>
//               </div>
//             ) : (
//               <div className="attractions-page__grid">
//                 {attractions.map((attraction) => (
//                   <AttractionCard key={attraction.id} attraction={attraction} />
//                 ))}
//               </div>
//             )}
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import Header from "../components/Header";
// import AttractionCard from "../components/AttractionCard";
// import { supabase } from "../lib/supabase";
import "./Attractions.css";
import { useNavigate, Link } from "react-router-dom";

export default function Attractions() {
  const navigate = useNavigate(); // MOVE THIS INSIDE THE COMPONENT

  const [attractions, setAttractions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchLocation, setSearchLocation] = useState("Agra");

  const [filters, setFilters] = useState({
    categories: [],
    maxPrice: 50000,
    minRating: 0,
    freeCancellation: false,
  });

  useEffect(() => {
    fetchAttractions();
    // eslint-disable-next-line
  }, [searchLocation, filters]);

  const fetchAttractions = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("attractions")
        .select("*")
        .lte("price", filters.maxPrice)
        .gte("rating", filters.minRating);

      if (searchLocation) {
        query = query.ilike("location", `%${searchLocation}%`);
      }

      if (filters.categories.length > 0) {
        query = query.in("category", filters.categories);
      }

      if (filters.freeCancellation) {
        query = query.eq("cancellation_available", true);
      }

      const { data, error } = await query.order("rating", {
        ascending: false,
      });

      if (error) throw error;
      setAttractions(data || []);
    } catch (error) {
      console.error("Error fetching attractions:", error);
    } finally {
      setLoading(false);
    }
  };

  const handlePriceChange = (value) => {
    setFilters({ ...filters, maxPrice: value });
  };

  const handleSearch = () => {
    // Trigger fetch with the new search location
    fetchAttractions();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="attractions-page">
      <Header />

      {/* HERO */}
      <div className="attractions-page__hero">
        <div className="attractions-page__hero-container">
          <h1 className="attractions-page__title">
            Attractions, activities and experiences
          </h1>

          <div className="attractions-page__search-form">
            <div className="attractions-page__search-wrapper">
              <div className="attractions-page__search-input">
                <Search className="attractions-page__search-icon" />
                <input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="attractions-page__search-field"
                  placeholder="City or attraction"
                />
              </div>
              {/* <button
                className="attractions-page__search-button"
              >
                Search
              </button> */}
              {/* 
              <button
  className="attractions-page__search-button"
  onClick={() =>
    navigate("/Attractive1", {
      state: { location: searchLocation },
    })
  }
>
  Search
</button> */}

              <Link
                to="/Attractive1"
                state={{ location: searchLocation }}
                className="attractions-page__search-button"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN */}
      <div className="attractions-page__main">
        <div className="attractions-page__header">
          <h2 className="attractions-page__results-title">
            {searchLocation} attractions
          </h2>
          <p className="attractions-page__results-count">
            {attractions.length} results found
          </p>
        </div>

        <div className="attractions-page__layout">
          {/* FILTERS */}
          <aside className="attractions-page__filters">
            <div className="attractions-page__filter-sidebar">
              <div className="attractions-page__filter-header">
                <SlidersHorizontal className="attractions-page__filter-icon" />
                <h3 className="attractions-page__filter-title">Filter by:</h3>
              </div>

              {/* CATEGORY */}
              <div className="attractions-page__filter-section">
                <h4 className="attractions-page__filter-subtitle">Category</h4>
                {[
                  "Tours",
                  "Activities",
                  "Attractions",
                  "Museums",
                  "Entertainment",
                ].map((category) => (
                  <label
                    key={category}
                    className="attractions-page__category-option"
                  >
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={(e) =>
                        setFilters({
                          ...filters,
                          categories: e.target.checked
                            ? [...filters.categories, category]
                            : filters.categories.filter((c) => c !== category),
                        })
                      }
                    />
                    <span>{category}</span>
                  </label>
                ))}
              </div>

              {/* PRICE */}
              <div className="attractions-page__filter-section">
                <h4 className="attractions-page__filter-subtitle">
                  Price range
                </h4>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="500"
                  value={filters.maxPrice}
                  onChange={(e) => handlePriceChange(Number(e.target.value))}
                />
                <div className="attractions-page__price-value">
                  Up to ₹{filters.maxPrice.toLocaleString()}
                </div>
              </div>

              {/* RATING */}
              <div className="attractions-page__filter-section">
                <h4 className="attractions-page__filter-subtitle">Rating</h4>
                {[4.5, 4.0, 3.5, 3.0].map((rating) => (
                  <label
                    key={rating}
                    className="attractions-page__rating-option"
                  >
                    <input
                      type="radio"
                      name="rating"
                      checked={filters.minRating === rating}
                      onChange={() =>
                        setFilters({
                          ...filters,
                          minRating: rating,
                        })
                      }
                    />
                    <span>{rating}+ ★</span>
                  </label>
                ))}
              </div>

              {/* CANCELLATION */}
              <div className="attractions-page__filter-section">
                <label className="attractions-page__cancellation-option">
                  <input
                    type="checkbox"
                    checked={filters.freeCancellation}
                    onChange={(e) =>
                      setFilters({
                        ...filters,
                        freeCancellation: e.target.checked,
                      })
                    }
                  />
                  <span>Free cancellation</span>
                </label>
              </div>
            </div>
          </aside>

          {/* RESULTS */}
          <section className="attractions-page__results">
            {loading ? (
              <div className="attractions-page__loading">
                <div className="attractions-page__spinner"></div>
                <p>Loading attractions...</p>
              </div>
            ) : attractions.length === 0 ? (
              <div className="attractions-page__empty-state">
                <h3>No attractions found</h3>
                <p>Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="attractions-page__grid">
                {attractions.map((attraction) => (
                  <AttractionCard key={attraction.id} attraction={attraction} />
                ))}
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
