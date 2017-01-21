//Desta forma estamos criando o módulo usando um padrão de orientação a objetos.

var SerialGenerator = function() {
	var max = 10000;

	this.generate = function() {
		return Math.floor(Math.random() * max);
	}
};

//module.exports = new SerialGenerator(); //dessa forma o mecanismo de cache do node só vai criar um obj
module.exports = SerialGenerator; //assim prevenimos o mecanismo de cache, fazendo com que cada vez que o require seja chamado, um novo objeto seja criado