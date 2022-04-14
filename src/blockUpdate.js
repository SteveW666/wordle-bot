
function charCount(word, char) {
  k = 0;
  for (j = 0; j < word.length; j++) {
    if (word[j] === char) {
      k++;
    }
  }
  return k;
};

//Checks for a yellow block
//returns a [boolean, index used in answer] pair
function letterYellow(answer, letter, usedAnswerIndices) {
  // search answer for `letter` without using any of the indices in answer given in usedAnswerIndices
  for (j = 0; j < answer.length; j++) {
    if (usedAnswerIndices.has(j)) {
      continue;
    }
    if (answer[j] === letter) {
      return [true, j]
    }
  }
  return [false, -1]
};
// console.log(letterYellow('trope', 'e', 2, 2));

//checks for green block
//returns boolean
function letterGreen(answer, letter, pos) {
  if (answer[pos] === letter) {
    return 2;
  }
  else return 0;
};
// console.log(letterGreen('trope', 't', 0));

function ascii (a) { return a.charCodeAt(0); }

function compareWords(guess, answer) {
  console.log('guess: ', guess)
  console.log('answer: ', answer)

  let charBlock = [0, 0, 0, 0, 0];
  let usedAnswerIndices = new Set()

  for (let i = 0; i < answer.length; i++) {
    //green block
    if (letterGreen(answer, guess[i], i)) {
      charBlock[i] = 2;
      usedAnswerIndices.add(i)
    }
  }
  
  for (let i = 0; i < answer.length; i++) {
    const [isYellow, indexUsedInAnswer] = letterYellow(answer, guess[i], usedAnswerIndices)
    if (isYellow) {
      //yellow block
      console.log('INSIDE YELLOW')
      charBlock[i] = 1;

      console.log('used: ', indexUsedInAnswer)
      usedAnswerIndices.add(indexUsedInAnswer)
    }
  }

  return charBlock;
};

console.log(compareWords('teeth', 'trope'));
console.log(compareWords('tooth', 'trope'));
