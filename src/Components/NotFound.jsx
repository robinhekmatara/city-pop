import React from 'react';
import { Link } from 'react-router-dom';
import {ERROR_HEADER, ERROR_MESSAGE, ERROR_CODE, ERROR_LINK} from '../Strings';
import '../Styles/notFound.css';

const NotFound = () => 
  <div id="not-found">
    <header>
      <h2>{ERROR_HEADER}</h2>
    </header>
    <p id="error-message">{ERROR_MESSAGE}</p>
    <p id="error-code">{ERROR_CODE}</p>
    <p id="error-home"><Link to="/">{ERROR_LINK}</Link></p>
  </div>


export default NotFound;