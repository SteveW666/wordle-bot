const util = require('util')
const { createWordList } = require('./createWordArray');

let wordList = createWordList();

//// yellow condition ////
// removes possibilities where a letter exists
// at specific index, also requires
// that a letter be in a word...
function letterIncluded(yellow, letter, pos) {
  let afterYellow = [];
  for (let word of yellow) {
    if (word.includes(letter) && word[pos] !== letter) {
      // console.log(`words with ${letter} NOT @ ${pos}`, word);
      afterYellow.push(word);
    }
  }
  return afterYellow;
}
// let newList = letterIncluded(wordList, 'l', 0);
// console.log(util.inspect(newList, { maxArrayLength: null }));

//// grey condition ////
// removes possibilities which include the letter
function letterNotIncluded(grey, letter) {
  let afterGrey = [];
  for (let word of grey) {
    if (!word.includes(letter)) {
      // console.log(`words that don't include ${letter}`, word);
      afterGrey.push(word);
    }
  }
  return afterGrey;
}
// let newList = letterNotIncluded(wordList, 'm');
// console.log(util.inspect(newList, { maxArrayLength: null }));

//// green condition ////
// removes possibilities where letter doesn't exist
// at specific index
function letterIncludedAtPos(green, letter, pos) {
  let afterGreen = [];
  for (let word of green) {
    if (word.includes(letter) && word[pos] === letter) {
      // console.log(`words with ${letter} @ ${pos}`, word);
      afterGreen.push(word);
    }
  }
  return afterGreen;
}
// let newList = letterIncludedAtPos(wordList, 'c', 0);
// console.log(util.inspect(newList, { maxArrayLength: null }));

module.exports = { letterIncluded, letterIncludedAtPos, letterNotIncluded };