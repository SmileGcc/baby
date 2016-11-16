const {ActionType} = require('../consts/actions.js');
//var Immutable = require('../libs/immutable.min.js');

const initialState = {
    error: null,
    code: '',
    list: [],
    me: {}
};

var reducer = function (state = initialState, action = {}) {
    switch (action.type) {
        case ActionType.WX_USER_LOGIN:
            if (action.payload && action.payload.code) {
                state.code = action.payload.code;
            } else {
                state.error = action.payload.errmsg;
            }
            return state;
        case ActionType.WX_USER_SESSION:
            return state;
        default:
            return state;
    }
};

module.exports = reducer;