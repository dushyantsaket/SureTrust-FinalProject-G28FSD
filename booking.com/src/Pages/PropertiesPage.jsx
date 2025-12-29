import React from "react";
import { useNavigate } from "react-router-dom";
import "./PropertiesPage.css";

/* ================= PROPERTY TYPES ================= */

const propertyTypes = [
  {
    name: "Hotels",
    path: "/properties/hotels",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/234890397.webp?k=d64886ee666737d8a10ed846cc529533e6423b7a642a4e706f47655ff6de3d79&o=",
  },
  {
    name: "Apartments",
    path: "/properties/apartments",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/30785708.webp?k=95ef9cd617234ef606538bd14abeb07c6342c111d4121a9b65f5afb239d8ace6&o=",
  },
  {
    name: "Resorts",
    path: "/properties/resorts",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/464303942.webp?k=92a8b28475c05278a8e28db32dbf2134b2c3828768a7461b3ca21b9194b722d3&o=",
  },
  {
    name: "Villas",
    path: "/properties/villas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSairO4LqgDyyMNc6GjIDP02L0KKRzAGBZolQ&s",
  },
  {
    name: "Cottages",
    path: "/properties/cottages",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtVdghAPYiyLonM7YAlC_0_HkU7I8-jJqXA&s",
  },
  {
    name: "Hostels",
    path: "/properties/hostels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95Ru5PTuUmhA4lXSKKdxOWBW3B0QFkBw3qA&s",
  },
  {
    name: "B&Bs",
    path: "/properties/bnb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFACsx7_ExizGEKbJ9fqT8XoAEDQP8rUZI3A&s",
  },
  {
    name: "Vacation Homes",
    path: "/properties/vacation-homes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Guest Houses",
    path: "/properties/guest-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Motels",
    path: "/properties/motels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YJz5SyinfSbxCj39YTwN2kA20rRmKmEXQJ4bMMEetba_Z42-XLFfknA&s",
  },
  {
    name: "Farm Stays",
    path: "/properties/farm-stays",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7o7XbuKuf3M91HIuqfnR4YzNWP4kJ8Oxpg&s",
  },
  {
    name: "Eco Lodges",
    path: "/properties/eco-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjOvq_gjoflJK3QXhIbyTipbTkrXjd7iA5g&s",
  },
  {
    name: "Tree Houses",
    path: "/properties/tree-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhg_Li49xWSEleLu-sHwC99C-Dd1cKNqGGw&s",
  },
  {
    name: "Luxury Stays",
    path: "/properties/luxury",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rw7JbQet8xQzk1O1jtfyAsr_Vs25skljTw&s",
  },
  {
    name: "Hotels",
    path: "/properties/hotels",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/234890397.webp?k=d64886ee666737d8a10ed846cc529533e6423b7a642a4e706f47655ff6de3d79&o=",
  },
  {
    name: "Apartments",
    path: "/properties/apartments",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/30785708.webp?k=95ef9cd617234ef606538bd14abeb07c6342c111d4121a9b65f5afb239d8ace6&o=",
  },
  {
    name: "Resorts",
    path: "/properties/resorts",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/464303942.webp?k=92a8b28475c05278a8e28db32dbf2134b2c3828768a7461b3ca21b9194b722d3&o=",
  },
  {
    name: "Villas",
    path: "/properties/villas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSairO4LqgDyyMNc6GjIDP02L0KKRzAGBZolQ&s",
  },
  {
    name: "Cottages",
    path: "/properties/cottages",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtVdghAPYiyLonM7YAlC_0_HkU7I8-jJqXA&s",
  },
  {
    name: "Hostels",
    path: "/properties/hostels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95Ru5PTuUmhA4lXSKKdxOWBW3B0QFkBw3qA&s",
  },
  {
    name: "B&Bs",
    path: "/properties/bnb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFACsx7_ExizGEKbJ9fqT8XoAEDQP8rUZI3A&s",
  },
  {
    name: "Vacation Homes",
    path: "/properties/vacation-homes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Guest Houses",
    path: "/properties/guest-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Motels",
    path: "/properties/motels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YJz5SyinfSbxCj39YTwN2kA20rRmKmEXQJ4bMMEetba_Z42-XLFfknA&s",
  },
  {
    name: "Farm Stays",
    path: "/properties/farm-stays",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7o7XbuKuf3M91HIuqfnR4YzNWP4kJ8Oxpg&s",
  },
  {
    name: "Eco Lodges",
    path: "/properties/eco-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjOvq_gjoflJK3QXhIbyTipbTkrXjd7iA5g&s",
  },
  {
    name: "Tree Houses",
    path: "/properties/tree-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhg_Li49xWSEleLu-sHwC99C-Dd1cKNqGGw&s",
  },
  {
    name: "Luxury Stays",
    path: "/properties/luxury",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rw7JbQet8xQzk1O1jtfyAsr_Vs25skljTw&s",
  },
  {
    name: "Hotels",
    path: "/properties/hotels",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/234890397.webp?k=d64886ee666737d8a10ed846cc529533e6423b7a642a4e706f47655ff6de3d79&o=",
  },
  {
    name: "Apartments",
    path: "/properties/apartments",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/30785708.webp?k=95ef9cd617234ef606538bd14abeb07c6342c111d4121a9b65f5afb239d8ace6&o=",
  },
  {
    name: "Resorts",
    path: "/properties/resorts",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/464303942.webp?k=92a8b28475c05278a8e28db32dbf2134b2c3828768a7461b3ca21b9194b722d3&o=",
  },
  {
    name: "Villas",
    path: "/properties/villas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSairO4LqgDyyMNc6GjIDP02L0KKRzAGBZolQ&s",
  },
  {
    name: "Cottages",
    path: "/properties/cottages",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtVdghAPYiyLonM7YAlC_0_HkU7I8-jJqXA&s",
  },
  {
    name: "Hostels",
    path: "/properties/hostels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95Ru5PTuUmhA4lXSKKdxOWBW3B0QFkBw3qA&s",
  },
  {
    name: "B&Bs",
    path: "/properties/bnb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFACsx7_ExizGEKbJ9fqT8XoAEDQP8rUZI3A&s",
  },
  {
    name: "Vacation Homes",
    path: "/properties/vacation-homes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Guest Houses",
    path: "/properties/guest-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Motels",
    path: "/properties/motels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YJz5SyinfSbxCj39YTwN2kA20rRmKmEXQJ4bMMEetba_Z42-XLFfknA&s",
  },
  {
    name: "Farm Stays",
    path: "/properties/farm-stays",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7o7XbuKuf3M91HIuqfnR4YzNWP4kJ8Oxpg&s",
  },
  {
    name: "Eco Lodges",
    path: "/properties/eco-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjOvq_gjoflJK3QXhIbyTipbTkrXjd7iA5g&s",
  },
  {
    name: "Tree Houses",
    path: "/properties/tree-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhg_Li49xWSEleLu-sHwC99C-Dd1cKNqGGw&s",
  },
  {
    name: "Luxury Stays",
    path: "/properties/luxury",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rw7JbQet8xQzk1O1jtfyAsr_Vs25skljTw&s",
  },
  {
    name: "Hotels",
    path: "/properties/hotels",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/234890397.webp?k=d64886ee666737d8a10ed846cc529533e6423b7a642a4e706f47655ff6de3d79&o=",
  },
  {
    name: "Apartments",
    path: "/properties/apartments",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/30785708.webp?k=95ef9cd617234ef606538bd14abeb07c6342c111d4121a9b65f5afb239d8ace6&o=",
  },
  {
    name: "Resorts",
    path: "/properties/resorts",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/464303942.webp?k=92a8b28475c05278a8e28db32dbf2134b2c3828768a7461b3ca21b9194b722d3&o=",
  },
  {
    name: "Villas",
    path: "/properties/villas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSairO4LqgDyyMNc6GjIDP02L0KKRzAGBZolQ&s",
  },
  {
    name: "Cottages",
    path: "/properties/cottages",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtVdghAPYiyLonM7YAlC_0_HkU7I8-jJqXA&s",
  },
  {
    name: "Hostels",
    path: "/properties/hostels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95Ru5PTuUmhA4lXSKKdxOWBW3B0QFkBw3qA&s",
  },
  {
    name: "B&Bs",
    path: "/properties/bnb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFACsx7_ExizGEKbJ9fqT8XoAEDQP8rUZI3A&s",
  },
  {
    name: "Vacation Homes",
    path: "/properties/vacation-homes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Guest Houses",
    path: "/properties/guest-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Motels",
    path: "/properties/motels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YJz5SyinfSbxCj39YTwN2kA20rRmKmEXQJ4bMMEetba_Z42-XLFfknA&s",
  },
  {
    name: "Farm Stays",
    path: "/properties/farm-stays",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7o7XbuKuf3M91HIuqfnR4YzNWP4kJ8Oxpg&s",
  },
  {
    name: "Eco Lodges",
    path: "/properties/eco-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjOvq_gjoflJK3QXhIbyTipbTkrXjd7iA5g&s",
  },
  {
    name: "Tree Houses",
    path: "/properties/tree-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhg_Li49xWSEleLu-sHwC99C-Dd1cKNqGGw&s",
  },
  {
    name: "Luxury Stays",
    path: "/properties/luxury",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rw7JbQet8xQzk1O1jtfyAsr_Vs25skljTw&s",
  },
  {
    name: "Hotels",
    path: "/properties/hotels",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/234890397.webp?k=d64886ee666737d8a10ed846cc529533e6423b7a642a4e706f47655ff6de3d79&o=",
  },
  {
    name: "Apartments",
    path: "/properties/apartments",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/30785708.webp?k=95ef9cd617234ef606538bd14abeb07c6342c111d4121a9b65f5afb239d8ace6&o=",
  },
  {
    name: "Resorts",
    path: "/properties/resorts",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/square600/464303942.webp?k=92a8b28475c05278a8e28db32dbf2134b2c3828768a7461b3ca21b9194b722d3&o=",
  },
  {
    name: "Villas",
    path: "/properties/villas",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSairO4LqgDyyMNc6GjIDP02L0KKRzAGBZolQ&s",
  },
  {
    name: "Cottages",
    path: "/properties/cottages",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtVdghAPYiyLonM7YAlC_0_HkU7I8-jJqXA&s",
  },
  {
    name: "Hostels",
    path: "/properties/hostels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR95Ru5PTuUmhA4lXSKKdxOWBW3B0QFkBw3qA&s",
  },
  {
    name: "B&Bs",
    path: "/properties/bnb",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFACsx7_ExizGEKbJ9fqT8XoAEDQP8rUZI3A&s",
  },
  {
    name: "Vacation Homes",
    path: "/properties/vacation-homes",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Guest Houses",
    path: "/properties/guest-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAbfFyhT2XrXKa0Nn8tCitxwPhPne5mZPaMg&s",
  },
  {
    name: "Motels",
    path: "/properties/motels",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4YJz5SyinfSbxCj39YTwN2kA20rRmKmEXQJ4bMMEetba_Z42-XLFfknA&s",
  },
  {
    name: "Farm Stays",
    path: "/properties/farm-stays",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb7o7XbuKuf3M91HIuqfnR4YzNWP4kJ8Oxpg&s",
  },
  {
    name: "Eco Lodges",
    path: "/properties/eco-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMjOvq_gjoflJK3QXhIbyTipbTkrXjd7iA5g&s",
  },
  {
    name: "Tree Houses",
    path: "/properties/tree-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOhg_Li49xWSEleLu-sHwC99C-Dd1cKNqGGw&s",
  },
  {
    name: "Luxury Stays",
    path: "/properties/luxury",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rw7JbQet8xQzk1O1jtfyAsr_Vs25skljTw&s",
  },
];

/* ================= UNIQUE PLACES (50+) ================= */

const uniquePlaces = [
  {
    name: "Boats",
    path: "/properties/boats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nISiu9Xb4655M-wIh-BIQDmU2DjabHCnuA&s",
  },
  {
    name: "Campgrounds",
    path: "/properties/campgrounds",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspDlWi4n9T1Lx8HIVJIAGBmT2pc0UIsK6dw&s",
  },
  {
    name: "Tiny Houses",
    path: "/properties/tiny-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGY_aMd4E9yaDdaZJ9mISNr-ZqapXU2osqw&s",
  },
  {
    name: "Ryokans",
    path: "/properties/ryokans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ6Kvc645_nHYLet9h_B1DhEY_bWcNvKwnbp9kBUBaQ&s",
  },
  {
    name: "Riads",
    path: "/properties/riads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mlDtmSZDHFmuMktJhHJVg3xioUqBGJsjiw&s",
  },
  {
    name: "Country Houses",
    path: "/properties/country-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYLbiZIcboWf7AJzw1j3JrD_YW9Fuz_1chg&s",
  },
  {
    name: "Eco Retreats",
    path: "/properties/eco-retreats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc8PcxRy1Wwoj4luGJYZXsNfGpwP6NA8Xnw&s",
  },
  {
    name: "Desert Camps",
    path: "/properties/desert-camps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfBD9CTwvRrMJ2A-y-wkUpEixTXprx2pq6g&s",
  },
  {
    name: "Mountain Lodges",
    path: "/properties/mountain-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ovx44y2uiVSiE0soE_xCfW_hmwQwseLhA&s",
  },
  {
    name: "Houseboats",
    path: "/properties/houseboats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL4m-K6TLdTTU4OBO8rI_SRzhCjvD6cuZgQ&s",
  },
  {
    name: "Yoga Ashrams",
    path: "/properties/yoga-ashrams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9Biuydo4K2L1Iu3v7tvA_O_sQvn5O2LRA&s",
  },
  {
    name: "Workation Homes",
    path: "/properties/workation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGDI0SNBbvz_ezlW6rIiTqex6ChvIKXS9rQ&s",
  },

  {
    name: "Boats",
    path: "/properties/boats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nISiu9Xb4655M-wIh-BIQDmU2DjabHCnuA&s",
  },
  {
    name: "Campgrounds",
    path: "/properties/campgrounds",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspDlWi4n9T1Lx8HIVJIAGBmT2pc0UIsK6dw&s",
  },
  {
    name: "Tiny Houses",
    path: "/properties/tiny-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGY_aMd4E9yaDdaZJ9mISNr-ZqapXU2osqw&s",
  },
  {
    name: "Ryokans",
    path: "/properties/ryokans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ6Kvc645_nHYLet9h_B1DhEY_bWcNvKwnbp9kBUBaQ&s",
  },
  {
    name: "Riads",
    path: "/properties/riads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mlDtmSZDHFmuMktJhHJVg3xioUqBGJsjiw&s",
  },
  {
    name: "Country Houses",
    path: "/properties/country-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYLbiZIcboWf7AJzw1j3JrD_YW9Fuz_1chg&s",
  },
  {
    name: "Eco Retreats",
    path: "/properties/eco-retreats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc8PcxRy1Wwoj4luGJYZXsNfGpwP6NA8Xnw&s",
  },
  {
    name: "Desert Camps",
    path: "/properties/desert-camps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfBD9CTwvRrMJ2A-y-wkUpEixTXprx2pq6g&s",
  },
  {
    name: "Mountain Lodges",
    path: "/properties/mountain-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ovx44y2uiVSiE0soE_xCfW_hmwQwseLhA&s",
  },
  {
    name: "Houseboats",
    path: "/properties/houseboats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL4m-K6TLdTTU4OBO8rI_SRzhCjvD6cuZgQ&s",
  },
  {
    name: "Yoga Ashrams",
    path: "/properties/yoga-ashrams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9Biuydo4K2L1Iu3v7tvA_O_sQvn5O2LRA&s",
  },
  {
    name: "Workation Homes",
    path: "/properties/workation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGDI0SNBbvz_ezlW6rIiTqex6ChvIKXS9rQ&s",
  },
  {
    name: "Boats",
    path: "/properties/boats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nISiu9Xb4655M-wIh-BIQDmU2DjabHCnuA&s",
  },
  {
    name: "Campgrounds",
    path: "/properties/campgrounds",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspDlWi4n9T1Lx8HIVJIAGBmT2pc0UIsK6dw&s",
  },
  {
    name: "Tiny Houses",
    path: "/properties/tiny-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGY_aMd4E9yaDdaZJ9mISNr-ZqapXU2osqw&s",
  },
  {
    name: "Ryokans",
    path: "/properties/ryokans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ6Kvc645_nHYLet9h_B1DhEY_bWcNvKwnbp9kBUBaQ&s",
  },
  {
    name: "Riads",
    path: "/properties/riads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mlDtmSZDHFmuMktJhHJVg3xioUqBGJsjiw&s",
  },
  {
    name: "Country Houses",
    path: "/properties/country-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYLbiZIcboWf7AJzw1j3JrD_YW9Fuz_1chg&s",
  },
  {
    name: "Eco Retreats",
    path: "/properties/eco-retreats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc8PcxRy1Wwoj4luGJYZXsNfGpwP6NA8Xnw&s",
  },
  {
    name: "Desert Camps",
    path: "/properties/desert-camps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfBD9CTwvRrMJ2A-y-wkUpEixTXprx2pq6g&s",
  },
  {
    name: "Mountain Lodges",
    path: "/properties/mountain-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ovx44y2uiVSiE0soE_xCfW_hmwQwseLhA&s",
  },
  {
    name: "Houseboats",
    path: "/properties/houseboats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL4m-K6TLdTTU4OBO8rI_SRzhCjvD6cuZgQ&s",
  },
  {
    name: "Yoga Ashrams",
    path: "/properties/yoga-ashrams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9Biuydo4K2L1Iu3v7tvA_O_sQvn5O2LRA&s",
  },
  {
    name: "Workation Homes",
    path: "/properties/workation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGDI0SNBbvz_ezlW6rIiTqex6ChvIKXS9rQ&s",
  },
  {
    name: "Boats",
    path: "/properties/boats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nISiu9Xb4655M-wIh-BIQDmU2DjabHCnuA&s",
  },
  {
    name: "Campgrounds",
    path: "/properties/campgrounds",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspDlWi4n9T1Lx8HIVJIAGBmT2pc0UIsK6dw&s",
  },
  {
    name: "Tiny Houses",
    path: "/properties/tiny-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGY_aMd4E9yaDdaZJ9mISNr-ZqapXU2osqw&s",
  },
  {
    name: "Ryokans",
    path: "/properties/ryokans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ6Kvc645_nHYLet9h_B1DhEY_bWcNvKwnbp9kBUBaQ&s",
  },
  {
    name: "Riads",
    path: "/properties/riads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mlDtmSZDHFmuMktJhHJVg3xioUqBGJsjiw&s",
  },
  {
    name: "Country Houses",
    path: "/properties/country-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYLbiZIcboWf7AJzw1j3JrD_YW9Fuz_1chg&s",
  },
  {
    name: "Eco Retreats",
    path: "/properties/eco-retreats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc8PcxRy1Wwoj4luGJYZXsNfGpwP6NA8Xnw&s",
  },
  {
    name: "Desert Camps",
    path: "/properties/desert-camps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfBD9CTwvRrMJ2A-y-wkUpEixTXprx2pq6g&s",
  },
  {
    name: "Mountain Lodges",
    path: "/properties/mountain-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ovx44y2uiVSiE0soE_xCfW_hmwQwseLhA&s",
  },
  {
    name: "Houseboats",
    path: "/properties/houseboats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL4m-K6TLdTTU4OBO8rI_SRzhCjvD6cuZgQ&s",
  },
  {
    name: "Yoga Ashrams",
    path: "/properties/yoga-ashrams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9Biuydo4K2L1Iu3v7tvA_O_sQvn5O2LRA&s",
  },
  {
    name: "Workation Homes",
    path: "/properties/workation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGDI0SNBbvz_ezlW6rIiTqex6ChvIKXS9rQ&s",
  },
  {
    name: "Boats",
    path: "/properties/boats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nISiu9Xb4655M-wIh-BIQDmU2DjabHCnuA&s",
  },
  {
    name: "Campgrounds",
    path: "/properties/campgrounds",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspDlWi4n9T1Lx8HIVJIAGBmT2pc0UIsK6dw&s",
  },
  {
    name: "Tiny Houses",
    path: "/properties/tiny-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGY_aMd4E9yaDdaZJ9mISNr-ZqapXU2osqw&s",
  },
  {
    name: "Ryokans",
    path: "/properties/ryokans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ6Kvc645_nHYLet9h_B1DhEY_bWcNvKwnbp9kBUBaQ&s",
  },
  {
    name: "Riads",
    path: "/properties/riads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mlDtmSZDHFmuMktJhHJVg3xioUqBGJsjiw&s",
  },
  {
    name: "Country Houses",
    path: "/properties/country-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYLbiZIcboWf7AJzw1j3JrD_YW9Fuz_1chg&s",
  },
  {
    name: "Eco Retreats",
    path: "/properties/eco-retreats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc8PcxRy1Wwoj4luGJYZXsNfGpwP6NA8Xnw&s",
  },
  {
    name: "Desert Camps",
    path: "/properties/desert-camps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfBD9CTwvRrMJ2A-y-wkUpEixTXprx2pq6g&s",
  },
  {
    name: "Mountain Lodges",
    path: "/properties/mountain-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ovx44y2uiVSiE0soE_xCfW_hmwQwseLhA&s",
  },
  {
    name: "Houseboats",
    path: "/properties/houseboats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL4m-K6TLdTTU4OBO8rI_SRzhCjvD6cuZgQ&s",
  },
  {
    name: "Yoga Ashrams",
    path: "/properties/yoga-ashrams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9Biuydo4K2L1Iu3v7tvA_O_sQvn5O2LRA&s",
  },
  {
    name: "Workation Homes",
    path: "/properties/workation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGDI0SNBbvz_ezlW6rIiTqex6ChvIKXS9rQ&s",
  },
  {
    name: "Boats",
    path: "/properties/boats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nISiu9Xb4655M-wIh-BIQDmU2DjabHCnuA&s",
  },
  {
    name: "Campgrounds",
    path: "/properties/campgrounds",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspDlWi4n9T1Lx8HIVJIAGBmT2pc0UIsK6dw&s",
  },
  {
    name: "Tiny Houses",
    path: "/properties/tiny-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGY_aMd4E9yaDdaZJ9mISNr-ZqapXU2osqw&s",
  },
  {
    name: "Ryokans",
    path: "/properties/ryokans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ6Kvc645_nHYLet9h_B1DhEY_bWcNvKwnbp9kBUBaQ&s",
  },
  {
    name: "Riads",
    path: "/properties/riads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mlDtmSZDHFmuMktJhHJVg3xioUqBGJsjiw&s",
  },
  {
    name: "Country Houses",
    path: "/properties/country-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYLbiZIcboWf7AJzw1j3JrD_YW9Fuz_1chg&s",
  },
  {
    name: "Eco Retreats",
    path: "/properties/eco-retreats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc8PcxRy1Wwoj4luGJYZXsNfGpwP6NA8Xnw&s",
  },
  {
    name: "Desert Camps",
    path: "/properties/desert-camps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfBD9CTwvRrMJ2A-y-wkUpEixTXprx2pq6g&s",
  },
  {
    name: "Mountain Lodges",
    path: "/properties/mountain-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ovx44y2uiVSiE0soE_xCfW_hmwQwseLhA&s",
  },
  {
    name: "Houseboats",
    path: "/properties/houseboats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL4m-K6TLdTTU4OBO8rI_SRzhCjvD6cuZgQ&s",
  },
  {
    name: "Yoga Ashrams",
    path: "/properties/yoga-ashrams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9Biuydo4K2L1Iu3v7tvA_O_sQvn5O2LRA&s",
  },
  {
    name: "Workation Homes",
    path: "/properties/workation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGDI0SNBbvz_ezlW6rIiTqex6ChvIKXS9rQ&s",
  },
  {
    name: "Boats",
    path: "/properties/boats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nISiu9Xb4655M-wIh-BIQDmU2DjabHCnuA&s",
  },
  {
    name: "Campgrounds",
    path: "/properties/campgrounds",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspDlWi4n9T1Lx8HIVJIAGBmT2pc0UIsK6dw&s",
  },
  {
    name: "Tiny Houses",
    path: "/properties/tiny-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGY_aMd4E9yaDdaZJ9mISNr-ZqapXU2osqw&s",
  },
  {
    name: "Ryokans",
    path: "/properties/ryokans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ6Kvc645_nHYLet9h_B1DhEY_bWcNvKwnbp9kBUBaQ&s",
  },
  {
    name: "Riads",
    path: "/properties/riads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mlDtmSZDHFmuMktJhHJVg3xioUqBGJsjiw&s",
  },
  {
    name: "Country Houses",
    path: "/properties/country-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYLbiZIcboWf7AJzw1j3JrD_YW9Fuz_1chg&s",
  },
  {
    name: "Eco Retreats",
    path: "/properties/eco-retreats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc8PcxRy1Wwoj4luGJYZXsNfGpwP6NA8Xnw&s",
  },
  {
    name: "Desert Camps",
    path: "/properties/desert-camps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfBD9CTwvRrMJ2A-y-wkUpEixTXprx2pq6g&s",
  },
  {
    name: "Mountain Lodges",
    path: "/properties/mountain-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ovx44y2uiVSiE0soE_xCfW_hmwQwseLhA&s",
  },
  {
    name: "Houseboats",
    path: "/properties/houseboats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL4m-K6TLdTTU4OBO8rI_SRzhCjvD6cuZgQ&s",
  },
  {
    name: "Yoga Ashrams",
    path: "/properties/yoga-ashrams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9Biuydo4K2L1Iu3v7tvA_O_sQvn5O2LRA&s",
  },
  {
    name: "Workation Homes",
    path: "/properties/workation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGDI0SNBbvz_ezlW6rIiTqex6ChvIKXS9rQ&s",
  },
  {
    name: "Boats",
    path: "/properties/boats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nISiu9Xb4655M-wIh-BIQDmU2DjabHCnuA&s",
  },
  {
    name: "Campgrounds",
    path: "/properties/campgrounds",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspDlWi4n9T1Lx8HIVJIAGBmT2pc0UIsK6dw&s",
  },
  {
    name: "Tiny Houses",
    path: "/properties/tiny-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGY_aMd4E9yaDdaZJ9mISNr-ZqapXU2osqw&s",
  },
  {
    name: "Ryokans",
    path: "/properties/ryokans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ6Kvc645_nHYLet9h_B1DhEY_bWcNvKwnbp9kBUBaQ&s",
  },
  {
    name: "Riads",
    path: "/properties/riads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mlDtmSZDHFmuMktJhHJVg3xioUqBGJsjiw&s",
  },
  {
    name: "Country Houses",
    path: "/properties/country-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYLbiZIcboWf7AJzw1j3JrD_YW9Fuz_1chg&s",
  },
  {
    name: "Eco Retreats",
    path: "/properties/eco-retreats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc8PcxRy1Wwoj4luGJYZXsNfGpwP6NA8Xnw&s",
  },
  {
    name: "Desert Camps",
    path: "/properties/desert-camps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfBD9CTwvRrMJ2A-y-wkUpEixTXprx2pq6g&s",
  },
  {
    name: "Mountain Lodges",
    path: "/properties/mountain-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ovx44y2uiVSiE0soE_xCfW_hmwQwseLhA&s",
  },
  {
    name: "Houseboats",
    path: "/properties/houseboats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL4m-K6TLdTTU4OBO8rI_SRzhCjvD6cuZgQ&s",
  },
  {
    name: "Yoga Ashrams",
    path: "/properties/yoga-ashrams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9Biuydo4K2L1Iu3v7tvA_O_sQvn5O2LRA&s",
  },
  {
    name: "Workation Homes",
    path: "/properties/workation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGDI0SNBbvz_ezlW6rIiTqex6ChvIKXS9rQ&s",
  },
  {
    name: "Boats",
    path: "/properties/boats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_nISiu9Xb4655M-wIh-BIQDmU2DjabHCnuA&s",
  },
  {
    name: "Campgrounds",
    path: "/properties/campgrounds",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTspDlWi4n9T1Lx8HIVJIAGBmT2pc0UIsK6dw&s",
  },
  {
    name: "Tiny Houses",
    path: "/properties/tiny-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUGY_aMd4E9yaDdaZJ9mISNr-ZqapXU2osqw&s",
  },
  {
    name: "Ryokans",
    path: "/properties/ryokans",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ6Kvc645_nHYLet9h_B1DhEY_bWcNvKwnbp9kBUBaQ&s",
  },
  {
    name: "Riads",
    path: "/properties/riads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-mlDtmSZDHFmuMktJhHJVg3xioUqBGJsjiw&s",
  },
  {
    name: "Country Houses",
    path: "/properties/country-houses",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtYLbiZIcboWf7AJzw1j3JrD_YW9Fuz_1chg&s",
  },
  {
    name: "Eco Retreats",
    path: "/properties/eco-retreats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAc8PcxRy1Wwoj4luGJYZXsNfGpwP6NA8Xnw&s",
  },
  {
    name: "Desert Camps",
    path: "/properties/desert-camps",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwfBD9CTwvRrMJ2A-y-wkUpEixTXprx2pq6g&s",
  },
  {
    name: "Mountain Lodges",
    path: "/properties/mountain-lodges",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg9ovx44y2uiVSiE0soE_xCfW_hmwQwseLhA&s",
  },
  {
    name: "Houseboats",
    path: "/properties/houseboats",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUL4m-K6TLdTTU4OBO8rI_SRzhCjvD6cuZgQ&s",
  },
  {
    name: "Yoga Ashrams",
    path: "/properties/yoga-ashrams",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ_9Biuydo4K2L1Iu3v7tvA_O_sQvn5O2LRA&s",
  },
  {
    name: "Workation Homes",
    path: "/properties/workation",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEGDI0SNBbvz_ezlW6rIiTqex6ChvIKXS9rQ&s",
  },
];

/* ================= COMPONENT ================= */

const PropertiesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="properties-page">
      <div className="container">
        {/* HEADER */}
        <div className="hero-card">
          <h1>Browse by property type</h1>
          <p>Find hotels, apartments, resorts and more</p>
        </div>

        {/* PROPERTY TYPES */}
        <div className="property-scroll-wrapper">
          <div className="property-scroll">
            {propertyTypes.map((item) => (
              <div
                key={item.name}
                className="property-card"
                onClick={() => navigate(item.path)}
              >
                <img src={item.image} alt={item.name} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* UNIQUE PLACES */}
        <h2 className="section-gap">Unique places to stay</h2>
        <div className="unique-scroll-wrapper">
          <div className="unique-scroll">
            {uniquePlaces.map((item) => (
              <div
                key={item.name}
                className="unique-card"
                onClick={() => navigate(item.path)}
              >
                <img src={item.image} alt={item.name} />
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPage;
