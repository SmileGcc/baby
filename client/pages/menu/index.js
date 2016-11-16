Page({
    data: {
        animation: {}
    },
    onLoad: function (options) {
        this.animation = wx.createAnimation();
    },
    onReady: function () {

    },
    onShow: function () {
        // 页面显示
    },
    onHide: function () {
        // 页面隐藏
    },
    onUnload: function () {
        // 页面关闭
    },

    easeIn: function () {
        this.animation.translate(100).step({ducation: 1000});
        this.setData({
            animation: this.animation.export()
        })
    },
    easeOut: function () {
        this.animation.translate(100).step({ducation: 1000});
        this.setData({
            animation: this.animation.export()
        })
    },
});