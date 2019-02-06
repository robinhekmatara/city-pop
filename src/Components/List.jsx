import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeSentence } from '../Utils/stringOperations'
import '../styles/list.css';

const List = ({match, location}) =>
  <div>
    <header className="sub-header">
      <h2>{capitalizeSentence(match.params.country)}</h2>
    </header>
    <div id="list">
        {location.state.cities.map(item => 
          <div key={item.geonameId} className="list-item">
            <Link to={{
              pathname: `${location.pathname}/${item.name}`,
              state: {population: item.population}
            }}>
              <div>
                {item.name}
              </div>
            </Link>
          </div>
        )}
    </div>
  </div>

export default List;