import React from 'react';
import LogoBan from '../assets/image/banner.png'



function Banner() {
    return(
        <section className='banner'>
            <img src={LogoBan} alt='logo bannière'/>
            <h2 className="ban_text">Chez vous, partout et ailleurs</h2>
        </section>
    )
}

export default Banner