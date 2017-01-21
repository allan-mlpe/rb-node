//exportanto array chave-valor

var max = 10000;

var generate = function() {
	return Math.floor(Math.random() * max);
}

//apenas o array associativo abaixo é acessível fora do módulo
module.exports = {
	generate : generate
};