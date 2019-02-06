import React from 'react';
import '../styles/header.css';

const Header = ({children}) =>
  <header id="page-header">
    <h1>{children}</h1>
  </header>

export default Header;