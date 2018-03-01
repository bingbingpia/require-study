var http = require('http'),
  fs = require('fs'),
  url = require('url'),
  path = require('path'),
  mime = {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "txt": "text/plain",
    "xml": "text/xml",
    "swf": "application/x-shockwave-flash",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "svg": "image/svg+xml"
  };

http.createServer(function (request, response) {
  var uri = url.parse(request.url).pathname;
  var filename = path.join(__dirname, uri);
  fs.readFile("." + request.url, 'utf-8', function (err, data) {
    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // 获取后缀名 定义文件类型
    var ext = path.extname(filename);
    ext = ext ? ext.slice(1) : 'unknow';
    response.writeHead(200, {
      "Content-Type": mime[ext]
    });
    response.write(data || '');
    // 发送响应数据 "Hello World"
    response.end();
  });
}).listen(8889);

// 终端打印如下信息
// console.log('Server running at http://127.0.0.1:8889/');