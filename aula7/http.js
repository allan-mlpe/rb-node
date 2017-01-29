var http = require('http');


//a função de callback é executada sempre
//que o server receber uma requisição
http.createServer(function(req, res) {
	//a função write nos permite escrever no corpo da resposta
	res.write(
		'<html>' +
			'<head>' +
				'<title>Server JS</title>' +
			'</head>' +
			'<body>' +
				'<h1>Hello World!</h1>' +
			'</body>' +
		'</html>'
	);
	res.end(); //encerra a requisição para o servidor não ficar em loop até timeout
}).listen(3000); //define a porta em que o servidor irá rodar