const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Hello world from Heroku!');
});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(process.env.PORT || 8000);
