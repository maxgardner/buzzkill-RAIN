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
      step: 0
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
    let step = this.state.step + 1;
    this.setState({
      step
    });
  }

  saveProgress(e) {
    console.log(e.target.name);
    if (e.target.name === "N") {
      let feelings = e.target.value.split(',');
      this.setState({
        N: feelings
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
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

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveSession(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderQuestion()}
      </form>
    );
  }
}

export default Form;
