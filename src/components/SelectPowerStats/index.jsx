import React from 'react'

export default function SelectPowerStats() {
  return (
    <select name="powerstats" id="powerstats-select">
        <option value=""> PowerStat</option>
        <option value="intelligence">Intelligence</option>
        <option value="strength">Strength</option>
        <option value="speed">Speed</option>
        <option value="durability">Durability</option>
        <option value="power">Power</option>
        <option value="combat">Combat</option>
    </select>
  )
}
