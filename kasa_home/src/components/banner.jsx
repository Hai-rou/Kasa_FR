import React from 'react';
import '../assets/style/banner.css'
import LogoBan from '../assets/image/banner.png'



function Banner() {
    return(
        <section className='banner'>
            <img src={LogoBan} alt='logo bannière'/>
            <div className='overlay'></div>
            <h2 className="ban_text">Chez vous, partout et ailleurs</h2>
        </section>
    )
}

export default Banner