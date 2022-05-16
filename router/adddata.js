// 增加前端输入数据的功能
const Router = require("koa-router"); // 引入路由
const adddata = new Router();
const bodyparser = require('koa-bodyparser');
const db = require('../utils/db'); //引入数据库

adddata.use(bodyparser());// 调用这个中间件，就可以收到前端传过来的数据

adddata.post('/Panrong', async (ctx) => {
    // 定义两个变量分别保存protein name和 species
    let TFname = ctx.request.body.symbol; // 接收前端数据
    let species = ctx.request.body.species;
    let searchSql = `select * from Information where GeneID = '${TFname}' ` //数据库查找语句
    let myarr = await new Promise((resolve, reject) => { // 异步函数
        // 用户输入的信息与数据库中的信息进行匹配，结果存入数组myarr
        return db.query(searchSql, (err, data) => {
            if (err) throw err;
            if (data.length > 0) {
                resolve(data);
            } else {
                resolve(false);
            }
        })
    })