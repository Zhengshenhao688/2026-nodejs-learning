const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

// 模拟数据库中的数据
const users = [
    { id: 1, name: '张三', role: '全栈开发' },
    { id: 2, name: '李四', role: '前端工程师' },
    { id: 3, name: 'Gemini', role: 'AI 助手' }
];

// 1. 普通 HTML 路由
app.get('/', (req, res) => {
    res.send('<h1>欢迎来到我的 API 服务器</h1>');
});

// 2. API 路由 (返回 JSON)
app.get('/api/users', (req, res) => {
    // res.json 是 Express 专门用来返回 JSON 的方法
    // 它会自动把 JS 对象转成 JSON 字符串，并设置正确的 Content-Type
    res.json(users);
});

// 3. 动态路由 (获取特定 ID 的用户)
app.get('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);

    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: '用户未找到' });
    }
});

// 4. 新增用户接口 (POST)
app.post('/api/users', (req, res) => {
    // 1. 从“包裹” (req.body) 里拿到前端传来的数据
    const newUser = {
        id: users.length + 1, // 简单生成一个 ID
        name: req.body.name,
        role: req.body.role
    };

    // 2. 把新用户塞进数组
    users.push(newUser);

    // 3. 返回状态码 201 (已创建) 和新用户的数据
    res.status(201).json(newUser);
});

app.listen(PORT, () => {
    console.log(`服务器已启动：http://localhost:${PORT}`);
});