import { startGame } from '../index.js';

const getNewRandomProgress = () => {
  const LEN_OF_PROGRESS = 10;
  const pos = Math.floor(Math.random() * LEN_OF_PROGRESS);
  const delta = Math.floor(Math.random() * LEN_OF_PROGRESS);
  let index;
  let randomArrayStr = '';
  let item = 0;
  const randomArray = [];
  for (index = 0; index < LEN_OF_PROGRESS; index += 1) {
    item += delta;
    randomArray.push(item);
    if (index === pos) {
      randomArrayStr = randomArrayStr.trim().concat(' .. ');
    } else {
      randomArrayStr = randomArrayStr.concat(`${item}`, ' ');
    }
  }
  return [randomArrayStr.trim(), randomArray[pos]];
};

const BEGIN_MESSAGE = 'What number is missing in the progression?';
const play = () => startGame(
  BEGIN_MESSAGE,
  getNewRandomProgress,
);

export default play;
