// http://localhost:8080/rooms
// POST   create
// GET    Read
// PUT    Update/Replace
// PATCH  Update/Modify
// DELETE Delete

var restify = require('restify'),
    room = require('./room'),
    port = process.env.PORT || 3000;

var server = restify.createServer({
  name: 'simple restify server'
});

server.use(function (req, res, next) {
  console.log(req.method + ' ' + req.url);
  return next();
});

server.use(restify.bodyParser());

server.get('api/room', room.get);
server.get('api/room/:id', room.getById);
server.post('api/room', room.post);
server.put('api/room/:id', room.put);
server.del('api/room/:id', room.del);

server.listen(port, function () {
  console.log('api running at ' + port);
});
