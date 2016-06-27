var mongodb = require('mongodb');

var uri = 'mongodb://localhost:27017/example'
mongodb.MongoClient.connect(uri, function(error, db){
  treatError(error);
  db.collection('sample').insert({x:1}, function(error, result){
    treatError(error);
    db.collection('sample').find().toArray(function(error,docs){
      treatError(error);
      console.log('Found docs: ');
      docs.forEach(function(doc){
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
