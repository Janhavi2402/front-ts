import React from "react";
import { useParams, useNavigate } from "react-router-dom";

// Import Jainism state images
import jainGujarat from "../assets/jain_images/jain_gujarat.jpg";
import jainMP from "../assets/jain_images/jain_mp.jpg";
import jainRajasthan from "../assets/jain_images/jain_raj.jpeg";
import jainTamilNadu from "../assets/jain_images/jain_tn.jpg";
import jainUttarPradesh from "../assets/jain_images/jain_up.png";
import jainUttarakhand from "../assets/jain_images/jain_uttarakhand.jpg";
import jainismMainImage from "../assets/jain_images/jainism_main.jpg"; // Jainism banner image

// State images object
const stateImages = {
  "Uttar Pradesh": jainUttarPradesh,
  "Uttarakhand": jainUttarakhand,
  Gujarat: jainGujarat,
  "Madhya Pradesh": jainMP,
  Rajasthan: jainRajasthan,
  "Tamil Nadu": jainTamilNadu,
};

// Religion images object
const religionImages = {
  hinduism: "https://example.com/hinduism-banner.jpg",
  islam: "https://example.com/islam-banner.jpg",
  christianity: "https://example.com/christianity-banner.jpg",
  sikhism: "https://example.com/sikhism-banner.jpg",
  buddhism: "https://example.com/buddhism-banner.jpg",
  jainism: jainismMainImage, // Jainism main banner
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
          </div>
        ))}
      </div>
    </div>
  );
}
