const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/testman', {
  useNewUrlParser: true,
  useFindAndModify: false
});

// connect to the db before the test runs
before(function (done) {
  mongoose.connection.once('open', function () {
    console.log('connection to the local db has been made');
    done();
  }).on('error', function (error) {
    console.log('Connection error', error);
  });
});

// drop the collection before eahc tests starts
beforeEach(function (done) {
  mongoose.connection.collections.mariochars.drop(function () {
    done();
  });
});