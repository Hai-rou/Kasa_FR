import React from 'react'
import data from '../data/data.json'
import Card from './Card.jsx'
import '../assets/style/card.css'

function Gallery(){
    return (
       <section className='data_gallery'>
            {data.map(data => {
                return (
                    <Card 
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        cover={data.cover}
                    />
                )
            })}
       </section>
    )
}


export default Gallery