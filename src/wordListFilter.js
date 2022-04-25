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

// function sum(block) {
//   let k = 0;
//   for (i = 0; i < block.length; i++) {
//     k = block[i] + k;
//   }
//   return k;
// };

function arraysEqual(a, b) {
  if (a.length != b.length) {
    return false;
  }
  for (let i = 0; i < a.length; i++) {
    if (!(a[i] === b[i])) return false;
  }
  return true;
};

function isCompatible(block, guess, previousGuess) {
  // assume guess is the actual answer, try calculating the coloring of "previousGuess".
  // if we get the same coloring as block, it means guess is consistent
  // with the known information and potentially a valid guess.
  
  // one issue with this is it assumes yellows are assigned from left to right
  return arraysEqual(compareWords(previousGuess, guess), block);
  // arrays equal? [0, 1] === [0, 1] returns true;
  // sum equal? [0, 1] === [1, 0] returns true;

  //eliminates grey blocks
  // for (i = 0; i < block.length; i++) {
  // if (block[i] === 0 && guess.includes(previousGuess[i])) { return 0; }
  // }
  // //eliminates non greens
  // for (i = 0; i < block.length; i++) {
  // if (block[i] === 2 && guess[i] != previousGuess[i]) { return 0; }
  // }
  //checks if the guess returns at least as good a block as the previousGuess's block
  //return (sum(block) < sum(compareWords(guess, previousGuess)))
};
// console.log(isCompatible([2, 1, 0, 1, 1], 'teeth', 'three'));

//Update list of valid answers
function cullAnswers(answerList, block, previousGuess) {
  // let newAnswerList = [];
  // for (let word of answerList) {
  //   if (isCompatible(block, word, previousGuess)) { newAnswerList.push(word) }
  // }
  // return newAnswerList;
  
  // shorter:
  return answerList.filter(word => isCompatible(block, word, previousGuess));
};
// console.log(cullAnswers(wordList, [2, 1, 1, 2, 0], 'alarm'));
// console.log(cullAnswers(wordList, [2, 1, 0, 0, 2], 'ctxxh'));

module.exports = { cullAnswers };