import React, { useState, useEffect } from 'react'
import SearchForm from '../SearchForm';
// import FilteredCards from '../FilteredCards';

export default function SearchFilter({searchString, setSearchString}) {
    // const [superheros, setSuperheros] = useState([])
    // const [searchString, setSearchString] = useState("Abomination");

    // useEffect(() => {function}, [dependencies])
    // useEffect(() => {
    //     async function searchAPI() {
    //         const response = await fetch(`https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/id/${hero.id}.json`)
    //         const rawData = await response.json();
    //         const data = rawData.map(h => h.show)
    //         setSuperheros(data);            
    //         console.log(data)
    //     }
    // searchAPI()
    // }, [searchString])

    function handleSearch(userInput){
        setSearchString(userInput)
    }


  return (
        <div>
            <SearchForm handleSearch={handleSearch} lastSearch={searchString} />
            {/* <FilteredCards filterHeroes={superheros} /> */}
        </div>
  )
}
