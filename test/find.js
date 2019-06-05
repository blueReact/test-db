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

    MarioChar.findOne({
      name: 'Mario'
    }).then(function (result) {
      // console.log(result); // ==> { _id: 5cf7e0a597677793a42135a1, name: 'Mario', __v: 0 }
      assert(result.name === 'Mario');
      done();
    });

  });

  it('Find one record from the db via id', function (done) {

    MarioChar.findOne({
      _id: char._id
    }).then(function (result) {
     
      assert(result._id.toString() === char._id.toString());
      done();

    });

  });


});