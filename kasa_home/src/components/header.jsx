import React from 'react'
import '../assets/style/header.css'
import Logo from '../assets/image/logo.png'
import { NavLink } from 'react-router-dom'


export function Header() {
    return (
        <header>
            <div className='header'>
                <img src={Logo} />
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/apropos">A propos</NavLink>
            </div>
        </header>
        
    )
}

