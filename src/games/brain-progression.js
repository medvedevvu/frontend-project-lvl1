import { startGame } from '../index.js';

const getNewRandomProgress = () => {
  const lenOfProgress = Math.floor(Math.random() * 11);
  const pos = Math.floor(Math.random() * lenOfProgress);
  const delta = Math.floor(Math.random() * lenOfProgress);
  let index;
  let randomArrayStr = '';
  let item = 0;
  const randomArray = [];
  for (index = 0; index < lenOfProgress; index += 1) {
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

const beginMessage = 'What number is missing in the progression?';
const play = () => startGame(
  beginMessage,
  getNewRandomProgress,
);

export default play;
