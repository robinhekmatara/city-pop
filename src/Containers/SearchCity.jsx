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
      searchTerm: '',
      city: null,
      population: null,
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({loading: true});
    const { searchTerm } = this.state;
    getCity(searchTerm)
    .then(list => firstMatchingCity(list, searchTerm))
    .then(city => this.setState({city, population: city.population, loading: false}))
    .catch(e => {
      this.setState({city: null, searchTerm: '', population: null, loading: false});
      console.log(e);
    });
  }

  render() {
    const { searchTerm, city, population, loading } = this.state;
    const { location } = this.props;

    if (population !== null) {
      return <Redirect to={{
        pathname: `${location.pathname}/${city.name}`,
        state: {population}
      }}/>;
    }

    return (
      <div>
        <Search
          id="city"
          header={BY_CITY}
          placeholder={ENTER_CITY}
          value={searchTerm}
          loading={loading}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

export default SearchCity;