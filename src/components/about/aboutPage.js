"use strict";

var React = require('React');

var About = React.createClass({
  render: function () {
    return (
      <div>
        <h1>About</h1>
        <div>
          This app uses the following:
          <ul>
            <li>Rect</li>
            <li>React DOM</li>
            <li>Node</li>
            <li>Flux</li>
            <li>And many more!</li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = About;
