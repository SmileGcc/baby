'use strict';

let db = require($ROOT + '/models/baby/index');

let list = function (req, res, next) {
    // req.checkQuery('size', '参数有误').notEmpty().isPositive();
    // //req.checkQuery('offset', '参数有误').notEmpty().isNotNegative();
    // var errors = req.validationErrors();
    // if (errors) {
    //     return res.json({result: 2, error: JSON.stringify(errors)});
    // }
    let offset = parseInt(req.query.offset);
    let size = parseInt(req.query.size);
    if (isNaN(offset) || isNaN(size) || offset < 0 || size < 0 || size > 40) {
        return res.json({result: 2, error: '格式错误'});
    }

    db.Baby.find().skip(offset).limit(size).lean().then((babies) => {
        return res.json({result: 1, data: babies});
    }).catch(err => next(err));
};

let create = (req, res, next) => {

};


module.exports = function (router) {

    //获取标签列表
    router.get('/create', create);
    router.get('/', list);
};
