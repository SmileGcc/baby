'use strict';

var express = require('express');
var kraken = require('kraken-js');

var db = require('./lib/database'),
    validator = require('./lib/validator')(),
    redis = require('./redis/redis');

var options, app;

options = {
    onconfig: function (config, next) {
        redis.config(config.get('redis'));
        db.config(config.get('databaseConfig'));
        next(null, config);
    }
};

app = module.exports = express();
app.use(kraken(options));
app.on('start', function () {
    //global.MongoDatabase = app.kraken.get('databaseConfig:database');
});
app.on('middleware:before:session', function (eventargs) {
    app.use(validator);
});
app.on('middleware:after:session', function (eventargs) {
});
