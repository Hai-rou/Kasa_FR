import React from 'react'
import Imgtext from '../assets/image/banner.png'
import { Link } from 'react-router-dom'

function gallery(){
    return (
        <main>
            <div>
                <img src={Imgtext}/>
            </div>
        </main>
    )
}


export default gallery