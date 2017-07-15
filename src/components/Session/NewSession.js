import React, { Component } from 'react';
import Form from './Form';
import { Redirect } from 'react-router';

class NewSession extends Component {

  render() {
    return (
      <div className="content container block-center">
        <h2 className="text-center">RAIN Session</h2>
        <Form questions={this.props.questions} saveSession={this.props.saveSession} />
        {!this.props.name && <Redirect to="/user" />}
      </div>
    );
  }
}

export default NewSession;
