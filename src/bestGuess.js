

const { compareWords } = require("./initialBlockUpdate");
const { cullAnswers } = require("./wordListFilter");

let answerList = ['wrath', 'about', 'robot', 'ulcer'];

// let answers = [];
function nextBestGuess(answerList, guess) {
  let k = 0;
  
  for (let answer of answerList) {
    
    for (let word of answerList) {
      let block = compareWords(guess, word);
      console.log('answer: ', answer);
      console.log('word: ', word);
      console.log('block: ', block);
      console.log(cullAnswers(answerList, block, answer));
    }
  }
  console.log(k, answerList);
  
  return answerList;
};

nextBestGuess(answerList, 'about');

module.exports = { nextBestGuess }


