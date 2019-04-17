// require module
const raspberryPiCamera = require('raspberry-pi-camera-native');

// add frame data event listener
raspberryPiCamera.on('frame', frameData => {
	// frameData is a Node.js Buffer
    // ...
    console.log(frameData);
});

// start capture
raspberryPiCamera.start();
