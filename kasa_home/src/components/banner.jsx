// Banner.jsx
import React from 'react';
import '../assets/style/banner.css';

function Banner({ image, text, showOverlay = true }) {
    return (
        <section className='banner'>
            <img src={image} alt='bannière' />
            {showOverlay && <div className="overlay"></div>}
            {text && <h2 className="ban_text">{text}</h2>}
        </section>
    );
}

export default Banner;
