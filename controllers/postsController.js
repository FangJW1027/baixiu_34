var postsModule=require('../modules/postsMoudle.js')
var moment=require('moment')

exports.getPostList=(req,res)=>{
    //获取参数
    var obj=req.query
    //获取所有文章列表并返回
    //数据获取调用数据模块进行处理
    postsModule.getPostList(obj,(err,data)=>{
        if(err){
            res.json({
                code:400,
                msg:'数据查询失败'
            })
        }else{
           res.json({
               code:200,
               msg:'数据查询成功',
               data:data
           })

        }
    })
}