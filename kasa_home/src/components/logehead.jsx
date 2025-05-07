import React from "react";

function Logehead({ActLoge}){

    const name = ActLoge.host.name.split(' ');
    const rating = ActLoge.rating;

    return(
        <section className="apartment__header">
            <div className='apartment__title'>
                  <h1>{ActLoge.title}</h1>
                  <p>{ActLoge.location}</p>
                  <div className="apartment__tags">
                        {ActLoge.tags.map((tag) => (
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
                              <img src={ActLoge.host.picture} />
                        </div>
                  </div>
                  <div className='apartment__owner__stars'>
                         {[1,2,3,4,5].map((num) => (
                              <span key={num} className={ActLoge.rating >= num ? "on" : ""}>★</span>
                         ))}
                  </div>
            </div>
      </section>
  )
}

export default Logehead
