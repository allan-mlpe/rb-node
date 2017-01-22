var a = setTimeout(function() {
	console.log("A " + new Date());
}, 3000);

var b = setTimeout(function() {
	console.log("B " + new Date());
}, 3000);

//a função clearInterval cancela um timer antes que ele aconteça
clearTimeout(a);