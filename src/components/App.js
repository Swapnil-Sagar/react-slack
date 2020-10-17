import { Signin, Slack } from './';
import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';

const PrivateRoute = (props) => {
  const { component: Component, isLoggedIn, ...others } = props;
  return (
    <Route
      {...others}
      render={(newprops) => {
        if (isLoggedIn) {
          return <Component {...newprops} />;
        }

        return (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        );
      }}
    />
  );
};

function App() {
  const auth = useContext(UserContext);
  const loggedIn = auth.user ? true : false;
  console.log('App -> auth', auth);

  if (auth.loading) {
    return <h1>Loading!</h1>;
  }
  return (
    <div>
      <Switch>
        <PrivateRoute exact path="/" component={Slack} isLoggedIn={loggedIn} />
        <Route exact path="/login" component={Signin} />
        <Route exact path="/signup" component={Signin} />
      </Switch>
    </div>
  );
}

export default App;
