// const util = require('util');
// console.log(util.inspect(Array, { maxArrayLength: null }));

const { createWordList } = require('./createWordArray');
const { compareWords } = require("./initialBlockUpdate");


let wordList = createWordList();
let guess = 'smart';
let answer = 'alert';
// let answer = wordList[Math.floor(Math.random() * wordList.length)];
let valBlock = compareWords(guess, answer);

compareWords(guess, answer);

const bot = {
  char: [],
  val: valBlock,
  pos: [],
  yellowLetters: []
};

function updateBot() {
  //after comparing first guess against answer
  for (let i = 0; i < answer.length; i++) {
    //for testing, assign length to bot.pos
    bot.pos.push(i);
    //push yellow letters to an array for reference
    if (bot.val[i] === 1) {
      bot.yellowLetters.push(guess[i]);
    }
  }
  // console.log("assign bot.pos", bot);

  //get green letters in right pos
  for (let i = 0; i < answer.length; i++) {
    if (bot.val[i] === 2) {
      bot.char[i] = answer[i];
    } else {
      bot.char[i] = '?';
    }
  }
  console.log("info after initial comparison", bot);
  return bot;
};

// updateBot();

function updateWordList(wordList) {
  //use green letter and yellow letter functions
  //to convert words in wordList to valBlocks
  // console.log("valBlock from initial block", valBlock);

  let wordPairs = [
    {
      word: valBlock
    }
  ]

  //loop through words
  for (let word of wordList) {
    // console.log(word);
    // console.log(compareWords(word, answer));
    if (compareWords(word, answer) === valBlock) {
      console.log('match');
    }
  }
  // console.log(wordPairs);
};

// updateWordList(wordList);

function arraysAreIdentical(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

function isGuessCompatible(previousGuess, previousGuessBlock, nextGuess) {
  // assume nextGuess is the actual answer, try calculating the coloring of "previousGuess".
  // if we get the same coloring as previousGuessBlock, it means nextGuess is consistent
  // with the known information and potentially a valid guess.

  console.log('next guess', nextGuess);
  console.log('previous guess', previousGuess);
  console.log('previous block', previousGuessBlock);
  let testBlock = compareWords(previousGuess, nextGuess);
  console.log('testblock', testBlock);
  // return compareWords(nextGuess, previousGuess) === previousGuessBlock;
  return arraysAreIdentical(testBlock, previousGuessBlock);
};

console.log(isGuessCompatible('trope', [2, 0, 1, 0, 0], 'teeth'));


