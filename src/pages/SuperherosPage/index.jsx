import React, { useState, useEffect } from 'react'
import { SelectGender, SelectRace, SelectPowerStats, FilteredHeroes, FilteredCards, SearchFilter} from '../../components'

import { Link } from 'react-router-dom'

export default function SuperherosPage() {
  const [ superheros, setSuperheros ] = useState([]);
  const [gender, setGender] = useState("")
      const [searchString, setSearchString] = useState("");
  
  const filterHeroes = FilteredHeroes(superheros, gender, searchString)

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
            <SearchFilter searchString={searchString} setSearchString={setSearchString} />
          </div>
        </div>
      </div>
      <FilteredCards filterHeroes={filterHeroes} />

    </>
  )
}
