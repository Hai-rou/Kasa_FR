import { useState, useRef } from "react";    // Hook: useRef permet d'accéder au DOM **/
import '../assets/style/collapse.css';


export function Collapse(props) {
  // État local pour savoir si le contenu est visible ou non
  const [isShow, setIsShow] = useState(false);

  // Référence au conteneur du contenu, pour accéder à sa hauteur réelle
  const contentRef = useRef(null);

  // Fonction appelée lorsqu'on clique sur l'en-tête (toggle entre ouvert et fermé)
  const toggleShow = () => setIsShow(!isShow);

  // Choix de l'icône chevron selon l'état (haut si ouvert, bas si fermé)
  const chevronClass = isShow ? "fa-chevron-up" : "fa-chevron-down";

  return (
    <div className="collapse__panel">
      {/* En-tête cliquable du panneau */}
      <div className="collapse__header" onClick={toggleShow}>
        <span>{props.title}</span> {/* Affiche le titre passé en prop */}
        <i className={`fas ${chevronClass}`}></i> {/* Icône dynamique */}
      </div>

      {/* Conteneur du contenu, avec animation basée sur la hauteur */}
      <div
        ref={contentRef} // Référence utilisée pour lire scrollHeight
        className={`collapse__content-wrapper ${isShow ? 'open' : ''}`} // Ajoute la classe 'open' si le panneau est ouvert
        style={{
          // Définit la hauteur maximale du contenu en fonction de l’état
          maxHeight: isShow ? `${contentRef.current?.scrollHeight}px` : "0px",
          overflow: "hidden", // Cache ce qui dépasse pour faire une animation fluide
        }}
      >
        <div className="collapse__content">
          {/* Affiche le contenu :
              - Si c’est un tableau, on l’affiche sous forme de liste
              - Sinon, on l’affiche comme un paragraphe */}
          {Array.isArray(props.content) ? (
            <ul className="collapse__list">
              {props.content.map((item, index) => (
                <li key={index}>{item}</li> // Affiche chaque élément du tableau
              ))}
            </ul>
          ) : (
            <p>{props.content}</p> // Affiche le contenu simple (texte)
          )}
        </div>
      </div>
    </div>
  );
}