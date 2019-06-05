const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/char');


describe('Finding record', function () {

  var char;
  // hook
  beforeEach(function (done) {
    char = new MarioChar({
      "name": "Mario"
    });

    // async operation
    char.save().then(function () {
      done();
    });
  });

  it('Find one record from the db', function (done) {

    MarioChar.findOneAndRemove({
      name: 'Mario'
    }).then(function () {

      MarioChar.findOne({
        name: 'Mario'
      }).then(function (result) {

        assert(result === null);
        done();

      });
    });

  });




});