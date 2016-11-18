const {connect} = require('../../libs/wechat-redux.js');
import {bindActionCreators} from "../../libs/redux";
const {PhotoActions} = require('../../actions/index.js');

const pageConfig = {
    data: {
        photos: []
    },
    onLoad: function (options) {
        this.setData({photos: []});
        this.PhotoActions.getLocalPhotos();

    },
    onReady: function () {
        console.log('onReady123');
    },
    onShow: function () {
        console.log('onShow123');
    },
    // onReachBottom: function() {
    //   // Do something when page reach bottom.
    // },
    onPreview: function (event) {
        this.PhotoActions.preview(this.data.photos);
    }
};


const mapStateToData = state => ({
    photos: state.photo.upload
});

const mapDispatchToPage = dispatch => ({
    PhotoActions: bindActionCreators(PhotoActions, dispatch)
});

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);
Page(nextPageConfig);

