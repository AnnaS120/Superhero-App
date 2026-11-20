import React, {useEffect, useState} from 'react';
import SuperherosPage from '../../pages/SuperherosPage';

export default function ShowGallery() {
  const [ superheros, setSuperheros ] = useState([]);
      console.log("ShowGallery is rendering")

    //to show all the superheros and their image
  useEffect(() => {
  
    async function displaySuperheros() {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
          console.log("Response status:", response.status)

      const data = await response.json();
      setSuperheros(data);
    console.log("API data:", data)
    console.log("Is array:", Array.isArray(data))
    console.log("Number of heroes:", data.length)
    }
  
      displaySuperheros();
  
  }, []);



  return (
    <>
      <SuperherosPage superheros={superheros} />
      
  </>
  );
}