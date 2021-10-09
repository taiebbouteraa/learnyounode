const fs = require('fs')
const path = require('path')


const directory = process.argv[2]
const filter = process.argv[3]

fs.readdir(directory, function (err, data) {
    if (err) console.error(err)
    else {
        data.forEach(function (file) {
            if (path.extname(file) === `.${filter}`) {
                console.log(file);
            };
        })
    }
})
