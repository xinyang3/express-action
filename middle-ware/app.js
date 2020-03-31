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

// 错误拦截处理
app.use((req, res, next) => {
    if(req.url === '/1.png') {
        var filePath = path.resolve(__dirname, 'static', '1.png');
        res.sendFile(filePath, function (err) {
            if (err) {
                next(new Error("Error sending file!"));
            }
        });
    } else {
        next()
    }
});

app.use(function (req, res) {
    res.status(404);
    res.send("File not found!");
});

app.use(function (err, req, res, next) {
    // console.error(err);
    next(err);
});

app.use(function (err, req, res, next) {
    res.status(500);
    res.send("Internal server error.");
});

app.listen(3000, function () {
    console.log("App started on port 3000");
});