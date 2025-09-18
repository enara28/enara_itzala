import React, {Component} from 'react';
import {Switch, Route} from "react-router-dom"

import Home from './home';
import About from './about';
import Profile from './profile';
import LogIn from './log-in';
import Pedido from './pedido';



export default class App extends Component {
  render() {
    return (
      <div className="app">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile" component={Profile} />
              <Route path="/log-in" component={LogIn} />
              <Route path="/pedido" component={Pedido} />
            </Switch>
      </div>
    );
  }
}
