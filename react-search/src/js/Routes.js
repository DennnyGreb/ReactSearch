import React from 'react';
//import { BrowserRouter as Router, Route, IndexRoute, browserHistory } from 'react-router';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'; 

import App from './components/App';
import Home from './components/Home';
import Post from './components/Post';

const NotFound = () => (<h2>404.. This page is not found!</h2>);

const Routes = (props) => (
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/post/:post_id" component={ Post } />
        <Route component={ NotFound } />
      </Switch>
    </App>
  </Router>
);

export default Routes;