const fs = require('fs')

fs.readFile(process.argv[2], function (err, data) {
    if (err) console.error(err)
    else {
        const convert = data.toString()
        const devide = convert.split('\n')
        console.log(devide.length - 1)
    }
})