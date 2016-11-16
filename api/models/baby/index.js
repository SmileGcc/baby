var mongoose = require('mongoose');
var utils = require($ROOT + '/lib/utils');
var paths = utils.getPath($ROOT + '/models/baby');
paths.forEach(function (path) {
    require(path);
});

exports.BaBy = mongoose.model('BaBy');
exports.User = mongoose.model('User');
