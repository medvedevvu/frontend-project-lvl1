import { startGame } from '../index.js';

const getTwoNumbers = (theFirstValue, theSecondValue) => {
  if ((typeof theFirstValue !== 'number') || (typeof theSecondValue !== 'number')) {
    return false;
  }
  let result = Math.abs(theFirstValue);
  let theAbsSecondValue = Math.abs(theSecondValue);
  while (theAbsSecondValue) {
    const tempVar = theAbsSecondValue;
    theAbsSecondValue = result % theAbsSecondValue;
    result = tempVar;
  }
  return result;
};

const getNewRandomGcd = () => {
  const firstRundomNumber = Math.floor(Math.random() * 100);
  const secondRundomNumber = Math.floor(Math.random() * 100);
  const expressionStr = `${firstRundomNumber} ${secondRundomNumber}`;
  const rightAnswer = getTwoNumbers(firstRundomNumber, secondRundomNumber);
  return [expressionStr, rightAnswer];
};

const BEGIN_MESSAGE = 'Find the greatest common divisor of given numbers';
const play = () => startGame(
  BEGIN_MESSAGE,
  getNewRandomGcd,
);

export default play;
