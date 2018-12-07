import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from './Navigation';
import Lessons from './Lessons';
import Passport from './Passport';
import Advice from './Advice';
import Home from './Home';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/lessons" component={Lessons} />
            <Route exact path="/passport" component={Passport} />
            <Route exact path="/advice" component={Advice} />
            <Route exact path="/home" component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
