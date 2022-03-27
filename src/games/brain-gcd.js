import { startGame } from '../index.js';

const getNewRandomGcd = () => {
  const firstRundomNumber = Math.floor(Math.random() * 100);
  const secondRundomNumber = Math.floor(Math.random() * 100);
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
  const expressionStr = `${firstRundomNumber} ${secondRundomNumber}`;
  const rightAnswer = getTwoNumbers(firstRundomNumber, secondRundomNumber);
  return [expressionStr, rightAnswer];
};

const beginMessage = 'Find the greatest common divisor of given numbers';
const play = () => startGame(
  beginMessage,
  getNewRandomGcd,
);

export default play;
