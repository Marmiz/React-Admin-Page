"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {

  createAuthor: function(author) {
		var newAuthor = AuthorApi.saveAuthor(author);

		//Hey dispatcher, go tell all the stores that an author was just created.
    //reference the action from ../constants/actionTypes
		Dispatcher.dispatch({
			actionType: ActionTypes.CREATE_AUTHOR,
			author: newAuthor
		});
	},

  updateAuthor: function(author) {
  var updatedAuthor = AuthorApi.saveAuthor(author);

  Dispatcher.dispatch({
    actionType: ActionTypes.UPDATE_AUTHOR,
    author: updatedAuthor
  });
},

deleteAuthor: function(id) {
    debugger; //2: Action
		AuthorApi.deleteAuthor(id);

		Dispatcher.dispatch({
			actionType: ActionTypes.DELETE_AUTHOR,
			id: id
		});
	}
}


module.exports = AuthorActions;
