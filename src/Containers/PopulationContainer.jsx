import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';   
import { toast } from 'react-toastify';
import { getCity } from '../Api/api';
import Population from '../Components/Population'
import Loading from '../Components/Loading';
import { firstMatchingCity } from '../Utils/firstMatch';

class PopulationContainer extends Component {
  constructor(props) {
    super(props);

    const { population } = this.props;
    let loading = population === undefined;

    this.state = {city: null, loading, error: false};
    this.toastError = this.toastError.bind(this);
  }

  toastError = (city) => toast.error(`We are sorry! We could not find the country, ${city}.`);

  componentDidMount() {
    const cityName = this.props.match.params.city;
    getCity(cityName)
    .then(list => firstMatchingCity(list, cityName))
    .then(city => city.name && this.setState({city, loading: false}))
    .catch(() => {
      this.toastError(cityName);
      this.setState({ city: null, loading: false, error: true});
    });
  }

  render() {
    const { city, loading, error } = this.state;

    if (error) {
      let url = this.props.location.pathname; 
      let to = url.lastIndexOf('/');
      to = to === -1 ? url.length : to;
      url = url.substring(0, to);
      return <Redirect to={url}/>
    }

    if (city === null) {
      return <Loading loading={loading}/>;
    }

    return <Population cityName={city.name} population={city.population}/>
  }
}


export default PopulationContainer;