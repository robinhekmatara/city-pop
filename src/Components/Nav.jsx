import React from 'react';
import { Link } from 'react-router-dom';
import { BY_CITY, BY_COUNTRY} from '../Strings';
import '../styles/nav.css';

const Nav = () =>
  <nav>
    <ul>
      <li>
        <Link to='/search_by_city'>
          <div>{BY_CITY}</div>
        </Link>
      </li>
      <li>
        <Link to='/search_by_country'>
          <div>{BY_COUNTRY}</div>
        </Link>
      </li>
    </ul>
  </nav>

export default Nav;