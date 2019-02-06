import React from 'react';
import { FaSearch } from 'react-icons/fa';
import '../styles/search.css';

const Search = ({id, placeholder, header, value, handleChange, handleSubmit}) =>
  <form onSubmit={handleSubmit}>
    <header className="sub-header">
      <h2>{header}</h2>
    </header>
    <input 
      type="text"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      required/>
    <button type="submit"><FaSearch/></button>
  </form>

export default Search;