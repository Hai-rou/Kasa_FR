// Logement.jsx
import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/data.json"; 
import Carousel from "../components/carrousel";



const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <h2>Logement introuvable</h2>;
  }

  return (
    <div>
      <Carousel pictures={logement.pictures} />
      <h1 className="loge_title">{logement.title}</h1>
      <p>{logement.location}</p>
    </div>
  );
};

export default Logement;
