import React, { useEffect, useState } from 'react';
import data from "../data/data.json"; 
import Logehead from '../components/logehead';
import MonCarrousel from '../components/carrousel';
import { useParams } from 'react-router-dom';


function Logement() {

    const [image, setImage] = useState([])

    const idLogement = useParams("id").id
    const ActLoge = data.filter(data => data.id === idLogement)

    useEffect(() => {
        const ActLoge = data.filter(data => data.id === idLogement)
        setImage(ActLoge[0].pictures)
    }, [idLogement])

    return (
        <div className='logement_page'>
            <MonCarrousel pictures={ActLoge[0].pictures} numberPhotos={ActLoge[0].pictures.length} />
            <Logehead ActLoge={ActLoge[0]}/>
        </div>
    )
}

export default Logement;