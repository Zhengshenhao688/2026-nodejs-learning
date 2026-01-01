// 定义一个加法函数
const add = (a, b) => {
    return a + b;
};

// 定义一个减法函数
const subtract = (a, b) => {
    return a - b;
};

// 把它们打包导出 (就像把东西放进快递盒)
module.exports = {
    add,
    subtract
};