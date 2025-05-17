import { Link } from 'react-router-dom'
import '../assets/style/card.css'



// La fontion reçoit 3 props : id (identifiant), title (titre du logement), cover (image de couverture)
function Card({ id, title, cover }) {
    return (
        // Lien vers la page détail du logement, construit dynamiquement avec l'id
        <Link to={`/Logement/${id}`}>

            {/* Conteneur principal de la carte */}
            <div className="card">
                <figure>
                    
                    {/* Image de couverture du logement */}
                    <img 
                        src={cover}                   // Source de l'image (URL ou chemin local)
                        alt={title}                   // Texte alternatif pour l'accessibilité
                        className="card_img"          // Classe CSS pour styliser l'image
                    />
                    
                    {/* Légende affichée sous l'image, contenant le titre du logement */}
                    <figcaption className="card_subtitle">{title}</figcaption>
                </figure>
            </div>
        </Link>
    );
}


export default Card;