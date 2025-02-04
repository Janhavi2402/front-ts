import React from "react";
import { useParams, useNavigate } from "react-router-dom";

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
          </div>
        ))}
      </div>
    </div>
  );
}
