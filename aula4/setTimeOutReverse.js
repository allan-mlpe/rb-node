//independente da ordem, o comando fora do setTimeout seria executado primeiro
//todas as funções dos timers são enviadas para um tipo de "fila"
setTimeout(function() {
	console.log("B " + new Date());
}, 3000);
console.log("A " + new Date());
