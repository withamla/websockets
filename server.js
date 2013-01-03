var express=require('express'),
 app = express();
 
var http = require('http'),
 server = http.createServer(app),
 io = require('socket.io').listen(server);
 
var port=process.env.PORT||8001;

server.listen(port);

app.get('/', function (req, res) {
res.sendfile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket) {
// echo the message
socket.on('message', function (data) {
console.info(data);
socket.send("[ECHO] "+data);
});
});