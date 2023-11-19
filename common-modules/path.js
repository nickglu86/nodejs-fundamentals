//Path Module 

const path = require('path');
const pathObj = path.parse(__filename);

console.log({pathObj})

/* 
{
  pathObj: {
    root: 'N:\\',
    dir: 'N:\\Users\\xxx\\Desktop\\dev\\nodejs-basics\\common-modules',
    base: 'path.js',
    ext: '.js',
    name: 'path'
  }
*/