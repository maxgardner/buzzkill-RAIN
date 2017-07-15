import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container text-center">
          <a className="navbar-brand" href="/">Buzzkill</a>
        </div>
      </nav>
    );
  }
}

export default Navbar;
