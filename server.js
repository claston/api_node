
var app = require('./config/config-custom')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log('entrou');
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});

var porta = process.env.PORT || 7000;

server.listen(porta, function(){
    console.log('Example app listening on port ' + porta);
})
