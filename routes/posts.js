const router = require('koa-router')()

router
    //剥洋葱式next中间件
    .get('/:id', async (ctx, next) => {
        await next()
        let resMsg = {
            postid: ctx.params.id,
            content: ctx.params.content,
            date: ctx.params.postDate
        }
        ctx.body = JSON.stringify(resMsg)
    })
    .get('/:id', async (ctx, next) => {
        ctx.params.content = `postid: ${ctx.params.id}`
        await next()
    })
    .get('/:id', async (ctx, next) => {
        ctx.params.postDate = new Date()
        next()
    })

module.exports = router
