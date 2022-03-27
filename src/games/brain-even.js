import {
  setWrongAnswer, setGreeting, startGame, isEqual,
} from '../index.js';

const isEven = (x) => x % 2 === 0;

const getNewRandomEven = () => {
  const randomValue = Math.floor(Math.random() * 100);
  let result;
  if (isEven(randomValue)) {
    result = [randomValue, 'yes'];
  }
  if (!isEven(randomValue)) {
    result = [randomValue, 'no'];
  }
  return result;
};

const beginMessage = 'Answer "yes" if the number is even, otherwise answer "no".';
const kindOfQuestion = 'str';
const play = () => startGame(
  setGreeting(),
  setWrongAnswer,
  beginMessage,
  kindOfQuestion,
  isEqual,
  getNewRandomEven,
);

export default play;
