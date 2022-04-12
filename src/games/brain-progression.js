import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const getNewRandomProgress = () => {
  const LEN_OF_PROGRESS = 10;
  const pos = getRandomNumber(LEN_OF_PROGRESS);
  const delta = getRandomNumber(LEN_OF_PROGRESS);
  let index;
  let randomizeArrayInString = '';
  let formedRandomizeArrayItem = 0;
  const formedRandomizeArray = [];
  for (index = 0; index < LEN_OF_PROGRESS; index += 1) {
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
