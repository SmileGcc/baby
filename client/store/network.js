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
    if (params) {
        url = url + '?' + serialize(params);
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

function serialize(obj) {
    if (!isObject(obj)) return '';
    var pairs = [];
    for (var key in obj) {
        pushEncodedKeyValuePair(pairs, key, obj[key]);
    }
    return pairs.join('&');
}

function isObject(obj) {
    return null !== obj && 'object' === typeof obj;
}

function pushEncodedKeyValuePair(pairs, key, val) {
    if (val != null) {
        if (Array.isArray(val)) {
            val.forEach(function (v) {
                pushEncodedKeyValuePair(pairs, key, v);
            });
        } else if (isObject(val)) {
            for (var subkey in val) {
                pushEncodedKeyValuePair(pairs, key + '[' + subkey + ']', val[subkey]);
            }
        } else {
            pairs.push(encodeURIComponent(key)
                + '=' + encodeURIComponent(val));
        }
    } else if (val === null) {
        pairs.push(encodeURIComponent(key));
    }
}