import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import {BY_CITY, BY_COUNTRY} from './Strings';
import './App.css';
import SearchCity from './Containers/SearchCity';
import SearchCountry from './Containers/SearchCountry';
import Population from './Components/Population';
import List from './Components/List'
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header>CityPop</Header>
          <main>
            <Switch>
              <Route path="/search_by_city" component={SearchCity}/>
              <Route path="/search_by_country" component={SearchCountry}/>
              <Route path="/population/:city" render={props => <Population {...props}/>}/>
              <Route path="/country/:country" render={props => <List {...props}/>}/>
              <Route path="/" render={() => 
                <nav>
                  <Link to='/search_by_city'>{BY_CITY}</Link>
                  <Link to='/search_by_country'>{BY_COUNTRY}</Link>
                </nav>
              }/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
