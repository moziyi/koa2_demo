const router = require('koa-router')()
const multer = require('koa-multer')

const files = require('../controller/files')
const upload = multer({ dest: 'uploads/' })

router
    //async + promise 异步读文件
    .get('/:filename', async (ctx, next) => {
        let file = await files.readFile(ctx.params.filename)
            .then(result => { return result })
            .catch(err => { return err })

        ctx.body = file.toString()
    })
    .post('/upload', upload.single('file'), async (ctx, next) => {
        ctx.body = `ok`
    })

module.exports = router
