import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import IndexContainer from './container/index'
import ViewContainer from './container/ViewContainer'
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <React.Fragment>
          <Route path="/" exact component={IndexContainer}/>
          <Route path="/pokemon" exact component={ViewContainer}/>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
