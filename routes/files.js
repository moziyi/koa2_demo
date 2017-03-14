const router = require('koa-router')()
const files = require('../controller/files')

router
    //async + promise 异步读文件
    .get('/:filename', async (ctx, next) => {
        let file = await files.readFile(ctx.params.filename)
            .then(result => { return result })
            .catch(err => { return err })

        ctx.body = file.toString()
    })

module.exports = router
