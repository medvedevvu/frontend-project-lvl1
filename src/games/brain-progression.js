import {
  setWrongAnswer, setGreeting, startGame, isEqual,
} from '../index.js';

const getNewRandomProgress = () => {
  const pos = Math.floor(Math.random() * 10);
  const delta = Math.floor(Math.random() * 10);
  let index;
  let randomArrayStr = '';
  let item = 0;
  const randomArray = [];
  for (index = 0; index < 10; index += 1) {
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
const kindOfQuestion = 'number';
const play = () => startGame(
  setGreeting(),
  setWrongAnswer,
  beginMessage,
  kindOfQuestion,
  isEqual,
  getNewRandomProgress,
);

export default play;
