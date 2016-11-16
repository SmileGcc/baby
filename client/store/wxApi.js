const methods = require('../consts/wxMethods.js');
var Promise = require('../libs/es6-promise.min.js');

var WechatApi = {};

function wxPromisify(fn) {
    return function (obj = {}) {
        return new Promise((resolve, reject) => {
            obj.success = function (res) {
                resolve(res)
            };
            obj.fail = function (res) {
                reject(res)
            };
            fn(obj)
        })
    }
}

methods.forEach((method) => WechatApi[method] = wxPromisify(wx[method]));
module.exports = WechatApi;