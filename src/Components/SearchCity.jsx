import React, {Component} from 'react';
import {FaSearch} from 'react-icons/fa'
import { Redirect } from 'react-router';
import { BY_CITY } from '../Strings';

class SearchCity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      population: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCity = this.getCity.bind(this);
  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getCity();
  }

  getCity() {
    const { city } = this.state;
    return fetch(`http://api.geonames.org/searchJSON?q=${city.toLowerCase()}&maxRows=1&username=weknowit`)
            .then(response => response.json())
            .then(city => this.setState({population: city.geonames[0].population}))
            .catch(e => console.log(e));
  }

  render() {
    const { city, population } = this.state;

    if (population !== null) {
      console.log(population);
      return <Redirect to={{
        pathname: `/population/${city}`,
        state: {population}
      }}/>;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="city">{BY_CITY}</label>
        <input type="text" id="city" onChange={this.handleChange} value={city}/>
        <button type="submit"><FaSearch/></button>
      </form>
    )
  }
}

export default SearchCity;