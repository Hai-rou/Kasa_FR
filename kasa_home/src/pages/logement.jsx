import { useParams, useNavigate } from 'react-router-dom';  //* Hook de React Router **/
import { useEffect } from 'react';                          //* Pour exécuter du code après le rendu **/
import logements from '../data/data.json';
import Carousel from '../components/Carrousel.jsx';
import Rating from '../components/Rating.jsx';
import {Collapse} from '../components/Collapse.jsx';
import '../assets/style/logement.css'

const Logement = () => {

  // Il te permet de récupérer les paramètres dynamiques de l’URL **/
  const { id } = useParams();   // // récupère l'ID de l'URL **/

  // Permet de naviguer vers une autre page **/
  const navigate = useNavigate();

  const logement = logements.find((item) => item.id === id);

  // Redirection vers /error si aucun logement trouvé
  useEffect(() => {
    if (!logement) {
      navigate('/Error');
    }
  }, [logement, navigate]);

  // Évite d'afficher quoi que ce soit avant la redirection
  if (!logement) {
    return null;
  }

  return (
    <div className="loge_home">
      <Carousel pictures={logement.pictures} />
      <div className="loge_content">
        <h1 className="loge_title">{logement.title}</h1>
        <p className="loge_p">{logement.location}</p>
        <div className="item">
          {logement.tags.map((tag, index) => (
            <div key={index} className="tag-item">
              {tag}
            </div>
          ))}
        </div>
      </div>
      <div className="rating">
        <Rating rating={logement.rating} />
        <div className="name">
          <span className="loge_name">{logement.host.name}</span>
          <img src={logement.host.picture} alt="host" />
        </div>
      </div>
      <div className="content content--variantB">
        <div className="collapse_panel">
          <Collapse title="Description" content={logement.description} />
          <Collapse title="Equipements" content={logement.equipments} />
        </div>
      </div>
    </div>
  );
};

export default Logement;
