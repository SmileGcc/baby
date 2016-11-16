const ajax = require('./network.js');
const {createStore, applyMiddleware} = require('../libs/redux.js');
const reducers = require('../reducers/index.js');
var asyncMiddleware = require('./middleware.js');

function configure() {
    return createStore(reducers, applyMiddleware(asyncMiddleware(ajax)));
}
module.exports = configure;