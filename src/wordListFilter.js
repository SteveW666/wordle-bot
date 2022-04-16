// const util = require('util');
// console.log(util.inspect(Array, { maxArrayLength: null }));

const { createWordList } = require('./createWordArray');
const { compareWords} = require("./initialBlockUpdate");

const bot = {
  char: new Array(),
  val: new Array(),
  pos: new Array(),
};

let wordList = createWordList();
let guess = 'smart';
let answer = 'alert';
// let answer = wordList[Math.floor(Math.random() * wordList.length)];
let valBlock = compareWords(guess, answer);

compareWords(guess, answer);

function updateBot() {
  console.log("bot know not", bot);

  //for testing, assign length to bot.pos
  for (let i = 0; i < answer.length; i++) {
    bot.pos.push(i);
  }
  console.log("assign bot.pos", bot);

  //after comparing first guess against answer
  //update bot.val as valBlock from compareWords
  bot.val = valBlock;
  console.log("assign bot.val", bot);

  //get green letters in right pos
  for (let i = 0; i < answer.length; i++) {
    if (bot.val[i] === 2) {
      bot.char[i] = answer[i];
    } else {
      bot.char[i] = '?';
    }
  }
  console.log("assign green letters", bot);
  return bot;
};

updateBot();

function updateWordList(wordList) {
  
};
