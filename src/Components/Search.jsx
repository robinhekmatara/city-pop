import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { ToastContainer } from 'react-toastify';
import Loading from './Loading';
import '../styles/search.css';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({id, placeholder, header, value, loading, handleChange, handleSubmit}) =>
  <div>
    {loading ?
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
    </form>}
    <ToastContainer autoClose={10000} position="bottom-center"/>
  </div>;

export default Search;