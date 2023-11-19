/* 
Status codes describe the type of response sent to the browser

200 - OK
301 - Resource moved
404 - Not found
500 - Internal server error


100 Range - informational responses
200 Range - success codes
300 Range - codes for redirects
400 Range - user or client error codes
500 Range - server error codes
*/

const http = require('http');
const fs = require('fs');

const server = http.createServer( (req,res) => {

      res.setHeader('Content-Type', 'text/html')

      let path = './views/';

      switch(req.url) {
            case '/':
                  path += 'index.html';
                  res.statusCode = 200;
                  break;
            case '/about':
                  path += 'about.html';
                  res.statusCode = 200;
                  break;
            // for /about-me redirect to /about
            case '/about-me':
                  res.statusCode = 301;
                  res.setHeader('Location', '/about');
                  res.end();
                  break;
            default:
                  path += '404.html';
                  res.statusCode = 404;
                  break;

      }
      fs.readFile(path, (err, data) => {
            if(err){
                  console.log(err)
                  res.end();
            } else {
                  res.end(data);
            }
      });
});


server.listen(3000, 'localhost', () => {
     console.log('Listening on port 3000...');
});
