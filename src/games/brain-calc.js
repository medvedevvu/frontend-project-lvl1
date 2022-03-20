import readlineSync from 'readline-sync';
import { wrongAnswer, greeting, main } from '../index.js';
import { newRandomCalc, EgualFunc } from '../utils.js';

const vbeginMessage = 'What is the result of the expression?';
const vUserQestion = () => Number.parseInt(readlineSync.question('Your answer: '), 10);
const play = () => main(
  greeting(),
  wrongAnswer,
  vbeginMessage,
  vUserQestion,
  EgualFunc,
  newRandomCalc,
);

export default play;
