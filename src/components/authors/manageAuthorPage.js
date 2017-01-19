"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var browserHistory = ReactRouter.browserHistory; //for programmatic redirects
var AuthorForm = require('./AuthorForm');
var AuthorApi = require('../../api/authorApi');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({
  // since this is my top-level component
  // here's where we handle change into form
  componentDidMount: function() {
		this.props.router.setRouteLeaveHook(this.props.route, this.routerWillLeave);
	},

	routerWillLeave: function(nextLocation) {
		// Return false to prevent a transition w/o prompting the user,
		// or return a string to allow the user to decide:
		if (this.state.dirty) {
			return 'Leave without saving?';
		}
		return true;
	},
  getInitialState: function () {
    return {
      author: {id: '', firstName: '', lastName: ''},
      errors: {},
      dirty: false
    }
  },
  // check and update
  setAuthorState: function(event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },

  // basic validation
  authorFormIsValid: function() {
    var formIsValid = true;
    this.state.errors = {}; // clear any previous error

    if (this.state.author.firstName.length < 2) {
			this.state.errors.firstName = 'First name must be at least 2 characters.';
			formIsValid = false;
		}

		if (this.state.author.lastName.length < 2) {
			this.state.errors.lastName = 'Last name must be at least 2 characters.';
			formIsValid = false;
		}

    this.setState({errors: this.state.errors});
		return formIsValid;
  },

  // Save
  saveAuthor: function(event) {
    event.preventDefault();

    if (!this.authorFormIsValid()) {
      return;
    }

    this.setState({dirty: false}, function() {
			toastr.success('Author saved.');
			browserHistory.push('/authors');
		});

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
