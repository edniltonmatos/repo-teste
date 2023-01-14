// Match
// Replace

const {texto} = require("./base")
const regExp1 = /João|maria/gi

console.log(texto.match(regExp1))
console.log(texto.replace(regExp1, "vitor"))
