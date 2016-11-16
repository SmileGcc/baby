const {connect} = require('../../libs/wechat-redux.js');
import {bindActionCreators} from "../../libs/redux";
const {UserActions} = require('../../actions/index.js');

var app = getApp();

const pageConfig = {
    data: {
        user: {},
    },
    onLoad: function (options) {
        console.log('onLoad');
        //this.UserActions.getUser();
    },
    onReady: function () {
        console.log('onReady');
        // Do something when page ready.
    },
    onShow: function () {
        console.log('onShow');
        // UserActions.getUser();
        // Do something onShow page show.
    },
    onHide: function () {
        // 页面隐藏

    },
    onUnload: function () {
        // 页面关闭

    },
    // onPullDownRefresh: function(){

    // },
    // onReachBottom: function() {
    //   // Do something when page reach bottom.
    // },
    // bindViewTap: function() {
    //   wx.navigateTo({
    //     url: '../logs/logs'
    //   })
    // },
};


const mapStateToData = state =>({
    user: state.user.me
});

const mapDispatchToPage = dispatch => ({
    UserActions: bindActionCreators(UserActions, dispatch)
    // setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter)),
    // toggleTodo: id => dispatch(toggleTodo(id)),
    // addTodo: event => dispatch(addTodo(event.detail.value.todo)),
});

const nextPageConfig = connect(mapStateToData, mapDispatchToPage)(pageConfig);
Page(nextPageConfig);
