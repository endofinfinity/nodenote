const date = require('./src/dateFormat.js')
const htmle = require('./src/htmlEscape.js')

module.exports ={
    ...date,
    ...htmle
}