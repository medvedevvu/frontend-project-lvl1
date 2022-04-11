import { startGame } from '../index.js';

const getExecutionResult = (fisrtExpressionNumber, operation, secondExpressionNumber) => {
  /* const elementsOfExpression = expressionStr.split(' ');
  const fisrtExpressionNumber = Number.parseInt(elementsOfExpression[0], 10);
  const operation = elementsOfExpression[1];
  const secondExpressionNumber = Number.parseInt(elementsOfExpression[2], 10);
  */
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
  const firstRundomNumber = Math.floor(Math.random() * 100);
  const secondRundomNumber = Math.floor(Math.random() * 100);
  const operationsArray = ['+', '-', '*'];
  const operationsArrayLength = operationsArray.length;
  const getOperation = () => {
    const randomIndex = () => Math.floor(Math.random() * operationsArrayLength);
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
