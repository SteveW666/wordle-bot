const { createWordList } = require('./createWordArray');

require('./filterFunctions');

let wordList = createWordList();
// console.log("from matchTest.js", wordList);

let bot = {
  guess: {
    character: [0, 0, 0, 0, 0],
    position: [1, 2, 3, 4, 5],
    value: [0, 0, 0, 0, 0]
  },
  wordsInMind: ['broke', 'clasp', 'glass', 'brick', 'smash', 'sweat']
};

let targetWord = wordList[Math.floor(Math.random() * wordList.length)];

console.log(targetWord);



