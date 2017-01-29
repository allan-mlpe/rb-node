var router = require('./router');
var bd = require('./database');

var app = router(3000); //instancia o server na porta 3000


/**
	Registra uma rota e sua função no roteador.
	'/operadoras' -> o path a ser inserido na 
						posição equivalente no array 'routes' do roteador

	'function(red, res...' -> a função a ser executada quando o path for
								requisitado ao servidor
*/
app.get('/operadoras', function(req, res) {
	res.write(JSON.stringify(bd.operadoras));
});

app.get('/contatos', function(req, res) {
	res.write(JSON.stringify(bd.contatos));
});