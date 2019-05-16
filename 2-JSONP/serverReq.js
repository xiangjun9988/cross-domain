var express = require('express'); // 引用express模块
var app = express();  // 创建一个简单的服务器

var requestPort = 3013;

app.use(express.static(__dirname));

app.listen(requestPort, function () {
    console.log('Requester is listening on port '+ requestPort);
});
