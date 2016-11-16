'use strict';

module.exports = function () {
    return (err, req, res, next) => {
        if (err.code = 1) {
            res.status(200);
            res.json({result: 2, error: JSON.stringify(err)});
        } else {
            next(err);
        }
    };
};
