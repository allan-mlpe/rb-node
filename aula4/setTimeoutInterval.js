//simulando um setInterval baseado em setTimeout
var interval = function(callback, time) {
	setTimeout(function() {
		callback();

		//chamada recursiva da função
		interval(callback, time);
	}, time);
};

interval(function() {
	console.log("R " + new Date());
}, 1000);