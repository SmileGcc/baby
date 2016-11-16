var config = require('../consts/config.js');
var Promise = require('../libs/es6-promise.min.js');

const methods = ['GET', 'POST', 'PUT', 'DELETE', 'CONNECT', 'OPTIONS', 'HEAD', 'TRACE'];

function getUrl(path, params) {
    let url = '';
    if (path.indexOf('http') === 0) {
        url = path;
    } else {
        url = config.protocal + '://' + config.host + ':' + config.port + '/';
        url = config.baseUrl ? url + config.baseUrl + '/' + path : url + path;
    }
    return url;
}

var Ajax = {};
var header = {
    'Content-Type': 'application/json'
};

methods.forEach((method) => Ajax[method] = (path, {params, data} = {}) =>
    new Promise((resolve, reject) => {
        wx.request({
            url: getUrl(path, params),
            method: method,
            data: data,
            header: header,
            success: function (res) {
                resolve(res.data);
            },
            fail: function (err) {
                reject(err);
            },
            complete: function () {
                console.log('finish');
            }
        });
    }));
module.exports = Ajax;