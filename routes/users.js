const router = require('koa-router')()

router
    .get('/:id', (ctx, next) => {
        ctx.body = `userid: ${ctx.params.id}`
    })

module.exports = router
