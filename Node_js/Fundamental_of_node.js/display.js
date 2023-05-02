const add = require("./add.js")

console.log("Im the display module")
console.log("---------------------")
console.log("Im the export module")
const sum = add(1,4)
const sum1 = add(2,4)
console.log(sum)
console.log(sum1)