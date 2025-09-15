const http = require('http');
const path = require('path');
const { staticFile } = require("./utils/staticFile.js");
const { mimeTypes } = require("./utils/mime.js");

const PORT = 3500;

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    switch (url) {
        case "/":
            console.log("main page");
            res.write("<h1>Main page</h1>")
            res.end();
            break;
        case "/contacts":
            console.log('contacts page');
            staticFile(res, '/contacts.html', '.html');
            break;
        default:
            const ext = String(path.extname(url)).toLocaleLowerCase();
            if (ext in mimeTypes) {
                staticFile(res, url, ext);
            } else {
                res.statusCode = 404;
                res.end();
            }
    }
    // res.end();
}).listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});