//File System Module

const fs = require('fs');

const files = fs.readdirSync('./');
//Show array of string that current folder have

// Async func readdir
fs.readdir('./', function(err,files){
	if(err) console.log('Error', err);
 else  console.log('Result' , files);
});

// Result [ 'app.js', 'assets', 'common-modules', 'module-example', 'README.md' ]