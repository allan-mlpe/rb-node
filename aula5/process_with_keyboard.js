var help = require("./help.js");
var keyboard = require("./keyboard");

keyboard.onReadable(function(option) {
	switch(option) {
		case 'a':
			console.log("pid: " + process.pid);
			break;
		case 'b':
			console.log("title: " + process.title);
			break;
		case 'c':
			console.log("arch: " + process.arch);
			break;
		case 'd':
			console.log("platform: " + process.platform);
			break;
		case 'exit':
			process.exit(0); //finaliza o processo
			break;
		case 'e':
			console.log(process.env); //traz as variáveis de ambiente
			break;
		case 'm':
			console.log(process.memoryUsage()); //dados sobre a memória do V8
			break;
		case 'u':
			console.log(process.uptime()); //tempo decorrido desde que o processo entrou em execução
			break;
		case 'v':
			console.log(process.versions);
			break;
		default:
			help.showOptions();
	}
});

//capturando o evento sempre que ele ocorrer
process.on("exit", function() {
	console.log("====== BYE ======");
});

//tratando exceções não capturadas
process.on("uncaughtException", function() {
	console.log("An error occurred.")
});

a.b();