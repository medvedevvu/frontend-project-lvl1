import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getNewRandomProgress = () => {
  const pos = getRandomNumber(10);
  const delta = getRandomNumber(10);
  let index;
  let randomizeArrayInString = '';
  let formedRandomizeArrayItem = 0;
  const formedRandomizeArray = [];
  for (index = 0; index < 10; index += 1) {
    formedRandomizeArrayItem += delta;
    formedRandomizeArray.push(formedRandomizeArrayItem);
    if (index === pos) {
      randomizeArrayInString = randomizeArrayInString.trim().concat(' .. ');
    } else {
      randomizeArrayInString = randomizeArrayInString.concat(`${formedRandomizeArrayItem}`, ' ');
    }
  }
  return [randomizeArrayInString.trim(), formedRandomizeArray[pos]];
};

const BEGIN_MESSAGE = 'What number is missing in the progression?';
const play = () => startGame(
  BEGIN_MESSAGE,
  getNewRandomProgress,
);

export default play;
