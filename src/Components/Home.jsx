import React from 'react';
import { Link } from 'react-router-dom';
import { BY_CITY, BY_COUNTRY} from '../Strings';
import '../styles/home.css';

const Home = () =>
  <div id="home">
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
  </div>

export default Home;