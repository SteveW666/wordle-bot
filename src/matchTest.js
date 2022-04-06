const { createWordList } = require('./createWordArray');
const { letterNotIncluded, letterIncluded } = require('./filterFunctions');
let wordList = createWordList();

// let target = wordList[Math.floor(Math.random() * wordList.length)];
// console.log("target word: ", target);
let target = 'smart';
const starter = 'alert';
let bot = {
  char: [0, 0, 0, 0, 0],
  val: [0, 0, 0, 0, 0],
  pos: [0, 1, 2, 3, 4],
  yellowLetters: []
};

function updateBot() {
  for (let i = 0; i < 5; i++) {
    //green condition
    if (starter[i] === target[i]) {
      // console.log(`${starter}/${target}: matched ${target[i]} @ ${i}`);
      bot.char[i] = starter[i];
      bot.val[i] = 2;
    }
    //yellow condition
    if (target.includes(starter[i]) && bot.val[i] !== 2) {
      // console.log(`target includes ${starter[i]}, but not @ pos ${i}`);
      bot.char[i] = starter[i];
      bot.val[i] = 1;
      bot.yellowLetters.push(starter[i]);
    }
  }
  return bot;
}
updateBot();
// console.log(bot);

console.log('before update', wordList);
function updateWordList() {
  console.log(bot);
  for (let i = 0; i < 5; i++) {
    if (bot.val[i] === 1) {
      console.log(bot.char[i], i);
      letterIncluded(bot.char[i], i);
    }
  }
  console.log(afterYellow);
}
updateWordList();
// console.log("after update", wordList);



