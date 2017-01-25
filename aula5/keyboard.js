exports.onReadable = function(callback) {
	process.stdin.on('readable', function() {
		var chunk = process.stdin.read(); //pega o buffer
		if(chunk) callback(chunk.toString().replace(/\r/, '').replace(/\n/, ''));
	})
};
