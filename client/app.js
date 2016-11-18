var configure = require('./store/configure.js');
var init = require('./init.js');
const {Provider} = require('./libs/wechat-redux.js');

const appConfig = Provider(configure())({
    data: {
        user:{}
    },
    onLaunch: function () {
        //this.UserActions.login();
        init(this);
        
        //this.loginSub = this.store.subscribe(this.onLogin);
    
    },
    onShow: function () {
        // Do something when show.
    },
    onHide: function () {
        // Do something when hide.
    }
});

App(appConfig);
