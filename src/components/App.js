import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { Route, NavLink } from "react-router-dom";

// Import the child components
import Navbar from './Global/Navbar';
import LandingPage from './LandingPage/LandingPage';
import UserInfo from './LandingPage/UserInfo';
import NewSession from './Session/NewSession';
import ResultsPage from './Session/ResultsPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      responses: [],
      complete: false
    }
    this.saveSession = this.saveSession.bind(this);
    this.saveUser = this.saveUser.bind(this);
  }

  saveSession(stateData) {
    let responses = [
      stateData.R,
      stateData.A,
      stateData.I,
      [...stateData.N]
    ];
    this.setState({
      responses,
      complete: true
    });
  }

  saveUser(user) {
    let name = user.name;
    let email = user.email;
    this.setState({
      name,
      email
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <Route
          exact strict path="/"
          render={() => <LandingPage />}
        />
        <Route
          exact strict path="/user"
          render={() => (this.state.name ?
                          <Redirect to="/session" />
                        :
                          <UserInfo saveUser={this.saveUser} />
                        )}
        />
        <Route
          exact strict path="/session"
          render={() => (this.state.complete ?
                          <Redirect to="/results" />
                        :
                          <NewSession saveSession={this.saveSession} />
                        )}
        />
        <Route
          exact strict path="/results"
          render={() => <ResultsPage
                          name={this.state.name}
                          responses={this.state.responses}
                          feelings={this.state.feelings}
                        />}
        />
      </div>
    );
  }
}

export default App;
