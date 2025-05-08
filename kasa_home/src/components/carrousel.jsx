import React, { useState } from "react";
import '../assets/style/carrousel.css'

const Carousel = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="carousel">
      <button onClick={prev} className="btnleft">‹</button>  {/* Chevron gauche */}
      <button onClick={next} className="btnright">›</button>  {/* Chevron droit */}
      <img
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
      />
    </div>
  );
};

export default Carousel;
