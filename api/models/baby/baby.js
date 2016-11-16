'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BaBySchema = new Schema({
    nickname: {type: String, require: true},        // 宝宝名称
    status: {type: Number},                     // 0 不可见  1 可见  2 删除
    updated_at: {type: Date},                   // 修改时间
    created_at: {type: Date}                    // 创建时间
}, {autoIndex: false});

mongoose.model('BaBy', BaBySchema);
