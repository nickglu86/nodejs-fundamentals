// Extended Event Emitter - Main module (app.js)

const Logger = require('./logger');
const logger = new Logger();

// Register a Listener
logger.on('messageLogged', (arg) => {  
  console.log('Listener Called' , arg);
});

logger.log('message');