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

blocks = blocks.sort((a, b) => b - a);

const answer = blocks[0] + blocks[1] + blocks[2];

console.log(answer);
