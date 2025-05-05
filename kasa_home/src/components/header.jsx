import React from 'react'
import '../assets/style/banner.css'
import Logo from '../assets/image/logo.png'
import { Link } from 'react-router-dom'


export function Header() {
    return (
        <header>
            <div className='banner'>
                <img src={Logo} />
                <p>Accueil</p>
                <Link to="/apropos">A propos</Link>
            </div>
        </header>
        
    )
}

