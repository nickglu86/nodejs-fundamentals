// Extended Event Emitter - Logger Module (logger.js)

const EventEmitter = require('events');

class Logger extends EventEmitter{
	log(message){
	// Send an HTTP Reuest
		console.log(message);
	
	// Raise an Event
	  this.emit('messageLogged', {id: 1, url: 'http://...'});  
	}
}

module.exports = Logger;