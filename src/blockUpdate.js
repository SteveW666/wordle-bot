
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
//returns a boolean 
function letterYellow(answer, letter, pos, occurences) {
  if (answer.includes(letter) && answer[pos] !== letter && charCount(answer, letter) >= occurences) {
    return 1;
  }
  else return 0;
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
  let charBlock = [0, 0, 0, 0, 0];
  let occurrences = [];
  for (let o = 0; o < 128; o++) {
    occurrences[o] = 0;
  }

  for (let i = 0; i < answer.length; i++) {
    //green block
    if (letterGreen(answer, guess[i], i)) {
      charBlock[i] = 2;
      occurrences[ascii(guess[i])]++;
    } else if (letterYellow(answer, guess[i], i, occurrences[ascii(guess[i])])) {
      //yellow block
      console.log('INSIDE YELLOW')
      charBlock[i] = 1;
      occurrences[ascii(guess[i])]++;
      console.log(occurrences[ascii(guess[i])]);
    } else {
      //grey block
      charBlock[i] = 0;
    }
  }
  return charBlock;
};
console.log(compareWords('smart', 'alarm'));
