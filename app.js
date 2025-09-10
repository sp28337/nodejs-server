const http = require('http');

http.createServer((req, res) => {
    console.log("Server is running");
    res.end("1")
}).listen(3500);