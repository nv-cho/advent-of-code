const fs = require("fs");

let input = fs.readFileSync("./input.txt", "utf-8");

input = input.split("\r").map(lines => lines.trim());

let answer = 0;
const plays = [];

const gameJudge = play => {
  switch (play) {
    case "A X":
      answer += 3;
      break;
    case "A Y":
      answer += 4;
      break;
    case "A Z":
      answer += 8;
      break;
    case "B X":
      answer += 1;
      break;
    case "B Y":
      answer += 5;
      break;
    case "B Z":
      answer += 9;
      break;
    case "C X":
      answer += 2;
      break;
    case "C Y":
      answer += 6;
      break;
    case "C Z":
      answer += 7;
      break;
    default:
      break;
  }
};

input.map(play => {
  plays.push(play);
});

plays.forEach(play => gameJudge(play));

console.log(answer);
