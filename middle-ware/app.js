/**
 * @description express action 静态文件服务器
 * @author xinyang3
 * @date 2020/3/30
 */
var express = require("express");
var morgan = require("morgan");
var path = require("path");
var app = express();
app.use(morgan("short"));

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));

app.use(function (req, res) {
    res.status(404);
    res.send("File not found!");
});
app.listen(3000, function () {
    console.log("App started on port 3000");
});