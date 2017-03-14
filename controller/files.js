const fs = require('fs')

let files = {
    readFile(filename) {
        return new Promise((resolve, reject) => {
            fs.readFile(filename, (err, file) => {
                if (err) {
                    reject(err)
                }
                else {
                    resolve(file)
                }
            })
        })
    }
}

module.exports = files