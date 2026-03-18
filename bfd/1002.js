// https://judge.beecrowd.com/en/problems/view/1002
// Area of a Circle

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var R = parseFloat(lines.shift());

const n = 3.14159;
var A = n * R * R; // same result, but faster runtime --> n * Math.pow(R,2)

console.log("A=" + A.toFixed(4));
