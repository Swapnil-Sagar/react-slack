import { Signin } from './';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

function Home() {
  return <div>Home</div>;
}

function Some() {
  return <div>Some</div>;
}

class App extends Component {
  state = {
    counter: 1,
  };
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Signin} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/some" component={Some} />
        </Switch>
      </div>
    );
  }
}

export default App;
