import React from "react"

export default function FilteredHeroes(superheros , gender, searchString) {

    const genderFilter = superheros.filter((hero) => {
        const matchGender = !gender || hero.appearance.gender === gender
        const matchName = !searchString || hero.name.toLowerCase().includes(searchString.toLowerCase())

        return matchGender && matchName
    })

    return genderFilter

}
