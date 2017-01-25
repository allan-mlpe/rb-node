var help = [
	"a - process pid",
	"b - process title",
	"c - process arch",
	"d - process platform",
	"e - environment variables",
	"m - memory usage",
	"v - versions",
	"exit - abort and exit"
];

module.exports.showOptions = function() {
	help.forEach(function(op) {
		console.log(op);
	});
};