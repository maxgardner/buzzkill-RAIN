import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Reference the high-level components
import App from '../components/App';

// Export the Routes
let Routes = () => {
  return (
    <Router>
      <Route path="/" component={App} />
    </Router>
  )
}

export default Routes;
