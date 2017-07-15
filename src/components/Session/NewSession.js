import React, { Component } from 'react';
import Form from './Form';

const questions = [
  {
    step: 'Recognize',
    text: 'Why did you start this session?'
  },
  {
    step: 'Accept',
    text: 'What are you craving with right now?'
  },
  {
    step: 'Investigate',
    text: 'On a scale of 1-3, with 3 being strongest, how strong is this craving?'
  },
  {
    step: 'Note',
    text: 'Think about how your body is feeling. Focus in on each feeling as it comes, and put it into words.<br />Continue until the craving weakens enough for you to put it aside.'
  }
];

class NewSession extends Component {

  render() {
    return (
      <div className="content container block-center">
        <h2 className="text-center">RAIN Session</h2>
        <Form questions={questions} saveSession={this.props.saveSession} />
      </div>
    );
  }
}

export default NewSession;
