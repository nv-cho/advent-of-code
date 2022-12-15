// 1. Read the input file and convert it to an array of numbers
// 2. Sums the number of each block of numbers
// 3. Returns the block that sums the higher number

const fs = require("fs");

let input = fs.readFileSync("./input.txt", "utf-8");

input = input.split("\r\n\r").map(blocks => blocks.trim());

let sum = 0;
let blocks = [];

for (let i = 0; i < input.length; i++) {
  input[i].split("\r\n").forEach(number => {
    sum = sum + +number;
  });

  blocks.push(sum);
  sum = 0;
}

const answer = Math.max(...blocks);
