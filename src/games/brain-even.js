import { startGame } from '../index.js';

const isEven = (x) => x % 2 === 0;

const getNewRandomEven = () => {
  const randomValue = Math.floor(Math.random() * 100);
  const result = isEven(randomValue) ? [randomValue, 'yes'] : [randomValue, 'no'];
  return result;
};

const beginMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const play = () => startGame(
  beginMessage,
  getNewRandomEven,
);

export default play;
