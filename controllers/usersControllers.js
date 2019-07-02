//引入fs
const fs = require('fs')

module.exports.getIndexPage=(req,res)=>{
  
    fs.readFile(__dirname+ "/../views/admin/index.html",(err,data)=>{
        if(err){
            console.log(err)
            res.end('404')
        }else{
            res.end(data)
        }
    })
}