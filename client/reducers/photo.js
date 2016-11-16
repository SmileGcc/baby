const {ActionType, ActionCategory} = require('../consts/actions.js');
//var Immutable = require('../libs/immutable.min.js');

const initialState = {
    error: null,
    upload: []
};

var reducer = function (state = initialState, action = {}) {
    switch (action.type) {
        case ActionType.WX_GET_PHOTO_LIST:
            state.error = null;
            state.upload = action.payload.tempFilePaths;
            return state;
        case ActionType.WX_PHOTO_PREVIEW:
            state.error = null;
            return state;
        default:
            return state;
    }
};

module.exports = reducer;