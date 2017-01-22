var interval = setInterval(function() {
	console.log("R " + new Date());
}, 1000);

//utilizando uma função setTimeout para
//finalizar o setInterval após 5s
setTimeout(function() {
	clearInterval(interval);
}, 5000);