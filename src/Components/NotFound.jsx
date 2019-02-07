import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/notFound.css';

const NotFound = () => 
  <div id="not-found">
    <header>
      <h2>Oops!</h2>
    </header>
    <p id="error-message">Sorry! We could not find the page you're looking for :(</p>
    <p id="error-code">Error code: 404</p>
    <p id="error-home"><Link to="/">Take me home</Link></p>
  </div>


export default NotFound;