// const Router = require("koa-router"); // 引入路由
// const shell = new Router();
// const bodyparser = require('koa-bodyparser');
const { exec } = require('node:child_process'); // 衍生shell，然后在该 shell 中执行 command，缓冲任何生成的输出

exec ("/Users/pan/Desktop/pumyung/国科大春季/实用生物信息/002HW/scripts/HW1/scripts/blast/test.sh",(error, stdout, stderr) =>{
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
});

// shell: blastp -query ./blast/test1.fasta -out ./blast/result11.blast -db pr -html -evalue 1 -num_descriptions 10
// window 系统使用的程序
// var exec = require('child_process').exec;

// function execPromise = function(cmd) {
//     return new Promise(function(resolve, reject) {
//         exec(cmd, function(err, stdout) {
//             if (err) return reject(err);
//             resolve(stdout);
//         });
//     });
// }

// var commands = ["echo 'panrong'", "echo 'hello'"];
//
// commands.reduce(function(p, cmd) {
//     return p.then(function(results) {
//         return execPromise(cmd).then(function(stdout) {
//             results.push(stdout);
//             return results;
//         });
//     });
// }, Promise.resolve([])).then(function(results) {
//     // all done here, all results in the results array
// }, function(err) {
//     // error here
// });

//module.exports = shell;