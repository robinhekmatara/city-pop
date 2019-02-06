import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Search = ({id, placeholder, label, value, handleChange, handleSubmit}) =>
  <form onSubmit={handleSubmit}>
    <label htmlFor={id}>{label}</label>
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