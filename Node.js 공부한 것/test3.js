const http = require('http');

const hostname = '127.0.0.1';
const port = 1338;

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/plain' });
    response.end('hi!!!\n');
}).listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});