const {ActionType, ActionCategory} = require('../consts/actions.js');

var UserActions = {
    login: function () {
        return {
            category: ActionCategory.WECHAT_API,
            type: ActionType.WX_USER_LOGIN,
            promise: (wxApi) => wxApi.login({})
        }
    },
    getSession: function (params) {
        return {
            category: ActionCategory.NETWORK,
            type: ActionType.WX_USER_SESSION,
            promise: (ajax) => ajax.GET('https://api.weixin.qq.com/sns/jscode2session', {params: params})
        }
    }
};

module.exports = UserActions;