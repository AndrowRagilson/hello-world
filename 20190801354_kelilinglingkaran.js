console.log("TUGAS KELILING LINGKARAN");
console.log("RUMUS");
console.log("d = 2 * r");
console.log("kll = phi * r");

var input = require("readline-sync");

var phi = parseInt(input.question("masukan nilai phi : "));
var r = parseInt(input.question("masukan nilai r : "));
var diameter = r * 2;

var keliling = phi * diameter;

console.log("keliling lingkaran : "+keliling);
