import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './App.css';
import SearchCity from './Containers/SearchCity';
import SearchCountry from './Containers/SearchCountry';
import Header from './Components/Header';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import { PAGE_HEADER } from './Strings';
import PopulationContainer from './Containers/PopulationContainer';
import ListContainer from './Containers/ListContainer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header>{PAGE_HEADER}</Header>
          <main>
            <Switch>
              <Route path="/search_by_city/:city" render={props => <PopulationContainer {...props}/>}/>
              <Route path="/search_by_city" render={props => <SearchCity {...props}/>}/>
              <Route path="/search_by_country/:country/:city" render={props => <PopulationContainer {...props}/>}/>
              <Route path="/search_by_country/:country" render={props => <ListContainer {...props}/>}/>
              <Route path="/search_by_country" render={props => <SearchCountry {...props}/>}/>
              <Route exact path="/" component={Home}/>
              <Route component={NotFound}/>
              }/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
