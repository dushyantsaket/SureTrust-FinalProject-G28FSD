import React, { useRef, useState } from "react";

const WeekendDeals = () => {
  const scrollContainerRef = useRef(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  const weekendDeals = [
    {
      id: 1,
      title: "Super Hotel O Itwari Railway Station Formerly Hotel Prime",
      location: "Nagpur, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/739076377.jpg?k=732da41c41415f5cc3d21734615c39ea543a4840f4f61e944c23b141e14ec9b7&o=",
      rating: 9.1,
      ratingLabel: "Wonderful",
      reviews: "82 reviews",
      nights: "2 nights",
      originalPrice: "₹ 5,337",
      currentPrice: "₹ 3,149",
      hasGeniusDeal: true,
      discountPercent: 41,
    },
    {
      id: 2,
      title: "FabHotel Frendz - Nr Hitech City Metro Station",
      location: "Jāmb, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/773208755.jpg?k=1118f08c9664b52ffb84488c1557b38215c6aed8717c335760f696827a259696&o=",
      rating: 9.0,
      ratingLabel: "Wonderful",
      reviews: "38 reviews",
      nights: "2 nights",
      originalPrice: "₹ 7,286",
      currentPrice: "₹ 3,497",
      hasLateEscapeDeal: true,
      discountPercent: 52,
    },
    {
      id: 3,
      title: "HOTEL KADAMB TREE",
      location: "Jabalpur, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/647166187.jpg?k=136443d87c581bd793c308788ddf0dff9d2b8ca78f50a239cb1c14ae46b6b24c&o=",
      rating: 8.4,
      ratingLabel: "Very Good",
      reviews: "48 reviews",
      nights: "2 nights",
      originalPrice: "₹ 8,000",
      currentPrice: "₹ 5,600",
      discountPercent: 30,
    },
    {
      id: 4,
      title: "Super Townhouse Nagpur Railway Station formerly Orient Avenue",
      location: "Nagpur, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/652969948.jpg?k=1518f6a6b908a5f1207dd9639657d7790a2509ac2952a73399ff2c8b3b34b62b&o=",
      rating: 8.2,
      ratingLabel: "Very Good",
      reviews: "147 reviews",
      nights: "2 nights",
      originalPrice: "₹ 6,253",
      currentPrice: "₹ 3,314",
      hasGeniusDeal: true,
      discountPercent: 47,
    },
    {
      id: 5,
      title: "FabExpress Utsav Residency - Nr Panvel Railway Station",
      location: "Jāmb, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/749659413.jpg?k=00eaaa7205615982f64fdd3b0e33e81c2343ef2e10688ff24129b73cf6a8602f&o=",
      rating: 6.8,
      ratingLabel: "Review score",
      reviews: "27 reviews",
      nights: "2 nights",
      originalPrice: "₹ 7,182",
      currentPrice: "₹ 3,447",
      hasLateEscapeDeal: true,
      discountPercent: 52,
    },
    {
      id: 6,
      title: "Townhouse Jabalpur Railway Junction Formerly Hotel Roopali",
      location: "Jabalpur, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/740252735.jpg?k=0b02b1a140ac81a395b9e26bcf643432c4e14f8197e4ff506e0ddbbe87e7636e&o=",
      rating: 6.9,
      ratingLabel: "Review score",
      reviews: "23 reviews",
      nights: "2 nights",
      originalPrice: "₹ 6,152",
      currentPrice: "₹ 3,261",
      hasGeniusDeal: true,
      discountPercent: 47,
    },
    {
      id: 7,
      title: "Super Townhouse Kalmana",
      location: "Nagpur, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/739340319.jpg?k=bf6bcf41343f3cf9febb50be3be4849086ddc4b4f15d56e193732a0fe922dd9b&o=",
      rating: 8.1,
      ratingLabel: "Very Good",
      reviews: "123 reviews",
      nights: "2 nights",
      originalPrice: "₹ 4,973",
      currentPrice: "₹ 2,934",
      hasGeniusDeal: true,
      discountPercent: 41,
    },
    {
      id: 8,
      title: "The Batra Hotel Near Nizamuddin Railway Station",
      location: "Jāmb, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/687971828.jpg?k=f13027cd571828b13ae58f6cff53e8b279c83f8c61cb5cdc69088776cd7d1fc2&o=",
      rating: 6.3,
      ratingLabel: "Review score",
      reviews: "18 reviews",
      nights: "2 nights",
      originalPrice: "₹ 10,998",
      currentPrice: "₹ 9,348",
      hasGeniusDeal: true,
      discountPercent: 15,
    },
    {
      id: 9,
      title: "Townhouse ISBT Vijay Nagar Jabalpur",
      location: "Jabalpur, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/744316775.jpg?k=4255f66b114a6623f3881376a2e1cf44485848569ae463ebc2ccf94cde8b9bda&o=",
      rating: 6.4,
      ratingLabel: "Review score",
      reviews: "5 reviews",
      nights: "2 nights",
      originalPrice: "₹ 4,204",
      currentPrice: "₹ 2,607",
      discountPercent: 38,
    },
    {
      id: 10,
      title: "Super Collection O Omkar Nagar Nagpur",
      location: "Nagpur, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/734576718.jpg?k=339a31a4b8841b833ca39b67a36e0d648de1c7dafdf2ba90f4f7c0bf4ab00069&o=",
      rating: 8.7,
      ratingLabel: "Excellent",
      reviews: "66 reviews",
      nights: "2 nights",
      originalPrice: "₹ 8,572",
      currentPrice: "₹ 4,543",
      hasGeniusDeal: true,
      discountPercent: 47,
    },
    {
      id: 11,
      title:
        "Hotel Crystal Palace Near US Consulate Bandra Kurla Complex Mumbai",
      location: "Jāmb, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/779302596.jpg?k=b2d2528504723e7b01532378538caae4892baffbe1354930464d2535a2df2c2b&o=",
      rating: 6.9,
      ratingLabel: "Review score",
      reviews: "14 reviews",
      nights: "2 nights",
      originalPrice: "₹ 3,960",
      currentPrice: "₹ 3,485",
      hasGeniusDeal: true,
      discountPercent: 12,
    },
    {
      id: 12,
      title: "Riverside Burrows",
      location: "Jabalpur, India",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/square240/712125328.jpg?k=82d2ad6d9dcc4b44bd8ce377f8ddaf5d6fcedd9cd0167b5e5d76224b7bd87f40&o=",
      rating: 8.4,
      ratingLabel: "Very Good",
      reviews: "14 reviews",
      nights: "2 nights",
      originalPrice: "₹ 15,000",
      currentPrice: "₹ 12,000",
      hasGeniusDeal: true,
      hasLateEscapeDeal: true,
      discountPercent: 20,
    },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });

      setTimeout(() => {
        updateButtonVisibility();
      }, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      setTimeout(() => {
        updateButtonVisibility();
      }, 300);
    }
  };

  const updateButtonVisibility = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollLeft = container.scrollLeft;
      const scrollWidth = container.scrollWidth;
      const clientWidth = container.clientWidth;

      setShowPrevButton(scrollLeft > 0);
      setShowNextButton(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  React.useEffect(() => {
    updateButtonVisibility();
    window.addEventListener("resize", updateButtonVisibility);

    return () => {
      window.removeEventListener("resize", updateButtonVisibility);
    };
  }, []);

  const getRatingColor = (rating) => {
    if (rating >= 9) return "#003580"; // Dark blue for Excellent/Wonderful
    if (rating >= 8) return "#008234"; // Green for Very Good
    if (rating >= 7) return "#ffb700"; // Yellow for Good
    return "#d84e4e"; // Red for lower scores
  };

  return (
    <section
      className="weekend-deals"
      id="weekend-deals"
      aria-label="Deals for the weekend"
      role="region"
      aria-roledescription="carousel"
    >
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Deals for the weekend</h2>
          <p className="section-subtitle">
            Find great deals for your weekend getaway
          </p>
        </div>

        <div className="carousel-container">
          {showPrevButton && (
            <button
              aria-label="Previous"
              type="button"
              className="carousel-button prev-button"
              onClick={scrollLeft}
            >
              <span className="button-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M14.09 19.24a.87.87 0 0 1-.64-.27l-6.06-6.06c-.25-.25-.39-.59-.39-.94s.12-.69.36-.94l6.06-6.06a.909.909 0 0 1 1.3 1.27l-.02.02-5.69 5.72 5.72 5.72c.35.35.36.91.02 1.27l-.02.02a.9.9 0 0 1-.64.27"></path>
                </svg>
              </span>
            </button>
          )}

          <div
            className="deals-carousel"
            ref={scrollContainerRef}
            onScroll={updateButtonVisibility}
          >
            {weekendDeals.map((deal) => (
              <div
                key={deal.id}
                role="group"
                aria-roledescription="slide"
                className="deal-card"
              >
                <a
                  href="#"
                  className="deal-card-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="deal-image-container">
                    <div className="deal-image-wrapper">
                      <div className="deal-image">
                        <img
                          src={deal.image}
                          alt={deal.title}
                          loading="lazy"
                          className="deal-img"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="deal-content">
                    <div className="deal-header">
                      {deal.hasGeniusDeal && (
                        <div className="deal-badge genius-badge">
                          <span role="img" aria-label="blue Genius logo">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 80 32"
                              width="60"
                              height="24"
                            >
                              <g fill="none">
                                <rect
                                  width="80"
                                  height="32.049"
                                  fill="#004cb8"
                                  rx="4"
                                ></rect>
                                <path
                                  fill="#fff"
                                  d="m44.9668352 5.5533056c.216944 0 .339024.090062.3661543.269157l.0058137.082203v6.00384c0 .598784.15488 1.081728.468224 1.446784.311552.365184.752384.546944 1.318784.546944.8360411 0 1.5222034-.3462224 2.0583844-1.0386671l.1210716-.1659409v-6.79296c0-.204512.088396-.320138.2661313-.345849l.0816447-.005511h2.201984c.203392 0 .318388.090062.343959.269157l.005481.082203v9.97056c0 .204512-.089572.318864-.267687.3442565l-.081753.0054395h-1.787008c-.2109806 0-.3651605-.0750446-.4590737-.2251337l-.0419183-.0812983-.26176-.635136c-.290944.26304-.542208.467328-.752256.612736-.210048.147072-.507904.282112-.893568.406656-.385664.12288-.81088.185216-1.275648.185216-1.220608 0-2.186496-.375552-2.8992-1.128448-.6602514-.6974537-1.0146749-1.6397022-1.0619382-2.8224411l-.0054538-.2772069v-6.3552c0-.204512.094864-.320138.283563-.345849l.086613-.005511zm12.803968-.35456c1.773184 0 3.117824.562432 4.033664 1.687424.140112.165088.140476.320866.0022925.4651045l-.0677005.0611035-1.1776 1.095552c-.173824.131456-.34944.108928-.523392-.065792-.624896-.657664-1.358336-.986496-2.201856-.986496-.521728 0-.940032.07616-1.253376.230144-.311552.15232-.468224.361728-.468224.624768 0 .306304.19968.559104.59904.756352.401152.195584 1.057152.375552 1.972992.536576 2.49984.422272 3.749632 1.5264 3.749632 3.309056 0 1.079936-.42176 1.934976-1.263616 2.5632-.843648.628224-1.874816.941568-3.095424.941568-1.265408 0-2.306944-.266624-3.128192-.799616-.821248-.53312-1.39968-1.208064-1.733632-2.026752-.088928-.192304-.049966-.338254.116886-.44128l.079338-.041536 1.656192-.744192c.218624-.102144.37184-.043264.457984.174848.175616.453376.480256.825472.91584 1.117952s.958976.437888 1.570176.437888c.507776 0 .919296-.095232 1.230848-.283776.313344-.190464.468352-.446592.468352-.768512 0-.365184-.203136-.655872-.609408-.875776-.408064-.219776-1.119104-.423936-2.136576-.612608-1.031168-.190336-1.84896-.558976-2.451584-1.107712-.604288-.546816-.9056-1.230464-.9056-2.049152 0-.977792.37888-1.756672 1.134592-2.332928.754048-.576384 1.764608-.865408 3.028352-.865408zm-36.68096 0c1.642496 0 2.928512.507136 3.858176 1.523072.929664 1.014144 1.394432 2.289664 1.394432 3.823104v.700928c0 .233728-.115328.35136-.347648.35136h-7.499392c.160128.671488.476928 1.21152.948608 1.621632.47168.408448 1.07264.612736 1.79904.612736.988288 0 1.742336-.408448 2.265728-1.227136.087808-.131456.225536-.15232.414848-.065664l1.874816.78912c.21696.072704.268544.204288.151552.394624-1.06048 1.79648-2.628864 2.694784-4.706944 2.694784-1.570048 0-2.902528-.526208-4.000896-1.576704-1.096704-1.052288-1.645952-2.397056-1.645952-4.03264 0-1.635456.545792-2.980224 1.635584-4.032512 1.089792-1.050624 2.375808-1.576704 3.858048-1.576704zm-12.376576-5.1987456c2.16 0 4.13952.7363072 5.660544 1.9553792.07296.0590464.118144.1424.125056.232704.010368.0937728-.017408.1840768-.076416.2570112-.388992.4688768-1.19808 1.4448384-1.59744 1.9241344-.059008.0729344-.14592.11808-.239616.1250304-.093824.0069504-.184064-.0243072-.253568-.0833536-.958464-.8127232-2.226048-1.3059072-3.61856-1.3059072-2.976256 0-5.389824 2.3757312-5.389824 5.1542272s2.413568 5.036032 5.389824 5.036032c1.156352 0 2.226048-.340352 3.10464-.92032v-2.250624h-2.54912c-.09024 0-.18048-.034688-.246528-.100736-.062464-.06592-.100736-.152832-.100736-.246528v-2.181248c0-.093696.038272-.180608.100736-.246528.066048-.062592.156288-.100736.246528-.100736h5.025152c.190976 0 .347264.156288.347264.347264v6.307328c0 .208384-.09024.402816-.25344.538368-1.524608 1.219072-3.51104 1.955328-5.674496 1.955328-4.8098688 0-8.7132672-3.646848-8.7132672-8.1376 0-4.4942592 3.9033984-8.2592256 8.7132672-8.2592256zm24.552448 5.1987456c1.220608 0 2.162304.332288 2.823424.996864.6138971.61710629.9427154 1.47006759.9865573 2.56011373l.0050587.25575827v6.793088c0 .2044-.08967.318738-.2677238.3441288l-.0817162.0054392h-2.200192c-.203392 0-.318486-.088788-.3440815-.2674788l-.0054865-.0820892v-6.026368c0-1.315328-.602496-1.972992-1.809408-1.972992-.406272 0-.814336.124672-1.220608.373888-.33856.20618667-.6125867.42801778-.82008.66556741l-.116496.14441659v6.815488c0 .2044-.094864.318738-.2846778.3441288l-.0871622.0054392h-2.179584c-.215376 0-.337162-.088788-.3642433-.2674788l-.0058047-.0820892v-9.970688c0-.2044.094864-.320012.2834773-.34572125l.0865707-.00551075h1.7888c.2109806 0 .3587657.08134531.4422269.24194015l.0363651.08689185.284032.6144c.929664-.818688 1.947136-1.227136 3.050752-1.227136zm7.523712.265216c.216832 0 .337526.090062.3643115.26907125l.0057365.08216075v9.970688c0 .204512-.09359.318766-.2829995.344134l-.0870485.005434h-2.179584c-.216944 0-.337652-.08869-.3644393-.267442l-.0057367-.082126v-9.970688c0-.2044.09359-.320012.2830852-.34572125l.0870908-.00551075zm-19.699584 2.211456c-.63872 0-1.174144.162688-1.602816.49152s-.736896.756352-.926208 1.282432h5.013248c-.101504-.49664-.383872-.917248-.848768-1.259904-.46656-.342656-1.01056-.514048-1.635456-.514048z"
                                  transform="translate(9 7)"
                                ></path>
                                <path
                                  fill="#febb02"
                                  d="m37.6090112 2.1196288c0 .5691264.204288 1.058944.614656 1.4694272.410496.4084992.900224.6147328 1.469312.6147328s1.058816-.2062336 1.469312-.6147328c.408448-.4104832.614656-.9003008.614656-1.4694272s-.206208-1.0589312-.614656-1.4694272c-.410496-.4104832-.900224-.6147328-1.469312-.6147328s-1.058816.2042496-1.469312.6147328c-.410368.410496-.614656.9003008-.614656 1.4694272z"
                                  transform="translate(9 7)"
                                ></path>
                              </g>
                            </svg>
                          </span>
                        </div>
                      )}

                      <div className="deal-title">
                        <h3 className="deal-title-text">{deal.title}</h3>
                        <div className="deal-location">
                          <div>{deal.location}</div>
                        </div>
                      </div>

                      <div className="deal-reviews">
                        <div
                          className="review-score"
                          style={{
                            backgroundColor: getRatingColor(deal.rating),
                          }}
                        >
                          {deal.rating}
                        </div>
                        <div className="review-details">
                          <div className="review-label">{deal.ratingLabel}</div>
                          <div className="review-count">{deal.reviews}</div>
                        </div>
                      </div>
                    </div>

                    <div className="deal-price-section">
                      <div className="deal-duration">{deal.nights}</div>
                      <div className="price-container">
                        <s className="original-price" aria-hidden="true">
                          {deal.originalPrice}
                        </s>
                        <div className="current-price">{deal.currentPrice}</div>
                        <div className="sr-only">
                          Original price {deal.originalPrice}. Current price{" "}
                          {deal.currentPrice}.
                        </div>
                      </div>
                    </div>

                    {deal.hasLateEscapeDeal && (
                      <div className="deal-badge late-escape-badge">
                        <span aria-label="Late Escape Deal">
                          <span className="badge-text">Late Escape Deal</span>
                        </span>
                      </div>
                    )}

                    <div className="discount-tag">
                      Save {deal.discountPercent}%
                    </div>
                  </div>
                </a>

                <div className="deal-actions">
                  <button
                    aria-label="Save this item to a trip list"
                    type="button"
                    className="wishlist-button"
                  >
                    <span className="button-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="20"
                      >
                        <path d="m12.45 22.33-9.48-9.98c-1.9-1.9-1.9-4.99 0-6.99 1.9-1.9 4.99-1.9 6.99 0l1.6 1.6c.3.3.8.3 1.1 0l1.6-1.6c1.9-1.9 4.99-1.9 6.99 0 1.9 1.9 1.9 4.99 0 6.99l-9.58 9.98h1.1-.3Zm-1 1.1c.3.3.8.3 1.1 0l9.58-9.98c2.49-2.49 2.49-6.59 0-9.08s-6.59-2.49-9.08 0l-1.6 1.6h1.1l-1.6-1.6c-2.49-2.49-6.59-2.49-9.08 0s-2.49 6.59 0 9.08z"></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showNextButton && (
            <button
              aria-label="Next"
              type="button"
              className="carousel-button next-button"
              onClick={scrollRight}
            >
              <span className="button-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M9.91 19.24a.87.87 0 0 0 .64-.27l6.06-6.06c.25-.25.39-.59.39-.94s-.12-.69-.36-.94l-6.06-6.06a.909.909 0 0 0-1.3 1.27l.02.02 5.69 5.72-5.72 5.72c-.35.35-.36.91-.02 1.27l.02.02a.9.9 0 0 0 .64.27"></path>
                </svg>
              </span>
            </button>
          )}
        </div>
      </div>

      <style jsx>{`
        .weekend-deals {
          padding: 3rem 0;
          background-color: #f5f5f5;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
          position: relative;
        }

        .section-header {
          margin-bottom: 2rem;
        }

        .section-title {
          font-size: 2rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .section-subtitle {
          font-size: 1rem;
          color: #666;
          margin: 0;
        }

        .carousel-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .deals-carousel {
          display: flex;
          gap: 1.5rem;
          overflow-x: auto;
          scroll-behavior: smooth;
          scrollbar-width: none;
          -ms-overflow-style: none;
          padding: 1rem 0;
          cursor: grab;
        }

        .deals-carousel::-webkit-scrollbar {
          display: none;
        }

        .deals-carousel:active {
          cursor: grabbing;
        }

        .deal-card {
          flex: 0 0 auto;
          width: 280px;
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          background: white;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .deal-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
        }

        .deal-card-link {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .deal-image-container {
          position: relative;
          overflow: hidden;
        }

        .deal-image-wrapper {
          position: relative;
          width: 100%;
          padding-top: 80%;
          background: linear-gradient(45deg, #f5f5f5, #e0e0e0);
        }

        .deal-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .deal-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .deal-card:hover .deal-img {
          transform: scale(1.05);
        }

        .deal-content {
          padding: 1.2rem;
        }

        .deal-header {
          margin-bottom: 1.2rem;
        }

        .deal-badge {
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .genius-badge {
          height: 24px;
        }

        .late-escape-badge {
          background-color: #e6f2ff;
          border: 1px solid #0071c2;
          border-radius: 4px;
          padding: 0.25rem 0.5rem;
          margin-top: 0.75rem;
        }

        .badge-text {
          font-size: 0.75rem;
          color: #0071c2;
          font-weight: 600;
        }

        .deal-title {
          margin-bottom: 1rem;
        }

        .deal-title-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin: 0 0 0.5rem 0;
          line-height: 1.3;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .deal-location {
          font-size: 0.875rem;
          color: #666;
        }

        .deal-reviews {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #f0f0f0;
        }

        .review-score {
          color: white;
          padding: 0.4rem 0.6rem;
          border-radius: 6px;
          font-weight: bold;
          font-size: 0.9rem;
          min-width: 36px;
          text-align: center;
        }

        .review-details {
          flex: 1;
        }

        .review-label {
          font-size: 0.875rem;
          font-weight: 600;
          color: #333;
        }

        .review-count {
          font-size: 0.75rem;
          color: #666;
          margin-top: 2px;
        }

        .deal-price-section {
          border-top: 2px solid #f0f0f0;
          padding-top: 1.2rem;
        }

        .deal-duration {
          font-size: 0.75rem;
          color: #666;
          margin-bottom: 0.5rem;
        }

        .price-container {
          display: flex;
          align-items: baseline;
          gap: 0.5rem;
        }

        .original-price {
          font-size: 0.875rem;
          color: #999;
          text-decoration: line-through;
        }

        .current-price {
          font-size: 1.4rem;
          font-weight: 700;
          color: #333;
        }

        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .discount-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: #e6f2ff;
          color: #0071c2;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .deal-actions {
          position: absolute;
          top: 1rem;
          left: 1rem;
        }

        .wishlist-button {
          background: rgba(255, 255, 255, 0.9);
          border: none;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          backdrop-filter: blur(2px);
        }

        .wishlist-button:hover {
          transform: scale(1.15);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          background: white;
        }

        .button-icon {
          color: #666;
          transition: color 0.3s ease;
        }

        .wishlist-button:hover .button-icon {
          color: #ff385c;
        }

        .carousel-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: white;
          border: none;
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s ease;
          z-index: 10;
        }

        .carousel-button:hover {
          transform: translateY(-50%) scale(1.1);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .carousel-button:active {
          transform: translateY(-50%) scale(0.95);
        }

        .prev-button {
          left: -22px;
        }

        .next-button {
          right: -22px;
        }

        .carousel-button .button-icon {
          color: #333;
        }

        @media (max-width: 768px) {
          .deal-card {
            width: 260px;
          }

          .prev-button {
            left: 10px;
          }

          .next-button {
            right: 10px;
          }

          .carousel-button {
            width: 40px;
            height: 40px;
          }

          .section-title {
            font-size: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .deal-card {
            width: 240px;
          }

          .carousel-button {
            width: 36px;
            height: 36px;
          }
        }
      `}</style>
    </section>
  );
};

export default WeekendDeals;
