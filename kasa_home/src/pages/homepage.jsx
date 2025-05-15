import Banner from '../components/Banner.jsx'
import Gallery from "../components/Gallery.jsx";
import homeImg from '../assets/image/banner.png'

export function Homepage() {
    return (
        <div className="home">
            <Banner image={homeImg} className="banner--variantB" text="Chez vous, partout et ailleurs" />
            <Gallery />
        </div>
    )
}

