import React, { useEffect } from 'react'
import { HerosGallery, SelectGender, SelectRace, SelectPowerStats, SearchForm} from '../../components'
import { Link } from 'react-router-dom'

export default function SuperherosPage() {

  //to show all the superheros and their image


  return (
    <>
      <SelectGender />      
      <SelectRace />
      <SelectPowerStats />
      <SearchForm />

      <HerosGallery />
    </>
  )
}
