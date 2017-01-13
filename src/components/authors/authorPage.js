"use strinct"

var React = require('react');
var AuthorApi = require('../../api/authorApi');
var AuthorList = require('./AuthorList');
var Router = require('react-router');
var Link = require('react-router').Link;

var AuthorPage = React.createClass({
  getInitialState: function () {
    return {
      authors: []
    }
  },
componentDidMount: function() {
  if (this.isMounted()) {
    this.setState({authors: AuthorApi.getAllAuthors() });
  }
},

  render: function() {

    return (
        <div>
          <h1>Authors</h1>
          <Link to="author" className="btn btn-default">Manage Author</Link>
          <AuthorList authors={this.state.authors} />
        </div>
    );
  }
});
module.exports = AuthorPage;
