//1.引入express
const express = require('express')

//引入路由模块
const router=require('./router')

//引入ejs
const ejs=require('ejs')
//2.创建应用
const app = express()
//3.添加相对应端口的监听
app.listen(3001, () => {
    console.log('http://127.0.0.1:3001')
})

//设置模板引擎为ejs
app.set('view engine','ejs')
//指定模板文件的目录 后期使用ejs的时候可以参照这个目录进行ejs查找
app.set('views','views')


//4.添加静态资源的托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

app.use(router)
