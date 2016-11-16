const ActionType = require('../consts/actions.js');
//var Immutable = require('../libs/immutable.min.js');

const initialState = {
    error: null,
    list: []
};

var reducer = function (state = initialState, action = {}) {
    switch (action.type) {
        case ActionType.GET_BABY_LIST:
            state.error = null;
            state.list = action.payload;
            return state;
        default:
            return state;
    }
};

module.exports = reducer;