// 1. 引入 Node.js 内置的 http 模块
const http = require('http');

// 2. 创建服务器
// req (request) = 前端发来的请求（点菜）
// res (response) = 我们要返回的数据（上菜）
const server = http.createServer((req, res) => {
    // 打印一下，看看是不是真的有请求进来了
    console.log('收到请求了！请求地址是：', req.url);

    // 设置响应头：告诉浏览器，我要发给你的是 HTML，并且是 utf-8 编码（防止中文乱码）
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 发送响应内容
    res.write('<h1>你好！这是我的第一个 Node.js 服务器 🚀</h1>');
    res.write('<p>我正在 2026-nodejs-learning 项目里学习。</p>');

    // 结束响应（必须要写，否则浏览器会一直转圈圈等待）
    res.end();
});

// 3. 启动服务器，监听 3000 端口
server.listen(3000, () => {
    console.log('服务器启动成功！请在浏览器访问 http://localhost:3000');
});