'use strict';

module.exports = function() {
  var chai = require('chai');
  var chaiAsPromised = require('chai-as-promised');
  chai.use(chaiAsPromised);
  global.expect = chai.expect;

  this.World = function World(callback) {
    global.expect = chai.expect;
    callback();
  };
};
