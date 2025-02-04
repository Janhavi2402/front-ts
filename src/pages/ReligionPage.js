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
    "Kerala",
  ];

  const handleStateClick = (state) => {
    navigate(`/religion/${religion}/${state.toLowerCase().replace(/\s+/g, "-")}`);
  };

  return (
    <div>
      <h1>{religion.toUpperCase()}</h1>
      <ul>
        {states.map((state, index) => (
          <li key={index} onClick={() => handleStateClick(state)} style={{ cursor: "pointer", color: "blue" }}>
            {state}
          </li>
        ))}
      </ul>
    </div>
  );
}
