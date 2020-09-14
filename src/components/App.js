import { Signin } from './';
import React, { Component } from 'react';

class App extends Component {
  state = {
    counter: 1,
  };
  render() {
    return (
      <div>
        <Signin />
      </div>
    );
  }
}

export default App;
