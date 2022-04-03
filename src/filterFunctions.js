const words = ['broke', 'clasp', 'glass', 'brick', 'smash'];
// console.log(words);

//// grey condition ////
// removes possibilities which include the letter
function letterNotIncluded(letter) {
  let newWords = [];
  for (let word of words) {
    if (!word.includes(letter)) {
      // console.log(`words that don't include ${letter}`, word);
      newWords.push(word);
    }
  }
  console.log(newWords);
  // return newWords;
}
// letterNotIncluded('m');

//// green condition ////
// removes possibilities where letter doesn't exist
// at specific index
function letterIncludedAtPos(letter, pos) {
  let newWords = [];
    for (let word of words) {
      if (word.includes(letter) && word[pos] === letter) {
        // console.log(`words with ${letter} @ ${pos}`, word);
        newWords.push(word);
      }
    }
  console.log(newWords);
  // return newWords;
}
// letterIncludedAtPos('s', 3);

//// yellow condition ////
// removes possibilities where a letter exists
// at specific index, also requires
// that a letter be in a word...
function letterIncluded(letter, pos) {
  let newWords = [];
    for (let word of words) {
      if (word.includes(letter) && word[pos] !== letter) {
        // console.log(`words with ${letter} NOT @ ${pos}`, word);
        newWords.push(word);
      }
    }
  console.log(newWords);
  // return newWords;
}
// letterIncluded('m', 3);

module.exports = {letterIncluded, letterIncludedAtPos, letterNotIncluded};