var router = require('./router');
var bd = require('./database');

var app = router(3000); //instancia o server na porta 3000


/**
	Registra um interceptador para a requisição, resposta e 
	um potencial interceptador seguinte
*/
app.interceptor(function(req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Headers', 'Content-Type');
	next(); //chama a execução do próximo interceptor
});

app.interceptor(function(req, res, next) {
	res.setHeader('Content-Type', 'application/json;charset=UTF-8');
	next();
});


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

app.options('/contatos', function(req, res) {

});

/**
	tratamento das requisições options
*/
app.post('/contatos', function(req, res) {
	var contato = JSON.parse(req.body); //converte o JSON para um objeto
	bd.contatos.push(contato);
	res.end();
});