import { useState } from "react";          // Pour gérer un état local dans un composant**/
import '../assets/style/carrousel.css';

// Composant fonctionnel qui reçoit un tableau d'images via les props
const Carousel = ({ pictures }) => {
  // État local pour suivre l'index de l'image actuellement affichée
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour aller à l'image suivante
  const next = () => {
    // On incrémente l'index, et on utilise le modulo pour revenir à 0 à la fin du tableau
    setCurrentIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  };

  // Fonction pour aller à l'image précédente
  const prev = () => {
    // On décrémente l'index, en ajoutant la longueur du tableau pour éviter les valeurs négatives, puis on applique le modulo
    setCurrentIndex((prevIndex) =>
      (prevIndex - 1 + pictures.length) % pictures.length
    );
  };

  // Si le tableau d'images est vide ou non fourni, on ne rend rien
  if (!pictures || pictures.length === 0) return null;

  // Rendu du carrousel
  return (
    <div className="carousel">
      {/* Bouton pour aller à l'image précédente */}
      <button onClick={prev} className="btnleft">‹</button>

      {/* Bouton pour aller à l'image suivante */}
      <button onClick={next} className="btnright">›</button>

      {/* Image affichée, basée sur l'index courant */}
      <img
        src={pictures[currentIndex]}
        alt={`Image ${currentIndex + 1}`} 
      />

      {/* Affichage de la pagination */}
      {pictures.length > 1 && (
        <div className="carousel-counter">
          {currentIndex + 1} / {pictures.length} 
        </div>
      )}
    </div>
  );
};

export default Carousel;
