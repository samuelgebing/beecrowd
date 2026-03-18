// https://judge.beecrowd.com/en/problems/view/1003
// Simple Sum

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var A = parseInt(lines.shift());
var B = parseInt(lines.shift());

console.log(`SOMA = ${A+B}`);
