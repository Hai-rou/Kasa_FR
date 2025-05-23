import imgAbout from '../assets/image/aboutiamge.jpg'
import { Collapse } from '../components/Collapse';
import aboutData from '../data/aboutdata.json'
import Banner from "../components/Banner";



const About = () => {
    return (
        <>
        <div className="Img_about">
            <Banner image={imgAbout} className="banner--variantA" />
        </div>
        <div className="content content--variantA">
            {aboutData.map(data =>{
                return(
                    <div key={data.id} className="collapse_panel">
                        <Collapse title={data.title} content={data.content} />
                    </div>
                )
            })}
        </div>
        </>
    )
}

export default About