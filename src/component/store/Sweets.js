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
  <div>
    <Chocolate>
      cookies!!!!!
    </Chocolate>
  </div>

)
const Chocolate = (props) => (
  <h6 style={{ color: 'red' }}>  {props.children}</h6>
)



export default Sweets;
