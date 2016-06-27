var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example';
mongodb.MongoClient.connect(uri, function(error, db){
  treatError(error);
  var doc = {
    title: 'Jaws',
    year: 1975,
    director: 'Steven Spielberg',
    rating: 'PG',
    ratings: {
      critics: 80,
      audience: 97
    },
    screenplay: ['Peter Benchley', 'Carl Gotlieb']
  };

  db.collection('movies').insert(doc, function(error, result){
    treatError(error);

    var query = {year: 1975, rating: 'PG'};
    db.collection('movies').find(query).toArray(function(error, docs){
      treatError(error);
      console.log('Found docs:');
      docs.forEach(function(doc) {
        console.log(JSON.stringify(doc));
      });
      process.exit(0);
    });
  });
});


function treatError(error){
  if (error){
    console.log(error);
    process.exit(1);
  }
}
