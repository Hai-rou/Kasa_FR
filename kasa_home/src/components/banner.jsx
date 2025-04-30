import React from 'react'
import '../assets/style/banner.css'
import Logo from '../assets/image/logo.png'


function Banner() {
    return (
        <header>
            <div className='banner'>
                <img src={Logo} />
                <p>Accueil</p>
                <p>A propos</p>
            </div>
        </header>
        
    )
}

export default Banner