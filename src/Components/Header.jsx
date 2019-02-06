import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = ({children}) =>
  <header id="page-header">
    <h1>
      <Link to="/">{children}</Link>
    </h1>
  </header>

export default Header;