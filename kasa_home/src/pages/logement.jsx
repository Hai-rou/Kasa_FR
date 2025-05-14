import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import logements from '../data/data.json';
import Carousel from '../components/carrousel.jsx';
import Rating from '../components/Rating';
import {Collapse} from '../components/Collapse.jsx';
import '../assets/style/logement.css'

const Logement = () => {
  const { id } = useParams();
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
