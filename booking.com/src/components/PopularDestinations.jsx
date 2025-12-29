import React from "react";

const VacationRentalsBanner = () => {
  return (
    <section className="vacation-rentals-banner">
      <div className="container">
        <div className="banner-container" data-testid="wcu_bh_banner-desktop">
          <a
            href="https://www.booking.com/booking-home/index.en-us.html?aid=304142&label=msn691jc-10CAEoggI46AdIM1gDaGyIAQGYATO4ARfIAQzYAQPoAQH4AQGIAgGoAgG4Apud6skGwAIB0gIkZTgwMjE4MTgtMzE2Zi00OTM3LWE2OTgtNmVjN2MwMTVhZmFk2AIB4AIB"
            target="_blank"
            rel="noopener noreferrer"
            className="banner-link"
          >
            <div className="banner-overlay"></div>

            <div className="banner-content">
              <div
                className="banner-text"
                data-testid="wcu_bh_banner_desktop--content"
              >
                Want to feel at home on your next adventure?
              </div>
              <span
                className="banner-button"
                data-testid="wcu_bh_banner_desktop--button"
              >
                <span className="button-text">Discover vacation rentals</span>
              </span>
            </div>

            <div className="banner-image">
              <picture className="banner-picture">
                <img
                  src="https://r-xx.bstatic.com/xdata/images/xphoto/raw/595429723.png?k=31694af178c537eb65557820482baca2dd962010a1ad4f7bc40b017583f13338&o="
                  alt="Vacation rental showcasing a comfortable living space"
                  loading="lazy"
                  className="banner-img"
                />
              </picture>
            </div>
          </a>
        </div>
      </div>

      <style jsx>{`
        .vacation-rentals-banner {
          padding: 2rem 0;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .banner-container {
          position: relative;
          background: linear-gradient(90deg, #003580 0%, #0071c2 100%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 113, 194, 0.2);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .banner-container:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 113, 194, 0.3);
        }

        .banner-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          text-decoration: none;
          color: inherit;
          position: relative;
          min-height: 240px;
          padding: 2rem;
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            rgba(0, 53, 128, 0.9) 0%,
            rgba(0, 113, 194, 0.7) 100%
          );
          z-index: 1;
        }

        .banner-content {
          position: relative;
          z-index: 2;
          flex: 1;
          padding-right: 2rem;
        }

        .banner-text {
          font-size: 2.5rem;
          font-weight: 700;
          color: white;
          line-height: 1.2;
          margin-bottom: 2rem;
          max-width: 600px;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .banner-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: white;
          color: #003580;
          padding: 1rem 2rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1.125rem;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .banner-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
          background: #f8f9fa;
        }

        .banner-button:active {
          transform: translateY(0);
        }

        .button-text {
          white-space: nowrap;
        }

        .banner-image {
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        .banner-picture {
          display: block;
        }

        .banner-img {
          width: 400px;
          height: auto;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
        }

        .banner-link:hover .banner-img {
          transform: scale(1.02);
        }

        @media (max-width: 1024px) {
          .banner-link {
            flex-direction: column;
            text-align: center;
            padding: 2rem;
          }

          .banner-content {
            padding-right: 0;
            margin-bottom: 2rem;
          }

          .banner-text {
            font-size: 2rem;
            margin-bottom: 1.5rem;
          }

          .banner-img {
            width: 100%;
            max-width: 400px;
          }
        }

        @media (max-width: 768px) {
          .banner-text {
            font-size: 1.75rem;
          }

          .banner-button {
            padding: 0.875rem 1.75rem;
            font-size: 1rem;
          }

          .vacation-rentals-banner {
            padding: 1.5rem 0;
          }
        }

        @media (max-width: 480px) {
          .banner-text {
            font-size: 1.5rem;
          }

          .banner-link {
            padding: 1.5rem;
            min-height: 200px;
          }

          .banner-button {
            width: 100%;
            padding: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default VacationRentalsBanner;
