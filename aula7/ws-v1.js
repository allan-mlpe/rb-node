var http = require('http');
var bd = require('./database');

http.createServer(function(req, res) {
	//escreve na resposta uma conversão do array
	//de operadoras para o formato JSON
	res.setHeader('Access-Control-Allow-Origin', '*'); 	//definindo cabeçado para aceitar
														//requisições de qualquer origem
	if(req.url === '/operadoras') res.write(JSON.stringify(bd.operadoras));
	if(req.url === '/contatos') res.write(JSON.stringify(bd.contatos));

	res.end();
}).listen(3000);