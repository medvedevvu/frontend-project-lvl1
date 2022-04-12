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
  const MAX_NUMBER = 100;
  const firstRundomNumber = getRandomNumber(MAX_NUMBER);
  const secondRundomNumber = getRandomNumber(MAX_NUMBER);
  const operationsArray = ['+', '-', '*'];
  const operationsArrayLength = operationsArray.length;
  const getOperation = () => {
    const randomIndex = () => getRandomNumber(operationsArrayLength);
    return operationsArray[randomIndex()];
  };
  const randomOperation = getOperation();
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
