const fs = require("fs");
const path = require("path");
const { mimeTypes } = require("./mime.js");

function staticFile(res, filePath, ext) {
    res.setHeader("Content-Type", mimeTypes[ext] + "; charset=utf-8");
    fs.readFile("./public" + filePath, (err, data) => {

        if (err) {
            res.statusCode = 404;
            return res.end("File not found");
        }

        res.end(data);
    });
}

module.exports = { staticFile };