// Logement.jsx
import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/data.json"; // Chemin vers ton JSON

const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <h2>Logement introuvable</h2>;
  }

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.image} alt={logement.title} style={{ width: "300px" }} />
      <p>{logement.description}</p>
    </div>
  );
};

export default Logement;
