// Logement.jsx
import React from "react";
import { useParams } from "react-router-dom";
import logements from "../data/data.json"; 
import Carousel from "../components/carrousel";
import Rating from "../components/rating";
import '../assets/style/logement.css'
import { Collapse } from "../components/collapse";


const Logement = () => {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <h2>Logement introuvable</h2>;
  }

  return (
    <div className="loge_home">
      <Carousel pictures={logement.pictures} />
      <div className="loge_content">
        <h1 className="loge_title">{logement.title}</h1>
        <p className="loge_p">{logement.location}</p>
      </div>
      <div className="item">
        <div className="loge_items">Cozy</div>
        <div className="loge_items">Canal</div>
        <div className="loge_items">Paris 10</div>
      </div>
      <div className="rating">
        <Rating rating={logement.rating} />
        <span className="loge_name">{logement.host.name}</span>
        <img src={logement.host.picture} />
      </div>
      <div className="content">
        <div className="collapse_panel">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Equipements" content={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
