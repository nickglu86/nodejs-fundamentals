// HTTP Module

const http = require('http');

const server = http.createServer( (req,res) => {
	if( req.url === '/') {
			res.setHeader('Content-Type', 'text/html')
			res.write('<h1>Hello world</h1>');
			res.end();
	}

	if( req.url === '/api/courses') {
				res.write(JSON.stringify([1,2,3,4]));
				res.end();
	}
});

server.on('connection', (socket) => {
	console.log('New connection...');
})

server.listen(3000, 'localhost', () => {
     console.log('Listening on port 3000...');
});
