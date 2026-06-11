var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var valoresRecebidos = input.split('\n');

let A = parseInt(valoresRecebidos.shift())
let B = parseInt(valoresRecebidos.shift())

let X = A + B

console.log('X ='+X)
