//Checks for a yellow block
//returns a [boolean, index used in answer] pair
function letterYellow(answer, letter, usedAnswerIndices) {
  // search answer for `letter` without using any of the indices in answer given in usedAnswerIndices
  for (let j = 0; j < answer.length; j++) {
    if (usedAnswerIndices.has(j)) {
      continue;
    }
    if (answer[j] === letter) {
      return [true, j];
    }
  }
  return [false, -1];
};

/**
 * Returns a coloring for `guess` assuming a particular answer.
 */
function compareWords(guess, answer) {
  let valBlock = new Array();
  valBlock.length = guess.length;
  valBlock.fill(0)

  let usedAnswerIndices = new Set();

  // assign greens
  for (let i = 0; i < answer.length; i++) {
    if (guess[i] === answer[i]) {
      valBlock[i] = 2;
      usedAnswerIndices.add(i);
      // console.log("inside green", usedAnswerIndices);
    }
  }

  // assign yellows
  for (let i = 0; i < answer.length; i++) {
    if (valBlock[i] != 0) {
      continue; // already colored in
    }

    const [isYellow, indexUsedInAnswer] = letterYellow(answer, guess[i], usedAnswerIndices);
    if (isYellow) {
      //yellow block
      valBlock[i] = 1;
      // console.log('used: ', indexUsedInAnswer);
      usedAnswerIndices.add(indexUsedInAnswer);
      // console.log("inside yellow", usedAnswerIndices);
    }
  }
  return valBlock;
};

// TODO: investigate moving these to an executable unit test, e.g. https://jestjs.io/docs/getting-started
// console.log(compareWords('teeth', 'three')); // expected 2, 1, 1, 0, 1
// console.log(compareWords('tooth', 'trope')); // expected 2, 0, 2, 0, 0
// console.log(compareWords('teeth', 'tepee')); // expected 2, 2, 1, 0, 0

module.exports = { compareWords };