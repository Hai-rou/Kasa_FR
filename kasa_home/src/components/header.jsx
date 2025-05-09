import React from 'react'
import '../assets/style/header.css'
import Logo from '../assets/image/logo.png'
import { NavLink } from 'react-router-dom'


export function Header() {
    return (
        <header>
            <div className='header'>
                <img src={Logo} />
                <div className='navbar'>
                    <NavLink to="/">Accueil</NavLink>
                    <NavLink to="/about">A propos</NavLink>
                </div>
            </div>
        </header>
        
    )
}

