const { createWordList } = require('./createWordArray');

let wordList = createWordList();
let afterGrey = [];
let afterYellow = [];
let afterGreen = [];

//// yellow condition ////
// removes possibilities where a letter exists
// at specific index, also requires
// that a letter be in a word...
function letterIncluded(letter, pos) {
  // let newWords = [];
    for (let word of wordList) {
      if (word.includes(letter) && word[pos] !== letter) {
        // console.log(`words with ${letter} NOT @ ${pos}`, word);
        afterYellow.push(word);
      }
    }
  // console.log(newWords);
  // return newWords;
}
letterIncluded('l', 3);
// console.log(afterYellow);

//// grey condition ////
// removes possibilities which include the letter
function letterNotIncluded(letter) {
  // let newWords = [];
  for (let word of afterYellow) {
    if (!word.includes(letter)) {
      // console.log(`words that don't include ${letter}`, word);
      afterGrey.push(word);
    }
  }
  // console.log(newWords);
  // return newWords;
}
letterNotIncluded('m');
// console.log(afterGrey);

//// green condition ////
// removes possibilities where letter doesn't exist
// at specific index
function letterIncludedAtPos(letter, pos) {
  // let newWords = [];
    for (let word of afterGrey) {
      if (word.includes(letter) && word[pos] === letter) {
        // console.log(`words with ${letter} @ ${pos}`, word);
        afterGreen.push(word);
      }
    }
  // console.log(newWords);
  // return newWords;
}
letterIncludedAtPos('c', 0);
console.log("after all", afterGreen);

module.exports = {letterIncluded, letterIncludedAtPos, letterNotIncluded};