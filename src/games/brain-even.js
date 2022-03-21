import readlineSync from 'readline-sync';
import {
  setWrongAnswer, setGreeting, setMainFunc, isEqual,
} from '../index.js';
import { formatAnswer } from '../utils.js';

const isEven = (x) => x % 2 === 0;

const getNewRandomEven = () => {
  const randomValue = Math.floor(Math.random() * 100);
  let res;
  if (isEven(randomValue)) {
    res = [randomValue, 'yes'];
  }
  if (!isEven(randomValue)) {
    res = [randomValue, 'no'];
  }
  return res;
};

const beginMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const getUserQestion = () => formatAnswer(readlineSync.question('Your answer: '));
const play = () => setMainFunc(
  setGreeting(),
  setWrongAnswer,
  beginMessage,
  getUserQestion,
  isEqual,
  getNewRandomEven,
);

export default play;
