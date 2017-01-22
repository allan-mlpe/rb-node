console.log("A " + new Date());

//utilizamos setTimeout com 0 quando queremos
//registrar a função para ser processada em uma
//iteração posterior do eventLoop.
setTimeout(function() {
	console.log("I " + new Date());
}, 0);
console.log("B " + new Date());