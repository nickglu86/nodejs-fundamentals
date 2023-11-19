const express = require('express')

// express app
const app = express()

//  listen for requests
app.listen(3000)

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