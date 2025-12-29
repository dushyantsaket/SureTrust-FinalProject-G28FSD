import React from "react";

const WhyBooking = () => {
  const benefits = [
    {
      id: 1,
      title: "Book now, pay at the property",
      description: "FREE cancellation on most rooms",
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/illustrations-traveller/FreeCancellation.png",
    },
    {
      id: 2,
      title: "300M+ reviews from fellow travelers",
      description: "Get trusted information from guests like you",
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/illustrations-traveller/Reviews.png",
    },
    {
      id: 3,
      title: "2+ million properties worldwide",
      description: "Hotels, guest houses, apartments, and more…",
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/illustrations-traveller/TripsGlobe.png",
    },
    {
      id: 4,
      title: "Trusted 24/7 customer service you can rely on",
      description: "We're always here to help",
      image:
        "https://t-cf.bstatic.com/design-assets/assets/v3.172.2/illustrations-traveller/CustomerSupport.png",
    },
  ];

  return (
    <section className="why-booking-simple">
      <div className="container">
        <h2 className="title">Why Booking.com?</h2>
        <div className="benefits">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit">
              <div className="benefit-icon">
                <img src={benefit.image} alt="" loading="lazy" />
              </div>
              <div className="benefit-content">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .why-booking-simple {
          padding: 3rem 0;
          background: #f8f9fa;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .title {
          text-align: center;
          font-size: 2rem;
          margin-bottom: 2rem;
          color: #333;
        }

        .benefits {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .benefit {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .benefit-icon {
          width: 64px;
          height: 64px;
          margin-bottom: 1rem;
        }

        .benefit-icon img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .benefit-content h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .benefit-content p {
          color: #666;
          font-size: 0.9rem;
          line-height: 1.5;
        }

        @media (max-width: 768px) {
          .benefits {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .title {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default WhyBooking;
