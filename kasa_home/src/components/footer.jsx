import React from 'react'
import '../assets/style/footer.css'
import EndLogo from '../assets/image/logo_footer.png'


export function Footer() {
    return (
        <footer>
            <div className='end'>
                <img src={EndLogo} alt='logo footer'/>
                <p className='txt_footer'>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}


