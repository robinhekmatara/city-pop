import React from 'react';
import { capitalizeSentence, spaceEveryThree } from '../Utils/stringOperations'
import '../styles/population.css';

const Population = ({location, match}) =>
  <div>
    <header className="sub-header">
      <h2>{capitalizeSentence(match.params.city)}</h2>
    </header>
    <div id="population">
      <p>POPULATION</p>
      <p id="population-text">{spaceEveryThree(String(location.state.population))}</p>
    </div>
  </div>

export default Population;