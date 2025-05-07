import React, { useState } from "react";

const MonCarrousel = () => {
  const [index, setIndex] = useState(0);
  const Carousel = data.pictures

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? Carousel.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === Carousel.length - 1 ? 0 : prev + 1));
  };

  return (
    <div style={{ position: "relative", width: "300px", height: "200px" }}>
      <img
        src={Carousel[index].src}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <button onClick={prevSlide} style={{ position: "absolute", left: 0 }}>←</button>
      <button onClick={nextSlide} style={{ position: "absolute", right: 0 }}>→</button>
    </div>
  );
};

export default MonCarrousel;
