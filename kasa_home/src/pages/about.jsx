import React from "react";
import imgAbout from '../assets/image/aboutbannerDesktop.png'
import { Collapse } from "../components/collapse";
import aboutData from '../data/aboutdata.json'
import Banner from "../components/banner";



const About = () => {
    return (
        <>
        <div className="Img_about">
            <Banner image={imgAbout} />
        </div>
        <div className="content_about">
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