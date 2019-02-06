import React from 'react';

const Population = ({location, city}) =>
  <div>
    <h2>{city}</h2>
    <p>POPULATION</p>
    <p>{location.state.population}</p>
  </div>

export default Population;