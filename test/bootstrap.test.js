/**
 * Mocha bootstrap file for backend application tests.
 */
'use strict';

var Sails = require('sails');
var checkDbEmpty = require('./helpers/checkDbEmpty');

/**
 * Mocha bootstrap before function, that is run before any tests are being processed. This will lift sails.js with
 * test configuration.
 *
 * Note! Tests will use localDiskDb connection and this _removes_ possible existing disk store file from .tmp folder!
 *
 * @param   {Function}  next    Callback function
 */
before(function before(next) {
  Sails.lift({
    // configuration for testing purposes
    models: {
      connection: 'mongodbTest',
      migrate: 'drop'
    },
    port: 1336,
    //environment: 'development',
    log: {
      level: 'error'
    },
    hooks: {
      grunt: false
    },
    runningTests: true // special config key to detect that tests are running (in the absence of a dedicated 'test' environment)
  }, function callback(error, sails) {
    // Yeah sails is lifted now!
    next(error, sails);
  });
});

/**
 * Mocha bootstrap after function, that is run after all tests are processed. Main purpose of this is just to
 * lower sails test instance.
 *
 * @param   {Function}  next    Callback function
 */
after(function after(next) {
  checkDbEmpty(function (err) {
    if (err) {
      return next(err);
    }

    sails.lower(next);
  });
});
