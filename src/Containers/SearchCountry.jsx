import React, {Component} from 'react';
import Search from '../Components/Search';
import { Redirect } from 'react-router-dom';
import { BY_COUNTRY, ENTER_COUNTRY } from '../Strings';

class SearchCountry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      searched: false
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
    const { searchTerm, searched} = this.state;
    const { location } = this.props;

    if (searched) {
      return (
        <Redirect push to= {`${location.pathname}/${searchTerm}`}/>
      );
    }

    return (
      <Search
        id="country"
        header={BY_COUNTRY}
        placeholder={ENTER_COUNTRY}
        value={searchTerm}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

export default SearchCountry;