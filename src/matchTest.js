let bot = {
  guess: {
    character: [0, 0, 0, 0, 0],
    position: [1, 2, 3, 4, 5],
    value: [0, 0, 0, 0, 0]
  },
  wordsInMind: ['broke', 'clasp', 'glass', 'brick', 'smash', 'sweat']
};

//// yellow condition ////
function letterIncluded(letter, pos) {

  let j = 0;
  let y = 0;

  for (let word of bot.wordsInMind) {
    if (word[pos] === letter) {
      bot.wordsInMind.splice(j, 1);
      //j--;
    }
    j++;
  }

  for (let word of bot.wordsInMind) {
    let n = 1;
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        console.log("other yes", y);
        n = 0;
      }
    }
    if (n) {
      bot.wordsInMind.splice(y, 1);
      //y--;
    }
    y++;
  }
  console.log(bot.wordsInMind);
  // return (bot.wordsInMind);
}
// letterIncluded('s', 3);

//// green condition ////
function letterAtPos(letter, pos) {
  const wordsMatched = [];
  for (let word of bot.wordsInMind) {
    if (word[pos] === letter) {
      wordsMatched.push(word);
      bot.wordsInMind = wordsMatched;
    }
  }
  console.log(bot.wordsInMind);
  // return bot.wordsInMind;
}
// letterAtPos('s', 3);

//// grey condition ////
function letterNotIncluded(letter) {
  //const charArr = [];
  for (let word of bot.wordsInMind) {
    // console.log(word);
    if (!word.includes(letter)) {
      console.log(word);
      bot.wordsInMind.splice(bot.wordsInMind[word])
    }
  }
  // console.log(bot.wordsInMind);
  // return (bot.wordsInMind);
}
letterNotIncluded('s');







