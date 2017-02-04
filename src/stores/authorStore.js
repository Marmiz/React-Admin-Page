"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

// private authors array to store data
var _authors = [];

var AuthorStore = assign({}, EventEmitter.prototype, {
  addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback);
	},

	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},

// retrive the data from our private array
  getAllAuthors: function() {
		return _authors;
	},

// use lodash to return the id
  getAuthorById: function(id) {
		return _.find(_authors, {id: id});
	}

}));

Dispatcher.register(function(action) {
  // create a switch for every action implemented
  switch(action.actionType) {

    // when action data is registered, push the new author data
    // into our author private array
    case ActionTypes.CREATE_AUTHOR:

    // author comes from the payload of authorActions
			_authors.push(action.author);
			AuthorStore.emitChange();
			break;

  }

}));

module.exports = AuthorStore;
