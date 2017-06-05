const fs = require('fs')
const Message = require('../model/message')

let files = {
    readFile(filename) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, (err, file) => {
                if (err) {
                    reject(err)
                }
                else {
                    let obj = JSON.parse(file)
                    try {
                        let msg = new Message(obj)
                        msg.setSuccess()

                        resolve(JSON.stringify(msg))
                    }
                    catch (e) {
                        reject(e)
                    }
                }
            })
        })
    }
}

module.exports = files