"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory; //for programmatic redirects
var AuthorForm = require('./AuthorForm');
var AuthorApi = require('../../api/authorApi');

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

  // Save
  saveAuthor: function(event) {
    event.preventDefault();
    AuthorApi.saveAuthor(this.state.author);
    browserHistory.push('/authors');
  },

  render: function() {
    return (
      <div>
        <AuthorForm
          author={this.state.author}
          onChange={this.setAuthorState}
          onSave={this.saveAuthor}
          errors={this.state.errors} />
      </div>
    );
  }
});
module.exports = ManageAuthorPage;
