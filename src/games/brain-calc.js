import { startGame } from '../index.js';

const getExecutionResult = (expressionStr) => {
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

const getNewRandomCalc = () => {
  const firstRundomNumber = Math.floor(Math.random() * 100);
  const secondRundomNumber = Math.floor(Math.random() * 100);
  const getOperation = () => {
    const randomIndex = () => Math.floor(Math.random() * 3);
    return ['+', '-', '*'][randomIndex()];
  };
  const expressionStr = `${firstRundomNumber} ${getOperation()} ${secondRundomNumber}`;
  return [expressionStr, getExecutionResult(expressionStr)];
};

const beginMessage = 'What is the result of the expression?';
const play = () => startGame(
  beginMessage,
  getNewRandomCalc,
);

export default play;
