var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let R = parseInt(lines.shift())

let pi = 3.14159

let x = (4/3) * pi * (R ** 3)

console.log('VOLUME = '+x.toFixed(3))
