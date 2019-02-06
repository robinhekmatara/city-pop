import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Loading from './Loading';
import '../styles/search.css';

const Search = ({id, placeholder, header, value, loading, handleChange, handleSubmit}) =>
  loading ?
  <Loading loading={loading}/> :
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
  </form>;

export default Search;