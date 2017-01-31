var http = require('http');

var createRouter = function(port) {
	var api = {};
	var routes = {};

	/**
		O OPTIONS é uma requisição chamada preflight.
		Essa é uma requisição disparada antes do POST
		a fim de realizar uma validação de segurança.
	*/
	var methods = ['GET', 'POST', 'OPTIONS'];
	var interceptors = [];

	/**
		Criação da API de forma dinâmica
	*/
	methods.forEach(function(method) {
		routes[method] = {};
		api[method.toLowerCase()] = function(path, fn) {
			routes[method][path] = fn;
		};
	});

	/**
		Registra um novo interceptor na API
	*/
	api.interceptor = function(interceptor) {
		interceptors.push(interceptor);
	}

	/**
		Executa todos os interceptors registrados no roteador
	*/
	var executeInterceptors = function(number, req, res) {
		var interceptor = interceptors[number];
		if(!interceptor) return;
		interceptor(req, res, function() { //esta função é a callback 'next' declarada na definição do interceptor em ws.js
			executeInterceptors(++number, req, res);
		});
	}

	/**
		Função de tratamento do corpo da requisição
	*/
	var handleBody = function(req, res, next) {
		var body = [];
		//adiciona conteúdo ao body sempre
		//que são recebidos dados
		req.on('data', function(chunk) {
			body.push(chunk);
		});

		//após o fim da requisição, definimos
		//req.body e executamos o callback
		req.on('end', function() {
			req.body = Buffer.concat(body).toString(); //converte o buffer para string
			next();
		});
	};

	//executada sempre que o server recebe uma requisição
	http.createServer(function(req, res) {
		handleBody(req, res, function() {
			executeInterceptors(0, req, res);
			if(!routes[req.method][req.url]) {
				res.statusCode = 404; //define o status code não encontrado
				return res.end();
			} 
			routes[req.method][req.url](req, res);
			res.end();
		});
	}).listen(port);

	return api;
};

module.exports = createRouter;