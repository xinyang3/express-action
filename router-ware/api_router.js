/**
 * @description router 模块抽取
 * @author xinyang3
 * @date 2020/3/31
 */
var express = require("express");
var ALLOWED_IPS = [
    "127.0.0.1",
    "192.168.0.108"
];
var api = express.Router();
api.use(function (req, res, next) {
    var userIsAllowed = ALLOWED_IPS.indexOf(req.host) !== -1;
    if (!userIsAllowed) {
        res.status(401).send("Not authorized!");
    } else {
        next();
    }
});

api.get("/olivia", function (request, response) {
    response.send("Welcome to Olivia’s homepage!");
});

// 动态参数
// api.get("/users/:userid", function (req, res) {
//     var userId = parseInt(req.params.userid, 10);
//     res.send(`userid = ${userId}`)
// });

// http://192.168.0.108:3000/api/users/123456?arg=abcd 参数解析 query解析
api.get(/^\/users\/(\d+)$/, function (req, res) {
    var userId = parseInt(req.params[0], 10);
    res.send(`userid = ${userId}`)
})

api.get("/users", function (req, res) { /* ... */ });
api.post("/user", function (req, res) { /* ... */ });
api.get("/messages", function (req, res) { /* ... */ });
api.post("/message", function (req, res) { /* ... */ });

module.exports = api;