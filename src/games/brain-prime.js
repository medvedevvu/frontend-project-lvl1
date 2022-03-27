import {
  setWrongAnswer, setGreeting, startGame, isEqual,
} from '../index.js';

const isPrime = (x) => {
  if (x === 1) {
    return false;
  }
  let result = 0;
  for (let index = 0; index <= x; index += 1) {
    if ((x % index) === 0 && index !== 0) {
      result += 1;
    }
  }
  return (result === 2);
};

const getNewRandomPrime = () => {
  const randomValue = Math.floor(Math.random() * 100);
  const rightAnswer = isPrime(randomValue) ? 'yes' : 'no';
  return [randomValue, rightAnswer];
};

const beginMessage = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const kindOfQuestion = 'str';
const play = () => startGame(
  setGreeting(),
  setWrongAnswer,
  beginMessage,
  kindOfQuestion,
  isEqual,
  getNewRandomPrime,
);

export default play;
