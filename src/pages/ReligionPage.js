import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Replace with actual state-related images
const stateImages = {
  "Uttar Pradesh": "https://example.com/uttar-pradesh.jpg",
  "Uttarakhand": "https://example.com/uttarakhand.jpg",
  Gujarat: "https://example.com/gujarat.jpg",
  "Madhya Pradesh": "https://example.com/madhya-pradesh.jpg",
  Rajasthan: "https://example.com/rajasthan.jpg",
  "Tamil Nadu": "https://example.com/tamil-nadu.jpg",
  Kerala: "https://example.com/kerala.jpg",
};

const religionImages = {
  hinduism: "https://example.com/hinduism-banner.jpg",
  islam: "https://example.com/islam-banner.jpg",
  christianity: "https://example.com/christianity-banner.jpg",
  sikhism: "https://example.com/sikhism-banner.jpg",
  buddhism: "https://example.com/buddhism-banner.jpg",
  jainism: "https://example.com/jainism-banner.jpg",
};

export default function ReligionPage() {
  const { religion } = useParams();
  const navigate = useNavigate();

  const states = [
    "Uttar Pradesh",
    "Uttarakhand",
    "Gujarat",
    "Madhya Pradesh",
    "Rajasthan",
    "Tamil Nadu",
  ];

  const handleStateClick = (state) => {
    navigate(`/religion/${religion}/${state.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
<<<<<<< HEAD
    <div>
      <h1 className="font-bold text-center text-3xl mb-6">{religion.toUpperCase()}</h1>
      
      <div className="flex flex-wrap gap-8 justify-center mt-9">
        {states.map((state, index) => (
          <div
            key={index}
            className="bg-blue-500 text-white p-6 rounded-lg w-1/4 cursor-pointer hover:bg-blue-700 transition-colors h-80 shadow-lg hover:shadow-xl"
            onClick={() => handleStateClick(state)}
          >
            <h2 className="text-center text-xl">{state}</h2>
=======
    <div className="container mx-auto p-6">
      {/* Religion Banner */}
      <div className="w-full mb-8">
        <img
          src={religionImages[religion.toLowerCase()] || "https://example.com/default-banner.jpg"}
          alt={`${religion} banner`}
          className="w-full h-64 object-cover rounded-lg shadow-md"
        />
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8 capitalize">{religion}</h1>

      {/* States Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {states.map((state, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleStateClick(state)}
          >
            <img
              src={stateImages[state] || "https://example.com/default-state.jpg"}
              alt={state}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center">{state}</h2>
            </div>
>>>>>>> cf072b81a8ce359c359019211afcfbae638eaa15
          </div>
        ))}
      </div>
    </div>
  );
}
