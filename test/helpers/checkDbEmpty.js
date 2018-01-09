'use strict';

var async = require('async');

function checkDbEmpty(done) {
  async.forEachOf(sails.models, function (model, modelKey, callback) {
    model.count({}, function (err, count) {
      if (err) {
        return callback(err);
      }
      if (count === 3 && (modelKey === 'user' || modelKey === 'passport')) {
        return callback();
      }

      if (count > 0) {
        sails.log.error('Test DB not empty after tests, found ' + count + ' ' + modelKey);
      }
      callback();
    });
  }, done);
}

module.exports = checkDbEmpty;