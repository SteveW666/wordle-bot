const { createWordList } = require('./createWordArray');
require('./filterFunctions');

let wordList = createWordList();
// let target = wordList[Math.floor(Math.random() * wordList.length)];
// console.log("target word: ", target);
let target = 'alarm';
const starter = 'alert';
let bot = {
  guess: {
    char: [0, 0, 0, 0, 0],
    val: [0, 0, 0, 0, 0],
    pos: [1, 2, 3, 4, 5]
  },
};

function updateBot() {
  for (let i = 0; i < 5; i++) {
    //green condition
    if (starter[i] === target[i]) {
      console.log(`${starter}/${target}: matched ${target[i]} @ ${i}`);
      bot.guess.char[i] = starter[i];
      bot.guess.val[i] = '√';
    }
  }
  return bot;
}
updateBot();
console.log(bot);



