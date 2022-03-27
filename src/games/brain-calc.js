import { startGame } from '../index.js';

const getNewRandomCalc = () => {
  const firstRundomNumber = Math.floor(Math.random() * 100);
  const secondRundomNumber = Math.floor(Math.random() * 100);
  const getOperation = () => {
    const value = Math.floor(Math.random() * 10);
    let operationInStr = '';
    if (value >= 0 && value <= 3) {
      operationInStr = '+';
    } else if (value >= 4 && value <= 6) {
      operationInStr = '*';
    } else if (value >= 7 && value <= 10) {
      operationInStr = '-';
    }
    return operationInStr;
  };
  const expressionStr = `${firstRundomNumber} ${getOperation()} ${secondRundomNumber}`;
  const getExecutionResult = () => {
    const elementsOfExpression = expressionStr.split(' ');
    const theFisrtParam = Number.parseInt(elementsOfExpression[0], 10);
    const operation = elementsOfExpression[1];
    const theSecondParam = Number.parseInt(elementsOfExpression[2], 10);
    let result = 0;
    if (operation === '+') {
      result = theFisrtParam + theSecondParam;
    } else if (operation === '-') {
      result = theFisrtParam - theSecondParam;
    } else if (operation === '*') {
      result = theFisrtParam * theSecondParam;
    }
    return result;
  };
  return [expressionStr, getExecutionResult()];
};

const beginMessage = 'What is the result of the expression?';
const play = () => startGame(
  beginMessage,
  getNewRandomCalc,
);

export default play;
