import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import SearchCity from './Containers/SearchCity';
import SearchCountry from './Containers/SearchCountry';
import Population from './Components/Population';
import List from './Components/List';
import Header from './Components/Header';
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header>CityPop</Header>
          <main>
            <Switch>
              <Route path="/search_by_city/:city" render={props => <Population {...props}/>}/>
              <Route path="/search_by_city" render={props => <SearchCity {...props}/>}/>
              <Route path="/search_by_country/:country/:city" render={props => <Population {...props}/>}/>
              <Route path="/search_by_country/:country" render={props => <List {...props}/>}/>
              <Route path="/search_by_country" render={props => <SearchCountry {...props}/>}/>
              <Route path="/" component={Home}/>
              }/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
