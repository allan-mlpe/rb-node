//Criando o módulo utilizando o padrão fábrica

var createSerialGenerator = function() {
	var max = 10000;

	var generate = function() {
		return Math.floor(Math.random() * max);
	}

	//inserimos no return apenas o que queremos expor fora do módulo
	return {
		generate : generate
	}
}

module.exports = createSerialGenerator();