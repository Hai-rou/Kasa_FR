import React from "react";
import { Link } from 'react-router-dom'
import '../assets/style/card.css'


function Card({id, title, cover}) {
    return(
        <Link to={`/logement/${id}`}>
            <div className="card">
                <figure>
                    <img src={cover} alt={title} className="card_img" />
                    <figcaption className="card_subtitle">{title}</figcaption>
                </figure>
            </div>
        </Link>
    )
}

export default Card