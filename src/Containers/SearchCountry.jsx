import React, {Component} from 'react';
import Search from '../Components/Search';
import { Redirect } from 'react-router';
import { getCountry, getCities } from '../api/api'; 
import { firstMatchingCountry } from '../Utils/firstMatch';
import { filterTop3 } from '../Utils/filter';
import { BY_COUNTRY, ENTER_COUNTRY, CITY_CODE } from '../Strings';

class SearchCountry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: '',
      cities: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({country: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    const { country } = this.state;

    getCountry(country)
    .then(list => firstMatchingCountry(list, country))
    .then(country => getCities(country.countryCode))
    .then(cities => filterTop3(cities, item => item.fcode.includes(CITY_CODE)))
    .then(top3cities => this.setState({cities: top3cities}))
    .catch(e => {
      this.setState({country: '', cities: null});
      console.log(e);
    });
  }

  render() {
    const { country, cities } = this.state;

    if (cities !== null) {
      return (
        <Redirect to={{
          pathname: `/country/${country}`,
          state: {cities}
        }}/>
      );
    }

    return (
      <Search
        id="country"
        label={BY_COUNTRY}
        placeholder={ENTER_COUNTRY}
        value={country}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchCountry;