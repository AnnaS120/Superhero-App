import React from 'react'

export default function SearchForm() {
    const [inputValue, setInputValue] = useState('')

  return (
    <form id='search-form'>
        <input type="text" />
        <input type="submit" />
    </form>

  )
}
