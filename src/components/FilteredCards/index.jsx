import React from 'react'
import GalleryImage from '../GalleryImage'


export default function FilteredCards({ filterHeroes }) {

  return (
    <div className="container">
        <div className="row">
        {filterHeroes.map((hero) => (
            <div className="col-md-3 mb-4" key={hero.id}>
            <div className="card text-center h-100">
                <Link to={`${hero.id}`}>
                <GalleryImage data={hero} />
                </Link>
                <div className="card-body">
                <h2 className="card-title">{hero.name}</h2>
                <p className="card-text">Race: {hero.appearance.race || "Not Known"}</p>
                <p className="card-text"> Place of Birth: 
                    {hero.biography.placeOfBirth
                    || 
                    (hero.biography.placeOfBirth === '-' && 'Not Known')} </p>  
                </div>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}
