const words = require('an-array-of-english-words')
// console.log(words);

function createWordList() {
  let fiveLetterWords = [];
  for (let i = 0; i < words.length; i++) {
    // console.log(words[i].length);
    if (words[i].length === 5) {
      fiveLetterWords.push(words[i]);
      // console.log(words[i].length)
    }
  }
  // console.log(fiveLetterWords);
  return fiveLetterWords;
}

module.exports = { createWordList };