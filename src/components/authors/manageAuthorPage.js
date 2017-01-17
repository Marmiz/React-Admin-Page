"use strict";

var React = require('react');
var AuthorForm = require('./AuthorForm');

var ManageAuthorPage = React.createClass({
  // since this is my top-level component
  // here's where we handle change into form
  getInitialState: function () {
    return {
      author: {id: '', firstName: '', lastName: ''},
      errors: {},
    }
  },
  // check and update
  setAuthorState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },
  render: function() {
    return (
      <div>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          errors={this.state.errors} />
      </div>
    );
  }
});
module.exports = ManageAuthorPage;
