import React, { Component } from 'react';
import GoogleSignInHandler from './GoogleSignIn';

class AuthControls extends Component {
  constructor() {
    super();
    this.state = {};
  }

  signedInChanged = (signedIn) => {
    this.setState({
      signedIn: signedIn,
    });
    
    this.props.onSignedInChanged(signedIn);
  }

  getSigninStyle(signedIn) {
    return {
      display: signedIn ? 'none' : 'block'
    }
  }

  signOut = () => {
    this.authHandler.signOut();
  }

  componentDidMount = () => {
    this.authHandler = this.props.authHandler || GoogleSignInHandler;
    this.authHandler.init(this.signedInChanged)
  }

  render() {
    return (
      <div>
        <div className="g-signin2" style={this.getSigninStyle(this.state.signedIn)}></div>

        {this.state.signedIn &&
          <div>
            <button aria-label="Sign out" alt="Sign out" onClick={this.signOut}>Sign Out</button>
          </div>
        }
      </div>
    );
  }
}

export default AuthControls