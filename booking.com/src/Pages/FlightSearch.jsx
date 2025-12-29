import { useState, useEffect } from "react";

export default function FlightSearch() {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const [searchData, setSearchData] = useState({
    from: "Mumbai",
    to: "Delhi",
    date: new Date().toISOString().split("T")[0],
    travelers: 1,
    tripType: "round-trip",
  });

  const [filters, setFilters] = useState({
    stops: "any",
    airlines: [],
    maxPrice: 50000,
  });

  useEffect(() => {
    fetchFlights();
    // eslint-disable-next-line
  }, [searchData, filters]);

  const fetchFlights = async () => {
    setLoading(true);
    try {
      let query = supabase
        .from("flights")
        .select("*")
        .ilike("departure_city", `%${searchData.from}%`)
        .ilike("arrival_city", `%${searchData.to}%`)
        .lte("price", filters.maxPrice);

      if (filters.stops === "direct") {
        query = query.eq("stops", 0);
      } else if (filters.stops === "1stop") {
        query = query.lte("stops", 1);
      }

      if (filters.airlines.length > 0) {
        query = query.in("airline", filters.airlines);
      }

      const { data, error } = await query.order("price", {
        ascending: true,
      });

      if (error) throw error;
      setFlights(data || []);
    } catch (err) {
      console.error("Error fetching flights:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchFlights();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* SEARCH BAR */}
      <div className="bg-[#003580] py-8">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-white mb-6">Search Flights</h1>

          <div className="bg-white rounded-lg p-6 shadow-lg">
            <div className="flex gap-4 mb-4">
              {["round-trip", "one-way", "multi-city"].map((type) => (
                <label key={type} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="tripType"
                    value={type}
                    checked={searchData.tripType === type}
                    onChange={(e) =>
                      setSearchData({
                        ...searchData,
                        tripType: e.target.value,
                      })
                    }
                  />
                  <span>{type.replace("-", " ")}</span>
                </label>
              ))}
            </div>

            <div className="grid md:grid-cols-4 gap-4">
              <input
                value={searchData.from}
                onChange={(e) =>
                  setSearchData({ ...searchData, from: e.target.value })
                }
                placeholder="Leaving from"
                className="border p-3 rounded"
              />
              <input
                value={searchData.to}
                onChange={(e) =>
                  setSearchData({ ...searchData, to: e.target.value })
                }
                placeholder="Going to"
                className="border p-3 rounded"
              />
              <input
                type="date"
                value={searchData.date}
                onChange={(e) =>
                  setSearchData({ ...searchData, date: e.target.value })
                }
                className="border p-3 rounded"
              />
              <select
                value={searchData.travelers}
                onChange={(e) =>
                  setSearchData({
                    ...searchData,
                    travelers: Number(e.target.value),
                  })
                }
                className="border p-3 rounded"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} Adult{n > 1 ? "s" : ""}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleSearch}
              className="mt-4 w-full bg-[#0071c2] text-white py-3 rounded"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* RESULTS */}
      <div className="max-w-6xl mx-auto px-4 py-6 flex gap-6">
        {/* FILTERS */}
        <div className="w-72">
          <div className="bg-white p-6 rounded border">
            <div className="flex gap-2 mb-4">
              <SlidersHorizontal />
              <h3 className="font-bold">Filters</h3>
            </div>

            <h4 className="font-semibold mb-2">Stops</h4>
            {["any", "direct", "1stop"].map((s) => (
              <label key={s} className="block">
                <input
                  type="radio"
                  checked={filters.stops === s}
                  onChange={() => setFilters({ ...filters, stops: s })}
                />{" "}
                {s}
              </label>
            ))}
          </div>
        </div>

        {/* FLIGHT LIST */}
        <div className="flex-1">
          {loading ? (
            <p>Loading flights...</p>
          ) : flights.length === 0 ? (
            <div className="text-center bg-white p-10 rounded">
              <Plane className="mx-auto mb-4 text-gray-400" />
              No flights found
            </div>
          ) : (
            flights.map((flight) => (
              <FlightCard key={flight.id} flight={flight} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
