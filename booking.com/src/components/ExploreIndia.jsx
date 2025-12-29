import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const ExploreIndia = () => {
  const cities = [
    {
      name: "New Delhi",
      properties: "3,514 properties",
      img: "https://th.bing.com/th/id/OIP.YaHV597A6M0WcBrjw1pZ3QHaE7?w=184&h=150&c=6&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      flag: "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/images-flags/In.png",
    },
    {
      name: "Bangalore",
      properties: "3,098 properties",
      img: "https://th.bing.com/th/id/OIP.IYutKgeTsRQREp8v5kzd6gHaE8?w=312&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      flag: "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/images-flags/In.png",
    },
    {
      name: "Mumbai",
      properties: "1,853 properties",
      img: "https://th.bing.com/th/id/OIP.7EbHb2m5g3eF5OqFCk4mdwHaEK?w=274&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      flag: "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/images-flags/In.png",
    },
    {
      name: "Chennai",
      properties: "1,214 properties",
      img: "https://th.bing.com/th/id/OIP.GB2c-iivsDC3DAL7p4jE3wHaE8?w=243&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      flag: "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/images-flags/In.png",
    },
    {
      name: "Hyderabad",
      properties: "1,794 properties",
      img: "https://th.bing.com/th/id/OIP.3inEQN-iNXgtF-NS9qG6-wHaEK?w=192&h=150&c=6&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      flag: "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/images-flags/In.png",
    },
    {
      name: "Gurgaon",
      properties: "1,574 properties",
      img: "https://th.bing.com/th/id/OIP.sr8Q5qSdfm6U-mkJ8cjNawHaE8?w=270&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1",
      flag: "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/images-flags/In.png",
    },
  ];

  return (
    <section className="explore-india">
      <div className="container">
        <h2>Explore India</h2>
        <p className="section-subtitle">
          These popular destinations have a lot to offer
        </p>

        <div className="cities-grid">
          {cities.map((city, index) => (
            <a key={index} href="#" className="destination-card">
              <div className="image-wrapper">
                <img src={city.img} alt={city.name} />
              </div>

              <div className="destination-info">
                <h3>{city.name}</h3>
                <div className="flag-row">
                  <img src={city.flag} alt="India Flag" className="flag" />
                </div>
                <p>{city.properties}</p>
              </div>
            </a>
          ))}
        </div>

        <Link to="/explore-india" className="btn btn-outline">
          Browse all destinations
        </Link>
      </div>
      <style jsx>{`
        /* Explore India Section */
        .explore-india {
          padding: 4rem 0;
          background-color: #f8f9fa;
        }

        .explore-india .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .explore-india h2 {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 0.5rem;
          text-align: center;
        }

        .explore-india .section-subtitle {
          text-align: center;
          color: #666;
          font-size: 1.1rem;
          margin-bottom: 3rem;
        }

        /* Cities Grid */
        .cities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        /* Destination Card */
        .destination-card {
          display: block;
          text-decoration: none;
          color: inherit;
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          position: relative;
        }

        .destination-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        /* Image Wrapper */
        .destination-card .image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
        }

        .destination-card .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .destination-card:hover .image-wrapper img {
          transform: scale(1.05);
        }

        /* Destination Info */
        .destination-info {
          padding: 1.5rem;
        }

        .destination-info h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .destination-info .flag-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.5rem;
        }

        .destination-info .flag {
          width: 24px;
          height: 16px;
          border-radius: 2px;
        }

        .destination-info p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
        }

        /* Browse Button */
        .explore-india .btn {
          display: inline-block;
          padding: 0.875rem 2rem;
          font-size: 1rem;
          font-weight: 500;
          text-decoration: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
          border: 2px solid #006ce4;
          color: #006ce4;
          background: transparent;
        }

        .explore-india .btn:hover {
          background: #006ce4;
          color: white;
        }

        .explore-india .btn-outline {
          display: block;
          width: fit-content;
          margin: 0 auto;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .explore-india {
            padding: 2.5rem 0;
          }

          .explore-india h2 {
            font-size: 2rem;
          }

          .cities-grid {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
          }

          .destination-card .image-wrapper {
            height: 180px;
          }

          .destination-info h3 {
            font-size: 1.3rem;
          }
        }

        @media (max-width: 480px) {
          .explore-india h2 {
            font-size: 1.75rem;
          }

          .cities-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .destination-card .image-wrapper {
            height: 160px;
          }

          .explore-india .btn {
            padding: 0.75rem 1.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ExploreIndia;
