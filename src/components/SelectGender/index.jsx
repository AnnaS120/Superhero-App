import {React, useEffect, useState} from 'react'

export default function SelectGender() {

  const [gender, setGender] = useState()

  function handleSelect (g) {
    const newGender = g.target.value 
    setGender(newGender)
  }

  return (
    
    <select onSubmit={handleSelect}
      name="gender" 
      id="gender-select">
        <option value="">Gender</option>
        <option value="female">Female</option>
        <option value="male">Male</option>
    </select>

  )
}
