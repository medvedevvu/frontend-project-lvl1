import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getExecutionResult = (fisrtExpressionNumber, operation, secondExpressionNumber) => {
  const parsedFisrtNumber = Number.parseInt(fisrtExpressionNumber, 10);
  const parsedSecondNumber = Number.parseInt(secondExpressionNumber, 10);
  let result = 0;
  if (operation === '+') {
    result = parsedFisrtNumber + parsedSecondNumber;
  } else if (operation === '-') {
    result = parsedFisrtNumber - parsedSecondNumber;
  } else if (operation === '*') {
    result = parsedFisrtNumber * parsedSecondNumber;
  }
  return result;
};

const getNewRandomCalc = () => {
  const firstRundomNumber = getRandomNumber(100);
  const secondRundomNumber = getRandomNumber(100);
  const operationsArray = ['+', '-', '*'];
  const operationsArrayLength = operationsArray.length;
  const randomOperation = operationsArray[getRandomNumber(operationsArrayLength)];
  const expressionStr = `${firstRundomNumber} ${randomOperation} ${secondRundomNumber}`;
  return [expressionStr, getExecutionResult(
    firstRundomNumber,
    randomOperation,
    secondRundomNumber,
  )];
};

const BEGIN_MESSAGE = 'What is the result of the expression?';
const play = () => startGame(
  BEGIN_MESSAGE,
  getNewRandomCalc,
);

export default play;
