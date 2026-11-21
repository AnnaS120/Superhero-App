import React, { useState, useEffect } from 'react'
import { SelectGender, SelectRace, SelectPowerStats, SearchForm, FilteredHeroes, FilteredCards} from '../../components'

import { Link } from 'react-router-dom'

export default function SuperherosPage() {
  const [ superheros, setSuperheros ] = useState([]);
  const [gender, setGender] = useState("")
  const filterHeroes = FilteredHeroes(superheros, gender)

    //to show all the superheros and their image
  useEffect(() => {
    async function displaySuperheros() {
      const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json`)
          console.log("Response status:", response.status)

      const data = await response.json();
      setSuperheros(data);
    // console.log("API data:", data)
    // console.log("Is array:", Array.isArray(data))
    // console.log("Number of heroes:", data.length)
    }
  
      displaySuperheros();
  
  }, []);
    console.log("Superheroes received:", superheros.length)
    console.log("Filtered superheroes:", filterHeroes.length)
    console.log("First superhero:", superheros[0])

  return (
    <>
      <div className="container">
        <div className="row g-3 mb-4">
          <div className="col-md-3">
            <SelectGender gender={gender} setGender={setGender} />
          </div>
          <div className="col-md-3">
            <SelectRace />
          </div>
          <div className="col-md-3">
            <SelectPowerStats />
          </div>
          <div className="col-md-3">
            <SearchForm />
          </div>
        </div>
      </div>
      <FilteredCards filterHeroes={filterHeroes} />

    </>
  )
}
