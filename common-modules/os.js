//OS Module 

const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log('Free Memory: ' + freeMemory);
console.log('Total Memory: ' + totalMemory);

// Free Memory: 15333224448
// Total Memory: 34064277504