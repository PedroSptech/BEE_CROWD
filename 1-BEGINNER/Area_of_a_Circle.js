var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let R = parseFloat(lines.shift())
let pi = 3.14159

R = R * R

let x = pi * R

console.log('A='+x.toFixed(4))