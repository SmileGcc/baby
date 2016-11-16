const {ActionType, ActionCategory} = require('../consts/actions.js');
const ajax = require('./network.js');
const wxApi = require('./wxApi.js');

var asyncMiddleware = function () {
    return ({dispatch, getState}) => {
        return next => action => {
            if (typeof action === 'function') {
                return action(dispatch, getState);
            }
            if (!action.promise) {
                return next(action);
            } else {
                return wrapper(action, next);
            }
        }
    };
};


var wrapper = function (action, next) {
    const promise = action.promise, type = action.type, category = action.category;
    var actionPromise, ok, err;
    const SUCCESS = type;
    const PENDING = type + '_PENDING';
    const FAILURE = type + '_FAILURE';


    var wxOk = function (res) {
        action.payload = res;
        action.type = SUCCESS;
    };

    var wxErr = function (error) {
        action.payload = error;
        action.type = ActionType.WECHAT_API_ERROR;
        action.error = true;
    };
    var netOk = function (res) {
        if (res.result === 1) {
            action.payload = res.data;
            action.type = SUCCESS;
        } else {
            action.error = true;
            action.payload = res.err;
            action.type = FAILURE;
        }
    };
    var netErr = function (error) {
        action.payload = error;
        action.type = ActionType.REQUEST_ERROR;
        action.error = true;
    };

    if (category === ActionCategory.NETWORK) {
        actionPromise = promise(ajax);
        ok = netOk;
        err = netErr;
    } else if (category === ActionCategory.WECHAT_API) {
        actionPromise = promise(wxApi);
        ok = wxOk;
        err = wxErr;
    } else {
        actionPromise = promise(ajax);
        ok = netOk;
        err = netErr;
    }
    actionPromise.then(ok, err).catch(err).then(() => next(action));
    return actionPromise;
};

module.exports = asyncMiddleware;