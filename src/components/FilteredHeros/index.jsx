import React from "react"

export default function FilteredHeroes(superheros, gender) {

    const genderFilter = superheros.filter((hero) => {
        const matchGender = !gender || hero.appearance.gender === gender
        return matchGender
    })

    return genderFilter

}
