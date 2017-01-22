console.log("A " + new Date());

//a função setImmediate foi criada
//para substituir a tática do setTimeout com 0
setImmediate(function() {
	console.log("I " + new Date());
});
console.log("B " + new Date());