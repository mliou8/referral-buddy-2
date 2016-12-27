import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './App';
import './index.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import SignUp from './components/Signup';
import JobsList from './components/JobsList';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="signup" component={SignUp}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="jobs" component={JobsList}/>
    </Route>
  </Router>,
  document.getElementById('root')
);
