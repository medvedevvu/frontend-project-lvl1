import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getTwoNumbers = (theFirstValue, theSecondValue) => {
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
  const firstRundomNumber = getRandomNumber(100);
  const secondRundomNumber = getRandomNumber(100);
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
