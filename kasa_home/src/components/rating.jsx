import React from "react";

const Rating = ({ rating }) => {
  const totalStars = 5;
  const ratingValue = parseInt(rating, 10); // transforme "3" en 3

  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    stars.push(
      <span key={i} style={{ color: i <= ratingValue ? "#ff6060" : "#e3e3e3", fontSize: "24px" }}>
        ★
      </span>
    );
  }

  return <div className="star">{stars}</div>;
};

export default Rating;
