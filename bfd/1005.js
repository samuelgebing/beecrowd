// https://judge.beecrowd.com/en/problems/view/1005
// Average 1 - student's grade

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseFloat(lines.shift());
var B = parseFloat(lines.shift());

var average = (A*3.5 + B*7.5)/11;

console.log(`MEDIA = ${average.toFixed(5)}`);
