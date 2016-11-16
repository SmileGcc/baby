'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    baby: {type: Schema.ObjectId, ref: 'Baby', required: true},
    user: {type: Schema.ObjectId, ref: 'User', required: true},
    photos: [{
        url: {type: String},
        takenAt: {type: Date},
        updatedAt: {type: Date},
    }],
    status: {type: Number},                     // 0 不可见  1 可见  2 删除
    updatedAt: {type: Date},                   // 修改时间
    createdAt: {type: Date}                    // 创建时间
}, {autoIndex: false});

mongoose.model('Post', PostSchema);
