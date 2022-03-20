import readlineSync from 'readline-sync';
import {
  setWrongAnswer, setGreeting, setMainFunc, isEqual, formatAnswer,
} from '../index.js';

const isPrime = (x) => {
  if (x === 1) {
    return false;
  }
  let cnt = 0;
  let index;
  for (index = 1; index <= x; index += 1) {
    if ((x % index) === 0) {
      cnt += 1;
    }
  }
  return (cnt === 2);
};

const getNewRandomPrime = () => {
  const randomValue = Math.floor(Math.random() * 100);
  const rightAnswer = isPrime(randomValue) ? 'yes' : 'no';
  return [randomValue, rightAnswer];
};

const beginMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getUserQestion = () => formatAnswer(readlineSync.question('Your answer: '));
const play = () => setMainFunc(
  setGreeting(),
  setWrongAnswer,
  beginMessage,
  getUserQestion,
  isEqual,
  getNewRandomPrime,
);

export default play;
