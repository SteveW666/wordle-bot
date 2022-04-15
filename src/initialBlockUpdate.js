//Checks for a yellow block
//returns a [boolean, index used in answer] pair
function letterYellow(answer, letter, usedAnswerIndices) {
  // search answer for `letter` without using any of the indices in answer given in usedAnswerIndices
  for (j = 0; j < answer.length; j++) {
    if (usedAnswerIndices.has(j)) {
      continue;
    }
    if (answer[j] === letter) {
      return [true, j];
    }
  }
  return [false, -1];
};

//checks for green block
function letterGreen(answer, letter, pos) {
  if (answer[pos] === letter) {
    return 2;
  }
  else return 0;
};

function compareWords(guess, answer) {
  let charBlock = [0, 0, 0, 0, 0];
  let usedAnswerIndices = new Set();

  for (let i = 0; i < answer.length; i++) {
    //green block
    if (letterGreen(answer, guess[i], i)) {
      charBlock[i] = 2;
      usedAnswerIndices.add(i);
      console.log("inside green", usedAnswerIndices);
    }
  }
  for (let i = 0; i < answer.length; i++) {
    const [isYellow, indexUsedInAnswer] = letterYellow(answer, guess[i], usedAnswerIndices);
    if (isYellow) {
      //yellow block
      charBlock[i] = 1;
      console.log('used: ', indexUsedInAnswer);
      usedAnswerIndices.add(indexUsedInAnswer);
      console.log("inside yellow", usedAnswerIndices);
    }
  }
  return charBlock;
};

console.log(compareWords('teeth', 'three'));
console.log(compareWords('tooth', 'trope'));

module.exports = { compareWords };