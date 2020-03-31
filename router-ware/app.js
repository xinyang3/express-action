/**
 * @description express router exercise 将路由从app.js分离
 * @author xinyang3
 * @date 2020/3/20
 */
var express = require("express");
var path = require("path");
var apiRouter = require("./api_router");
var app = express();

var staticPath = path.resolve(__dirname, "static");

app.use(express.static(staticPath));
app.use("/api", apiRouter);

// 静态文件分文件夹
app.use("/public", express.static(publicPath));
app.use("/uploads", express.static(userUploadsPath));

// app.use(function (request, response) {
//     response.status(404).send("Page not found!");
// });

app.listen(3000);