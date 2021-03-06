var express = require('express');
var app = express();

var responsePort = 3012;  // 响应请求的页面跑在3012端口

// 可以改变‘/’为其他的路径，改完之后serverReq.js里面的请求路径也需要改变
app.get('/', (req, res) => {
    res.set('Access-Control-Allow-Origin', 'http://cross.demopai.com:3011'); // 设置允许跨域的origin，允许3000端口访问本端口（3012）
    res.send("Hello world from CROS.😡");   // 空格部分为表情，可能在编辑器不会显示
});

app.listen(responsePort, function () {
    console.log('cros_responser is listening on port '+ responsePort);
});
