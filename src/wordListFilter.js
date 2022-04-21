// const util = require('util');
// console.log(util.inspect(Array, { maxArrayLength: null }));

const { createWordList } = require('./createWordArray');
const { compareWords, letterYellow } = require("./initialBlockUpdate");


let wordList = createWordList();
let guess = 'smart';
let answer = 'alert';
// let answer = wordList[Math.floor(Math.random() * wordList.length)];
let valBlock = compareWords(guess, answer);

compareWords(guess, answer);

function arraysAreIdentical(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (var i = 0, len = arr1.length; i < len; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

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

//NOT FUNCTIONING PROPERLY
function updateWordList(wordList) {
  //use green letter and yellow letter functions
  //to convert words in wordList to valBlocks
  console.log("valBlock from initial block", valBlock);
  let wordPairs = [
    {
      word: valBlock
    }
  ];
  //loop through words
  for (let word of wordList) {
    // console.log(word);
    let indWordBlock = compareWords(word, answer);
    if (arraysAreIdentical(valBlock, indWordBlock)) {
      console.log('match', word, indWordBlock);
    }
  }
  // console.log(wordPairs);
};

// updateWordList(wordList);

function isGuessCompatible(previousGuess, previousGuessBlock, nextGuess) {
  // assume nextGuess is the actual answer, try calculating the coloring of "previousGuess".
  // if we get the same coloring as previousGuessBlock, it means nextGuess is consistent
  // with the known information and potentially a valid guess.

  let testBlock = compareWords(previousGuess, nextGuess);
  console.log('testblock', testBlock);
  console.log('next guess', nextGuess);
  console.log('previous guess', previousGuess);
  console.log('previous block', previousGuessBlock);
  // return compareWords(nextGuess, previousGuess) === previousGuessBlock;
  return arraysAreIdentical(testBlock, previousGuessBlock);
};

// console.log(isGuessCompatible('trope', [2, 0, 1, 0, 0], 'teeth'));


// function isCompatible(block, guess, previousGuess) {
//   for (i = 0; i < block.lengthl; i++) {
//     if (block[i] === 2 && guess[i] != previouesGuess[i]) return 0;
//     //then we have to test for yellow and grey
//   }
//   else return 1;
// }

function isCompatible(prevGuess, prevGuessBlock, nextGuess) {
  let usedAnswerIndices = new Set();
  // let testArr = [];

  // PREV GUESS: 'teeth'
  // PREV BLOCK: [2, 1, 0, 0, 0]
  // NEXT (ANSWER): 'trope'
  for (let i = 0; i < prevGuessBlock.length; i++) {
    if (prevGuessBlock[i] === 0 && nextGuess.includes(prevGuess[i])) {
      //condition is grey
      return false;
    } else if (prevGuessBlock[i] === 2 && nextGuess[i] !== prevGuess[i]) {
      //condition is green
      //don't use the guess
      return false;
    } else {
      usedAnswerIndices.add(i);
    }
    const [isYellow, indexUsedInAnswer] = letterYellow(nextGuess, prevGuess[i], usedAnswerIndices);
    if (isYellow) {
      usedAnswerIndices.add(indexUsedInAnswer);
    } else { 
      console.log(i)
      return false;
    }
  }
  return true;
};

console.log(isCompatible('teeth', [2, 0, 0 , 0, 1], 'trope'));
