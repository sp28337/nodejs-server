const http = require('http');

http.createServer((req, res) => {
    console.log(req.url)
    console.log(req.method)
    console.log("Server is running");
    res.setHeader("Content-Type","text/html; charset=utf-8;");
    res.write("<h1>Hello Pattaya!</h1>");
    res.write("<p>I am learning Node.js!</p>");
    res.end()
}).listen(3500);