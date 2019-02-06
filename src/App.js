import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {BY_CITY, BY_COUNTRY} from './Strings';
import './App.css';
import SearchCity from './Containers/SearchCity';
import SearchCountry from './Containers/SearchCountry';
import Population from './Components/Population';
import List from './Components/List'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <header>
            <h1>CityPop</h1>
          </header>

          <Switch>
            <Route path="/search_by_city" component={SearchCity}/>
            <Route path="/search_by_country" component={SearchCountry}/>
            <Route path="/population/:city" render={props => <Population {...props}/>}/>
            <Route path="/country/:country" render={props => <List {...props}/>}/>
            <Route path="/" render={() => 
              <div>
                <Link to='/search_by_city'>{BY_CITY}</Link>
                <Link to='/search_by_country'>{BY_COUNTRY}</Link>
              </div>
            }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
