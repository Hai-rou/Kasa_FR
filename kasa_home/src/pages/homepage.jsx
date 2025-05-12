import React from "react";
import Banner from '../components/banner.jsx'
import Gallery from "../components/gallery.jsx";
import homeImg from '../assets/image/banner.png'

export function Homepage() {
    return (
        <div className="home">
            <Banner image={homeImg} className="banner--variantB" text="Chez vous, partout et ailleurs" />
            <Gallery />
        </div>
    )
}

