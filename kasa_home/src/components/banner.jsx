import '../assets/style/banner.css';

// Il reçoit des **props** : image, text, className (optionnel)
function Banner({ image, text, className="", showOverlay = true }) {
    return (
        <section className={`banner ${className}`}>

            {/* Affichage de l’image passée en prop */}
            <img src={image} alt='bannière' />

             {/* Si showOverlay vaut true, on affiche une div avec la classe "overlay" */}
            {showOverlay && <div className="overlay"></div>}

            {/* Si du texte est fourni, on l'affiche dans un <h2> avec la classe "ban_text" */}
            {text && <h2 className="ban_text">{text}</h2>}
            
        </section>
    );
}

export default Banner;
