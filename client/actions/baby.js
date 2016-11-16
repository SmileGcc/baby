const {ActionType, ActionCategory} = require('../consts/actions.js');

var BabyActions = {
    getBabies: function () {
        return {
            category: ActionCategory.NETWORK,
            type: ActionType.GET_BABY_LIST,
            promise: (ajax) => ajax.GET('babies')
        }
    }
};

module.exports = BabyActions;