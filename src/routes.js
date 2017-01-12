"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var browserHistory = ReactRouter.browserHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Route = require('react-router').Route;
// var Redirect = ReactRouter.Redirect;


// Components
var App = require('./components/app');
var HomePage = require('./components/homePage');
var Authors = require('./components/authors/authorPage');
// var ManageAuthorPage = require('./components/authors/manageAuthorPage');
var AboutPage = require('./components/about/aboutPage');
var FourOFour = require('./components/common/404');

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={HomePage} />
      <Route path="authors" component={Authors} />
      <Route path="about" component={AboutPage} />
      <Route path="*" component={FourOFour} />
    </Route>
  </Router>
);


module.exports = routes;
