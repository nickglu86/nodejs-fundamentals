const express = require('express')

// express app
const app = express()

//  listen for requests
app.listen(3000)

// Middleware - Logs every request
app.use( function (req, res, next) {
     console.log('new request made:');
     console.log('host: ', req.hostname);
     console.log('path: ', req.path);
     console.log('method: ', req.method);
     //Move on
     next();
})

// Middleware - serve static files
app.use( express.static('public'));


// Handler for '/' root url
app.get('/', function (req, res) {
     // res.send('Express App')
     res.sendFile('./views/index.html', {root: __dirname})
})

// Handler for '/about' url
app.get('/about', function (req, res) {
      res.sendFile('./views/about.html', {root: __dirname})
 })
 
 // Handler for  ridercting from '/about-us' to '/about' url
app.get('/about-us', function (req, res) {
      res.redirect('/about');
 })
 
 //Middleware
 // 404 page
 app.use(function (req, res) {
      res.status(404).sendFile('./views/404.html', {root: __dirname})
 })