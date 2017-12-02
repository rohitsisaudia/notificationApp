var WebSocketServer = require('websocket').server;
var http = require('http');

var server = http.createServer(function(request, response) {
    // process HTTP request. Since we're writing just WebSockets server
    // we don't have to implement anything.
});
server.listen(1337, function() { });

// create the server
wsServer = new WebSocketServer({
    httpServer: server
});


var data = [
	{
		"type": "notification",
		"text": "you files have been updated",
		"link": "#",
		"date": "1484040368795"
	},
	{
		"type": "task",
		"text": "complete timesheet",
		"link": "#",
		"date": "1480040368795"
	},
	{
		"type": "reminder",
		"text": "please forward important email",
		"link": "#",
		"date": "1482040368795"
	},
	{
		"type": "notification",
		"text": "you files have been updated",
		"link": "#",
		"date": "1484040368795"
	},
	{
		"type": "task",
		"text": "submit docs",
		"link": "#",
		"date": "1474656100000"
	},
	{
		"type": "reminder",
		"text": "please forward an email",
		"link": "#",
		"date": "1484040368795"
	},
	{
		"type": "reminder",
		"text": "please forward an email",
		"link": "#",
		"date": "1474649100000"
	}

];



// WebSocket server
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);
    var time = null;
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            // process WebSocket message
        }
    });

    connection.on('close', function(connection) {
        // close user connection
        clearInterval(time);
    });

    time=setInterval(function(){
      var len = data.length;
      var _data = data[Math.floor(Math.random() * data.length)];
      _data['date'] = new Date();
      connection.sendUTF(JSON.stringify(_data));
      console.log('send');
    },4000);
});
