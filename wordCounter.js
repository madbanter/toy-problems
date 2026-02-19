const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const words = [];
const output = {};
const prefixCounts = {};
const wordLengths = {};

const countWord = (word) => {
  fixedWord = word.trim();
  if (word.toLowerCase() === "q") {
    rl.close();
  }

  if (fixedWord.length < 4) {
    return;
  }

  output[fixedWord[0]] = output[fixedWord[0]] + 1 || 1;
  if (!wordLengths[fixedWord[0]]) {
    wordLengths[fixedWord[0]] = {};
  }
  wordLengths[fixedWord[0]][fixedWord.length] =
    wordLengths[fixedWord[0]][fixedWord.length] + 1 || 1;
  const prefixCountIndex = fixedWord[0] + fixedWord[1];
  prefixCounts[prefixCountIndex] = prefixCounts[prefixCountIndex] + 1 || 1;
  words.push(fixedWord);
};

rl.on("line", (line) => countWord(line));

rl.on("close", () => {
  console.log(words);
  console.log(output);
  console.log(prefixCounts);
  console.log(wordLengths);
});
