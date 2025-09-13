const http = require('http');
const fs = require('fs');
const PORT = 3500;

http.createServer((req, res) => {
    const url = req.url;
    console.log(url);

    res.setHeader("Content-Type", "text/html; charset=utf-8;");
  
    switch (url) {
        case "/":
            console.log("main page");
            res.write("<h1>Main page</h1>")
            break;
        case "/contacts":
            console.log('contacts page');
            let data = fs.readFileSync('./public/contacts.html', {encoding: "utf8", flag: "r"});
            res.write(data);
            break;
        default:
            if (url.includes('/images')) {
                console.log("image >>>");
                let data = fs.readFileSync('./' + url);
                res.setHeader("Content-Type", "image/png");
                res.write(data);
            } else {
                console.log("404");
                res.write("<h1>404</h1>");
            }
    }
    res.end();
}).listen(PORT);