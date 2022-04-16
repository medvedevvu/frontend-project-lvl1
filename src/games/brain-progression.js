import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getRandomizedArray = (delta) => {
  let index;
  let formedRandomizeArrayItem = 0;
  const formedRandomizeArray = [];
  for (index = 0; index < 10; index += 1) {
    formedRandomizeArrayItem += delta;
    formedRandomizeArray.push(formedRandomizeArrayItem);
  }
  return formedRandomizeArray;
};

const getNewRandomProgress = () => {
  const pos = getRandomNumber(10);
  const delta = getRandomNumber(10);
  let randomizeArrayInString = '';
  const formedRandomizeArray = getRandomizedArray(delta);
  const rightNumber = formedRandomizeArray[pos];
  randomizeArrayInString = formedRandomizeArray.join(' ').replace(`${rightNumber}`, '..');
  return [randomizeArrayInString, rightNumber];
};

const BEGIN_MESSAGE = 'What number is missing in the progression?';
const play = () => startGame(
  BEGIN_MESSAGE,
  getNewRandomProgress,
);

export default play;
