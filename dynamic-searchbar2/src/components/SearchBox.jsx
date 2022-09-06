import React from 'react'
import './search-box.styles.css'

function SearchBox({onSearchChange}) {
  return (
    <input className="search-box" type="search" placeholder="search..." onChange={onSearchChange}/>
  )
}

export default SearchBox