'use strict';

var db = require($ROOT + '/models/baby/index');

var getTags = function (req, res, next) {
    req.session.userId = 123;
    req.session.save(function (err) {
        return res.json({result: 1, data: []});
    });
};


module.exports = function (router) {

    //获取标签列表
    router.get('/tags', getTags);
    router.get('/', getTags);
};
