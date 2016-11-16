'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LogSchema = new Schema({
    text: {type: String},
    updatedAt: {type: Date}                  // 修改时间
}, {autoIndex: false});

mongoose.model('Log', LogSchema);
