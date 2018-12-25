const http = require('http');

http.createServer((req, res) => {
    res.write('My first node server');
    res.end();
}).listen(3000);