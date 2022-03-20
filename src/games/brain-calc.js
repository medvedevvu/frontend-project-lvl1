import readlineSync from 'readline-sync';
import {
  setWrongAnswer, setGreeting, setMainFunc, isEqual,
} from '../index.js';

const getNewRandomCalc = () => {
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const operationExecutionString = () => {
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
  const expressionStr = `${a} ${operationExecutionString()} ${b}`;
  const execuExpressionFunc = () => {
    const el = expressionStr.split(' ');
    const aIn = Number.parseInt(el[0], 10);
    const operation = el[1];
    const bIn = Number.parseInt(el[2], 10);
    let res = 0;
    if (operation === '+') {
      res = aIn + bIn;
    } else if (operation === '-') {
      res = aIn - bIn;
    } else if (operation === '*') {
      res = aIn * bIn;
    }
    return res;
  };
  return [expressionStr, execuExpressionFunc()];
};

const beginMessage = 'What is the result of the expression?';
const getUserQestion = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
const play = () => setMainFunc(
  setGreeting(),
  setWrongAnswer,
  beginMessage,
  getUserQestion,
  isEqual,
  getNewRandomCalc,
);

export default play;
