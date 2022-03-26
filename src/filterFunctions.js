const words = ['broke', 'clasp', 'glass', 'brick', 'smash'];
// console.log(words);

//// grey condition ////
// removes possibilities which include the letter
function letterNotIncluded(letter) {
  let newWords = []
  for (let word of words) {
    if (!word.includes(letter)) {
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
  let newWords = []
    for (let word of words) {
      if (word.includes(letter) && word[pos] === letter) {
        newWords.push(word);
      }
    }
  console.log(newWords);
  // return newWords;
}
// letterIncludedAtPos('s', 4);

//// yellow condition ////
// removes possibilities where a letter exists
// at specific index
function letterIncluded(letter, pos) {
  let newWords = []
    for (let word of words) {
      if (word.includes(letter) && word[pos] !== letter) {
        newWords.push(word);
      }
    }
  console.log(newWords);
  // return newWords;
}
// letterIncluded('k', 4);
