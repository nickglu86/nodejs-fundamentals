// Events  Module

const EventEmitter = require('events');

const emitter = new EventEmitter();

// Registring a listener
emitter.on('messageLogged', function(arg){ //e, eventArg
      console.log('Listener Called' , arg);
    });
    
// To raise an event , emit means to make a noise or produce something - signalling

// Triggering messageLogged Event
emitter.emit('messageLogged', {id: 1, url: 'http://...'});  //name of the event