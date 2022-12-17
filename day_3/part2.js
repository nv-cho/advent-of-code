const fs = require("fs");

/** @desc Read input from file and split into lines */
const inputText = fs.readFileSync("input.txt", "utf8");
const inputLines = inputText.split("\r").map(lines => lines.trim());

/** @desc Create array of characters arrays */
const linesArrays = [];

for (let i = 0; i < inputLines.length; i += 3) {
  const firstLine = inputLines[i];
  const secondLine = inputLines[i + 1];
  const thirdLine = inputLines[i + 2];

  linesArrays.push([firstLine, secondLine, thirdLine]);
}

/** Iterate over the lines looking for a common character */
const repeatedCharacters = [];

linesArrays.forEach(linesArray => {
  const firstLine = new Set(linesArray[0]);
  const secondLine = new Set(linesArray[1]);
  const thirdLine = new Set(linesArray[2]);

  [...firstLine].filter(x => {
    secondLine.has(x) && thirdLine.has(x) && repeatedCharacters.push(x);
  });
});

/** @desc Separate the uppercase letters from the lowercase and makes the final sum*/
const lowercaseCharacters = [];
const uppercaseCharacters = [];
let sum = 0;

repeatedCharacters.forEach(character =>
  character === character.toUpperCase()
    ? uppercaseCharacters.push(character)
    : lowercaseCharacters.push(character)
);

for (let i = 0; i < 26; i++) {
  const character = String.fromCharCode("a".charCodeAt(0) + i);

  lowercaseCharacters.forEach(lowercaseCharacter => {
    if (lowercaseCharacter === character) sum += i + 1;
  });
}

for (let i = 0; i < 26; i++) {
  const character = String.fromCharCode("A".charCodeAt(0) + i);

  uppercaseCharacters.forEach(uppercaseCharacter => {
    if (uppercaseCharacter === character) sum += i + 27;
  });
}
