const fs = require("fs");

/** @desc Read input from file and split into lines */
const inputText = fs.readFileSync("input.txt", "utf8");
const inputLines = inputText.split("\r").map(lines => lines.trim());

/** @desc Create array of characters arrays */
const charactersArrays = [];

inputLines.forEach(line => {
  const charactersArray = [...line];
  charactersArrays.push(charactersArray);
});

/** @desc Divide characters arrays into two and store in finalData array */
const finalData = [];

charactersArrays.forEach(charactersArray => {
  const firstHalf = charactersArray.slice(0, charactersArray.length / 2);
  const secondHalf = charactersArray.slice(charactersArray.length / 2);
  finalData.push([firstHalf, secondHalf]);
});

/** @desc Compare characters in each array and store the matching ones */

const repeatedCharacters = [];

finalData.forEach(halfArrays => {
  const firstHalf = halfArrays[0];
  const secondHalf = halfArrays[1];

  const boxCharacters = new Set();

  firstHalf.forEach(characterA => {
    if (secondHalf.includes(characterA)) {
      boxCharacters.add(characterA);
    }
  });

  boxCharacters.forEach(character => repeatedCharacters.push(character));
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

console.log(sum);
