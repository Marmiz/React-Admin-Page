"use strict"

var React = require('react');
var Link = require('react-router').Link;

var FourOFour = React.createClass({
  render: function() {
    return (
      <div className="jumbotron">
        <h1>Page Not Found</h1>
        <p className="lead">This is not the page you're looking for</p>
        <p>Why not go back to the
          <Link to="app">Home Page?</Link>
        </p>
      </div>
    );
  }
});

module.exports = FourOFour;
