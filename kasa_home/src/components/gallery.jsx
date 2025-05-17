import data from '../data/data.json'
import Card from './Card.jsx'
import '../assets/style/card.css'

function Gallery(){
    return (
       <section className='data_gallery'>
         {/* Parcours du tableau 'data' avec .map() pour générer une liste de composants Card */}
            {data.map(data => {
                return (
                    // Rendu d'un composant Card pour chaque élément du tableau
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