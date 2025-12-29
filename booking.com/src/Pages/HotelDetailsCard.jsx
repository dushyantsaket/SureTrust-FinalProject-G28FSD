// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   MapPin,
//   Wifi,
//   Coffee,
//   Car,
//   UtensilsCrossed,
//   Waves,
//   Dumbbell,
//   Heart,
// } from "lucide-react";

// import Header from "../components/Header";
// import { supabase } from "../lib/supabase";
// import "./HotelDetails.css";

// export default function HotelDetail() {
//   const { id } = useParams();
//   const [hotel, setHotel] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [selectedImage, setSelectedImage] = useState(0);

//   useEffect(() => {
//     if (id) fetchHotel();
//   }, [id]);

//   const fetchHotel = async () => {
//     setLoading(true);
//     try {
//       const { data, error } = await supabase
//         .from("hotels")
//         .select("*")
//         .eq("id", id)
//         .maybeSingle();

//       if (error) throw error;
//       setHotel(data);
//     } catch (error) {
//       console.error("Error fetching hotel:", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <div className="text-center py-20">
//           <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//           <p className="mt-4 text-gray-600">Loading hotel details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!hotel) {
//     return (
//       <div className="min-h-screen bg-gray-50">
//         <Header />
//         <div className="text-center py-20">
//           <h2 className="text-2xl font-bold">Hotel not found</h2>
//         </div>
//       </div>
//     );
//   }

//   const amenityIcons = {
//     "Free WiFi": <Wifi />,
//     Restaurant: <UtensilsCrossed />,
//     "Swimming Pool": <Waves />,
//     Parking: <Car />,
//     Gym: <Dumbbell />,
//     Breakfast: <Coffee />,
//   };

//   const images = [
//     hotel.image_url,
//     "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
//     "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
//     "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />

//       <div className="max-w-6xl mx-auto px-4 py-6">
//         {/* HEADER */}
//         <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>

//         <div className="flex items-center gap-2 text-blue-600 mb-4">
//           <MapPin size={16} />
//           <span>{hotel.address}</span>
//         </div>

//         {/* IMAGES */}
//         <div className="grid grid-cols-4 gap-2 mb-6 h-96">
//           <div className="col-span-2 row-span-2">
//             <img
//               src={images[selectedImage]}
//               alt={hotel.name}
//               className="w-full h-full object-cover rounded-lg"
//             />
//           </div>

//           {images.slice(1).map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt="hotel"
//               className="w-full h-full object-cover rounded cursor-pointer"
//               onClick={() => setSelectedImage(index + 1)}
//             />
//           ))}
//         </div>

//         {/* DESCRIPTION */}
//         <div className="bg-white rounded-lg p-6 mb-6">
//           <h2 className="text-xl font-bold mb-2">About this property</h2>
//           <p className="text-gray-700">{hotel.description}</p>
//         </div>

//         {/* AMENITIES */}
//         <div className="bg-white rounded-lg p-6 mb-6">
//           <h2 className="text-xl font-bold mb-4">Popular facilities</h2>
//           <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//             {hotel.amenities.map((amenity, index) => (
//               <div key={index} className="flex items-center gap-2">
//                 {amenityIcons[amenity] || <Coffee />}
//                 <span>{amenity}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* PRICE CARD */}
//         <div className="bg-white rounded-lg p-6 border-2 border-yellow-400 max-w-sm">
//           <div className="text-3xl font-bold mb-1">
//             ₹ {hotel.price_per_night.toLocaleString()}
//           </div>
//           <p className="text-sm text-gray-600 mb-4">+ taxes and fees</p>

//           <button className="w-full bg-[#0071c2] text-white py-3 rounded hover:bg-[#005c9e]">
//             Reserve
//           </button>

//           <button className="w-full mt-2 flex items-center justify-center gap-2 border py-3 rounded">
//             <Heart size={18} /> Save property
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  MapPin,
  Wifi,
  Coffee,
  Car,
  UtensilsCrossed,
  Waves,
  Dumbbell,
  Heart,
} from "lucide-react";

import Header from "../components/Header";
import "./HotelDetails.css";

export default function HotelDetailsCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    if (id) fetchHotel();
  }, [id]);

  const fetchHotel = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("hotels")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;
      setHotel(data);
    } catch (err) {
      console.error("Error fetching hotel:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleReserve = () => {
    navigate("/hotel-booking", {
      state: {
        hotelId: hotel.id,
        hotelName: hotel.name,
        price: hotel.price_per_night,
      },
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="text-center py-20">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading hotel details...</p>
        </div>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">Hotel not found</h2>
        </div>
      </div>
    );
  }

  const amenityIcons = {
    "Free WiFi": <Wifi />,
    Restaurant: <UtensilsCrossed />,
    "Swimming Pool": <Waves />,
    Parking: <Car />,
    Gym: <Dumbbell />,
    Breakfast: <Coffee />,
  };

  const images = [
    hotel.image_url ||
      "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    "https://images.pexels.com/photos/262048/pexels-photo-262048.jpeg",
    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
    "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg",
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-6xl mx-auto px-4 py-6">
        {/* TITLE */}
        <h1 className="text-3xl font-bold mb-2">{hotel.name}</h1>

        <div className="flex items-center gap-2 text-blue-600 mb-4">
          <MapPin size={16} />
          <span>{hotel.address}</span>
        </div>

        {/* IMAGES */}
        <div className="grid grid-cols-4 gap-2 mb-6 h-96">
          <div className="col-span-2 row-span-2">
            <img
              src={images[selectedImage]}
              alt={hotel.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {images.slice(1).map((img, index) => (
            <img
              key={index}
              src={img}
              alt="hotel"
              className="w-full h-full object-cover rounded cursor-pointer"
              onClick={() => setSelectedImage(index + 1)}
            />
          ))}
        </div>

        {/* DESCRIPTION */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-2">About this property</h2>
          <p className="text-gray-700">{hotel.description}</p>
        </div>

        {/* AMENITIES */}
        <div className="bg-white rounded-lg p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Popular facilities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.isArray(hotel.amenities) &&
              hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center gap-2">
                  {amenityIcons[amenity] || <Coffee />}
                  <span>{amenity}</span>
                </div>
              ))}
          </div>
        </div>

        {/* PRICE CARD */}
        <div className="bg-white rounded-lg p-6 border-2 border-yellow-400 max-w-sm">
          <div className="text-3xl font-bold mb-1">
            ₹ {hotel.price_per_night?.toLocaleString()}
          </div>
          <p className="text-sm text-gray-600 mb-4">+ taxes and fees</p>

          <button
            onClick={handleReserve}
            className="w-full bg-[#0071c2] text-white py-3 rounded hover:bg-[#005c9e]"
          >
            Reserve this room
          </button>

          <button className="w-full mt-2 flex items-center justify-center gap-2 border py-3 rounded">
            <Heart size={18} /> Save property
          </button>
        </div>
      </div>
    </div>
  );
}
