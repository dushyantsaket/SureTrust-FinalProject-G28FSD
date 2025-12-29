import React, { useState, useEffect } from "react";
import { Heart, MapPin, Star, Check, Search, X, Filter } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HotelBookingPage = () => {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState("New Delhi");
  const [hotels, setHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [checkIn, setCheckIn] = useState("2024-12-24");
  const [checkOut, setCheckOut] = useState("2024-12-26");
  const [isMobile, setIsMobile] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const allHotels = [
    {
      id: 1,
      name: "Hotel Sai Group",
      rating: 3,
      reviews: 45,
      score: 7.3,
      scoreText: "Good",
      location: "Karol Bagh, New Delhi",
      city: "New Delhi",
      distance: "2.3 km from downtown",
      price: 2216,
      discountPrice: 1999,
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "No prepayment needed", "Pay at hotel"],
      roomType: "Deluxe Double Room",
      amenities: [
        "Free WiFi",
        "Air Conditioning",
        "Restaurant",
        "Room Service",
        "24-hour front desk",
        "Laundry service",
      ],
      description:
        "Located in the heart of Karol Bagh, Hotel Sai Group offers comfortable accommodation with modern amenities.",
      facilities: [
        "Parking",
        "Elevator",
        "Business center",
        "Daily housekeeping",
        "Airport shuttle",
      ],
    },
    {
      id: 2,
      name: "The Taj Mahal Palace",
      rating: 5,
      reviews: 2345,
      score: 9.2,
      scoreText: "Excellent",
      location: "Colaba, Mumbai",
      city: "Mumbai",
      distance: "0.5 km from Gateway of India",
      price: 18500,
      discountPrice: 16800,
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=800&h=600&fit=crop",
      ],
      features: [
        "Free cancellation",
        "Breakfast included",
        "VIP room facilities",
      ],
      roomType: "Luxury Sea View Suite",
      amenities: [
        "Free WiFi",
        "Swimming Pool",
        "Spa",
        "Fine Dining",
        "Valet Parking",
        "Butler service",
        "Marble bathroom",
      ],
      description:
        "Experience royal luxury at The Taj Mahal Palace with breathtaking views of the Arabian Sea.",
      facilities: [
        "Concierge",
        "Fitness center",
        "Pool bar",
        "Conference rooms",
        "Luxury spa",
        "Private beach access",
      ],
    },
    {
      id: 3,
      name: "ITC Grand Chola",
      rating: 5,
      reviews: 1890,
      score: 9.0,
      scoreText: "Superb",
      location: "Guindy, Chennai",
      city: "Chennai",
      distance: "3 km from Chennai Airport",
      price: 12500,
      discountPrice: 11200,
      image:
        "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Dinner included", "Early check-in"],
      roomType: "Executive Club Room",
      amenities: [
        "Free WiFi",
        "Swimming Pool",
        "Gym",
        "Business Center",
        "Spa",
        "Multiple restaurants",
      ],
      description:
        "A luxurious hotel inspired by South Indian architecture, offering premium accommodations.",
      facilities: [
        "Parking",
        "Airport transfer",
        "Banquet hall",
        "Smoking rooms",
        "Pet friendly",
      ],
    },
    {
      id: 4,
      name: "The Oberoi Udaivilas",
      rating: 5,
      reviews: 1567,
      score: 9.4,
      scoreText: "Exceptional",
      location: "Udaipur, Rajasthan",
      city: "Udaipur",
      distance: "On the banks of Lake Pichola",
      price: 32000,
      discountPrice: 28999,
      image:
        "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1596178060810-7d0df7f99a3a?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Breakfast & dinner", "Lakeside view"],
      roomType: "Premier Room with Lake View",
      amenities: [
        "Free WiFi",
        "Infinity Pool",
        "Spa",
        "Private butler",
        "Lake view",
        "Garden",
      ],
      description:
        "Set amidst beautiful gardens with stunning views of Lake Pichola.",
      facilities: [
        "Boat service",
        "Yoga classes",
        "Cultural shows",
        "Private dining",
        "Kids club",
      ],
    },
    {
      id: 5,
      name: "The Leela Palace",
      rating: 5,
      reviews: 2103,
      score: 9.3,
      scoreText: "Wonderful",
      location: "Chanakyapuri, New Delhi",
      city: "New Delhi",
      distance: "1.2 km from India Gate",
      price: 18500,
      discountPrice: 16999,
      image:
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1596178060810-7d0df7f99a3a?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Breakfast included", "Lounge access"],
      roomType: "Club Suite",
      amenities: [
        "Free WiFi",
        "Pool",
        "Spa",
        "Gym",
        "Multiple dining options",
        "Lounge",
      ],
      description:
        "Experience royal elegance at The Leela Palace, offering luxurious accommodations.",
      facilities: [
        "Valet parking",
        "Business center",
        "Event spaces",
        "Car rental",
        "Currency exchange",
      ],
    },
    {
      id: 6,
      name: "The Ritz-Carlton",
      rating: 5,
      reviews: 1789,
      score: 9.1,
      scoreText: "Excellent",
      location: "Bandra Kurla Complex, Mumbai",
      city: "Mumbai",
      distance: "0.8 km from business district",
      price: 19500,
      discountPrice: 17999,
      image:
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "City view", "Late check-out"],
      roomType: "Deluxe Room with City View",
      amenities: [
        "Free WiFi",
        "Rooftop pool",
        "Spa",
        "Fitness center",
        "Business center",
        "Restaurants",
      ],
      description: "Modern luxury in the heart of Mumbai's business district.",
      facilities: [
        "Concierge",
        "24-hour room service",
        "Meeting rooms",
        "Airport transfer",
        "Souvenir shop",
      ],
    },
    {
      id: 7,
      name: "Park Hyatt",
      rating: 5,
      reviews: 1432,
      score: 8.9,
      scoreText: "Fabulous",
      location: "Hadapsar, Pune",
      city: "Pune",
      distance: "1.5 km from Pune Airport",
      price: 11500,
      discountPrice: 10299,
      image:
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Breakfast included", "Pool view"],
      roomType: "Park Deluxe Room",
      amenities: [
        "Free WiFi",
        "Outdoor pool",
        "Spa",
        "Gym",
        "Restaurants",
        "Bar",
      ],
      description:
        "Contemporary luxury hotel offering serene accommodations with garden views.",
      facilities: [
        "Garden",
        "Tennis court",
        "Kids play area",
        "Library",
        "Bicycle rental",
      ],
    },
    {
      id: 8,
      name: "The Westin",
      rating: 5,
      reviews: 1678,
      score: 8.8,
      scoreText: "Very Good",
      location: "Koregaon Park, Pune",
      city: "Pune",
      distance: "2 km from city center",
      price: 9500,
      discountPrice: 8499,
      image:
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Wellness amenities", "Garden view"],
      roomType: "Westin Executive Room",
      amenities: [
        "Free WiFi",
        "Heavenly Bed",
        "Gym",
        "Pool",
        "Spa",
        "Restaurants",
      ],
      description:
        "A wellness-focused hotel offering rejuvenating experiences.",
      facilities: [
        "Meditation garden",
        "Yoga studio",
        "Running track",
        "Health food options",
        "Sleep well menu",
      ],
    },
    {
      id: 9,
      name: "Taj Falaknuma Palace",
      rating: 5,
      reviews: 1321,
      score: 9.5,
      scoreText: "Exceptional",
      location: "Falaknuma, Hyderabad",
      city: "Hyderabad",
      distance: "On a hill overlooking Hyderabad",
      price: 45000,
      discountPrice: 40999,
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Palace tour", "Butler service"],
      roomType: "Historic Suite",
      amenities: [
        "Free WiFi",
        "Palace library",
        "Spa",
        "Horse carriage rides",
        "Fine dining",
        "Garden",
      ],
      description:
        "Once the royal palace of the Nizam of Hyderabad, this heritage property offers a truly regal experience.",
      facilities: [
        "Grand ballroom",
        "Tennis court",
        "Jade room",
        "Hookah lounge",
        "Palace tours",
      ],
    },
    {
      id: 10,
      name: "Four Seasons Hotel",
      rating: 5,
      reviews: 1987,
      score: 9.2,
      scoreText: "Excellent",
      location: "Worli, Mumbai",
      city: "Mumbai",
      distance: "Sea-facing location",
      price: 22500,
      discountPrice: 20499,
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1596178060810-7d0df7f99a3a?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Sea view", "Spa credit"],
      roomType: "Premier Sea View Room",
      amenities: [
        "Free WiFi",
        "Infinity pool",
        "Spa",
        "Multiple restaurants",
        "Gym",
        "Bar",
      ],
      description: "Luxurious accommodations with stunning Arabian Sea views.",
      facilities: [
        "Beach access",
        "Yacht service",
        "Helipad",
        "Business center",
        "Private dining",
      ],
    },
    {
      id: 11,
      name: "JW Marriott",
      rating: 5,
      reviews: 1765,
      score: 8.9,
      scoreText: "Fabulous",
      location: "Aerocity, New Delhi",
      city: "New Delhi",
      distance: "Connected to Delhi Airport",
      price: 13500,
      discountPrice: 12199,
      image:
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Airport transfer", "Lounge access"],
      roomType: "Executive Room",
      amenities: [
        "Free WiFi",
        "Pool",
        "Spa",
        "Gym",
        "Multiple restaurants",
        "Executive lounge",
      ],
      description: "Modern luxury hotel directly connected to Delhi Airport.",
      facilities: [
        "Direct airport access",
        "Conference rooms",
        "Shopping arcade",
        "Currency exchange",
        "Travel desk",
      ],
    },
    {
      id: 12,
      name: "The St. Regis",
      rating: 5,
      reviews: 1543,
      score: 9.0,
      scoreText: "Superb",
      location: "Lower Parel, Mumbai",
      city: "Mumbai",
      distance: "1 km from business district",
      price: 24500,
      discountPrice: 21999,
      image:
        "https://images.unsplash.com/photo-1596178060810-7d0df7f99a3a?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1596178060810-7d0df7f99a3a?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Butler service", "Champagne welcome"],
      roomType: "St. Regis Suite",
      amenities: [
        "Free WiFi",
        "Pool",
        "Remède Spa",
        "Gym",
        "Fine dining",
        "Bar",
      ],
      description: "Ultimate luxury with signature butler service.",
      facilities: [
        "Butler service",
        "Ballroom",
        "Private dining",
        "Wine cellar",
        "Art gallery",
      ],
    },
    {
      id: 13,
      name: "Radisson Blu",
      rating: 4,
      reviews: 876,
      score: 8.2,
      scoreText: "Very Good",
      location: "Paschim Vihar, New Delhi",
      city: "New Delhi",
      distance: "2.5 km from metro station",
      price: 6500,
      discountPrice: 5899,
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Breakfast buffet", "Free parking"],
      roomType: "Business Class Room",
      amenities: [
        "Free WiFi",
        "Pool",
        "Restaurant",
        "Bar",
        "Gym",
        "Conference room",
      ],
      description: "Modern hotel with excellent business facilities.",
      facilities: [
        "Parking",
        "Business center",
        "Banquet hall",
        "Coffee shop",
        "Gift shop",
      ],
    },
    {
      id: 14,
      name: "Holiday Inn",
      rating: 4,
      reviews: 543,
      score: 7.9,
      scoreText: "Good",
      location: "Mayur Vihar, New Delhi",
      city: "New Delhi",
      distance: "Near Akshardham Temple",
      price: 5500,
      discountPrice: 4999,
      image:
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Kids stay free", "Family rooms"],
      roomType: "Family Room",
      amenities: [
        "Free WiFi",
        "Pool",
        "Kids club",
        "Restaurant",
        "Play area",
        "Gym",
      ],
      description: "Family-friendly hotel offering comfortable accommodations.",
      facilities: [
        "Kids pool",
        "Game room",
        "Family suites",
        "Babysitting",
        "Children's menu",
      ],
    },
    {
      id: 15,
      name: "Novotel Hotel",
      rating: 4,
      reviews: 678,
      score: 8.1,
      scoreText: "Very Good",
      location: "Aerocity, New Delhi",
      city: "New Delhi",
      distance: "5 minutes from airport",
      price: 8500,
      discountPrice: 7699,
      image:
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Airport shuttle", "Modern design"],
      roomType: "Superior Room",
      amenities: [
        "Free WiFi",
        "Pool",
        "Gym",
        "Restaurant",
        "Bar",
        "Business center",
      ],
      description:
        "Contemporary hotel with modern design and excellent connectivity to the airport.",
      facilities: [
        "Free airport shuttle",
        "Conference rooms",
        "Co-working space",
        "Restaurant",
        "Spa",
      ],
    },
    {
      id: 16,
      name: "Hyatt Regency",
      rating: 5,
      reviews: 1324,
      score: 8.7,
      scoreText: "Fabulous",
      location: "Bhikaji Cama Place, New Delhi",
      city: "New Delhi",
      distance: "1.8 km from Delhi Haat",
      price: 12500,
      discountPrice: 11499,
      image:
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Regency Club access", "City views"],
      roomType: "Regency Club Room",
      amenities: [
        "Free WiFi",
        "Pool",
        "Spa",
        "Gym",
        "Multiple restaurants",
        "Club lounge",
      ],
      description:
        "Upscale hotel offering premium accommodations with Regency Club access.",
      facilities: [
        "Club lounge",
        "Banquet halls",
        "Business center",
        "Shopping arcade",
        "Car rental",
      ],
    },
    {
      id: 17,
      name: "Sheraton Grand",
      rating: 5,
      reviews: 987,
      score: 8.5,
      scoreText: "Very Good",
      location: "Brigade Gateway, Bangalore",
      city: "Bangalore",
      distance: "Near Manyata Tech Park",
      price: 11000,
      discountPrice: 9999,
      image:
        "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1564501049418-3c27787d01e8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Tech-friendly", "Near tech parks"],
      roomType: "Grand Room",
      amenities: ["Free WiFi", "Pool", "Gym", "Spa", "Restaurants", "Bar"],
      description: "Modern hotel catering to tech professionals.",
      facilities: [
        "Business center",
        "Co-working space",
        "Tech support",
        "Conference rooms",
        "High-speed internet",
      ],
    },
    {
      id: 18,
      name: "Taj Bengal",
      rating: 5,
      reviews: 1456,
      score: 9.0,
      scoreText: "Superb",
      location: "Alipore, Kolkata",
      city: "Kolkata",
      distance: "3 km from Victoria Memorial",
      price: 14500,
      discountPrice: 12999,
      image:
        "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=400&h=300&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=800&h=600&fit=crop",
      ],
      features: ["Free cancellation", "Cultural experiences", "Garden views"],
      roomType: "Luxury Room",
      amenities: [
        "Free WiFi",
        "Pool",
        "Spa",
        "Multiple restaurants",
        "Bar",
        "Garden",
      ],
      description: "Elegant hotel combining colonial charm with modern luxury.",
      facilities: [
        "Art gallery",
        "Cultural performances",
        "Tea lounge",
        "Banquet halls",
        "Library",
      ],
    },
  ];

  useEffect(() => {
    const filtered = allHotels.filter((h) => h.city === "New Delhi");
    setHotels(filtered);
  }, []);

  const filters = [
    {
      title: "Your previous filters",
      options: [
        { name: "Guesthouses", count: 77 },
        { name: "Bed and Breakfast", count: 115 },
        { name: "Vacation Homes", count: 47 },
        { name: "Inns/Inns", count: 8 },
      ],
    },
    {
      title: "Popular filters",
      options: [
        { name: "5 stars", count: 58 },
        { name: "Wonderful: 9+", count: 190 },
        { name: "Free cancellation", count: 907 },
        { name: "Apartments", count: 168 },
        { name: "Breakfast included", count: 342 },
        { name: "Swimming pool", count: 289 },
        { name: "Spa", count: 156 },
      ],
    },
    {
      title: "Price range",
      options: [
        { name: "Under ₹5,000", count: 245 },
        { name: "₹5,000 - ₹10,000", count: 389 },
        { name: "₹10,000 - ₹20,000", count: 187 },
        { name: "Over ₹20,000", count: 96 },
      ],
    },
  ];

  // const handleSearch1 = () => {
  //   // Example hotel id (you can make this dynamic later)
  //   const hotelId = 1;

  //   navigate(`/hotel-booking${hotelId}`, {
  //     state: {
  //       city: searchQuery,
  //       checkIn,
  //       checkOut,
  //     },
  //   });
  // };

  const handleSearch1 = () => {
    navigate("", {
      state: {
        city: searchQuery,
        checkIn,
        checkOut,
      },
    });
  };

  const handleReserveClick = () => {
    navigate("/hotel-payment", {
      state: {
        checkIn,
        checkOut,
      },
    });
  };

  const toggleFilter = (filter) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filter]: !prev[filter],
    }));
  };

  const handleSearch = () => {
    const filtered = allHotels.filter(
      (hotel) =>
        hotel.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hotel.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setHotels(filtered);
    setSelectedHotel(null);
  };

  const handleHotelClick = (hotel) => {
    setSelectedHotel(hotel);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToList = () => {
    setSelectedHotel(null);
  };

  const getAvailableCities = () => {
    const cities = [...new Set(allHotels.map((hotel) => hotel.city))];
    return cities;
  };

  const filterByPrice = (min, max) => {
    const filtered = allHotels.filter(
      (hotel) => hotel.price >= min && hotel.price <= max
    );
    setHotels(filtered);
    setSelectedHotel(null);
  };

  const HotelDetailPage = ({ hotel, onBack, checkIn, checkOut }) => (
    <div style={styles.detailPage}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerTop}>
            <h1 style={styles.logo}>Booking.com</h1>
            <button style={styles.btnSignin}>Sign in</button>
          </div>
        </div>
      </header>

      <div style={styles.detailContainer}>
        <button style={styles.backButton} onClick={onBack}>
          ← Back to results
        </button>

        <div style={styles.detailHeader}>
          <div>
            <h1 style={styles.detailTitle}>{hotel.name}</h1>
            <div style={styles.detailLocation}>
              <MapPin size={16} />
              <span>{hotel.location}</span>
              <a href="#" style={styles.mapLink}>
                Show on map
              </a>
            </div>
            <div style={styles.detailStars}>
              {[...Array(hotel.rating)].map((_, i) => (
                <Star key={i} size={16} fill="#febb02" color="#febb02" />
              ))}
              <span style={styles.ratingText}>{hotel.rating} stars</span>
            </div>
          </div>
          <div style={styles.detailRating}>
            <div style={styles.ratingScoreLarge}>{hotel.score}</div>
            <div style={styles.ratingLabel}>{hotel.scoreText}</div>
            <div style={styles.reviewsCount}>{hotel.reviews} reviews</div>
          </div>
        </div>

        <div style={styles.detailImages}>
          {hotel.images.map((img, index) => (
            <div
              key={index}
              style={{
                ...styles.imageWrapper,
                ...(index === 0 ? styles.mainImage : styles.sideImage),
              }}
            >
              <img
                src={img}
                alt={`${hotel.name} - View ${index + 1}`}
                style={styles.detailImg}
              />
            </div>
          ))}
        </div>

        <div style={styles.detailContent}>
          <div style={styles.detailInfo}>
            <div style={styles.descriptionSection}>
              <h2 style={styles.sectionTitle}>About this property</h2>
              <p style={styles.descriptionText}>{hotel.description}</p>
            </div>

            <div style={styles.amenitiesSection}>
              <h3 style={styles.sectionSubtitle}>Most popular amenities</h3>
              <div style={styles.amenitiesGrid}>
                {hotel.amenities.map((amenity, idx) => (
                  <div key={idx} style={styles.amenityItem}>
                    <Check size={16} color="#008009" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.facilitiesSection}>
              <h3 style={styles.sectionSubtitle}>Hotel facilities</h3>
              <div style={styles.facilitiesGrid}>
                {hotel.facilities.map((facility, idx) => (
                  <div key={idx} style={styles.facilityItem}>
                    <Check size={16} color="#0071c2" />
                    <span>{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.roomInfoSection}>
              <h3 style={styles.sectionSubtitle}>Room information</h3>
              <div style={styles.roomDetails}>
                <div style={styles.roomTypeInfo}>
                  <strong>Room Type:</strong> {hotel.roomType}
                </div>
                <div style={styles.roomFeatures}>
                  {hotel.features.map((feature, idx) => (
                    <div key={idx} style={styles.roomFeature}>
                      <Check size={14} color="#008009" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={styles.bookingSection}>
            <div style={styles.bookingBox}>
              <h3 style={styles.bookingTitle}>Select your stay</h3>

              <div style={styles.bookingDates}>
                <div style={styles.dateField}>
                  <label style={styles.dateLabel}>Check-in date</label>
                  <div style={styles.dateInput}>{checkIn}</div>
                </div>
                <div style={styles.dateField}>
                  <label style={styles.dateLabel}>Check-out date</label>
                  <div style={styles.dateInput}>{checkOut}</div>
                </div>
              </div>

              <div style={styles.roomSelection}>
                <label style={styles.dateLabel}>Room type</label>
                <div style={styles.roomTypeDisplay}>{hotel.roomType}</div>
              </div>

              <div style={styles.priceSummary}>
                <div style={styles.priceRow}>
                  <span>Price for 2 nights</span>
                  <span>
                    {hotel.discountPrice ? (
                      <>
                        <span style={styles.originalPriceText}>
                          ₹ {hotel.price * 2}
                        </span>
                        <span style={styles.discountedPriceText}>
                          ₹ {hotel.discountPrice * 2}
                        </span>
                      </>
                    ) : (
                      `₹ ${hotel.price * 2}`
                    )}
                  </span>
                </div>
                <div style={styles.priceRow}>
                  <span>Taxes and fees</span>
                  <span>₹ 311</span>
                </div>
                <div style={{ ...styles.priceRow, ...styles.priceRowTotal }}>
                  <span>Total</span>
                  <span>
                    ₹ {(hotel.discountPrice || hotel.price) * 2 + 311}
                  </span>
                </div>
              </div>

              <button style={styles.bookButton} onClick={handleReserveClick}>
                Reserve this room
              </button>

              <div style={styles.paymentInfo}>
                <div style={styles.freeCancellation}>
                  <Check size={14} color="#008009" />
                  <span>Free cancellation before {checkIn}</span>
                </div>
                <div style={styles.paymentNote}>
                  No payment needed until {checkIn}
                </div>
              </div>
            </div>

            <div style={styles.specialOffers}>
              <h4 style={styles.offersTitle}>Special offers</h4>
              <div style={styles.offerItem}>
                <Check size={14} color="#008009" />
                <span>Best price guarantee</span>
              </div>
              <div style={styles.offerItem}>
                <Check size={14} color="#008009" />
                <span>Member discounts available</span>
              </div>
              <div style={styles.offerItem}>
                <Check size={14} color="#008009" />
                <span>Mobile-only deals</span>
              </div>
            </div>
          </div>
        </div>

        <div style={styles.reviewsSection}>
          <h3 style={styles.sectionSubtitle}>Guest reviews</h3>
          <div style={styles.reviewSummary}>
            <div style={styles.reviewScore}>
              <div style={styles.scoreLarge}>{hotel.score}</div>
              <div style={styles.scoreLabel}>{hotel.scoreText}</div>
              <div style={styles.reviewCount}>{hotel.reviews} reviews</div>
            </div>
            <div style={styles.reviewBreakdown}>
              <div style={styles.reviewCategory}>
                <span style={styles.categoryName}>Cleanliness</span>
                <div style={styles.ratingBar}>
                  <div
                    style={{
                      ...styles.ratingFill,
                      width: `${hotel.score * 10}%`,
                    }}
                  ></div>
                </div>
                <span style={styles.categoryScore}>{hotel.score}</span>
              </div>
              <div style={styles.reviewCategory}>
                <span style={styles.categoryName}>Comfort</span>
                <div style={styles.ratingBar}>
                  <div
                    style={{
                      ...styles.ratingFill,
                      width: `${(hotel.score - 0.2) * 10}%`,
                    }}
                  ></div>
                </div>
                <span style={styles.categoryScore}>{hotel.score - 0.2}</span>
              </div>
              <div style={styles.reviewCategory}>
                <span style={styles.categoryName}>Location</span>
                <div style={styles.ratingBar}>
                  <div
                    style={{
                      ...styles.ratingFill,
                      width: `${(hotel.score + 0.1) * 10}%`,
                    }}
                  ></div>
                </div>
                <span style={styles.categoryScore}>{hotel.score + 0.1}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedHotel) {
    return (
      <HotelDetailPage
        hotel={selectedHotel}
        onBack={handleBackToList}
        checkIn={checkIn}
        checkOut={checkOut}
      />
    );
  }

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <div style={styles.headerContent}>
          <div style={styles.headerTop}>
            <h1 style={styles.logo}>Booking.com</h1>
            <div style={styles.authButtons}>
              <button style={styles.btnRegister}>Register</button>
              <button style={styles.btnSignin}>Sign in</button>
            </div>
          </div>

          <div style={styles.searchBar}>
            <input
              type="text"
              placeholder="Where are you going?"
              style={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              list="cities"
            />
            <datalist id="cities">
              {getAvailableCities().map((city) => (
                <option key={city} value={city} />
              ))}
            </datalist>
            <input
              type="date"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              style={styles.searchDate}
            />
            <input
              type="date"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              style={styles.searchDate}
            />
            <input
              type="text"
              placeholder="2 adults · 0 children · 1 room"
              style={styles.searchInput}
            />
            <button style={styles.btnSearch} onClick={handleSearch1}>
              <Search size={20} /> Search
            </button>
          </div>
        </div>
      </header>

      <div style={styles.mainContent}>
        <div style={styles.breadcrumb}>Home &gt; Search results</div>

        <div style={styles.resultsHeader}>
          <h2 style={styles.resultsTitle}>
            {searchQuery}: {hotels.length} properties found
          </h2>
          <div style={styles.headerActions}>
            {isMobile && (
              <button
                style={styles.mobileFilterBtn}
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter size={18} /> Filters
              </button>
            )}
            <div style={styles.viewButtons}>
              <button style={{ ...styles.btnView, ...styles.btnViewActive }}>
                List
              </button>
              <button style={styles.btnView}>Map</button>
            </div>
          </div>
        </div>

        <div style={styles.contentLayout}>
          <aside
            style={{
              ...styles.sidebar,
              ...(showFilters && isMobile ? styles.sidebarVisible : {}),
            }}
          >
            {isMobile && (
              <div style={styles.mobileSidebarHeader}>
                <h3>Filters</h3>
                <button
                  style={styles.closeSidebar}
                  onClick={() => setShowFilters(false)}
                >
                  <X size={24} />
                </button>
              </div>
            )}
            <div style={styles.filterPanel}>
              <h3 style={styles.filterTitle}>Filter by:</h3>

              <div style={styles.filterSection}>
                <h4 style={styles.filterSectionTitle}>Price per night</h4>
                <div style={styles.priceRangeDisplay}>
                  ₹{priceRange[0]} - ₹{priceRange[1]}
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000"
                  step="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  style={styles.priceSlider}
                />
                <div style={styles.priceQuickFilters}>
                  <button
                    style={styles.priceFilterBtn}
                    onClick={() => filterByPrice(0, 5000)}
                  >
                    Under ₹5k
                  </button>
                  <button
                    style={styles.priceFilterBtn}
                    onClick={() => filterByPrice(5000, 10000)}
                  >
                    ₹5k-₹10k
                  </button>
                  <button
                    style={styles.priceFilterBtn}
                    onClick={() => filterByPrice(10000, 20000)}
                  >
                    ₹10k-₹20k
                  </button>
                </div>
              </div>

              <div style={styles.filterSection}>
                <h4 style={styles.filterSectionTitle}>Star rating</h4>
                {[5, 4, 3, 2, 1].map((stars) => (
                  <label key={stars} style={styles.filterOption}>
                    <div style={styles.filterOptionLeft}>
                      <input type="checkbox" style={styles.filterCheckbox} />
                      <div style={styles.starRatingFilter}>
                        {[...Array(stars)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            fill="#febb02"
                            color="#febb02"
                          />
                        ))}
                      </div>
                    </div>
                    <span style={styles.filterCount}>
                      {allHotels.filter((h) => h.rating === stars).length}
                    </span>
                  </label>
                ))}
              </div>

              {filters.map((group, idx) => (
                <div key={idx} style={styles.filterSection}>
                  <h4 style={styles.filterSectionTitle}>{group.title}</h4>
                  {group.options.map((option, optIdx) => (
                    <label key={optIdx} style={styles.filterOption}>
                      <div style={styles.filterOptionLeft}>
                        <input
                          type="checkbox"
                          style={styles.filterCheckbox}
                          checked={selectedFilters[option.name] || false}
                          onChange={() => toggleFilter(option.name)}
                        />
                        <span style={styles.filterLabel}>{option.name}</span>
                      </div>
                      <span style={styles.filterCount}>{option.count}</span>
                    </label>
                  ))}
                </div>
              ))}

              <button
                style={styles.clearFilters}
                onClick={() => setSelectedFilters({})}
              >
                Clear all filters
              </button>
            </div>
          </aside>

          <main style={styles.listings}>
            <div style={styles.sortingOptions}>
              <button style={styles.sortButton}>
                Sort by: Our top picks <span>▼</span>
              </button>
              <div style={styles.appliedFilters}>
                {Object.keys(selectedFilters)
                  .filter((key) => selectedFilters[key])
                  .map((filter) => (
                    <span key={filter} style={styles.appliedFilter}>
                      {filter} <X size={12} />
                    </span>
                  ))}
              </div>
            </div>

            {hotels.length === 0 ? (
              <div style={styles.noResults}>
                <h3 style={styles.noResultsTitle}>No properties found</h3>
                <p style={styles.noResultsText}>
                  Try adjusting your search or filters to find what you're
                  looking for.
                </p>
              </div>
            ) : (
              <div style={styles.hotelsList}>
                {hotels.map((hotel) => (
                  <div key={hotel.id} style={styles.hotelCard}>
                    <div style={styles.hotelContent}>
                      <div
                        style={styles.hotelImageContainer}
                        onClick={() => handleHotelClick(hotel)}
                      >
                        <img
                          src={hotel.image}
                          alt={hotel.name}
                          style={styles.hotelImage}
                        />
                        <button
                          style={styles.wishlistBtn}
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                        >
                          <Heart size={20} />
                        </button>
                        {hotel.discountPrice && (
                          <div style={styles.discountBadge}>
                            Save ₹{hotel.price - hotel.discountPrice}
                          </div>
                        )}
                      </div>

                      <div style={styles.hotelDetails}>
                        <div style={styles.hotelMain}>
                          <div style={styles.hotelInfo}>
                            <div style={styles.hotelHeader}>
                              <h3
                                style={styles.hotelName}
                                onClick={() => handleHotelClick(hotel)}
                              >
                                {hotel.name}
                              </h3>
                              <div style={styles.hotelStars}>
                                {[...Array(hotel.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    size={14}
                                    fill="#febb02"
                                    color="#febb02"
                                  />
                                ))}
                              </div>
                            </div>

                            <div style={styles.hotelLocation}>
                              <MapPin size={14} />
                              <span>{hotel.location}</span>
                              <a href="#" style={styles.mapLink}>
                                Show on map
                              </a>
                            </div>

                            <div style={styles.hotelDistance}>
                              {hotel.distance}
                            </div>

                            {hotel.features.slice(0, 2).map((feature, idx) => (
                              <div key={idx} style={styles.featureBadge}>
                                <Check size={12} />
                                {feature}
                              </div>
                            ))}

                            <div style={styles.hotelBottom}>
                              <p style={styles.roomType}>{hotel.roomType}</p>
                              <div style={styles.amenitiesPreview}>
                                {hotel.amenities
                                  .slice(0, 3)
                                  .map((amenity, idx) => (
                                    <span
                                      key={idx}
                                      style={styles.amenityPreview}
                                    >
                                      {amenity}
                                    </span>
                                  ))}
                              </div>
                            </div>
                          </div>

                          <div style={styles.hotelRight}>
                            <div style={styles.ratingContainer}>
                              <div style={styles.ratingSection}>
                                <div style={styles.ratingTextBox}>
                                  <div style={styles.ratingLabel}>
                                    {hotel.scoreText}
                                  </div>
                                  <div style={styles.reviewsCount}>
                                    {hotel.reviews} reviews
                                  </div>
                                </div>
                                <div style={styles.ratingScore}>
                                  {hotel.score}
                                </div>
                              </div>
                            </div>

                            <div style={styles.priceSection}>
                              <div style={styles.nightsInfo}>
                                2 nights, 2 adults
                              </div>
                              {hotel.discountPrice ? (
                                <>
                                  <div style={styles.originalPrice}>
                                    ₹ {hotel.price.toLocaleString()}
                                  </div>
                                  <div
                                    style={{
                                      ...styles.currentPrice,
                                      ...styles.discounted,
                                    }}
                                  >
                                    ₹ {hotel.discountPrice.toLocaleString()}
                                  </div>
                                </>
                              ) : (
                                <div style={styles.currentPrice}>
                                  ₹ {hotel.price.toLocaleString()}
                                </div>
                              )}
                              <div style={styles.taxesInfo}>
                                +₹ 311 taxes and fees
                              </div>
                              <button
                                style={styles.btnAvailability}
                                onClick={() => handleHotelClick(hotel)}
                              >
                                See availability
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </main>
        </div>

        {hotels.length > 0 && (
          <div style={styles.pagination}>
            <button style={{ ...styles.pageBtn, ...styles.pageBtnActive }}>
              1
            </button>
            <button style={styles.pageBtn}>2</button>
            <button style={styles.pageBtn}>3</button>
            <button style={styles.pageBtn}>4</button>
            <button style={styles.pageBtn}>5</button>
            <span style={styles.pageDots}>...</span>
            <button style={styles.pageBtn}>Next →</button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  detailPage: {
    minHeight: "100vh",
    backgroundColor: "#f5f5f5",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
  },
  header: {
    background: "#003580",
    color: "white",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  headerContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
  },
  headerTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 0",
  },
  logo: {
    fontSize: "26px",
    fontWeight: "700",
    color: "white",
    letterSpacing: "-0.5px",
    margin: 0,
  },
  authButtons: {
    display: "flex",
    gap: "8px",
  },
  btnRegister: {
    padding: "8px 16px",
    borderRadius: "2px",
    fontWeight: "500",
    cursor: "pointer",
    fontSize: "14px",
    background: "transparent",
    border: "1px solid white",
    color: "white",
  },
  btnSignin: {
    padding: "8px 16px",
    borderRadius: "2px",
    fontWeight: "500",
    cursor: "pointer",
    fontSize: "14px",
    background: "white",
    border: "1px solid white",
    color: "#003580",
  },
  searchBar: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr 1.5fr auto",
    gap: "4px",
    background: "#febb02",
    padding: "4px",
    borderRadius: "2px",
    marginTop: "16px",
    marginBottom: "16px",
    boxShadow: "0 1px 6px rgba(0,0,0,0.2)",
  },
  searchInput: {
    padding: "12px 10px",
    border: "none",
    borderRadius: "2px",
    fontSize: "14px",
    background: "white",
  },
  searchDate: {
    padding: "12px 10px",
    border: "none",
    borderRadius: "2px",
    fontSize: "14px",
    background: "white",
  },
  btnSearch: {
    background: "#0071c2",
    color: "white",
    border: "none",
    padding: "12px 24px",
    borderRadius: "2px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "15px",
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  mainContent: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px 16px",
    backgroundColor: "#f5f5f5",
  },
  breadcrumb: {
    fontSize: "12px",
    color: "#0071c2",
    marginBottom: "12px",
    fontWeight: "400",
  },
  resultsHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
    flexWrap: "wrap",
    gap: "12px",
  },
  resultsTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#262626",
    margin: 0,
  },
  headerActions: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  mobileFilterBtn: {
    display: "none",
    padding: "8px 16px",
    backgroundColor: "#0071c2",
    color: "white",
    border: "none",
    borderRadius: "4px",
    fontWeight: "600",
    cursor: "pointer",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
  },
  viewButtons: {
    display: "flex",
    gap: "8px",
  },
  btnView: {
    padding: "8px 16px",
    border: "1px solid #ddd",
    background: "white",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  btnViewActive: {
    backgroundColor: "#0071c2",
    color: "white",
    borderColor: "#0071c2",
  },
  contentLayout: {
    display: "flex",
    gap: "24px",
    position: "relative",
  },
  sidebar: {
    width: "260px",
    flexShrink: 0,
  },
  sidebarVisible: {
    transform: "translateX(0)",
  },
  mobileSidebarHeader: {
    display: "none",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px",
    borderBottom: "1px solid #e7e7e7",
  },
  closeSidebar: {
    background: "none",
    border: "none",
    cursor: "pointer",
    color: "#333",
    fontSize: "24px",
    lineHeight: 1,
  },
  filterPanel: {
    background: "white",
    borderRadius: "4px",
    padding: "20px",
    border: "1px solid #e7e7e7",
  },
  filterTitle: {
    fontWeight: "700",
    marginBottom: "20px",
    fontSize: "16px",
    color: "#262626",
    marginTop: 0,
  },
  filterSection: {
    marginBottom: "24px",
    borderBottom: "1px solid #eee",
    paddingBottom: "16px",
  },
  filterSectionTitle: {
    fontWeight: "600",
    marginBottom: "12px",
    fontSize: "14px",
    color: "#333",
    marginTop: 0,
  },
  filterOption: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "8px",
    cursor: "pointer",
    padding: "4px 0",
  },
  filterOptionLeft: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  filterCheckbox: {
    width: "16px",
    height: "16px",
    cursor: "pointer",
  },
  filterLabel: {
    fontSize: "14px",
    color: "#333",
  },
  filterCount: {
    fontSize: "12px",
    color: "#6b6b6b",
  },
  starRatingFilter: {
    display: "flex",
    gap: "2px",
    marginRight: "8px",
  },
  priceRangeDisplay: {
    fontSize: "13px",
    color: "#6b6b6b",
    marginBottom: "8px",
    fontWeight: "600",
  },
  priceSlider: {
    width: "100%",
    cursor: "pointer",
    marginBottom: "12px",
  },
  priceQuickFilters: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  priceFilterBtn: {
    padding: "6px 12px",
    backgroundColor: "#f0f0f0",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "12px",
  },
  clearFilters: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#f8f8f8",
    border: "1px solid #ddd",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    color: "#666",
    marginTop: "16px",
  },
  listings: {
    flex: 1,
  },
  sortingOptions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "16px",
    flexWrap: "wrap",
    gap: "12px",
  },
  sortButton: {
    padding: "10px 16px",
    border: "1px solid #ddd",
    background: "white",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  appliedFilters: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  appliedFilter: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    padding: "6px 12px",
    backgroundColor: "#e6f2ff",
    color: "#0071c2",
    borderRadius: "4px",
    fontSize: "12px",
    fontWeight: "500",
  },
  noResults: {
    textAlign: "center",
    padding: "40px",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  noResultsTitle: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#333",
  },
  noResultsText: {
    fontSize: "16px",
    color: "#6b6b6b",
  },
  hotelsList: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  hotelCard: {
    background: "white",
    borderRadius: "4px",
    overflow: "hidden",
    boxShadow: "0 0 0 1px #e7e7e7",
    border: "1px solid #e7e7e7",
  },
  hotelContent: {
    display: "flex",
  },
  hotelImageContainer: {
    width: "280px",
    height: "250px",
    position: "relative",
    flexShrink: 0,
    cursor: "pointer",
    overflow: "hidden",
  },
  hotelImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  wishlistBtn: {
    position: "absolute",
    top: "12px",
    right: "12px",
    background: "white",
    border: "none",
    borderRadius: "50%",
    width: "36px",
    height: "36px",
    cursor: "pointer",
    boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
    zIndex: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  discountBadge: {
    position: "absolute",
    bottom: "12px",
    left: "12px",
    backgroundColor: "#d32f2f",
    color: "white",
    fontSize: "12px",
    padding: "4px 8px",
    borderRadius: "4px",
    fontWeight: "600",
  },
  hotelDetails: {
    flex: 1,
    padding: "16px",
    display: "flex",
    flexDirection: "column",
  },
  hotelMain: {
    display: "flex",
    justifyContent: "space-between",
    flex: 1,
  },
  hotelInfo: {
    flex: 1,
    minWidth: 0,
  },
  hotelHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "8px",
    marginBottom: "4px",
    flexWrap: "wrap",
  },
  hotelName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#003580",
    cursor: "pointer",
    marginBottom: "4px",
    margin: 0,
  },
  hotelStars: {
    display: "flex",
    gap: "2px",
  },
  hotelLocation: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "13px",
    color: "#6b6b6b",
    marginBottom: "8px",
    flexWrap: "wrap",
  },
  mapLink: {
    color: "#0071c2",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "13px",
  },
  hotelDistance: {
    fontSize: "13px",
    color: "#6b6b6b",
    marginBottom: "12px",
  },
  featureBadge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    backgroundColor: "#f0f9f0",
    color: "#008009",
    fontSize: "12px",
    padding: "4px 8px",
    borderRadius: "4px",
    marginRight: "8px",
    marginBottom: "8px",
  },
  hotelBottom: {
    marginTop: "auto",
    paddingTop: "12px",
  },
  roomType: {
    fontWeight: "600",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#333",
    margin: "0 0 8px 0",
  },
  amenitiesPreview: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
  },
  amenityPreview: {
    fontSize: "12px",
    color: "#666",
    padding: "2px 6px",
    backgroundColor: "#f5f5f5",
    borderRadius: "4px",
  },
  hotelRight: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    marginLeft: "16px",
    minWidth: "180px",
  },
  ratingContainer: {
    marginBottom: "8px",
  },
  ratingSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "8px",
    marginBottom: "4px",
  },
  ratingTextBox: {
    textAlign: "right",
  },
  ratingLabel: {
    fontSize: "13px",
    fontWeight: "600",
    color: "#333",
  },
  reviewsCount: {
    fontSize: "12px",
    color: "#6b6b6b",
  },
  ratingScore: {
    backgroundColor: "#003580",
    color: "white",
    padding: "6px 10px",
    borderRadius: "4px 4px 4px 0",
    fontWeight: "700",
    fontSize: "15px",
    minWidth: "40px",
    textAlign: "center",
  },
  priceSection: {
    textAlign: "right",
    marginTop: "16px",
  },
  nightsInfo: {
    fontSize: "12px",
    color: "#6b6b6b",
    marginBottom: "4px",
  },
  originalPrice: {
    fontSize: "13px",
    color: "#6b6b6b",
    textDecoration: "line-through",
    marginBottom: "2px",
  },
  currentPrice: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
    marginBottom: "4px",
  },
  discounted: {
    color: "#d32f2f",
  },
  taxesInfo: {
    fontSize: "11px",
    color: "#6b6b6b",
    marginBottom: "12px",
  },
  btnAvailability: {
    width: "100%",
    backgroundColor: "#0071c2",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "2px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "14px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    marginTop: "32px",
    padding: "16px",
  },
  pageBtn: {
    padding: "8px 12px",
    border: "1px solid #ddd",
    background: "white",
    borderRadius: "4px",
    cursor: "pointer",
    fontSize: "14px",
  },
  pageBtnActive: {
    backgroundColor: "#0071c2",
    color: "white",
    borderColor: "#0071c2",
  },
  pageDots: {
    padding: "0 4px",
    color: "#666",
  },
  detailContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "24px 16px",
  },
  backButton: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "none",
    border: "none",
    color: "#0071c2",
    cursor: "pointer",
    fontSize: "16px",
    marginBottom: "20px",
    padding: "8px 0",
    fontWeight: "600",
  },
  detailHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: "24px",
    flexWrap: "wrap",
    gap: "16px",
  },
  detailTitle: {
    fontSize: "32px",
    marginBottom: "8px",
    color: "#333",
  },
  detailLocation: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    color: "#666",
    marginBottom: "8px",
    flexWrap: "wrap",
  },
  detailStars: {
    display: "flex",
    alignItems: "center",
    gap: "4px",
  },
  ratingText: {
    fontSize: "14px",
    color: "#666",
    marginLeft: "8px",
  },
  detailRating: {
    textAlign: "right",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  ratingScoreLarge: {
    fontSize: "28px",
    padding: "12px 16px",
    marginBottom: "4px",
    backgroundColor: "#003580",
    color: "white",
    borderRadius: "4px 4px 4px 0",
    fontWeight: "700",
  },
  detailImages: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(2, 200px)",
    gap: "8px",
    marginBottom: "32px",
  },
  imageWrapper: {
    position: "relative",
    overflow: "hidden",
    borderRadius: "8px",
    cursor: "pointer",
  },
  mainImage: {
    gridColumn: "span 2",
    gridRow: "span 2",
  },
  sideImage: {},
  detailImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  detailContent: {
    display: "flex",
    gap: "32px",
    marginBottom: "32px",
  },
  detailInfo: {
    flex: 2,
  },
  descriptionSection: {
    marginBottom: "32px",
  },
  sectionTitle: {
    marginBottom: "16px",
    fontSize: "24px",
    color: "#333",
  },
  descriptionText: {
    lineHeight: 1.6,
    color: "#555",
    marginBottom: "16px",
  },
  amenitiesSection: {
    marginBottom: "32px",
  },
  facilitiesSection: {
    marginBottom: "32px",
  },
  roomInfoSection: {
    marginBottom: "32px",
  },
  sectionSubtitle: {
    marginBottom: "16px",
    fontSize: "20px",
    color: "#333",
  },
  amenitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "12px",
  },
  facilitiesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "12px",
  },
  amenityItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px",
    backgroundColor: "#f9f9f9",
    borderRadius: "4px",
  },
  facilityItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    padding: "8px",
    backgroundColor: "#f9f9f9",
    borderRadius: "4px",
  },
  roomDetails: {
    backgroundColor: "#f9f9f9",
    padding: "16px",
    borderRadius: "8px",
  },
  roomTypeInfo: {
    fontSize: "16px",
    marginBottom: "12px",
    color: "#333",
  },
  roomFeatures: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  roomFeature: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontSize: "14px",
    color: "#555",
  },
  bookingSection: {
    flex: 1,
  },
  bookingBox: {
    background: "white",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "24px",
  },
  bookingTitle: {
    marginBottom: "20px",
    fontSize: "20px",
    color: "#333",
    marginTop: 0,
  },
  bookingDates: {
    display: "flex",
    gap: "12px",
    marginBottom: "16px",
  },
  dateField: {
    flex: 1,
  },
  dateLabel: {
    display: "block",
    fontSize: "12px",
    color: "#666",
    marginBottom: "4px",
  },
  dateInput: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  roomSelection: {
    marginBottom: "24px",
  },
  roomTypeDisplay: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    backgroundColor: "#f9f9f9",
    width: "100%",
  },
  priceSummary: {
    borderTop: "1px solid #eee",
    paddingTop: "20px",
    marginTop: "20px",
  },
  priceRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#555",
  },
  priceRowTotal: {
    marginTop: "16px",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
    borderTop: "1px solid #eee",
    paddingTop: "16px",
  },
  originalPriceText: {
    textDecoration: "line-through",
    color: "#999",
    marginRight: "8px",
  },
  discountedPriceText: {
    color: "#d32f2f",
    fontWeight: "bold",
  },
  bookButton: {
    width: "100%",
    background: "#0071c2",
    color: "white",
    border: "none",
    padding: "16px",
    borderRadius: "4px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "20px",
  },
  paymentInfo: {
    marginTop: "16px",
    textAlign: "center",
  },
  freeCancellation: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    fontSize: "14px",
    color: "#008009",
    marginBottom: "8px",
  },
  paymentNote: {
    fontSize: "12px",
    color: "#666",
  },
  specialOffers: {
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  offersTitle: {
    marginBottom: "12px",
    fontSize: "16px",
    color: "#333",
    marginTop: 0,
  },
  offerItem: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#555",
  },
  reviewsSection: {
    background: "white",
    padding: "24px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "32px",
  },
  reviewSummary: {
    display: "flex",
    gap: "40px",
    alignItems: "center",
  },
  reviewScore: {
    textAlign: "center",
    minWidth: "120px",
  },
  scoreLarge: {
    fontSize: "48px",
    fontWeight: "bold",
    color: "#003580",
    marginBottom: "4px",
  },
  scoreLabel: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "8px",
  },
  reviewCount: {
    fontSize: "14px",
    color: "#666",
  },
  reviewBreakdown: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  reviewCategory: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  categoryName: {
    minWidth: "100px",
    fontSize: "14px",
    color: "#555",
  },
  ratingBar: {
    flex: 1,
    height: "8px",
    backgroundColor: "#eee",
    borderRadius: "4px",
    overflow: "hidden",
  },
  ratingFill: {
    height: "100%",
    backgroundColor: "#febb02",
    borderRadius: "4px",
  },
  categoryScore: {
    minWidth: "40px",
    textAlign: "right",
    fontWeight: "600",
    color: "#333",
  },
};

export default HotelBookingPage;

// import React, { useState } from "react";
// import {
//   Search,
//   Calendar,
//   Users,
//   Plane,
//   MapPin,
//   Clock,
//   Check,
//   ArrowRight,
//   Filter,
//   X,
//   ChevronDown,
//   Info,
// } from "lucide-react";

// const GHotelSearch = () => {
//   const [currentPage, setCurrentPage] = useState("home");
//   const [selectedDestination, setSelectedDestination] = useState(null);
//   const [selectedFlight, setSelectedFlight] = useState(null);
//   const [searchData, setSearchData] = useState({
//     from: "Mumbai",
//     to: "United Kingdom",
//     departDate: "Sat, Jan 24, 2026",
//     returnDate: "Sat, Jan 31, 2026",
//     passengers: 1,
//   });

//   // Destination data
//   const destinations = [
//     {
//       id: 1,
//       name: "London",
//       country: "United Kingdom",
//       price: 45823,
//       image:
//         "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400",
//     },
//     {
//       id: 2,
//       name: "Manchester",
//       country: "United Kingdom",
//       price: 53716,
//       image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=400",
//     },
//     {
//       id: 3,
//       name: "Birmingham",
//       country: "United Kingdom",
//       price: 56540,
//       image:
//         "https://images.unsplash.com/photo-1570556357906-c428d0b8d2eb?w=400",
//     },
//     {
//       id: 4,
//       name: "Newcastle upon Tyne",
//       country: "United Kingdom",
//       price: 70161,
//       image: "https://images.unsplash.com/photo-1560070094-e1f2ddec4337?w=400",
//     },
//     {
//       id: 5,
//       name: "Bristol",
//       country: "United Kingdom",
//       price: 60187,
//       image:
//         "https://images.unsplash.com/photo-1582508498304-1e8a99c8e489?w=400",
//     },
//   ];

//   // Flight data for Manchester
//   const flightData = [
//     {
//       id: 1,
//       outbound: {
//         departure: "1:40 AM",
//         departureDate: "Sat, Jan 24",
//         departureAirport:
//           "BOM - Chhatrapati Shivaji International Airport Mumbai",
//         arrival: "4:35 PM",
//         arrivalDate: "Sat, Jan 24",
//         arrivalAirport: "MAN - Manchester International Airport",
//         duration: "14h 55m",
//         stops: 1,
//         layover: "6h 55m",
//         stopAt: "Layover: 6h 55m",
//       },
//       return: {
//         departure: "5:00 PM",
//         departureDate: "Sat, Jan 31",
//         departureAirport: "MAN - Queen Atta International Airport",
//         arrival: "8:20 AM",
//         arrivalDate: "Sun, Feb 1",
//         arrivalAirport:
//           "BOM - Chhatrapati Shivaji International Airport Mumbai",
//         duration: "13h 20m",
//         stops: 1,
//         layover: "2h 25m",
//       },
//       airline: "Royal Jordanian, Ryanair",
//       price: 54199.67,
//       baggage: {
//         personal: "1 personal item - Fits under the seat in front of you",
//         cabin: "Carry-on - From INR24,449.89",
//         checked: "Checked bag - From INR24,449.89",
//       },
//     },
//     {
//       id: 2,
//       outbound: {
//         departure: "1:40 AM",
//         departureDate: "Sat, Jan 24",
//         departureAirport:
//           "BOM - Chhatrapati Shivaji International Airport Mumbai",
//         arrival: "7:05 PM",
//         arrivalDate: "Sat, Jan 24",
//         arrivalAirport: "MAN - Milan Malpensa Airport",
//         duration: "11h 25m",
//         stops: 1,
//         layover: "5h 30m",
//       },
//       return: {
//         departure: "9:40 AM",
//         departureDate: "Sat, Jan 31",
//         departureAirport: "MAN - Manchester Airport",
//         arrival: "2:05 AM",
//         arrivalDate: "Sun, Feb 1",
//         arrivalAirport: "BOM - Manchester Airport",
//         duration: "13h 25m",
//         stops: 1,
//       },
//       airline: "Etihad Airways, Ryanair",
//       price: 55317,
//       baggage: {
//         personal: "1 personal item",
//         cabin: "Not included",
//         checked: "Not included",
//       },
//     },
//   ];

//   // HomePage Component
//   const HomePage = () => (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-blue-900 text-white py-3 px-6">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Booking.com</h1>
//           <div className="flex gap-6 items-center text-sm">
//             <span>INR</span>
//             <span>🇮🇳</span>
//             <button className="hover:underline">Register</button>
//             <button className="hover:underline">Sign in</button>
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <div className="bg-blue-900 text-white px-6 py-2">
//         <div className="max-w-7xl mx-auto flex gap-6 text-sm">
//           <button className="flex items-center gap-2 pb-2 border-b-2 border-white">
//             <Plane size={18} />
//             <span>Flights</span>
//           </button>
//           <button className="flex items-center gap-2 pb-2 opacity-80 hover:opacity-100">
//             <span>🏨 Stays</span>
//           </button>
//           <button className="flex items-center gap-2 pb-2 opacity-80 hover:opacity-100">
//             <span>✈️ Flight + Hotel</span>
//           </button>
//           <button className="flex items-center gap-2 pb-2 opacity-80 hover:opacity-100">
//             <span>🚗 Car rental</span>
//           </button>
//           <button className="flex items-center gap-2 pb-2 opacity-80 hover:opacity-100">
//             <span>🎡 Attractions</span>
//           </button>
//           <button className="flex items-center gap-2 pb-2 opacity-80 hover:opacity-100">
//             <span>🚕 Airport taxis</span>
//           </button>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="bg-blue-900 text-white px-6 pb-12 pt-6">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold mb-2">
//             Compare and book cheap flights with ease
//           </h2>
//           <p className="text-lg mb-8">Discover your next dream destination</p>

//           {/* Search Form */}
//           <div className="bg-yellow-100 rounded-lg p-4">
//             <div className="flex gap-4 mb-4 text-gray-800 text-sm">
//               <label className="flex items-center gap-2">
//                 <input
//                   type="radio"
//                   name="trip"
//                   defaultChecked
//                   className="accent-blue-600"
//                 />
//                 <span>Round-trip</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="trip" className="accent-blue-600" />
//                 <span>One-way</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="trip" className="accent-blue-600" />
//                 <span>Multi-city</span>
//               </label>
//               <button className="flex items-center gap-1">
//                 <span>Economy</span>
//                 <ChevronDown size={16} />
//               </button>
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" className="accent-blue-600" />
//                 <span>Direct flights only</span>
//               </label>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
//               <div className="md:col-span-3 bg-white rounded border-2 border-yellow-500 p-3">
//                 <label className="text-xs text-gray-600">Leaving from</label>
//                 <input
//                   type="text"
//                   value={searchData.from}
//                   onChange={(e) =>
//                     setSearchData({ ...searchData, from: e.target.value })
//                   }
//                   className="w-full font-semibold outline-none text-gray-800"
//                 />
//                 <div className="text-xs text-gray-500">All airports</div>
//               </div>

//               <div className="md:col-span-3 bg-white rounded border-2 border-yellow-500 p-3">
//                 <label className="text-xs text-gray-600">Going to</label>
//                 <input
//                   type="text"
//                   value={searchData.to}
//                   onChange={(e) =>
//                     setSearchData({ ...searchData, to: e.target.value })
//                   }
//                   className="w-full font-semibold outline-none text-gray-800"
//                 />
//               </div>

//               <div className="md:col-span-3 bg-white rounded border-2 border-yellow-500 p-3">
//                 <label className="text-xs text-gray-600">Travel dates</label>
//                 <div className="font-semibold text-gray-800 text-sm">
//                   {searchData.departDate} – {searchData.returnDate}
//                 </div>
//               </div>

//               <div className="md:col-span-2 bg-white rounded border-2 border-yellow-500 p-3">
//                 <label className="text-xs text-gray-600">Travelers</label>
//                 <div className="font-semibold text-gray-800">
//                   {searchData.passengers} adult
//                 </div>
//               </div>

//               <div className="md:col-span-1">
//                 <button
//                   onClick={() => setCurrentPage("destinations")}
//                   className="w-full h-full bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700"
//                 >
//                   Explore
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Continue Section */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <h3 className="text-xl font-bold mb-4">Continue where you left off</h3>
//         <div className="bg-white rounded-lg p-4 shadow-sm flex items-center gap-4">
//           <img
//             src="https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=100"
//             alt="Delhi"
//             className="w-20 h-20 rounded object-cover"
//           />
//           <div>
//             <h4 className="font-bold">Mumbai to Delhi International Airport</h4>
//             <p className="text-sm text-gray-600">
//               Sat, Jan 24–Sat, Jan 31 · 1 traveler · one-way
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Explore Map */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <h3 className="text-2xl font-bold mb-4">Explore Anywhere</h3>
//         <div className="bg-gradient-to-br from-teal-200 via-teal-100 to-blue-100 rounded-lg h-96 relative overflow-hidden">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center">
//               <MapPin size={48} className="mx-auto mb-2 text-gray-600" />
//               <p className="text-gray-700">
//                 Interactive map - Click destinations to explore
//               </p>
//             </div>
//           </div>
//           <button className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow hover:shadow-lg flex items-center gap-2">
//             <span className="text-blue-600 font-semibold">Close Map</span>
//           </button>
//         </div>
//       </div>

//       {/* Explore by Country */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <h3 className="text-2xl font-bold mb-2">Explore by country</h3>
//         <p className="text-gray-600 mb-6">
//           Discover trending destinations, pick a flight away
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           <div className="rounded-lg overflow-hidden shadow-lg relative h-64 bg-gradient-to-br from-green-400 to-green-600">
//             <div className="absolute bottom-4 left-4 text-white">
//               <MapPin size={24} className="mb-2" />
//               <h4 className="font-bold text-xl">United Kingdom</h4>
//             </div>
//           </div>
//           <div className="rounded-lg overflow-hidden shadow-lg relative h-64 bg-gradient-to-br from-orange-300 to-yellow-400">
//             <div className="absolute bottom-4 left-4 text-white">
//               <MapPin size={24} className="mb-2" />
//               <h4 className="font-bold text-xl">India</h4>
//             </div>
//           </div>
//           <div className="rounded-lg overflow-hidden shadow-lg relative h-64 bg-gradient-to-br from-yellow-600 to-orange-700">
//             <div className="absolute bottom-4 left-4 text-white">
//               <MapPin size={24} className="mb-2" />
//               <h4 className="font-bold text-xl">United Arab Emirates</h4>
//             </div>
//           </div>
//           <div
//             className="rounded-lg overflow-hidden shadow-lg relative h-64 bg-blue-900 flex items-center justify-center cursor-pointer hover:bg-blue-800"
//             onClick={() => setCurrentPage("destinations")}
//           >
//             <div className="text-white text-center">
//               <Plane className="mx-auto mb-2" size={48} />
//               <h4 className="font-bold text-xl">Anywhere</h4>
//               <p>Explore all destinations</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Popular Flights */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <h3 className="text-2xl font-bold mb-2">Popular flights near you</h3>
//         <p className="text-gray-600 mb-6">
//           Find deals on domestic and international flights
//         </p>

//         <div className="flex gap-4 mb-6">
//           <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
//             International
//           </button>
//           <button className="px-4 py-2 text-gray-600 rounded-full text-sm hover:bg-gray-100">
//             Domestic
//           </button>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//           {destinations.slice(0, 4).map((dest) => (
//             <div
//               key={dest.id}
//               className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer"
//               onClick={() => {
//                 setSelectedDestination(dest);
//                 setCurrentPage("destinations");
//               }}
//             >
//               <img
//                 src={dest.image}
//                 alt={dest.name}
//                 className="w-full h-40 object-cover"
//               />
//               <div className="p-4">
//                 <h4 className="font-bold text-lg">Mumbai to {dest.name}</h4>
//                 <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
//                   <MapPin size={14} />
//                   {dest.country}
//                 </p>
//                 <div className="mt-3">
//                   <span className="text-2xl font-bold">
//                     INR{dest.price.toLocaleString()}
//                   </span>
//                   <span className="text-sm text-gray-600 ml-2">
//                     per traveler
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Footer sections */}
//       <div className="bg-white border-t mt-12">
//         <div className="max-w-7xl mx-auto px-6 py-8">
//           <div className="grid grid-cols-5 gap-8 text-sm">
//             <div>
//               <h4 className="font-bold mb-3">Support</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>Manage your trips</li>
//                 <li>Customer Service help</li>
//                 <li>Safety Resource Center</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-3">Discover</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>Genius loyalty program</li>
//                 <li>Seasonal and holiday deals</li>
//                 <li>Travel articles</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-3">Terms and settings</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>Privacy Notice</li>
//                 <li>Terms of Service</li>
//                 <li>Accessibility Statement</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-3">Partners</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>Extranet login</li>
//                 <li>Partner help</li>
//                 <li>List your property</li>
//               </ul>
//             </div>
//             <div>
//               <h4 className="font-bold mb-3">About</h4>
//               <ul className="space-y-2 text-gray-600">
//                 <li>About Booking.com</li>
//                 <li>How We Work</li>
//                 <li>Sustainability</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // DestinationsPage Component (Image 4 - shows trending destinations with map option)
//   const DestinationsPage = () => (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-blue-900 text-white py-3 px-6">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Booking.com</h1>
//           <div className="flex gap-6 items-center text-sm">
//             <span>INR</span>
//             <span>🇮🇳</span>
//             <button>Register</button>
//             <button>Sign in</button>
//           </div>
//         </div>
//       </header>

//       {/* Navigation */}
//       <div className="bg-blue-900 text-white px-6 py-2">
//         <div className="max-w-7xl mx-auto flex gap-6 text-sm">
//           <button className="flex items-center gap-2 pb-2 border-b-2 border-white">
//             <Plane size={18} />
//             <span>Flights</span>
//           </button>
//           <button className="opacity-80">🏨 Stays</button>
//           <button className="opacity-80">Flight + Hotel</button>
//           <button className="opacity-80">🚗 Car rental</button>
//           <button className="opacity-80">🎡 Attractions</button>
//           <button className="opacity-80">🚕 Airport taxis</button>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="bg-white border-b px-6 py-4">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex gap-4 mb-4 text-sm">
//             <label className="flex items-center gap-2">
//               <input
//                 type="radio"
//                 name="trip"
//                 defaultChecked
//                 className="accent-blue-600"
//               />
//               <span>Round-trip</span>
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="radio" name="trip" />
//               <span>One-way</span>
//             </label>
//             <label className="flex items-center gap-2">
//               <input type="radio" name="trip" />
//               <span>Multi-city</span>
//             </label>
//             <button className="flex items-center gap-1">
//               Economy <ChevronDown size={14} />
//             </button>
//             <label className="flex items-center gap-2">
//               <input type="checkbox" />
//               <span>Direct flights only</span>
//             </label>
//           </div>

//           <div className="flex gap-3">
//             <div className="flex-1 border-2 border-yellow-500 rounded p-3 bg-yellow-50">
//               <label className="text-xs text-gray-600">Leaving from</label>
//               <div className="font-semibold">Mumbai All airports</div>
//             </div>
//             <div className="flex items-center">
//               <ArrowRight className="text-gray-400" />
//             </div>
//             <div className="flex-1 border-2 border-yellow-500 rounded p-3 bg-yellow-50">
//               <label className="text-xs text-gray-600">Going to</label>
//               <div className="font-semibold">United Kingdom</div>
//             </div>
//             <div className="flex-1 border-2 border-yellow-500 rounded p-3 bg-yellow-50">
//               <label className="text-xs text-gray-600">Travel dates</label>
//               <div className="font-semibold text-sm">
//                 Sat, Jan 24, 2026 – Sat, Jan 31, 2026
//               </div>
//             </div>
//             <div className="border-2 border-yellow-500 rounded p-3 bg-yellow-50">
//               <label className="text-xs text-gray-600">Travelers</label>
//               <div className="font-semibold">1 adult</div>
//             </div>
//             <button
//               onClick={() => setCurrentPage("search")}
//               className="bg-blue-600 text-white px-8 rounded hover:bg-blue-700 font-semibold"
//             >
//               Search
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Filter Tags and Map Button */}
//       <div className="bg-white border-b px-6 py-3">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex gap-2">
//             <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-2 bg-blue-50 text-blue-700 border-blue-300">
//               <span>✨ Trending</span>
//               <X size={14} />
//             </button>
//             <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-2">
//               <span>Stops</span>
//               <ChevronDown size={14} />
//             </button>
//             <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-2">
//               <span>Price</span>
//               <ChevronDown size={14} />
//             </button>
//             <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-2">
//               <span>Duration</span>
//               <ChevronDown size={14} />
//             </button>
//             <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-2">
//               <span>Flight times</span>
//               <ChevronDown size={14} />
//             </button>
//             <button className="text-blue-600 text-sm">Clear filters</button>
//           </div>
//           <button
//             onClick={() => setCurrentPage("map")}
//             className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50"
//           >
//             <MapPin size={18} />
//             <span className="text-sm font-semibold">Map view</span>
//           </button>
//         </div>
//       </div>

//       {/* Destination Cards */}
//       <div className="max-w-7xl mx-auto px-6 py-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {destinations.map((dest) => (
//             <div
//               key={dest.id}
//               className="bg-white rounded-lg overflow-hidden shadow hover:shadow-lg cursor-pointer transition-shadow"
//               onClick={() => {
//                 setSelectedDestination(dest);
//                 setSearchData({ ...searchData, to: dest.name });
//                 setCurrentPage("search");
//               }}
//             >
//               <img
//                 src={dest.image}
//                 alt={dest.name}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4">
//                 <h3 className="font-bold text-lg mb-1">{dest.name}</h3>
//                 <p className="text-sm text-gray-600 flex items-center gap-1 mb-3">
//                   <MapPin size={14} />
//                   {dest.country}
//                 </p>
//                 <div>
//                   <span className="text-2xl font-bold">
//                     INR{dest.price.toLocaleString()}
//                   </span>
//                   <p className="text-sm text-gray-600">per traveler</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="flex justify-center mt-8">
//           <div className="flex items-center gap-2">
//             <button className="px-3 py-1 border rounded hover:bg-gray-50">
//               &lt;
//             </button>
//             <button className="px-3 py-1 border rounded bg-blue-600 text-white">
//               1
//             </button>
//             <button className="px-3 py-1 border rounded hover:bg-gray-50">
//               &gt;
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // MapView Component (Image 3)
//   const MapView = () => (
//     <div className="fixed inset-0 bg-white z-50">
//       {/* Map Sidebar */}
//       <div className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-lg overflow-y-auto">
//         <div className="p-4">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">Manchester</h2>
//             <button
//               onClick={() => setCurrentPage("destinations")}
//               className="p-2 hover:bg-gray-100 rounded"
//             >
//               <X size={20} />
//             </button>
//           </div>

//           <div className="mb-6">
//             <img
//               src="https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=300"
//               alt="Manchester"
//               className="w-full h-32 object-cover rounded-lg"
//             />
//           </div>

//           <h3 className="font-bold mb-3">Cheapest flights from Mumbai</h3>
//           <p className="text-sm text-gray-600 mb-4">Sat, Jan 24–Sat, Jan 31</p>

//           <div className="space-y-3">
//             {flightData.slice(0, 3).map((flight, idx) => (
//               <div
//                 key={idx}
//                 className="border rounded-lg p-3 hover:border-blue-500 cursor-pointer"
//               >
//                 <div className="flex items-center gap-2 text-sm mb-2">
//                   <span className="text-gray-600">{flight.airline}</span>
//                 </div>
//                 <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
//                   <Plane size={12} />
//                   <span>2 stops</span>
//                   <Clock size={12} />
//                   <span>Round-trip</span>
//                   <span>{flight.outbound.duration}</span>
//                 </div>
//                 <div className="text-2xl font-bold text-green-600">
//                   INR{flight.price.toLocaleString()}
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={() => {
//               setSearchData({ ...searchData, to: "Manchester" });
//               setCurrentPage("search");
//             }}
//             className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700"
//           >
//             Search all flights
//           </button>
//         </div>
//       </div>

//       {/* Map Area */}
//       <div className="absolute left-80 right-0 top-0 bottom-0">
//         <div className="w-full h-full bg-gradient-to-br from-teal-200 via-green-100 to-blue-100 relative">
//           <button
//             onClick={() => setCurrentPage("destinations")}
//             className="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-lg hover:shadow-xl flex items-center gap-2 z-10"
//           >
//             <X size={18} />
//             <span className="font-semibold">Close map</span>
//           </button>

//           {/* Map markers */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-700 text-white px-4 py-2 rounded-lg shadow-lg">
//             <div className="text-xs">Manchester</div>
//             <div className="font-bold">INR54,200</div>
//           </div>

//           <div className="absolute inset-0 flex items-center justify-center opacity-20">
//             <MapPin size={200} className="text-gray-400" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // SearchResults Component (Image 5)
//   const SearchResults = () => {
//     const [showFlightDetails, setShowFlightDetails] = useState(null);

//     return (
//       <div className="min-h-screen bg-gray-50">
//         {/* Header */}
//         <header className="bg-blue-900 text-white py-3 px-6">
//           <div className="max-w-7xl mx-auto flex justify-between items-center">
//             <h1 className="text-2xl font-bold">Booking.com</h1>
//             <div className="flex gap-6 items-center text-sm">
//               <span>INR</span>
//               <span>🇮🇳</span>
//               <button>Register</button>
//               <button>Sign in</button>
//             </div>
//           </div>
//         </header>

//         {/* Navigation */}
//         <div className="bg-blue-900 text-white px-6 py-2 border-b border-blue-800">
//           <div className="max-w-7xl mx-auto flex gap-6 text-sm">
//             <button className="flex items-center gap-2 pb-2">
//               <Plane size={18} />
//               <span>Flights</span>
//             </button>
//             <button className="opacity-80">Stays</button>
//             <button className="opacity-80">Flight + Hotel</button>
//             <button className="opacity-80">Car rental</button>
//             <button className="opacity-80">Attractions</button>
//             <button className="opacity-80">Airport taxis</button>
//           </div>
//         </div>

//         {/* Search Bar */}
//         <div className="bg-gray-100 px-6 py-4">
//           <div className="max-w-7xl mx-auto">
//             <div className="flex gap-4 mb-3 text-sm">
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="trip" defaultChecked />
//                 <span>Round-trip</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="trip" />
//                 <span>One-way</span>
//               </label>
//               <label className="flex items-center gap-2">
//                 <input type="radio" name="trip" />
//                 <span>Multi-city</span>
//               </label>
//               <button className="flex items-center gap-1">
//                 Economy <ChevronDown size={14} />
//               </button>
//               <label className="flex items-center gap-2">
//                 <input type="checkbox" />
//                 <span>Direct flights only</span>
//               </label>
//             </div>

//             <div className="flex gap-3 bg-white p-3 rounded-lg shadow-sm">
//               <div className="flex-1">
//                 <label className="text-xs text-gray-600">Leaving from</label>
//                 <div className="font-semibold text-sm">Mumbai All airports</div>
//               </div>
//               <div className="flex items-center">
//                 <ArrowRight className="text-gray-400" size={20} />
//               </div>
//               <div className="flex-1">
//                 <label className="text-xs text-gray-600">Going to</label>
//                 <div className="font-semibold text-sm">
//                   MAN - Manchester Airport
//                 </div>
//               </div>
//               <div className="flex-1">
//                 <label className="text-xs text-gray-600">Travel dates</label>
//                 <div className="font-semibold text-sm">
//                   Sat, Jan 24, 2026 – Sat, Jan 31
//                 </div>
//               </div>
//               <div>
//                 <label className="text-xs text-gray-600">Travelers</label>
//                 <div className="font-semibold text-sm">1 adult</div>
//               </div>
//               <button className="bg-blue-600 text-white px-6 rounded hover:bg-blue-700">
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="max-w-7xl mx-auto px-6 py-6">
//           <div className="flex gap-6">
//             {/* Filters Sidebar */}
//             <div className="w-72">
//               <div className="bg-white rounded-lg p-4 mb-4">
//                 <h3 className="font-bold mb-3">Search summary</h3>
//                 <p className="text-sm text-gray-600 mb-3">
//                   Get a quick overview of how the number of stops affects prices
//                   for your search
//                 </p>
//                 <button className="text-blue-600 text-sm flex items-center gap-2">
//                   <Search size={16} />
//                   View summary
//                 </button>
//               </div>

//               <div className="bg-white rounded-lg p-4">
//                 <h3 className="font-bold mb-4 flex items-center justify-between">
//                   Filters
//                   <span className="text-sm text-gray-600">
//                     Showing 1996 results
//                   </span>
//                 </h3>

//                 {/* Stops Filter */}
//                 <div className="mb-6">
//                   <h4 className="font-semibold mb-3">Stops</h4>
//                   <label className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <input type="radio" name="stops" defaultChecked />
//                       <span className="text-sm">Any</span>
//                     </div>
//                     <span className="text-sm text-gray-600">1996</span>
//                   </label>
//                   <div className="text-xs text-gray-600 ml-6 mb-2">
//                     From INR12,678.57
//                   </div>

//                   <label className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <input type="radio" name="stops" />
//                       <span className="text-sm">Direct only</span>
//                     </div>
//                     <span className="text-sm text-gray-600">987</span>
//                   </label>
//                   <div className="text-xs text-gray-600 ml-6 mb-2">
//                     From INR12,678.57
//                   </div>

//                   <label className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <input type="radio" name="stops" />
//                       <span className="text-sm">1 stop max</span>
//                     </div>
//                     <span className="text-sm text-gray-600">1996</span>
//                   </label>
//                   <div className="text-xs text-gray-600 ml-6">
//                     From INR12,678.57
//                   </div>
//                 </div>

//                 {/* Airlines Filter */}
//                 <div className="mb-6">
//                   <h4 className="font-semibold mb-3">Airlines</h4>
//                   <label className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <input type="checkbox" defaultChecked />
//                       <span className="text-sm">IndiGo</span>
//                     </div>
//                     <span className="text-sm text-gray-600">1396</span>
//                   </label>
//                   <label className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <input type="checkbox" defaultChecked />
//                       <span className="text-sm">Etihad Airways</span>
//                     </div>
//                     <span className="text-sm text-gray-600">443</span>
//                   </label>
//                   <label className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <input type="checkbox" defaultChecked />
//                       <span className="text-sm">IndiGo</span>
//                     </div>
//                     <span className="text-sm text-gray-600">381</span>
//                   </label>
//                   <label className="flex items-center justify-between mb-2">
//                     <div className="flex items-center gap-2">
//                       <input type="checkbox" defaultChecked />
//                       <span className="text-sm">Air India</span>
//                     </div>
//                     <span className="text-sm text-gray-600">148</span>
//                   </label>
//                   <button className="text-blue-600 text-sm mt-2">
//                     Show all
//                   </button>
//                 </div>

//                 {/* Flight Times */}
//                 <div>
//                   <h4 className="font-semibold mb-3">Flight times</h4>

//                   <div className="mb-4">
//                     <p className="text-sm font-medium mb-2">Departs Mumbai</p>
//                     <label className="flex items-center justify-between mb-1">
//                       <div className="flex items-center gap-2">
//                         <input type="checkbox" />
//                         <span className="text-xs">12:00 AM-5:59 AM</span>
//                       </div>
//                       <span className="text-xs text-gray-600">300</span>
//                     </label>
//                     <label className="flex items-center justify-between mb-1">
//                       <div className="flex items-center gap-2">
//                         <input type="checkbox" />
//                         <span className="text-xs">6:00 AM-11:59 AM</span>
//                       </div>
//                       <span className="text-xs text-gray-600">583</span>
//                     </label>
//                     <label className="flex items-center justify-between mb-1">
//                       <div className="flex items-center gap-2">
//                         <input type="checkbox" />
//                         <span className="text-xs">12:00 PM-5:59 PM</span>
//                       </div>
//                       <span className="text-xs text-gray-600">646</span>
//                     </label>
//                     <label className="flex items-center justify-between">
//                       <div className="flex items-center gap-2">
//                         <input type="checkbox" />
//                         <span className="text-xs">6:00 PM-11:59 PM</span>
//                       </div>
//                       <span className="text-xs text-gray-600">467</span>
//                     </label>
//                   </div>

//                   <div>
//                     <p className="text-sm font-medium mb-2">
//                       Arrives to Manchester International Airport
//                     </p>
//                     <label className="flex items-center justify-between mb-1">
//                       <div className="flex items-center gap-2">
//                         <input type="checkbox" />
//                         <span className="text-xs">12:00 AM-5:59 AM</span>
//                       </div>
//                       <span className="text-xs text-gray-600">406</span>
//                     </label>
//                     <label className="flex items-center justify-between mb-1">
//                       <div className="flex items-center gap-2">
//                         <input type="checkbox" />
//                         <span className="text-xs">6:00 AM-11:59 AM</span>
//                       </div>
//                       <span className="text-xs text-gray-600">495</span>
//                     </label>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Results */}
//             <div className="flex-1">
//               {flightData.map((flight) => (
//                 <div
//                   key={flight.id}
//                   className="bg-white rounded-lg p-6 mb-4 shadow hover:shadow-md"
//                 >
//                   <div className="flex justify-between items-start">
//                     <div className="flex-1">
//                       {/* Outbound Flight */}
//                       <div className="mb-6">
//                         <div className="flex items-center gap-4">
//                           <div className="text-center">
//                             <div className="font-bold text-xl">
//                               {flight.outbound.departure}
//                             </div>
//                             <div className="text-xs text-gray-600">
//                               {flight.outbound.departureDate.split(",")[1]}
//                             </div>
//                           </div>

//                           <div className="flex-1">
//                             <div className="relative">
//                               <div className="border-t-2 border-gray-300"></div>
//                               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
//                                 <div className="text-xs text-center text-gray-600">
//                                   {flight.outbound.stops} stop
//                                 </div>
//                                 <div className="text-xs text-gray-500">
//                                   {flight.outbound.duration}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="text-center">
//                             <div className="font-bold text-xl">
//                               {flight.outbound.arrival}
//                             </div>
//                             <div className="text-xs text-gray-600">
//                               {flight.outbound.arrivalDate.split(",")[1]}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="text-xs text-gray-600 mt-2">
//                           {flight.outbound.departureAirport}
//                         </div>
//                         <div className="text-xs text-gray-600">
//                           {flight.outbound.arrivalAirport}
//                         </div>
//                       </div>

//                       {/* Return Flight */}
//                       <div>
//                         <div className="flex items-center gap-4">
//                           <div className="text-center">
//                             <div className="font-bold text-xl">
//                               {flight.return.departure}
//                             </div>
//                             <div className="text-xs text-gray-600">
//                               {flight.return.departureDate.split(",")[1]}
//                             </div>
//                           </div>

//                           <div className="flex-1">
//                             <div className="relative">
//                               <div className="border-t-2 border-gray-300"></div>
//                               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2">
//                                 <div className="text-xs text-center text-gray-600">
//                                   {flight.return.stops} stop
//                                 </div>
//                                 <div className="text-xs text-gray-500">
//                                   {flight.return.duration}
//                                 </div>
//                               </div>
//                             </div>
//                           </div>

//                           <div className="text-center">
//                             <div className="font-bold text-xl">
//                               {flight.return.arrival}
//                             </div>
//                             <div className="text-xs text-gray-600">
//                               {flight.return.arrivalDate.split(",")[1]}
//                             </div>
//                           </div>
//                         </div>
//                         <div className="text-xs text-gray-600 mt-2">
//                           {flight.return.departureAirport}
//                         </div>
//                         <div className="text-xs text-gray-600">
//                           {flight.return.arrivalAirport}
//                         </div>
//                       </div>

//                       <div className="mt-3 text-sm text-gray-600">
//                         {flight.airline}
//                       </div>
//                     </div>

//                     <div className="ml-8 text-right">
//                       <div className="flex items-center gap-2 mb-2">
//                         <Check size={18} className="text-green-600" />
//                         <Check size={18} className="text-green-600" />
//                         <Check size={18} className="text-green-600" />
//                       </div>
//                       <div className="text-2xl font-bold mb-3">
//                         INR{flight.price.toFixed(2)}
//                       </div>
//                       <button
//                         onClick={() => setShowFlightDetails(flight)}
//                         className="bg-blue-600 text-white px-8 py-2 rounded hover:bg-blue-700 mb-2 w-full font-semibold"
//                       >
//                         View details
//                       </button>
//                       <button className="text-blue-600 text-sm hover:underline">
//                         Explore ticket options
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Flight Details Modal */}
//         {showFlightDetails && (
//           <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-6">
//                   <h2 className="text-2xl font-bold">
//                     Your flight to Manchester
//                   </h2>
//                   <button
//                     onClick={() => setShowFlightDetails(null)}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     <X size={24} />
//                   </button>
//                 </div>

//                 <div className="mb-6">
//                   <h3 className="font-bold text-lg mb-4">
//                     Flight to Manchester
//                   </h3>
//                   <div className="border-l-4 border-blue-600 pl-6 mb-6">
//                     <div className="mb-4">
//                       <div className="text-sm text-gray-600">
//                         {showFlightDetails.outbound.departureDate} ·{" "}
//                         {showFlightDetails.outbound.departure}
//                       </div>
//                       <div className="font-semibold">
//                         {showFlightDetails.outbound.departureAirport}
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
//                       <Plane size={16} />
//                       <span>{showFlightDetails.airline.split(",")[0]}</span>
//                       <span>Economy</span>
//                       <span>
//                         Flight time {showFlightDetails.outbound.duration}
//                       </span>
//                     </div>
//                     <div className="mb-4 bg-yellow-50 p-3 rounded">
//                       <Clock size={16} className="inline mr-2" />
//                       <span className="text-sm">
//                         {showFlightDetails.outbound.stopAt}
//                       </span>
//                     </div>
//                     <div className="mb-4 bg-yellow-50 p-3 rounded">
//                       <Info size={16} className="inline mr-2" />
//                       <span className="text-sm">
//                         Self-transfer during your layover – your transfer is
//                         protected
//                       </span>
//                     </div>
//                     <div className="mb-4 bg-blue-50 p-3 rounded">
//                       <span className="text-sm">
//                         ✈️ Collect and recheck your bags for your next flight
//                       </span>
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-600">
//                         {showFlightDetails.outbound.arrivalDate} ·{" "}
//                         {showFlightDetails.outbound.arrival}
//                       </div>
//                       <div className="font-semibold">
//                         {showFlightDetails.outbound.arrivalAirport}
//                       </div>
//                     </div>
//                   </div>

//                   <h3 className="font-bold text-lg mb-4">Flight to Mumbai</h3>
//                   <div className="border-l-4 border-blue-600 pl-6">
//                     <div className="mb-4">
//                       <div className="text-sm text-gray-600">
//                         {showFlightDetails.return.departureDate} ·{" "}
//                         {showFlightDetails.return.departure}
//                       </div>
//                       <div className="font-semibold">
//                         {showFlightDetails.return.departureAirport}
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
//                       <Plane size={16} />
//                       <span>
//                         {showFlightDetails.airline.split(",")[1] ||
//                           showFlightDetails.airline.split(",")[0]}
//                       </span>
//                       <span>Economy</span>
//                       <span>
//                         Flight time {showFlightDetails.return.duration}
//                       </span>
//                     </div>
//                     <div>
//                       <div className="text-sm text-gray-600">
//                         {showFlightDetails.return.arrivalDate} ·{" "}
//                         {showFlightDetails.return.arrival}
//                       </div>
//                       <div className="font-semibold">
//                         {showFlightDetails.return.arrivalAirport}
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <h3 className="font-bold text-lg mb-4">Baggage</h3>
//                   <p className="text-sm text-gray-600 mb-3">
//                     The total baggage included in the price
//                   </p>
//                   <div className="space-y-3">
//                     <div className="flex items-start gap-3">
//                       <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
//                         📦
//                       </div>
//                       <div className="flex-1">
//                         <div className="font-semibold">
//                           {showFlightDetails.baggage.personal}
//                         </div>
//                       </div>
//                       <div className="text-green-600 font-semibold">
//                         Included
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
//                         💼
//                       </div>
//                       <div className="flex-1">
//                         <div className="font-semibold">Carry-on</div>
//                         <div className="text-sm text-gray-600">
//                           {showFlightDetails.baggage.cabin}
//                         </div>
//                       </div>
//                       <div className="text-gray-600">
//                         Available on the next step
//                       </div>
//                     </div>
//                     <div className="flex items-start gap-3">
//                       <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
//                         🧳
//                       </div>
//                       <div className="flex-1">
//                         <div className="font-semibold">Checked bag</div>
//                         <div className="text-sm text-gray-600">
//                           {showFlightDetails.baggage.checked}
//                         </div>
//                       </div>
//                       <div className="text-gray-600">
//                         Available on the next step
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <h3 className="font-bold text-lg mb-4">Fare rules</h3>
//                   <div className="bg-yellow-50 p-4 rounded mb-3">
//                     <p className="text-sm">Helpful policy information</p>
//                   </div>
//                   <div className="space-y-2">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
//                         🔄
//                       </div>
//                       <span className="text-sm">
//                         You're allowed to change this flight, for a fee
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
//                         ❌
//                       </div>
//                       <span className="text-sm">
//                         You're allowed to cancel this flight, for a fee
//                       </span>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-6">
//                   <h3 className="font-bold text-lg mb-4">Extra baggage</h3>
//                   <div className="space-y-2 text-sm">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
//                         💼
//                       </div>
//                       <div className="flex-1">
//                         <div>Carry-on</div>
//                         <div className="text-gray-600">From INR24,449.89</div>
//                         <div className="text-gray-600">
//                           Max 10 x 40 x 20 cm ∙ Fits under the seat in front of
//                           you
//                         </div>
//                       </div>
//                       <div className="text-gray-600">
//                         Available on the next step
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
//                         🧳
//                       </div>
//                       <div className="flex-1">
//                         <div>Checked bag</div>
//                         <div className="text-gray-600">From INR7,492.48</div>
//                         <div className="text-gray-600">
//                           Max 81 x 119 x 119 cm ∙ Max 20 kg
//                         </div>
//                       </div>
//                       <div className="text-gray-600">
//                         Available on the next step
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center pt-6 border-t">
//                   <div>
//                     <div className="text-3xl font-bold">
//                       INR{showFlightDetails.price.toFixed(2)}
//                     </div>
//                     <div className="text-sm text-gray-600 flex items-center gap-1 mt-1">
//                       <Info size={14} />
//                       <span>Price may change</span>
//                     </div>
//                   </div>
//                   <button
//                     onClick={() => {
//                       setSelectedFlight(showFlightDetails);
//                       setCurrentPage("chooseFare");
//                     }}
//                     className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700"
//                   >
//                     Continue
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     );
//   };
// };
// export default GhotelSearch;
