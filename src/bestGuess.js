import React from 'react';

const { compareWords } = require("./initialBlockUpdate");
const { cullAnswers } = require("./wordListFilter");

let answerList = ['wrath', 'about', 'robot', 'ulcer'];

function nextBestGuess(answerList) {
  // let k = 0;
  
  for (let answer of answerList) {
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
  return answerList;
};

nextBestGuess(answerList);


