const {ActionType, ActionCategory} = require('../consts/actions.js');

var PhotoActions = {
    getLocalPhotos: function () {
        return {
            category: ActionCategory.WECHAT_API,
            type: ActionType.WX_GET_PHOTO_LIST,
            promise: (wxApi) => wxApi.chooseImage({
                count: 12,
                sizeType: ['original', 'compressed'],
                sourceType: ['album', 'camera']
            })
        }
    },
    preview: function (paths) {
        return {
            category: ActionCategory.WECHAT_API,
            type: ActionType.WX_PHOTO_PREVIEW,
            promise: (wxApi) => wxApi.previewImage({
                urls: paths
            })
        }
    }
};

module.exports = PhotoActions;