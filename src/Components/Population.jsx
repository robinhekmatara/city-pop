import React, {Component} from 'react';

class Population extends Component {
  /*constructor(props) {
    super(props);
  }*/

  render() {
    const {location, city} = this.props;
    const population = location.state.population;
    return (
      <div>
        <h2>{city}</h2>
        <p>POPULATION</p>
        <p>{population}</p>
      </div>
    )
  }
}


export default Population;