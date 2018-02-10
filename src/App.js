import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
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
      <div className={styles.App}>
        <header className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h1 className={styles.AppTitle}>Demo React/Apollo</h1>
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
