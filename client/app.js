var configure = require('./store/configure.js');
const {Provider} = require('./libs/wechat-redux.js');
const {UserActions} = require('./actions/index.js');

App(Provider(configure())({

    onLaunch: function () {
        this.code = this.getUser().code;
        this.loginSub = this.store.subscribe(this.onLogin);
        this.store.dispatch(UserActions.login());
    },
    onShow: function () {
        // Do something when show.
    },
    onHide: function () {
        // Do something when hide.
    },
    onLogin: function () {
        let old = this.code;
        this.code = this.getUser().code;

        if (old !== this.code) {
            console.log('xx');
            this.store.dispatch(UserActions.getSession({a: 1, b: 2}));
        }
    },
    getUser: function () {
        return this.store.getState().user;
    }

    // getUserInfo: function (cb) {
    //   var that = this
    //   if (this.globalData.userInfo) {
    //     typeof cb == "function" && cb(this.globalData.userInfo)
    //   } else {
    //     //调用登录接口
    //     wx.login({
    //       success: function () {
    //         wx.getUserInfo({
    //           success: function (res) {
    //             that.globalData.userInfo = res.userInfo
    //             typeof cb == "function" && cb(that.globalData.userInfo)
    //           }
    //         })
    //       }
    //     })
    //   }
    // }
}));


