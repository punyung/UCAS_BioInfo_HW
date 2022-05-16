/**
 * 批量插入数据
 */
const db = require('./db')
const data = [
  //  {id: 0, Name: 'LOC110806262', Gene ID: "LOC110806262",Species:"Homo sapiens",Description:"solute carrier family 6 member 4 gene promoter [Homo sapiens (human)]",Location:"Chromosome 17, NC_000017.11 (30235481..30237521)",websiste},
    {id: 1, icon: '/images/subjectIcons2.png', title: "全栈UI设计"},
    {id: 2, icon: '/images/subjectIcons3.png', title: "H5前端"},
    {id: 3, icon: '/images/subjectIcons4.png', title: "Python"},
    {id: 4, icon: '/images/subjectIcons5.jpg', title: "iOS"},
    {id: 5, icon: '/images/subjectIcons6.png', title: "大数据"}
]

data.map(val=>{
    let sql = `INSERT INTO subject VALUES (${val.id}, '${val.icon}', '${val.title}')`;
    db.query(sql, (err, data)=>{
        if(err) console.log(err);
        console.log(data)
    })
})
