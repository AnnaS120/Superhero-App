import React, { useState } from 'react'
import { SelectGender, SelectRace, SelectPowerStats, SearchForm, FilteredHeroes, FilteredCards} from '../../components'

import { Link } from 'react-router-dom'

export default function SuperherosPage({superheros =[]}) {
  const [gender, setGender] = useState("")
  const filterHeroes = FilteredHeroes(superheros, gender)
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
