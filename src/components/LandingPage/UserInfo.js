import React, { Component } from 'react';

class UserInfo extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      error: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.validateEmail = this.validateEmail.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.id;

    if (name === "name" && value) {
     let capitalized = value.split('');
     capitalized[0] = capitalized[0].toUpperCase();
     value = capitalized.join('');
    }

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveUser(this.state);
    // if (this.validateEmail()) {
    //   this.props.saveUser(this.state);
    // } else {
    //   this.setState({
    //     error: 'Please type a valid email address'
    //   });
    // }
  }

  // validateEmail() {
  //   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return re.test(this.state.email);
  // }

  render() {
    return (
      <div className="content container">
          <h2>Get Started</h2>
          <p>To get started, enter your name and email. We will  use this only to send you your results afterward.</p>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-control"
                id="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            {/* <div className="form-group">
              <label htmlFor="name">Email</label>
              <input
                className="form-control"
                id="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div className="form-group">{this.state.error}</div>
            </div> */}
            <button className="btn btn-large btn-primary">Start Session</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default UserInfo;
