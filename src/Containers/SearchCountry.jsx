import React, {Component} from 'react';
import Search from '../Components/Search';
import { Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getCountry, getCities } from '../Api/api'; 
import { firstMatchingCountry } from '../Utils/firstMatch';
import { filterTop3 } from '../Utils/filter';
import { BY_COUNTRY, ENTER_COUNTRY, CITY_CODE } from '../Strings';

class SearchCountry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      country: null,
      cities: null,
      loading: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toastError = this.toastError.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.setState({loading: true});

    const { searchTerm } = this.state;

    /*
      Fetch by country
      Find the first with matching name and that is a country
      Fetch the locations from country with country code
      Sort locations in descending order by population and retrive first 3 that are cities
      Set state.cities to 3 largest cities.
    */
    getCountry(searchTerm)
    .then(list => firstMatchingCountry(list, searchTerm))
    .then(country => {
      this.setState({country})
      return getCities(country.countryCode)
    })
    .then(places => filterTop3(places.sort((a, b) => b.population - a.population),
                                            item  => item.fcode.includes(CITY_CODE)))
    .then(top3cities => this.setState({cities: top3cities, loading: false}))
    .catch(() => {
      this.toastError(searchTerm)
      this.setState({searchTerm: '', cities: null, loading: false});
    });
  }

  toastError = (country) => toast.error(`We are sorry! We could not find the country, ${country}.  `);

  render() {
    const { searchTerm, country, cities, loading } = this.state;
    const { location } = this.props;

    if (cities !== null) {
      return (
        <Redirect push to={{
          pathname: `${location.pathname}/${country.name}`,
          state: {cities}
        }}/>
      );
    }

    return (
      <Search
        id="country"
        header={BY_COUNTRY}
        placeholder={ENTER_COUNTRY}
        value={searchTerm}
        loading={loading}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchCountry;