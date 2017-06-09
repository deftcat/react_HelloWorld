import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Sweets = ({ match }) => (
  <div>
    <p>This is sweets</p>
    <Link to={`${match.url}/cookies`}>cookies</Link>
    <Router>
      <Route path={`${match.url}/cookies`} component={Sweet} />
    </Router>
  </div>
);
const Sweet = () => (
  <div><p>
    cookies!!!!!
  </p></div>

)


export default Sweets;
