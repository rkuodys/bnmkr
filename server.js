var net = require('net');
var http = require('http');
var fs = require('fs');
var opt = {port : 1234 };

var server = http.createServer(function (request, response) {
  fs.readFile('./index.html', function(err, data){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write(data);
	response.end();
  		
  });

});

server.listen(1234);