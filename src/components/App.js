import { Signin, Slack } from './';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

function Home() {
  return <div>Home</div>;
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
          <Route exact path="/slack" component={Slack} />
        </Switch>
      </div>
    );
  }
}

export default App;
