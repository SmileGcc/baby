'use strict';

var redis = require('./redis');

function User() {
    this.prefix = 'user:';
    this.keyString = this.prefix + 'id:';
    this.hashExpire = 60 * 60 * 24 * 3;
}

User.prototype.setHash = function (userId, userObj, callback) {
    redis.client.hmset(this.keyString + userId, userObj, callback);
};


module.exports = new User;
