/**
 * @description 静态文件服务器
 * @author xinyang3
 * @date 2020/3/30
 */
var express = require("express");
var path = require("path");
var http = require("http");
var app = express();
var logger = require("morgan");

app.use(logger("short"));

var publicPath = path.resolve(__dirname, "..", "public");
console.log(publicPath)
app.use(express.static(publicPath));

app.use(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Looks like you didn't find a static file.");
});
http.createServer(app).listen(3000);