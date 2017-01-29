var http = require('http');

var createRouter = function(port) {

	var routes = {
		GET: {},
		POST: {}
	};

	/**
		Registra um função fn a ser executada quando
		o caminho path for requisitado no método GET
	*/
	var get = function(path, fn) {
		//registrando no array de rotas no método GET
		//no caminho 'path', uma função 'fn' a ser executada
		routes['GET'][path] = fn;
	};

	/**
		Registra um função fn a ser executada quando
		o caminho path for requisitado no método POST
	*/
	var post = function(path, fn) {
		//registrando no array de rotas no método POST
		//no caminho 'path', uma função 'fn' a ser executada
		routes['POST'][path] = fn;
	};

	http.createServer(function(req, res) {
		res.setHeader('Access-Control-Allow-Origin', '*');
		if(!routes[req.method][req.url]) return res.end();
		routes[req.method][req.url](req, res);
		res.end();
	}).listen(port);

	return {
		get: get,
		post: post
	}
};

module.exports = createRouter;