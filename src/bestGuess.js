

const { compareWords } = require("./initialBlockUpdate");
const { cullAnswers } = require("./wordListFilter");

let answerList = ['wrath', 'about', 'robot', 'ulcer'];

let answers = [];
function nextBestGuess() {
  // let k = 0;
  
  for (let answer of answerList) {
    answers.push(answer);
    // console.log(answer);
    


    // for (let word of answerList) {
    //   let block = compareWords(word, guess);
    //   console.log('answer: ', answer);
    //   console.log('word: ', word);
    //   console.log('block: ', block);
    //   console.log(cullAnswers(answerList, block, answer));
    // }
  }
  // console.log(k, answerList);
  console.log(answers);
  return answers;
};

// nextBestGuess();

module.exports = { nextBestGuess }


