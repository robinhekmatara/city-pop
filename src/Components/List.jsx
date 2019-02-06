import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/list.css';

const List = ({match, location}) =>
  <div>
    <header className="sub-header">
      <h2>{capitalize(match.params.country)}</h2>
    </header>
    <div id="list">
        {location.state.cities.map(item => 
          <div key={item.geonameId} className="list-item">
            <Link to={{
              pathname: `/Population/${item.name}`,
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

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

export default List;