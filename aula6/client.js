var net = require('net');

var client = net.connect(3000); //conecta ao server na porta 3000

client.on("connect", function() {
	//client.write("Hello, I'm the client!");
});

//o evento "data" detecta o recebimento de novos
//dados ou mensagens vindas do servidor. 
client.on('data', function(message) {
	console.log(message.toString());
});

client.on('end', function() {
	process.exit(0);
});

process.stdin.on('readable', function() {
	var msg = process.stdin.read();
	if(!msg) return;
	msg = msg.toString().replace(/\n/, '');
	client.write(msg);
});