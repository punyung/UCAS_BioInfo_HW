// 拆分路由
// router 入口文件
const Router = require("koa-router"); // 引入路由
const router = new Router();
const list  =  require(`./list`);
const home  =  require(`./home`);
const login  =  require(`./login`);
const query = require(`./query`);
const fs = require("fs");
const blastp = require(`./blastp`)

//get相当于前端做的GET请求
router.get('/query', async (ctx)=>{
    ctx.set("Content-Type", "text/html");
    ctx.body = fs.readFileSync(`./assets/homepage1.html`);// 直接访问homepage
})

router.get('/blastp', async (ctx)=>{
    ctx.set("Content-Type", "text/html");
    ctx.body = fs.readFileSync(`./assets/homepage1.html`);// 直接访问homepage
})

// router.get('/list', async (ctx)=>{
//     ctx.body = "列表页"; // 相当于ctx.response.body 简写，接口2
// })

/**
 * 参数1：指向list
 * 参数2和参数3与app.js的中间件相同
 */
router.use(`/list`,list.routes(),list.allowedMethods());
router.use(`/home`,home.routes(),home.allowedMethods());
router.use(`/login`,login.routes(),login.allowedMethods());
router.use(`/query`,query.routes(),query.allowedMethods());
router.use(`/blastp`,blastp.routes(),blastp.allowedMethods());

// 如果前端还是访问了 http://localhost:5050
// 重定向到home
//router.redirect('/','/home')

module.exports = router; // 导出router给app.js使用