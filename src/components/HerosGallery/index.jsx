import React, {useEffect, useState} from 'react';
import {GalleryImage} from '../';
import { Link } from 'react-router-dom';
import SuperherosPage from '../../pages/SuperherosPage';

export default function ShowGallery() {
  const [ superheros, setSuperheros ] = useState([]);
  
    //to show all the superheros and their image
  useEffect(() => {
  
    async function displaySuperheros() {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
      const data = await response.json();
      setSuperheros(data);
    }
  
      displaySuperheros();
  
  }, []);



  return (
    <SuperherosPage superheros={superheros} />

  // <div className="container">
  //   <div className="row">
  //     {superheros.map((hero) => (
  //       <div className="col-md-3 mb-4" key={hero.id}>
  //         <div className="card text-center h-100">
  //           <Link to={`${hero.id}`}>
  //             <GalleryImage data={hero} />
  //           </Link>
  //           <div className="card-body">
  //             <h2 className="card-title">{hero.name}</h2>
  //             <p className="card-text">Race: {hero.appearance.race || "Not Known"}</p>
  //             <p className="card-text"> Place of Birth: 
  //               {hero.biography.placeOfBirth
  //                || 
  //               (hero.biography.placeOfBirth === '-' && 'Not Known')} </p>  
  //           </div>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // </div>
  );
}