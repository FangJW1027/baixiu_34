//1.引入express
const express = require('express')

//引入路由模块
const router=require('./router')
//2.创建应用
const app = express()
//3.添加相对应端口的监听
app.listen(3001, () => {
    console.log('http://127.0.0.1:3001')
})
//4.添加静态资源的托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

app.use(router)
