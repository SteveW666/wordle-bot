import React from 'react';
import './botLogic.scss';
const { nextBestGuess } = require('../bestGuess');

let answer = nextBestGuess();

export default function botLogic() {
  return (
    <div className="bot-logic">{`${answer} `}</div>
  );
};