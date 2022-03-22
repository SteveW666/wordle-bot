let bot = {
  guess: {
    character: [0, 0, 0, 0, 0],
    position: [1, 2, 3, 4, 5],
    value: [0, 0, 0, 0, 0]
  },
  wordsInMind: ['broke', 'clasp', 'glass', 'brick', 'smash']
};

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
letterAtPos('l', 1);

function letterIncluded(letter, pos) {
  let j = 0;
  for (let word of bot.wordsInMind) {
    if (word[pos] === letter) {
      bot.wordsInMind.splice(j, 1)
    }
    j++;
  }
  console.log(bot.wordsInMind);
  // return (bot.wordsInMind);
}
letterIncluded('c', 0);

function letterNotIncluded(letter) {
  let j = 0;
  for (let word of bot.wordsInMind) {
    for (let i = 0; i < word.length; i++) {
      if (letter === word[i]) {
        bot.wordsInMind.splice(j, 1);
      }
    }
    j++;
  }
  console.log(bot.wordsInMind);
  // return (bot.wordsInMind);
}
letterNotIncluded('r');







