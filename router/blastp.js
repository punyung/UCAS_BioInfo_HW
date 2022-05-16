// 返回前端查询的blast序列数据
const Router = require("koa-router"); // 引入路由
const blastp = new Router();
const bodyparser = require('koa-bodyparser');
const fs = require("fs");
const exec = require('child_process').execSync // 衍生shell，然后在该 shell 中执行 command，缓冲任何生成的输出
var shell = require('shelljs'); // 第三方插件
blastp.use(bodyparser());// 调用这个中间件，就可以收到前端传过来的数据

blastp.post("/Panrong",async ctx =>{ // 接口名字：Panrong
    const seq = ctx.request.body.symbol //ctx.request.body.seq 这是前端输入的序列信息
    console.log(seq)
    fs.writeFile('./testv1.fasta', seq, (err) => { // 将前端接收的序列信息，写入test.fasta文件中
        if (err) throw err;
        exec('bash test.sh') // 调用blastp脚本进行
        console.log('The file has been saved!');
    });

});
//blastp.url('/Panrong','/result11')

// blastp.get('/result11', async (ctx)=>{
//         ctx.response.redirect('/result11');
// })



module.exports = blastp;