import React, { Component } from 'react';

class Question extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <fieldset>
        <div className="form-group">
          <label htmlFor={this.props.name}>
            <h3>{this.props.question.step}</h3>
            {this.props.question.text}
          </label>
          {this.props.name === "N" && (
            <div className="feelings">
              {this.props.formData.N.map((data, i) => (
                <span key={i} className="badge badge-info">{data}</span>
              ))}
            </div>
          )}
          <input
            className="form-control"
            name={this.props.name}
            value={this.props.formData[this.props.name]}
            onChange={this.props.saveProgress}
          />
        </div>
        {this.props.previousStep && (
          <button type="button" onClick={this.props.previousStep} className="btn btn-secondary">Back</button>
        )}
        {this.props.nextStep && (
          <button type="button" onClick={this.props.nextStep} className="btn btn-primary">Next</button>
        )}
        {!this.props.nextStep && (
          <button type="button" onClick={this.props.handleSubmit} className="btn btn-success">End Session</button>
        )}
      </fieldset>
    );
  }
}

export default Question;
