'use strict';

var fs = require('fs'),
    path = require('path');

function getPath(dir, paths) {
    if (!paths) {
        paths = [];
    }
    var files = fs.readdirSync(dir);
    for (var file in files) {
        var fName = dir + path.sep + files[file];
        var stat = fs.lstatSync(fName);
        if (stat.isDirectory() === true) {
            getPath(fName, paths);
        } else {
            if (files[file].indexOf('.js') > -1) {
                paths.push(fName);
            }
        }
    }
    return paths;
}


//获取客户端IP
function getClientIp(req) {
    return req.headers['x-forwarded-for'] ||
        req.headers['x-real-ip'] ||
        req.ip ||
        req._remoteAddress ||
        (req.connection && req.connection.remoteAddress) ||
        undefined;
}


module.exports = {
    getPath: getPath,  //获取目录下的所有文件路径
    getClientIp: getClientIp,  //获取客服端IP
};
