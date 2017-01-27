var net = require('net'); //importa o módulo net (tcp)

var connections = [];

var broadcast = function(message, origin) {
	connections.forEach(function(connection) {
		if(connection === origin) return; //se for a origem, aborta a execução
		connection.write(message);
	});
};
//net.createServer().listen(3000); //cria o server e define uma porta

/*
 connection - listener da conexão (clinte).
*/
net.createServer(function(connection) { 
	connections.push(connection);

	//trata o recebimento dos dados vindo dos clientes
	connection.on('data', function(message) { 
		var command = message.toString();
		if(command.indexOf("/nickname") === 0) {
			var nickname = command.replace('/nickname ', '').replace('\r', '');
			broadcast(connection.nickname + " is now " + nickname);
			connection.nickname = nickname;
			return;
		}
		broadcast(connection.nickname + " > " + message, connection);
	});

	connection.on('end', function() {
		broadcast(connection.nickname + ' has left!', connection);
		connections.split(connection.indexOf(connection), 1);
	});
}).listen(3000);
 