import React from 'react';
import { Link } from 'react-router-dom';
import { capitalizeSentence } from '../Utils/stringOperations'
import '../Styles/list.css';

const List = ({countryName, cities, prevUrl}) =>
  <div>
    <header className="sub-header">
      <h2>{capitalizeSentence(countryName)}</h2>
    </header>
    <div id="list">
        {cities.map(item => 
          <div key={item.geonameId} className="list-item">
            <Link to={{
              pathname: `${prevUrl}/${item.name}`,
              state: {population: item.population}
            }}>
              <div className="list-item-name">{item.name}</div>
            </Link>
          </div>
        )}
    </div>
  </div>

export default List;