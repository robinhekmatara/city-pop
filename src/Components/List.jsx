import React from 'react';
import { Link } from 'react-router-dom';

const List = ({country, location}) =>
  <div>
    <h2>{country}</h2>
      {location.state.cities.map(item => 
        <div key={item.geonameId}>
          <Link to={{
            pathname: `/Population/${item.name}`,
            state: {population: item.population}
          }}>
            {item.name}
          </Link>
        </div>
      )}
  </div>

export default List;