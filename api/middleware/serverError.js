'use strict';
let db = require($ROOT + '/models/baby/index');

module.exports = function () {
    return (err, req, res, next) => {
        //db.Log.insert()
        if (!res.finished) {
            res.status(500);
            res.json({result: 0});
        }
    };
};
