import React, {Component} from 'react';
import { Redirect } from 'react-router';
import Search from '../Components/Search';
import { getCity } from '../api/api';
import { firstMatchingCity } from '../Utils/firstMatch';
import { BY_CITY, ENTER_CITY } from '../Strings';

class SearchCity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      population: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({city: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const { city } = this.state;
    getCity(city)
    .then(list => firstMatchingCity(list, city))
    .then(city => this.setState({population: city.population}))
    .catch(e => {
      this.setState({city: '', population: null});
      console.log(e);
    });
  }

  render() {
    const { city, population } = this.state;

    if (population !== null) {
      return <Redirect to={{
        pathname: `/population/${city}`,
        state: {population}
      }}/>;
    }

    return (
      <Search
        id="city"
        label={BY_CITY}
        placeholder={ENTER_CITY}
        value={city}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchCity;