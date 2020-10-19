import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../providers/UserProvider';
import { signInWithGoogle } from '../firebase';

function SignIn(props) {
  const auth = useContext(UserContext);
  // const { from } = props.location.state || {
  //   from: { pathname: '/home' },
  // };

  // Redirect the user if not logged in
  if (auth.user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="signin-form">
      <img
        src="https://user-images.githubusercontent.com/819186/51553744-4130b580-1e7c-11e9-889e-486937b69475.png"
        alt="slack-icon"
      />
      <h3>SLACK</h3>
      <h1>
        <a href="https://swapnilsagar.netlify.app/" target="_blank">
          "By Swapnil Sagar"
        </a>
      </h1>
      <button className="btn basic-btn" onClick={signInWithGoogle}>
        <img
          src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Google-256.png"
          alt="Icon"
        />
        Sign in with Google
      </button>
    </div>
  );
}

export default SignIn;
