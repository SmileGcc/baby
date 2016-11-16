const {combineReducers} = require('../libs/redux.js');

var user = require('./user.js');
var photo = require('./photo.js');
module.exports = combineReducers({
    user,
    photo
});