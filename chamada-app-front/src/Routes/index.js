import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from '../Components/Login/login'

const Root = () => (
  <Router>
    <Route path="/" component={Login} />
  </Router>
);

export default Root;