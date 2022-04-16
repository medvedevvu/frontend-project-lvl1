import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (x) => x % 2 === 0;

const getNewRandomEvenWithAnswer = () => {
  const randomValue = getRandomNumber(100);
  const result = isEven(randomValue) ? [randomValue, 'yes'] : [randomValue, 'no'];
  return result;
};

const BEGIN_MESSAGE = 'Answer "yes" if the number is even, otherwise answer "no".';
const play = () => startGame(
  BEGIN_MESSAGE,
  getNewRandomEvenWithAnswer,
);

export default play;
