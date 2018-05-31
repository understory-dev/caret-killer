const path = require('path')
const fs = require('fs')

const readPackageJson = dir => {
  return JSON.parse(fs.readFileSync(
    path.join(dir, 'package.json'),
    'utf-8'
  ))
}

module.exports = readPackageJson
