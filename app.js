//1.引入express
const express = require('express')
//引入fs
const fs = require('fs')
//2.创建应用
const app = express()
//3.添加相对应端口的监听
app.listen(3004, () => {
    console.log('http://127.0.0.1:3004')
})
//4.添加静态资源的托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))
//5.添加路由配置
app.get('/', (req, res) => {
    fs.readFile(__dirname + '/views/admin/index.html', (err, data) => {
        if (err) {
            res.end('404')
        } else {
            res.end(data)
        }
    })
})