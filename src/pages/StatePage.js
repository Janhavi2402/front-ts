import React from "react";
import { useParams } from "react-router-dom";

export default function StatePage() {
  const { religion, state } = useParams();

  return (
    <div>
      <h1>{state.replace(/-/g, " ").toUpperCase()}</h1>
      <p>Information about {state.replace(/-/g, " ")} in {religion.toUpperCase()} will be displayed here.</p>
    </div>
  );
}
