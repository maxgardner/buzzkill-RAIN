import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = (props) => {
  return (
    <div className="hero jumbotron jumbotron-fluid align-middle">
      <div className="container">
        <div className="text-center">
          <h1>Hit mute on your cravings</h1>
          <h4>Use the RAIN minfulness technique to battle your bad habits.</h4>
        </div>
        <div className="text-center start-button">
          <Link to="/user" className="btn btn-large btn-primary">Get Started</Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
