/**
 * @description ejs 渲染测试demo
 * @author xinyang3
 * @date 2020/3/30
 */
var fs = require("fs");
var ejs = require("ejs");
var path = __dirname + '/index.ejs';
fs.readFile('./index.ejs', 'utf8', (err, data) => {
    var result = ejs.render(data, {entries: [], filename: path})
    console.log(result)
})
