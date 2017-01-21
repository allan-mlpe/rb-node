/*tudo que nós definimos dentro de um módulo é privado*/

var max = 10000;

//desta forma nós não poderíamos acessar o módulo generate após a importação desse módulo
var generate = function() {
	return (Math.floor(Math.random() * max));
}

//utilizando module.exports nós poderemos acessar externamente essa função
module.exports.generate = function() {
	return Math.floor(Math.random() * max);
}
