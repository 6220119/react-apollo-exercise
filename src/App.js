import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RenderProfiles from './ProfileList/RenderProfiles';
import RenderProfile from './Profile/RenderProfile';
import AuthControls from './Auth/AuthControls'

class App extends Component {
  constructor() {
    super();

    this.state = {};
  }

  signedInChanged = (signedIn) => {
    this.setState({
      signedIn: signedIn,
    });
  }

  selectedObjectChange = (obj) => {
    this.setState({
      selectedObject: obj,
    });
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Demo React/Apollo</h1>
        </header>
        <br/>
        {
          <AuthControls onSignedInChanged={this.signedInChanged}></AuthControls>
        }
        <br/>
        {
          this.state.signedIn && !this.state.selectedObject &&
          <RenderProfiles onSelected={this.selectedObjectChange}></RenderProfiles>
        }
        {
          this.state.signedIn && !!this.state.selectedObject &&
          <RenderProfile id={this.state.selectedObject.id} onSelected={this.selectedObjectChange}></RenderProfile>
        }
      </div>
    );
  }
}

export default App;
