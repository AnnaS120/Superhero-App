import {React, useState} from 'react'

export default function SearchForm({ handleSearch, lastSearch }) {
    const [inputValue, setInputValue] = useState('')

    function handleInput(e) {
        const newInput = e.target.value
        setInputValue(newInput)
    }

    function handleSubmit(e) {
        e.preventDefault()
        handleSubmit(inputValue)
        setInputValue('')
    }

  return (
    <form onSubmit={handleSubmit} id='search-form'>
        <input type="text"
            value={inputValue} required
            onChange={handleInput}
            placeholder={lastSearch}
        />
        <input type="submit" value='Search'/>
    </form>

  )
}
