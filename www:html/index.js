var express = require('express');
var server = express();
var seniorRouter = require('./server/routers/student.router.js');
var mongoose = require('mongoose');
var mongoURI = process.env.MONGOURI || require('./config.js').mongoURI;
mongoose.connect(mongoURI);

var port = process.env.PORT || 8080;
server.use(express.static(__dirname + '/public'));

server.get('/', function(request, response){
  response.sendFile('www/html/index.html', {root: __dirname});
});

server.use(seniorRouter);

server.listen(port, function(){
  console.log("Now listening on port...", port);
});
