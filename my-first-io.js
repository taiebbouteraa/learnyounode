const fs = require('fs')

const imp = fs.readFileSync(process.argv[2])
const convert = imp.toString()
const devide = convert.split('\n')
console.log(devide.length - 1)