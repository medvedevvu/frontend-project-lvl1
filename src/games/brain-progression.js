import readlineSync from 'readline-sync';
import {
  setWrongAnswer, setGreeting, setMainFunc, isEqual,
} from '../index.js';

const checkEnter = (x) => {
  let res;
  if (x !== null && x !== '' && x.length > 0) {
    res = x;
  } else {
    res = '-1';
  }
  return res;
};

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
const getUserQestion = () => Number.parseInt(checkEnter(readlineSync.question('Your answer: ')), 10);
const play = () => setMainFunc(
  setGreeting(),
  setWrongAnswer,
  beginMessage,
  getUserQestion,
  isEqual,
  getNewRandomProgress,
);

export default play;
