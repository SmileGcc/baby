var mongoose = require('mongoose');
var utils = require($ROOT + '/lib/utils');
var paths = utils.getPath($ROOT + '/models/baby');
paths.forEach(function (path) {
    require(path);
});

exports.Baby = mongoose.model('Baby');
exports.User = mongoose.model('User');
exports.Post = mongoose.model('Post');
exports.Log = mongoose.model('Log');
