import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../index.js';
import { newRandomProgress, EgualFunc, checkEnter } from '../utils.js';

const vbeginMessage = 'What number is missing in the progression?';
const vUserQestion = () => Number.parseInt(checkEnter(readlineSync.question('Your answer: ')), 10);
const play = () => main(
  greeting(),
  wrongAnswer,
  vbeginMessage,
  vUserQestion,
  EgualFunc,
  newRandomProgress,
);

export default play;
