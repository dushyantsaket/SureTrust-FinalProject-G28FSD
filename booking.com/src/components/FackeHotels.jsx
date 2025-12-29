const hotels = [
  {
    id: 1,
    name: "Sugar Loft Apartments",
    city: "Rio de Janeiro",
    rating: 7.8,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/202173231.jpg",
    desc: "Beautiful apartment with city views.",
  },
  {
    id: 2,
    name: "Hilton Copacabana",
    city: "Rio de Janeiro",
    rating: 8.3,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/242491867.jpg",
    desc: "Luxurious stay with sea view.",
  },
  {
    id: 3,
    name: "Hotel Astoria Palace",
    city: "Rio de Janeiro",
    rating: 8.0,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/68170953.jpg",
    desc: "Panoramic rooftop pool.",
  },

  // ------------------------------
  //        More 30 Hotels
  // ------------------------------

  {
    id: 4,
    name: "Copacabana Palace",
    city: "Rio de Janeiro",
    rating: 9.4,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/318581729.jpg",
    desc: "Iconic luxury hotel with ocean-facing suites.",
  },
  {
    id: 5,
    name: "Hotel Fasano Rio",
    city: "Rio de Janeiro",
    rating: 9.2,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/74211434.jpg",
    desc: "Modern design hotel with infinity pool.",
  },
  {
    id: 6,
    name: "Arena Leme Hotel",
    city: "Rio de Janeiro",
    rating: 8.9,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/211230822.jpg",
    desc: "Beachfront hotel with stylish rooms.",
  },
  {
    id: 7,
    name: "Rio Othon Palace",
    city: "Rio de Janeiro",
    rating: 8.1,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/196917995.jpg",
    desc: "Skyline views and rooftop pool.",
  },
  {
    id: 8,
    name: "Windsor Marapendi",
    city: "Rio de Janeiro",
    rating: 9.0,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/264167093.jpg",
    desc: "Luxury hotel with beachfront access.",
  },
  {
    id: 9,
    name: "PortoBay Rio de Janeiro",
    city: "Rio de Janeiro",
    rating: 8.5,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113359784.jpg",
    desc: "Beachfront hotel with rooftop pool.",
  },
  {
    id: 10,
    name: "Hotel Nacional Rio de Janeiro",
    city: "Rio de Janeiro",
    rating: 8.2,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/267665823.jpg",
    desc: "Iconic architecture with luxury rooms.",
  },
  {
    id: 11,
    name: "Miramar Hotel by Windsor",
    city: "Rio de Janeiro",
    rating: 9.1,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/59051516.jpg",
    desc: "5-star beachfront experience.",
  },
  {
    id: 12,
    name: "Selina Lapa Rio",
    city: "Rio de Janeiro",
    rating: 8.4,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/282848397.jpg",
    desc: "Trendy hostel-hotel hybrid in Lapa.",
  },
  {
    id: 13,
    name: "Hotel Atlantico Prime",
    city: "Rio de Janeiro",
    rating: 7.5,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/125835888.jpg",
    desc: "Affordable comfort near downtown.",
  },
  {
    id: 14,
    name: "CDesign Hotel",
    city: "Rio de Janeiro",
    rating: 8.6,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/169501179.jpg",
    desc: "Modern hotel with futuristic architecture.",
  },
  {
    id: 15,
    name: "Américas Barra Hotel",
    city: "Rio de Janeiro",
    rating: 8.0,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/212173314.jpg",
    desc: "Comfortable hotel with rooftop pool.",
  },
  {
    id: 16,
    name: "Gran Nobile Rio de Janeiro",
    city: "Rio de Janeiro",
    rating: 8.7,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/276308643.jpg",
    desc: "Elegant hotel with large suites.",
  },
  {
    id: 17,
    name: "Windsor Oceanico",
    city: "Rio de Janeiro",
    rating: 8.9,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/84640362.jpg",
    desc: "Modern hotel close to the beach.",
  },
  {
    id: 18,
    name: "Hotel Riu Plaza Rio",
    city: "Rio de Janeiro",
    rating: 9.0,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/316937573.jpg",
    desc: "Premium luxury stay with world-class services.",
  },
  {
    id: 19,
    name: "Windsor Excelsior Hotel",
    city: "Rio de Janeiro",
    rating: 8.5,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/200161059.jpg",
    desc: "Beachfront hotel with great views.",
  },
  {
    id: 20,
    name: "Hotel Atlântico Business",
    city: "Rio de Janeiro",
    rating: 7.8,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/81975924.jpg",
    desc: "Business-friendly stay in central Rio.",
  },
  {
    id: 21,
    name: "Sol Ipanema Hotel",
    city: "Rio de Janeiro",
    rating: 8.4,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/191370556.jpg",
    desc: "Beachfront hotel in trendy Ipanema.",
  },
  {
    id: 22,
    name: "Gallant Hotel",
    city: "Rio de Janeiro",
    rating: 7.0,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/212027167.jpg",
    desc: "Affordable hotel close to metro station.",
  },
  {
    id: 23,
    name: "Windsor Copa Hotel",
    city: "Rio de Janeiro",
    rating: 8.3,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/281302197.jpg",
    desc: "Comfortable hotel with great location.",
  },
  {
    id: 24,
    name: "Ibis Copacabana",
    city: "Rio de Janeiro",
    rating: 8.1,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/247881502.jpg",
    desc: "Popular budget-friendly option in Copacabana.",
  },
  {
    id: 25,
    name: "Hotel Vermont Ipanema",
    city: "Rio de Janeiro",
    rating: 8.2,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/113330282.jpg",
    desc: "Excellent location near Ipanema beach.",
  },
  {
    id: 26,
    name: "Hotel Regina",
    city: "Rio de Janeiro",
    rating: 8.6,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/146962530.jpg",
    desc: "Classic hotel with cozy ambiance.",
  },
  {
    id: 27,
    name: "Hotel Atlântico Rio",
    city: "Rio de Janeiro",
    rating: 8.0,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/81975889.jpg",
    desc: "Great value stay near beaches.",
  },
  {
    id: 28,
    name: "Royal Rio Palace Hotel",
    city: "Rio de Janeiro",
    rating: 8.4,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/117503132.jpg",
    desc: "Elegant interiors and rooftop pool.",
  },
  {
    id: 29,
    name: "Hotel Atlantico Praia",
    city: "Rio de Janeiro",
    rating: 7.9,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/81975853.jpg",
    desc: "Beachfront stay in Copacabana.",
  },
  {
    id: 30,
    name: "Lagoa Guest House",
    city: "Rio de Janeiro",
    rating: 8.7,
    image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/58014318.jpg",
    desc: "Beautiful guesthouse near Lagoa.",
  },
  {
    id: 31,
    name: "Casa Nova Hotel",
    city: "Rio de Janeiro",
    rating: 8.3,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/204828716.jpg",
    desc: "Modern boutique stay in Lapa.",
  },
  {
    id: 32,
    name: "Mar Palace Copacabana",
    city: "Rio de Janeiro",
    rating: 8.2,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/276842418.jpg",
    desc: "Comfort and convenience in Copacabana.",
  },
  {
    id: 33,
    name: "JANEIRO Hotel",
    city: "Rio de Janeiro",
    rating: 9.0,
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/196310230.jpg",
    desc: "Luxury design hotel facing the beach.",
  },
];

export default hotels;
