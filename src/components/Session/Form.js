import React, { Component } from 'react';
import Question from './Question';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      R: '',
      A: '',
      I: '',
      N: [''],
      step: 0,
      error: ''
    };
    this.previousStep = this.previousStep.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.saveProgress = this.saveProgress.bind(this);
    this.renderQuestion = this.renderQuestion.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  previousStep(e) {
    let step = this.state.step - 1;
    this.setState({
      step
    });
  }

  nextStep() {
    // Prevent them from going forward if they haven't answered questions
    if (this.state.step === 0 && this.state.R === '' ||
        this.state.step === 1 && this.state.A === '' ||
        this.state.step === 2 && this.state.I === '' ||
        this.state.step === 3 && this.state.N === '') {
      this.state.error = 'You must answer the question before moving forward';
      return;
    }

    let step = this.state.step + 1;
    this.setState({
      step
    });
  }

  saveProgress(e) {
    if (e.target.name === 'N') {
      let feelings = e.target.value.split(',');
      this.setState({
        N: feelings
      });
      return;
    }

    this.setState({
      [e.target.name]: e.target.value
    });
  }

  renderQuestion() {
    switch(this.state.step) {
      case 0:
          return (
            <Question
              question={this.props.questions[this.state.step]}
              name="R"
              formData={this.state}
              nextStep={this.nextStep}
              saveProgress={this.saveProgress}
            />
          )
      case 1:
          return (
            <Question
              question={this.props.questions[this.state.step]}
              name="A"
              formData={this.state}
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              saveProgress={this.saveProgress}
            />
          )
      case 2:
          return (
            <Question
              question={this.props.questions[this.state.step]}
              name="I"
              formData={this.state}
              nextStep={this.nextStep}
              previousStep={this.previousStep}
              saveProgress={this.saveProgress}
            />
          )
      case 3:
          return (
            <Question
              question={this.props.questions[this.state.step]}
              name="N"
              formData={this.state}
              previousStep={this.previousStep}
              saveProgress={this.saveProgress}
              handleSubmit={this.handleSubmit}
            />
          )
    }
  }

  handleSubmit() {
    this.props.saveSession(this.state);
  }

  render() {
    return (
      <div>
        {this.renderQuestion()}
      </div>
    );
  }
}

export default Form;
