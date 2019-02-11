import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';   
import { toast } from 'react-toastify';
import { getCountry, getCities } from '../Api/api';
import List from '../Components/List'
import Loading from '../Components/Loading';
import { firstMatchingCountry } from '../Utils/firstMatch';
import { filterTop3 } from '../Utils/filter'
import {CITY_CODE} from '../Strings';

class ListContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {country: null, cities: null, loading: true, error: false};

    this.toastError = this.toastError.bind(this);
  }

  toastError = (country) => toast.error(`We are sorry! We could not find the city, ${country}.`);

  componentDidMount() {
    const countryName = this.props.match.params.country;
    /*
      Fetch by country
      Find the first with matching name and that is a country
      Fetch the locations from country with country code
      Sort locations in descending order by population and retrive first 3 that are cities
      Set state.cities to 3 largest cities.
    */
    getCountry(countryName)
    .then(list => firstMatchingCountry(list, countryName))
    .then(country => {
      this.setState({country})
      return getCities(country.countryCode)
    })
    .then(places => filterTop3(places.sort((a, b) => b.population - a.population),
                                            item  => item.fcode.includes(CITY_CODE)))
    .then(top3cities => this.setState({cities: top3cities, loading: false}))
    .catch(() => {
      this.toastError(countryName)
      this.setState({ cities: null, loading: false, error: true});
    });
  }

  render() {
    const { country, cities, loading, error } = this.state;

    if (error) {
      let url = this.props.location.pathname; 
      let to = url.lastIndexOf('/');
      to = to === -1 ? url.length : to;
      url = url.substring(0, to);
      return <Redirect to={url}/>
    }

    if (cities === null) {
      return <Loading loading={loading}/>;
    }

    return <List countryName={country.name} cities={cities} prevUrl={this.props.location.pathname}/>
  }
}


export default ListContainer;