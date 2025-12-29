import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./IndiaPage.css";

const IndiaPage = () => {
  const navigate = useNavigate();

  const domesticCities = [
    {
      name: "Mumbai",
      img: "https://th.bing.com/th/id/OIP.vYljrPuGxhH6mKOdDaRXrAHaEK?w=286&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
    },
    {
      name: "Hyderabad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDBXEweU3gNTECcHfgPXAbuO5DmM1nm0YXA&s",
    },
    {
      name: "Munnar",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhv_xLcwujY6QLwlKOWF2H30A2kYv_ZtMZPA&s",
    },
    {
      name: "Alleppey",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmE__cr-KNmLltcZmkfhpX9prncJNyuojKaw&s",
    },
    {
      name: "Manali",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSLwwMAN2DuBHt27kEJApnWcw9yqSZfeeWg&s",
    },
  ];

  const countryImages = [
    {
      name: "Singapore",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHsKaVSe4aSI6Hsg_FWgzB7lxyZsWHYu5K3A&s",
    },
    {
      name: "Thailand",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwJZ0GT0Nzx-jpfpBlpOAYZtapeuOFKe8hEA&s",
    },
    {
      name: "Dubai",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDyfL5RjCgkp16q2QFFM6AW8mn9F7Pye9ryw&s",
    },
    {
      name: "Malaysia",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXu6waCGRFVvq2TuV_LEjHeyuO62bolJZCrQ&s",
    },
  ];

  const popularDestinations = [
    {
      name: "Jaipur",
      img: "https://th.bing.com/th/id/OIP.U5PVhEYqqWmyPDXB7iQ4cAAAAA?w=164&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      distance: "438 km away",
    },
    {
      name: "Agra",
      img: "https://th.bing.com/th/id/OIP.GXD1f0KrvIeOjwgBGhVHgQHaFE?w=258&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      distance: "441 km away",
    },
    {
      name: "Ahmedabad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKemk3rbWJcnjOEtaLchSsNL6G4jLmyPcABA&s",
      distance: "494 km away",
    },
    {
      name: "New Delhi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEwXxCAIN9KSCELyUZ-8baktkLkD8zBgZPEQ&s",
      distance: "599 km away",
    },
    {
      name: "Varanasi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa93u4vA7QYNbjgmCBztUuWVcpJ1GyO4ffsQ&s",
      distance: "613 km away",
    },
    {
      name: "Hyderabad",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDBXEweU3gNTECcHfgPXAbuO5DmM1nm0YXA&s",
      distance: "658 km away",
    },
  ];

  const handleExplore = (place) => {
    navigate(`/explore/${place.toLowerCase()}`);
  };

  return (
    <div className="india-page">
      <div className="container">
        <h1>Explore India</h1>

        {/* Trip Planner ------------------------------------------------ */}
        <div className="trip-planner">
          <h2>Quick and easy trip planner</h2>
          <p>Pick a vibe and explore the top destinations in India</p>

          <div className="vibe-categories">
            {[
              "Cultural Exploration",
              "Shopping & Markets",
              "Festival Tourism",
              "Adventure Travel",
              "Beach Holidays",
              "Photography",
            ].map((vibe, index) => (
              <button key={index} className="vibe-btn">
                {vibe}
              </button>
            ))}
          </div>

          {/* Destination Explore Cards -------------------------------- */}
          <div className="destination-cards">
            {popularDestinations.map((dest, i) => (
              <div key={i} className="dest-card">
                <img src={dest.img} alt={dest.name} />
                <h3>{dest.name}</h3>
                <p>{dest.distance}</p>

                <button
                  onClick={() => handleExplore(dest.name)}
                  className="btn btn-outline"
                >
                  Explore
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Hotel Section ------------------------------------------------ */}
        <div className="popular-hotels">
          <h2>Popular Hotels</h2>

          <div className="hotel-grid">
            {domesticCities.map((city, i) => (
              <div className="hotel-card" key={i}>
                <img src={city.img} alt={city.name} />
                <p>
                  <Link to={`/search?city=${city.name}`}>
                    {city.name} hotels
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Country Section ---------------------------------------------- */}
        <div className="popular-countries">
          <h2>Popular Countries</h2>

          <div className="country-grid">
            {countryImages.map((country, i) => (
              <div className="country-card" key={i}>
                <img src={country.img} alt={country.name} />
                <button
                  onClick={() => handleExplore(country.name)}
                  className="btn btn-primary"
                >
                  Explore {country.name}
                </button>
              </div>
            ))}
          </div>
        </div>

        <button className="btn btn-outline">+ Show more</button>
      </div>
    </div>
  );
};

export default IndiaPage;
