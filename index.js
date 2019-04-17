const picam = require('node-picamera');

picam.video('filename.h264', 1000, {}, function(err, stdin, stdout) {
	if (err) throw err;
});
