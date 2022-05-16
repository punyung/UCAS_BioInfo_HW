// 返回前端查询的数据
// 用于存放query的所有接口
const Router = require("koa-router"); // 引入路由
const deletedata = new Router();
const bodyparser = require('koa-bodyparser');
const db = require('../utils/db'); //引入数据库

deletedata.use(bodyparser());// 调用这个中间件，就可以收到前端传过来的数据
deletedata.post('/Panrong', async (ctx) => {
    // 定义两个变量分别保存protein name和 species
    let TFname = ctx.request.body.symbol; // 接收前端数据
    let species = ctx.request.body.species;
    let deleteSql = `delete * from Information where GeneID = '${TFname}' ` //数据库查找语句
    let myarr = await new Promise((resolve, reject) => { // 异步函数
        // 用户输入的信息与数据库中的信息进行匹配，结果存入数组myarr
        return db.query(deleteSql, (err, data) => {
            if (err) throw err;
            if (data.length > 0) {
                resolve(data);
            } else {
                resolve(false);
            }
        })
    })
    console.log(ctx.body);
})
module.exports = deletedata; // 暴露接口deletedata