'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    account: {},
    hashed_password: {type: String},
    nickname: {type: String, require: true},
    avatar: {type: String},
    phone: {type: String},
    profile: {
        name: {type: String},
        age: {type: Number},
        sex: {type: Number},
    },
    status: {type: Number},                     // 0 不可见  1 可见  2 删除
    updated_at: {type: Date},                   // 修改时间
    created_at: {type: Date}                    // 创建时间
}, {autoIndex: false});

UserSchema.path('password').set(function (password) {
    this._password = password;
    this.hashed_password = this.encryptPassword(password);
}).get(function () {
    return this._password;
});

mongoose.model('User', UserSchema);
