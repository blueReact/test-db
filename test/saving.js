const mocha = require('mocha');
const assert = require('assert');
const MarioChar = require('../models/char');


describe('Saving record', function(){

  it('Saving record to my db', function(done){

    var char = new MarioChar({
      "name": "Mario"
    });
    
    // async operation
    char.save().then(function(){
      assert(char.isNew === false);
      done();
    });    

  });

  
});