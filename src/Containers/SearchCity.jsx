import React, {Component} from 'react';
import { Redirect } from 'react-router';
import Search from '../Components/Search';
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