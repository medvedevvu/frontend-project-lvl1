import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (x) => x % 2 === 0;

const getNewRandomEvenWithAnswer = () => {
  const MAX_NUMBER = 100;
  const randomValue = getRandomNumber(MAX_NUMBER);
  const result = isEven(randomValue) ? [randomValue, 'yes'] : [randomValue, 'no'];
  return result;
};

const BEGIN_MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".';
const play = () => startGame(
  BEGIN_MESSAGE,
  getNewRandomEvenWithAnswer,
);

export default play;
