import React, {Component} from 'react';
import Search from '../Components/Search';
import { Redirect } from 'react-router';
import { BY_COUNTRY, ENTER_COUNTRY, COUNTRY_CODE, CITY_CODE } from '../Strings';

class SearchCountry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      country: '',
      cities: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getCities = this.getCities.bind(this);
  }

  handleChange(event) {
    this.setState({country: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.getCities();
  }

  getCities() {
    const { country } = this.state;
    fetch(`http://api.geonames.org/searchJSON?name=${country.toLowerCase()}&username=weknowit`)
            .then(response => response.json())
            .then(list => list.geonames.find(item => (item.name.toLowerCase()).includes(country.toLowerCase()) 
                                                  && item.fcode.includes(COUNTRY_CODE)))
            .then(country => fetch(`http://api.geonames.org/searchJSON?country=${country.countryCode}&username=weknowit`))
            .then(response => response.json())
            .then(cities => filterTop3(cities.geonames, item => item.fcode.includes(CITY_CODE)))
            .then(top3cities => this.setState({cities: top3cities}));
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

const filterTop3 = (arr, filter) => {
  let newArr = [];
  for (let i = 0; i < arr.length && newArr.length < 3; i++) {
    if (filter(arr[i])) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

export default SearchCountry;