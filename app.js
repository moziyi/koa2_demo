const Koa = require('koa')
const logger = require('koa-logger')
const static = require('koa-static')
const Router = require('koa-router')
const setting = require('./config/setting')

let app = new Koa()
let router = new Router()

const users = require('./routes/users')
const posts = require('./routes/posts')
const files = require('./routes/files')

router
    .use('/users', users.routes(), users.allowedMethods())
    .use('/posts', posts.routes(), posts.allowedMethods())
    .use('/files', files.routes(), files.allowedMethods())

app
    .use(logger())
    .use(router.routes())
    .use(router.allowedMethods())
    .use(static(__dirname, '/public'))


app
    .listen(process.env.PORT || setting.port)
