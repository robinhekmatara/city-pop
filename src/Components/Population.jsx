import React from 'react';
import { POPULATION } from '../Strings';
import { capitalizeSentence, spaceEveryThree } from '../Utils/stringOperations'
import '../Styles/population.css';

const Population = ({cityName, population}) =>
  <div>
    <header className="sub-header">
      <h2>{capitalizeSentence(cityName)}</h2>
    </header>
    <div id="population">
      <p>{POPULATION}</p>
      <p id="population-text">{spaceEveryThree(String(population))}</p>
    </div>
  </div>

export default Population;