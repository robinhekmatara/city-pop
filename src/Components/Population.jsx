import React from 'react';
import { capitalizeSentence } from '../Utils/stringOperations'
import '../styles/population.css';

const Population = ({location, match}) =>
  <div>
    <header className="sub-header">
      <h2>{capitalizeSentence(match.params.city)}</h2>
    </header>
    <div id="population">
      <p>POPULATION</p>
      <p id="population-text">{numToPaddedStr(location.state.population)}</p>
    </div>
  </div>

const numToPaddedStr = (num) => {
  let str = String(num);
  let len = str.length;
  let first = len % 3;

  let newStr = str.substring(0, first);
  console.log(newStr);
  for (let i = first; i < str.length; i+=3){
    newStr += ' ';
    newStr += str.substring(i, i + 3);
  }

  return newStr;
}

export default Population;