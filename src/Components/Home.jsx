import React from 'react';
import { Link } from 'react-router-dom';
import { BY_CITY, BY_COUNTRY} from '../Strings';
import '../Styles/home.css';

const Home = () =>
  <div id="home">
    <ul>
      <li className="list-item">
        <Link to='/search_by_city'>
          <div className="list-item-box">{BY_CITY}</div>
        </Link>
      </li>
      <li className="list-item">
        <Link to='/search_by_country'>
          <div className="list-item-box">{BY_COUNTRY}</div>
        </Link>
      </li>
    </ul>
  </div>

export default Home;