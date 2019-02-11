import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import Search from '../Components/Search';
import { BY_CITY, ENTER_CITY } from '../Strings';

class SearchCity extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searched: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({searched: true});
  }

  render() {
    const { searchTerm, searched } = this.state;
    const { location } = this.props;

    if (searched) {
      return <Redirect push to={`${location.pathname}/${searchTerm}`}/>
    }

    return (
      <Search
        id="city"
        header={BY_CITY}
        placeholder={ENTER_CITY}
        value={searchTerm}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchCity;