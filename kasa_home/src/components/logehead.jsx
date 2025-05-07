import React from "react";

function LogementHeader({ currentApartment }) {
  
    const name = currentApartment.host.name.split(' ');
    const rating = currentApartment.rating;

return (
    <section className="apartment__header">
          <div className='apartment__title'>
                <h1>{currentApartment.title}</h1>
                <p>{currentApartment.location}</p>
                <div className="apartment__tags">
                      {currentApartment.tags.map((tag) => (
                            <span key={tag}>{tag}</span>
                            ))}
                </div>
          </div>
          <div className="apartment__owner">
                <div className="apartment__owner__details">
                      <h3>
                            <span>{name[0]}</span>
                            <span>{name[1]}</span>
                      </h3>
                      <div className="apartment__owner__badge">
                            <img src={currentApartment.host.picture} />
                      </div>
                </div>
                <div className='apartment__owner__stars'>
                       {[1,2,3,4,5].map((num) => (
                            <span key={num} className={currentApartment.rating >= num ? "on" : ""}>★</span>
                       ))}
                </div>
          </div>
    </section>
)
}

export default LogementHeader