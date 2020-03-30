/**
 * @description 中间件使用第三方插件
 * @author xinyang3
 * @date 2020.3.30
 */
var express = require("express");
// 日志中间件
var logger = require("morgan");
var fs = require("fs");
var path = require("path");
var http = require("http");
var app = express();
// app.use(logger("short"));

// create a write stream (in append mode)
var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })

// // setup the logger
app.use(logger('combined', { stream: accessLogStream }))

app.use(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello, world!");
});
http.createServer(app).listen(3000);