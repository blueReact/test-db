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

  it('Updating one record on the db', function (done) {

    MarioChar.findOneAndUpdate({
      name: 'Mario'
    }, {
      name: 'Luigine'
    }).then(function () {

      MarioChar.findOne({
        _id: char._id
      }).then(function (result) {

        assert(result.name === 'Luigine');
        done();

      });
    });

  });




});