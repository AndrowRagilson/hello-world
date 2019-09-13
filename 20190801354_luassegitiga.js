console.log("TUGAS LUAS SEGITIGA");
console.log("13 september 2019");

var input = require("readline-sync");

var a = parseInt(input.question("Input Nilai Alas : "));
var t = parseInt(input.question("Input Nilai Tinggi : "));

var luas = a*t/2 ;
console.log("LUAS SEGITIGA : "+luas);