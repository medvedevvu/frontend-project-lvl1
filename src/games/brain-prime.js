import {
  setWrongAnswer, setGreeting, setMainFunc, isEqual,
} from '../index.js';

const isPrime = (x) => {
  if (x === 1) {
    return false;
  }
  let cnt = 0;
  for (let index = 0; index <= x; index += 1) {
    if ((x % index) === 0 && index !== 0) {
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
const kindOfQuestion = 'str';
const play = () => setMainFunc(
  setGreeting(),
  setWrongAnswer,
  beginMessage,
  kindOfQuestion,
  isEqual,
  getNewRandomPrime,
);

export default play;
