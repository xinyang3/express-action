/**
 *  @description authentication middleware
 *  @author xinyang3
 *  @date 2020.3.30
 */
var express = require("express");
var http = require("http");

var app = express();
// log
app.use(function (request, response, next) {
    console.log("In comes a " + request.method + " to " + request.url);
    next();
});
// 授权
app.use(function (request, response, next) {
    var minute = (new Date()).getMinutes();
    if ((minute % 2) === 0) {
        next();
    } else {
        response.statusCode = 403;
        response.end("Not authorized.");
    }
});
app.use(function (request, response) {
    response.end('Secret info: the password is "swordfish"!');
});

http.createServer(app).listen(3000);