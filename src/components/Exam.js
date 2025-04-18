// const fs = require('fs');
// let n = parseInt(fs.readFileSync(0, 'utf8').trim(), 10);

// if (n < 0) {
//     console.log("Number is negative");
// } else if (n % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }

const fs = require('fs');
let n = parseInt(fs.readFileSync(0, 'utf8').trim(), 10);
if (n < 0) {
    console.log("negative");
} else if (n%2===0) {
    console.log("Even");
    
} else {
        console.log("Odd");

}
// -----------------
const fs = require("fs");

let input = fs.readFileSync(0, "utf8").trim().split("\n");
let n = parseInt(input[0], 10);
let arr = input[1].split(" ").map(Number);

let sum = arr.reduce((acc, num) => acc + num, 0);
console.log(sum);

const fun = require('fun');
const { preinit } = require('react-dom');
const num = preinit